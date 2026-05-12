// ===== 荣耀社区 - OC 角色数据 (API 版) =====

const API_BASE = 'https://glory-api-feqlkejziv.cn-hangzhou.fcapp.run';

// 职业列表
const OC_CLASSES = [
  '战斗法师', '枪炮师', '剑客', '术士', '拳法家', '魔法师',
  '骑士', '弹药专家', '机械师', '元素法师', '刺客', '忍者',
  '鬼剑士', '柔道', '流氓', '牧师', '召唤师', '气功师', '散人'
];

// 战队列表
const OC_TEAMS = [
  '兴欣', '嘉世', '霸图', '蓝雨', '微草', '轮回',
  '雷霆', '烟雨', '虚空', '呼啸', '三零一', '义斩', '自建'
];

// 职位列表
const OC_ROLES = ['队长', '副队长', '主力', '替补', '队员'];

// 武器类型
const OC_WEAPON_TYPES = ['银武', '橙武', '紫武'];

// 战斗风格
const OC_COMBAT_STYLES = [
  '攻击型', '防御型', '控制型', '辅助型',
  '全能型', '暗杀型', '爆发型', '消耗型'
];

// ===== Auth 工具 =====

function getToken() {
  return localStorage.getItem('glory_token');
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem('glory_user') || 'null');
  } catch (e) { return null; }
}

function ocAuthHeaders() {
  const token = getToken();
  return token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

function handleOCAuthError(res) {
  if (res.status === 401) {
    localStorage.removeItem('glory_token');
    localStorage.removeItem('glory_user');
    window.location.href = 'index.html';
    return true;
  }
  return false;
}

// ===== API 请求工具 =====

async function ocApiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, { headers: ocAuthHeaders() });
  if (handleOCAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function ocApiPost(path, data) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: ocAuthHeaders(),
    body: JSON.stringify(data)
  });
  if (handleOCAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function ocApiPut(path, data) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'PUT',
    headers: ocAuthHeaders(),
    body: JSON.stringify(data)
  });
  if (handleOCAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

async function ocApiDelete(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'DELETE',
    headers: ocAuthHeaders()
  });
  if (handleOCAuthError(res)) return null;
  if (!res.ok) throw new Error((await res.json()).error || '请求失败');
  return res.json();
}

// ===== OC API =====

async function getAllOCs() {
  try {
    const result = await ocApiGet('/api/ocs?pageSize=1000');
    return result.items || [];
  } catch (e) {
    console.error('getAllOCs error:', e);
    return [];
  }
}

async function getOCById(id) {
  try {
    return await ocApiGet(`/api/ocs/${id}`);
  } catch (e) {
    console.error('getOCById error:', e);
    return null;
  }
}

async function createOC(data) {
  try {
    return await ocApiPost('/api/ocs', data);
  } catch (e) {
    throw e;
  }
}

async function updateOC(id, data) {
  try {
    return await ocApiPut(`/api/ocs/${id}`, data);
  } catch (e) {
    throw e;
  }
}

async function deleteOC(id) {
  try {
    return await ocApiDelete(`/api/ocs/${id}`);
  } catch (e) {
    throw e;
  }
}

async function filterOCs({ search = '', ocClass = 'all', page = 1, pageSize = 20 } = {}) {
  try {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (ocClass && ocClass !== 'all') params.set('class', ocClass);
    params.set('page', page);
    params.set('pageSize', pageSize);
    return await ocApiGet(`/api/ocs?${params.toString()}`);
  } catch (e) {
    console.error('filterOCs error:', e);
    return { items: [], total: 0, page: 1, pageSize: 20, totalPages: 0 };
  }
}

// 性别显示
function genderText(g) {
  if (g === 'male') return '男';
  if (g === 'female') return '女';
  return '其他';
}
