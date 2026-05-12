/* ===== 荣耀社区 - OC 角色数据 (API 版) ===== */
/* 依赖: common.js (必须先加载) */

var OC_CLASSES = [
  '战斗法师', '枪炮师', '剑客', '术士', '拳法家', '魔法师',
  '骑士', '弹药专家', '机械师', '元素法师', '刺客', '忍者',
  '鬼剑士', '柔道', '流氓', '牧师', '召唤师', '气功师', '散人'
];

var OC_TEAMS = [
  '兴欣', '嘉世', '霸图', '蓝雨', '微草', '轮回',
  '雷霆', '烟雨', '虚空', '呼啸', '三零一', '义斩', '自建'
];

var OC_ROLES = ['队长', '副队长', '主力', '替补', '队员'];
var OC_WEAPON_TYPES = ['银武', '橙武', '紫武'];

var OC_COMBAT_STYLES = [
  '攻击型', '防御型', '控制型', '辅助型',
  '全能型', '暗杀型', '爆发型', '消耗型'
];

/* ===== OC API ===== */

async function getAllOCs() {
  try { var r = await apiGet('/api/ocs?pageSize=1000'); return r.items || []; }
  catch(e) { console.error('getAllOCs error:', e); return []; }
}

async function getOCById(id) {
  try { return await apiGet('/api/ocs/' + id); }
  catch(e) { console.error('getOCById error:', e); return null; }
}

async function createOC(data) { return await apiPost('/api/ocs', data); }

async function updateOC(id, data) { return await apiPut('/api/ocs/' + id, data); }

async function deleteOC(id) { return await apiDelete('/api/ocs/' + id); }

async function filterOCs(opts) {
  opts = opts || {};
  var search = opts.search || '', ocClass = opts.ocClass || 'all';
  var page = opts.page || 1, pageSize = opts.pageSize || 20;
  try {
    var params = [];
    if (search) params.push('search=' + encodeURIComponent(search));
    if (ocClass && ocClass !== 'all') params.push('class=' + encodeURIComponent(ocClass));
    params.push('page=' + page);
    params.push('pageSize=' + pageSize);
    return await apiGet('/api/ocs?' + params.join('&'));
  } catch(e) { console.error('filterOCs error:', e); return { items: [], total: 0, page: 1, pageSize: 20, totalPages: 0 }; }
}

function genderText(g) {
  if (g === 'male') return '男';
  if (g === 'female') return '女';
  return '其他';
}
