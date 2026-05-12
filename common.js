/* ===== 荣耀社区 - 公共 JS 工具库 ===== */
/* 提取自各页面的重复代码，统一管理 */

const API_BASE = 'https://glory-api-feqlkejziv.cn-hangzhou.fcapp.run';

/* ===== 页面过渡 ===== */
(function() {
  // 页面加载完成后显示
  function showPage() {
    document.documentElement.classList.add('loaded');
    document.documentElement.classList.remove('leaving');
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    requestAnimationFrame(showPage);
  } else {
    document.addEventListener('DOMContentLoaded', function() { requestAnimationFrame(showPage); });
  }
  // 页面离开时淡出
  window.addEventListener('beforeunload', function() {
    document.documentElement.classList.add('leaving');
    document.documentElement.classList.remove('loaded');
  });
})();

/* ===== Auth 工具 ===== */
function getToken() {
  return localStorage.getItem('glory_token');
}

function getUser() {
  try { return JSON.parse(localStorage.getItem('glory_user') || 'null'); }
  catch(e) { return null; }
}

function authHeaders() {
  const token = getToken();
  return token
    ? { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' };
}

function handleAuthError(res) {
  if (res.status === 401) {
    localStorage.removeItem('glory_token');
    localStorage.removeItem('glory_user');
    window.location.href = 'index.html';
    return true;
  }
  return false;
}

/* ===== API 请求（带重试） ===== */
async function apiGet(path) {
  const res = await fetchWithRetry(API_BASE + path, { headers: authHeaders() });
  if (handleAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function apiPost(path, data) {
  const res = await fetchWithRetry(API_BASE + path, {
    method: 'POST', headers: authHeaders(), body: JSON.stringify(data)
  });
  if (handleAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function apiPut(path, data) {
  const res = await fetchWithRetry(API_BASE + path, {
    method: 'PUT', headers: authHeaders(), body: JSON.stringify(data)
  });
  if (handleAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function apiDelete(path) {
  const res = await fetchWithRetry(API_BASE + path, {
    method: 'DELETE', headers: authHeaders()
  });
  if (handleAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

/* 带重试的 fetch（自动重试2次，15秒超时） */
async function fetchWithRetry(url, options, retries, delay) {
  retries = retries || 2; delay = delay || 2000;
  for (var i = 0; i <= retries; i++) {
    try {
      var controller = new AbortController();
      var timeoutId = setTimeout(function() { controller.abort(); }, 15000);
      var mergedOpts = Object.assign({}, options || {}, { signal: controller.signal });
      var response = await fetch(url, mergedOpts);
      clearTimeout(timeoutId);
      return response;
    } catch(err) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        if (i < retries) { await new Promise(function(r){ setTimeout(r, delay); }); continue; }
        throw new Error('请求超时，服务器响应较慢');
      }
      if (i < retries) { await new Promise(function(r){ setTimeout(r, delay); }); continue; }
      throw err;
    }
  }
}

/* ===== Toast 通知 ===== */
function showToast(msg, type) {
  var existing = document.querySelector('.toast-msg');
  if (existing) existing.remove();
  var toast = document.createElement('div');
  toast.className = 'toast-msg' + (type === 'error' ? ' toast-error' : type === 'success' ? ' toast-success' : '');
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(function() { toast.classList.add('show'); }, 10);
  setTimeout(function() { toast.classList.remove('show'); setTimeout(function() { toast.remove(); }, 300); }, 2500);
}

/* ===== 图片上传到图床 ===== */
async function uploadToImgHost(file) {
  var formData = new FormData();
  formData.append('file', file);
  var res = await fetch('https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5', {
    method: 'POST', body: formData
  });
  if (!res.ok) throw new Error('图片上传失败');
  var data = await res.json();
  if (!data.image || !data.image.url) throw new Error('图片上传失败');
  return data.image.url;
}

/* 压缩图片后上传到图床，返回 URL */
async function compressAndUpload(file, maxSize, quality) {
  maxSize = maxSize || 200; quality = quality || 0.8;
  // 先压缩
  var dataUrl = await new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var img = new Image();
      img.onload = function() {
        var canvas = document.createElement('canvas');
        var w = img.width, h = img.height;
        if (w > maxSize || h > maxSize) {
          if (w > h) { h = Math.round(h * maxSize / w); w = maxSize; }
          else { w = Math.round(w * maxSize / h); h = maxSize; }
        }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        canvas.toBlob(function(blob) { resolve(blob); }, 'image/jpeg', quality);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  // 上传到图床
  return await uploadToImgHost(dataUrl);
}

/* ===== 论坛工具函数 ===== */
var FORUM_CATEGORIES = [
  { id: 'original', name: '原作讨论', icon: '📖', desc: '小说、动画、漫画、角色分析', color: '#1a73e8' },
  { id: 'fanwork', name: '同人创作', icon: '🎨', desc: '同人文、同人图、COS、视频', color: '#34a853' },
  { id: 'casual', name: '灌水闲聊', icon: '🌊', desc: '日常、表情包、荣耀梗', color: '#e65100' },
  { id: 'meta', name: '站务中心', icon: '📢', desc: '公告、规则、建议反馈', color: '#6a1b9a' }
];

function getCategoryById(id) {
  for (var i = 0; i < FORUM_CATEGORIES.length; i++) {
    if (FORUM_CATEGORIES[i].id === id) return FORUM_CATEGORIES[i];
  }
  return null;
}

function forumTimeAgo(iso) {
  var diff = Date.now() - new Date(iso).getTime();
  var mins = Math.floor(diff / 60000);
  if (mins < 1) return '刚刚';
  if (mins < 60) return mins + ' 分钟前';
  var hours = Math.floor(mins / 60);
  if (hours < 24) return hours + ' 小时前';
  var days = Math.floor(hours / 24);
  if (days < 30) return days + ' 天前';
  return new Date(iso).toLocaleDateString('zh-CN');
}

function escapeForumHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function userLinkHtml(authorId, authorName) {
  var safeName = escapeForumHtml(authorName || '匿名');
  if (authorId) return '<a href="user.html?email=' + encodeURIComponent(authorId) + '" class="user-link">' + safeName + '</a>';
  return safeName;
}

function formatPostContent(text) {
  if (!text) return '';
  var html = escapeForumHtml(text);
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote class="post-quote">$1</blockquote>');
  html = html.replace(/@(\S+)/g, '<span class="mention-user">@$1</span>');
  html = html.replace(/\n/g, '<br>');
  html = html.replace(/<br><blockquote/g, '<blockquote');
  html = html.replace(/<\/blockquote><br/g, '</blockquote');
  return html;
}

/* ===== 导航栏生成 ===== */
function renderNav(activePage) {
  var pages = [
    { href: 'community.html', label: '首页', id: 'home' },
    { href: 'players.html', label: '选手百科', id: 'players' },
    { href: 'teams.html', label: '战队阵容', id: 'teams' },
    { href: 'forum-home.html', label: '讨论区', id: 'forum' },
    { href: 'oc-home.html', label: 'OC中心', id: 'oc' }
  ];
  var navHtml = '';
  pages.forEach(function(p) {
    navHtml += '<a href="' + p.href + '" class="' + (p.id === activePage ? 'active' : '') + '">' + p.label + '</a>';
  });
  var topbar = document.querySelector('.topbar-nav');
  if (topbar) topbar.innerHTML = navHtml;
}
