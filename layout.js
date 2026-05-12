/* ===== 荣耀社区 - 公共布局注入 ===== */
/* 依赖: common.js（必须先加载） */
/* 用法: 页面放 <div id="app-header"></div> 和 <div id="app-footer"></div>，然后引入此脚本 */

(function() {
  var activePage = document.body.getAttribute('data-page') || '';

  // ===== Header =====
  var headerEl = document.getElementById('app-header');
  if (headerEl) {
    var navPages = [
      { href: 'community.html', label: '首页', id: 'home' },
      { href: 'players.html', label: '选手百科', id: 'players' },
      { href: 'teams.html', label: '战队阵容', id: 'teams' },
      { href: 'forum-home.html', label: '讨论区', id: 'forum' },
      { href: 'oc-home.html', label: 'OC中心', id: 'oc' }
    ];
    var navHtml = '';
    for (var i = 0; i < navPages.length; i++) {
      var p = navPages[i];
      navHtml += '<a href="' + p.href + '" class="' + (p.id === activePage ? 'active' : '') + '">' + p.label + '</a>';
    }

    headerEl.innerHTML =
      '<header class="topbar">' +
        '<div class="topbar-inner">' +
          '<a href="community.html" class="topbar-brand"><img src="favicon.png" alt="荣耀" class="brand-icon"> 荣耀社区</a>' +
          '<button class="menu-toggle" onclick="document.querySelector(\'.topbar-nav\').classList.toggle(\'open\')">☰</button>' +
          '<nav class="topbar-nav">' + navHtml + '</nav>' +
          '<div class="topbar-right">' +
            '<a href="search.html" class="nav-text-btn">搜索</a>' +
            '<a href="notifications.html" class="nav-text-btn">通知</a>' +
            '<a href="profile.html" class="nav-text-btn">我的</a>' +
            '<a href="index.html" class="btn-logout">退出</a>' +
          '</div>' +
        '</div>' +
      '</header>';

    // 管理员公告按钮（forum-home 页面）
    if (typeof isAdmin === 'function' && isAdmin()) {
      var announceBtn = document.getElementById('announceBtn');
      if (announceBtn) announceBtn.style.display = 'flex';
    }
  }

  // ===== Footer =====
  var footerEl = document.getElementById('app-footer');
  if (footerEl) {
    footerEl.innerHTML =
      '<footer class="footer">' +
        '<p>🏆 荣耀社区 · 全职高手同人站</p>' +
      '</footer>';
  }

  // ===== 社区首页规则弹窗 =====
  if (activePage === 'home' && typeof showRulesModal === 'function') {
    showRulesModal();
  }
})();
