/**
 * index.js - 阿里云函数计算 FC 3.0 入口
 * 
 * FC 3.0 HTTP 触发器把 event 作为 Buffer 传入
 * 需要先转为字符串再解析 JSON
 */

const http = require('http');
const app = require('./app');

let server = null;
function getServer() {
  if (!server) {
    server = http.createServer(app);
    server.listen(0);
  }
  return server;
}

exports.handler = async (event, context) => {
  // FC 3.0 传入的是 Buffer，需要转字符串再解析
  let evt;
  if (Buffer.isBuffer(event)) {
    try { evt = JSON.parse(event.toString()); } catch (e) { evt = {}; }
  } else if (typeof event === 'string') {
    try { evt = JSON.parse(event); } catch (e) { evt = {}; }
  } else {
    evt = event || {};
  }

  const method = (evt.httpMethod || (evt.requestContext && evt.requestContext.http && evt.requestContext.http.method) || 'GET').toUpperCase();
  const reqPath = evt.rawPath || evt.path || '/';
  const query = evt.queryStringParameters || {};
  const headers = evt.headers || {};
  const body = evt.body || '';
  const isBase64 = evt.isBase64Encoded || false;

  // OPTIONS 预检
  if (method === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'access-control-allow-origin': headers['origin'] || '*',
        'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'access-control-allow-headers': 'Content-Type, Authorization',
        'access-control-max-age': '86400'
      },
      body: '',
      isBase64Encoded: false
    };
  }

  const qsStr = Object.entries(query).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  const fullUrl = reqPath + (qsStr ? '?' + qsStr : '');

  let bodyBuf = null;
  if (body) {
    bodyBuf = isBase64 ? Buffer.from(body, 'base64') : Buffer.from(body);
  }

  const srv = getServer();
  const addr = srv.address();

  return new Promise((resolve) => {
    const reqHeaders = { ...headers, host: 'localhost' };
    if (bodyBuf) {
      reqHeaders['content-length'] = bodyBuf.length;
    }

    const proxyHeaders = {
      'access-control-allow-origin': headers['origin'] || '*',
      'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'access-control-allow-headers': 'Content-Type, Authorization',
    };

    const opts = {
      hostname: '127.0.0.1',
      port: addr.port,
      method: method,
      path: fullUrl,
      headers: reqHeaders
    };

    const req = http.request(opts, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const bodyBuf = Buffer.concat(chunks);
        const respHeaders = { ...res.headers, ...proxyHeaders };
        delete respHeaders['content-disposition'];

        resolve({
          statusCode: res.statusCode,
          headers: respHeaders,
          body: bodyBuf.toString('base64'),
          isBase64Encoded: true
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        statusCode: 502,
        headers: { 'content-type': 'application/json', ...proxyHeaders },
        body: Buffer.from(JSON.stringify({ error: 'Bad Gateway: ' + err.message })).toString('base64'),
        isBase64Encoded: true
      });
    });

    req.setTimeout(25000, () => {
      req.destroy();
      resolve({
        statusCode: 504,
        headers: { 'content-type': 'application/json', ...proxyHeaders },
        body: Buffer.from(JSON.stringify({ error: 'Gateway Timeout' })).toString('base64'),
        isBase64Encoded: true
      });
    });

    if (bodyBuf) {
      req.write(bodyBuf);
    }
    req.end();
  });
};
