/* ===== profile.html 页面逻辑 ===== */
(function() {
  if (!getToken()) {
    alert('请先登录');
    window.location.href = 'index.html';
    return;
  }

  var BADGES = [
    { id: 'newcomer', name: '初来乍到', icon: '🌟', desc: '注册账号', condition: function() { return true; } },
    { id: 'first_post', name: '初次发声', icon: '📝', desc: '发布第一篇帖子', condition: function(s) { return s.posts >= 1; } },
    { id: 'first_oc', name: '造物主', icon: '🧑🎨', desc: '创建第一个 OC', condition: function(s) { return s.ocs >= 1; } },
    { id: 'social', name: '社交蝴蝶', icon: '🦋', desc: '回复 10+ 帖子', condition: function(s) { return s.replies >= 10; } },
    { id: 'liked', name: '人气之星', icon: '⭐', desc: '累计获得 10 赞', condition: function(s) { return s.likes >= 10; } },
    { id: 'creator', name: '创作达人', icon: '🎨', desc: '发布 5+ 帖子', condition: function(s) { return s.posts >= 5; } },
    { id: 'oc_master', name: 'OC 大师', icon: '🏆', desc: '创建 3+ OC', condition: function(s) { return s.ocs >= 3; } }
  ];

  async function renderProfile() {
    try {
      var profileData = await apiGet('/api/profile');
      if (!profileData) return;

      var stats = profileData.stats || { posts: 0, replies: 0, likes: 0, ocs: 0 };

      var avatarEl = document.getElementById('profileAvatar');
      if (profileData.avatar) {
        avatarEl.innerHTML = '<img src="' + profileData.avatar + '" alt="' + escapeForumHtml(profileData.username || '') + '" loading="lazy">';
      } else {
        avatarEl.textContent = (profileData.username || '荣')[0];
      }

      document.getElementById('profileName').textContent = profileData.username || '荣耀玩家';
      if (isAdmin()) {
        document.getElementById('profileName').innerHTML = escapeForumHtml(profileData.username || '管理员') + ' <span style="background:#6a1b9a;color:#fff;font-size:11px;padding:2px 8px;border-radius:10px;margin-left:6px;vertical-align:middle;">管理员</span>';
      }
      document.getElementById('profileJoinDate').textContent = profileData.joinDate || '2026-05-01';

      // 个人简介
      if (profileData.bio) {
        document.getElementById('bioCard').style.display = '';
        document.getElementById('myBio').textContent = profileData.bio;
      }

      // 偏好
      var favItems = [];
      if (profileData.favPlayer) favItems.push('🎮 最喜欢的角色：' + profileData.favPlayer);
      if (profileData.favTeam) favItems.push('🏆 最喜欢的战队：' + profileData.favTeam);
      if (favItems.length > 0) {
        document.getElementById('favCard').style.display = '';
        document.getElementById('myFav').innerHTML = favItems.join('<br>');
      }

      // OC 显示/隐藏状态
      window._ocHidden = !!profileData.ocHidden;

      document.getElementById('statPosts').textContent = stats.posts;
      document.getElementById('statReplies').textContent = stats.replies;
      document.getElementById('statLikes').textContent = stats.likes;
      document.getElementById('statOCs').textContent = stats.ocs;

      document.getElementById('badgesGrid').innerHTML = BADGES.map(function(b) {
        var unlocked = b.condition(stats);
        return '<div class="badge-item ' + (unlocked ? 'unlocked' : 'locked') + '" title="' + b.desc + '">' +
          '<div class="badge-icon">' + b.icon + '</div>' +
          '<div class="badge-name">' + b.name + '</div>' +
        '</div>';
      }).join('');

      renderMyPosts();
      renderMyOCs();

      if (isAdmin()) {
        var btn = document.getElementById('adminAnnounceBtn');
        if (btn) btn.style.display = 'inline-block';
      }
    } catch (e) {
      console.error('renderProfile error:', e);
      showToast('加载失败，请刷新重试', 'error');
    }
  }

  async function renderMyPosts() {
    try {
      var user = getUser();
      if (!user) return;
      var result = await getPostsByAuthor(user.email);
      if (!result || !result.items) {
        document.getElementById('myPosts').innerHTML = '<p style="color:var(--text-3);padding:20px 0;text-align:center;">加载中...</p>';
        result = await getPostsByAuthor(user.email);
        if (!result || !result.items) {
          document.getElementById('myPosts').innerHTML = '<p style="color:var(--text-3);padding:20px 0;text-align:center;">加载失败，请刷新重试</p>';
          return;
        }
      }
      var myPosts = (result.items || []).filter(function(p) {
        return p.authorId && user.email && p.authorId.toLowerCase() === user.email.toLowerCase();
      });
      var container = document.getElementById('myPosts');

      if (myPosts.length === 0) {
        container.innerHTML = '<div class="empty-state">' +
          '<div style="font-size:36px;margin-bottom:12px;">📝</div>' +
          '<p>还没有发过帖子</p>' +
          '<a href="post-new.html" class="btn btn-primary" style="margin-top:12px;">去发一帖</a>' +
        '</div>';
        return;
      }

      container.innerHTML = myPosts.map(function(post) {
        var cat = getCategoryById(post.category);
        return '<a class="post-item" href="post-detail.html?id=' + post.id + '">' +
          '<div class="post-body">' +
            '<div class="post-title">' + escapeForumHtml(post.title) + '</div>' +
            '<div class="post-meta">' +
              '<span>' + (cat ? cat.icon : '📁') + ' ' + (cat ? cat.name : '未知') + '</span>' +
              '<span class="stat">💬 ' + post.replyCount + '</span>' +
              '<span class="stat">👍 ' + post.likeCount + '</span>' +
              '<span class="stat">👁️ ' + post.viewCount + '</span>' +
              '<span>' + forumTimeAgo(post.createdAt) + '</span>' +
            '</div>' +
          '</div>' +
        '</a>';
      }).join('');
    } catch (e) {
      document.getElementById('myPosts').innerHTML = '<p style="color:var(--text-3);padding:20px 0;">加载失败</p>';
    }
  }

  async function renderMyOCs() {
    try {
      var allOCs = await getAllOCs();
      var user = getUser();
      var myOCs = allOCs.filter(function(o) { return user && o.creatorId === user.email; })
        .sort(function(a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });
      var container = document.getElementById('myOCs');

      // OC 公开/隐藏开关
      var toggleHtml = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding:12px 16px;background:var(--bg);border-radius:8px;">' +
        '<span style="font-size:14px;color:var(--text-2);">对其他用户隐藏我的 OC</span>' +
        '<label class="toggle-switch">' +
          '<input type="checkbox" id="ocHiddenToggle" ' + (window._ocHidden ? 'checked' : '') + ' onchange="toggleOCHidden(this.checked)">' +
          '<span class="toggle-slider"></span>' +
        '</label>' +
      '</div>';

      if (myOCs.length === 0) {
        container.innerHTML = toggleHtml + '<div class="empty-state">' +
          '<div style="font-size:36px;margin-bottom:12px;">🧑🎨</div>' +
          '<p>还没有创建 OC</p>' +
          '<a href="oc-create.html" class="btn btn-primary" style="margin-top:12px;">创建 OC</a>' +
        '</div>';
        return;
      }

      container.innerHTML = toggleHtml + '<div class="oc-grid">' + myOCs.map(function(oc) {
        return '<a class="oc-card" href="oc-detail.html?id=' + oc.id + '">' +
          '<div class="oc-card-top"></div>' +
          '<div class="oc-card-body">' +
            '<div class="oc-avatar">' + (oc.avatar ? '<img src="' + oc.avatar + '" alt="' + escapeForumHtml(oc.name) + '" loading="lazy">' : escapeForumHtml(oc.gameId)) + '</div>' +
            '<div class="oc-info">' +
              '<h3>' + escapeForumHtml(oc.name) + '</h3>' +
              '<div class="game-id">' + escapeForumHtml(oc.gameId) + '</div>' +
              '<div class="meta">' +
                '<span class="tag tag-class">' + escapeForumHtml(oc.class) + '</span>' +
                '<span class="tag tag-team">' + escapeForumHtml(oc.team) + '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</a>';
      }).join('') + '</div>';
    } catch (e) {
      document.getElementById('myOCs').innerHTML = '<p style="color:var(--text-3);padding:20px 0;">加载失败</p>';
    }
  }

  window.toggleOCHidden = async function(hidden) {
    try {
      await apiPut('/api/profile', { ocHidden: hidden });
      window._ocHidden = hidden;
      showToast(hidden ? 'OC 已对其他用户隐藏' : 'OC 已公开', 'success');
    } catch (e) {
      showToast('设置失败，请重试', 'error');
      // 回滚 checkbox 状态
      var cb = document.getElementById('ocHiddenToggle');
      if (cb) cb.checked = !hidden;
    }
  };

  document.querySelectorAll('.profile-tab').forEach(function(tab) {
    tab.onclick = function() {
      document.querySelectorAll('.profile-tab').forEach(function(t) { t.classList.remove('active'); });
      document.querySelectorAll('.profile-tab-content').forEach(function(c) { c.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    };
  });

  renderProfile();
})();
