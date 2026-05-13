/* ===== 荣耀社区 - 认证页面公共 JS ===== */
const API_BASE = 'https://glory-api-feqlkejziv.cn-hangzhou.fcapp.run';

/* ===== Ember particles ===== */
(function() {
  var embersEl = document.getElementById('embers');
  if (!embersEl) return;
  var isMobile = window.innerWidth < 600;
  var count = isMobile ? 60 : 350;
  for (var i = 0; i < count; i++) {
    var e = document.createElement('div');
    e.className = 'ember';
    var size = Math.random() * (isMobile ? 3 : 6) + 1.5;
    var dur = isMobile ? (Math.random() * 6 + 4) : (Math.random() * 15 + 10);
    e.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (Math.random()*100) + '%;bottom:' + (-Math.random()*15-5) + '%;--drift:' + ((Math.random()-0.5)*200) + 'px;animation-duration:' + dur + 's;animation-delay:' + (Math.random()*(isMobile?6:20)) + 's;';
    embersEl.appendChild(e);
  }
})();

/* ===== Toast ===== */
function showToast(msg, type) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast ' + (type || '');
  requestAnimationFrame(function() { t.classList.add('show'); });
  clearTimeout(t._timer);
  t._timer = setTimeout(function() { t.classList.remove('show'); }, 3500);
}

/* ===== fetchWithRetry ===== */
async function fetchWithRetry(url, opts, retries) {
  retries = retries || 2;
  for (var i = 0; i <= retries; i++) {
    try {
      var r = await fetch(url, opts);
      if (r.ok) return r;
      if (i === retries) return r;
    } catch (e) {
      if (i === retries) throw e;
    }
    await new Promise(function(r) { setTimeout(r, 1000 * (i + 1)); });
  }
}
