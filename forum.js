// ===== 荣耀社区 - 讨论区数据层 (API 版) =====

const API_BASE = 'https://glory-api-feqlkejziv.cn-hangzhou.fcapp.run';

// ===== 统一 Toast 错误提示 =====
function showToast(msg, type) {
  const existing = document.querySelector('.toast-msg');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast-msg' + (type === 'error' ? ' toast-error' : type === 'success' ? ' toast-success' : '');
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 2500);
}

// 统一 API 错误处理
function handleApiError(err, fallbackMsg) {
  const msg = err.message || fallbackMsg || '操作失败';
  showToast(msg, 'error');
}

// 版块列表（静态 + 从 API 获取）
const FORUM_CATEGORIES = [
  { id: 'original', name: '原作讨论', icon: '📖', desc: '小说、动画、漫画、角色分析', color: '#1a73e8' },
  { id: 'fanwork', name: '同人创作', icon: '🎨', desc: '同人文、同人图、COS、视频', color: '#34a853' },
  { id: 'casual', name: '灌水闲聊', icon: '🌊', desc: '日常、表情包、荣耀梗', color: '#e65100' },
  { id: 'meta', name: '站务中心', icon: '📢', desc: '公告、规则、建议反馈', color: '#6a1b9a' }
];

// 获取版块信息
function getCategoryById(id) {
  return FORUM_CATEGORIES.find(c => c.id === id) || null;
}

// ===== Auth 工具 =====

function getToken() {
  return localStorage.getItem('glory_token');
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem('glory_user') || 'null');
  } catch (e) { return null; }
}

function authHeaders() {
  const token = getToken();
  return token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
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

// ===== API 请求工具 =====

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, { headers: authHeaders() });
  if (handleAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function apiPost(path, data) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data)
  });
  if (handleAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function apiPut(path, data) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data)
  });
  if (handleAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function apiDelete(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'DELETE',
    headers: authHeaders()
  });
  if (handleAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

// ===== 帖子 API =====

async function getAllPosts() {
  try {
    const result = await apiGet('/api/forum/posts?pageSize=1000');
    return result.items || [];
  } catch (e) {
    console.error('getAllPosts error:', e);
    return [];
  }
}

async function getPostById(id) {
  try {
    return await apiGet(`/api/forum/posts/${id}`);
  } catch (e) {
    console.error('getPostById error:', e);
    return null;
  }
}

async function createPost(data) {
  try {
    return await apiPost('/api/forum/posts', data);
  } catch (e) {
    throw e;
  }
}

async function updatePost(id, data) {
  try {
    return await apiPut(`/api/forum/posts/${id}`, data);
  } catch (e) {
    throw e;
  }
}

async function deletePost(id) {
  try {
    return await apiDelete(`/api/forum/posts/${id}`);
  } catch (e) {
    throw e;
  }
}

async function getPostsByCategory(categoryId, { sort = 'latest', page = 1, pageSize = 20 } = {}) {
  try {
    return await apiGet(`/api/forum/posts?category=${categoryId}&sort=${sort}&page=${page}&pageSize=${pageSize}`);
  } catch (e) {
    console.error('getPostsByCategory error:', e);
    return { items: [], total: 0, page: 1, pageSize: 20, totalPages: 0 };
  }
}

async function incrementViewCount(postId) {
  // 已在 getPostById 中自动递增
}

// ===== 回复 API =====

async function getAllReplies() {
  // 无法直接获取全部回复，返回空数组（仅用于统计）
  return [];
}

async function getRepliesByPost(postId) {
  try {
    return await apiGet(`/api/forum/posts/${postId}/replies`);
  } catch (e) {
    console.error('getRepliesByPost error:', e);
    return [];
  }
}

async function createReply(data) {
  try {
    return await apiPost(`/api/forum/posts/${data.postId}/replies`, data);
  } catch (e) {
    throw e;
  }
}

async function deleteReply(id) {
  try {
    return await apiDelete(`/api/forum/replies/${id}`);
  } catch (e) {
    throw e;
  }
}

// ===== 点赞 API =====

async function isLiked(type, id) {
  // 通过 localStorage 缓存点赞状态
  try {
    const data = localStorage.getItem('glory_forum_likes');
    const likes = data ? JSON.parse(data) : {};
    return !!likes[`${type}:${id}`];
  } catch (e) { return false; }
}

async function toggleLike(type, id) {
  try {
    const endpoint = type === 'post' ? `/api/forum/posts/${id}/like` : `/api/forum/replies/${id}/like`;
    const result = await apiPost(endpoint, {});
    // 更新本地缓存
    const data = localStorage.getItem('glory_forum_likes');
    const likes = data ? JSON.parse(data) : {};
    const key = `${type}:${id}`;
    if (result.liked) {
      likes[key] = true;
    } else {
      delete likes[key];
    }
    localStorage.setItem('glory_forum_likes', JSON.stringify(likes));
    return result;
  } catch (e) {
    console.error('toggleLike error:', e);
    throw e;
  }
}

// ===== 工具函数 =====

function forumTimeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return '刚刚';
  if (mins < 60) return `${mins} 分钟前`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} 小时前`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} 天前`;
  return new Date(iso).toLocaleDateString('zh-CN');
}

function escapeForumHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// 生成用户名链接（指向用户主页）
function userLinkHtml(authorId, authorName) {
  const safeName = escapeForumHtml(authorName || '匿名');
  if (authorId) {
    return `<a href="user.html?email=${encodeURIComponent(authorId)}" class="user-link">${safeName}</a>`;
  }
  return safeName;
}

function formatPostContent(text) {
  if (!text) return '';
  let html = escapeForumHtml(text);
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote class="post-quote">$1</blockquote>');
  html = html.replace(/@(\S+)/g, '<span class="mention-user">@$1</span>');
  html = html.replace(/\n/g, '<br>');
  html = html.replace(/<br><blockquote/g, '<blockquote');
  html = html.replace(/<\/blockquote><br/g, '</blockquote');
  return html;
}
