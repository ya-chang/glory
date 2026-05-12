# 🏆 荣耀社区

全职高手同人社区论坛 · [ya-chang.github.io/glory](https://ya-chang.github.io/glory/)

## 三个板块

| 板块 | 说明 |
|------|------|
| 💬 讨论区 | 原作讨论、同人创作、灌水闲聊、站务中心 |
| 👤 选手百科 | 原作选手资料（只读，管理员维护），支持 S1-S10 赛季切换 |
| 🧑‍🎨 OC 角色中心 | 用户创建自己的原创角色，3步表单 + 草稿保存 |

## 技术方案

- **前端：** 纯 HTML + CSS + JS（无构建工具，手机可编辑）
- **后端：** Firebase Firestore（待接入）
- **认证：** Firebase Auth（待接入）
- **托管：** Netlify / GitHub Pages

## 页面

| 文件 | 功能 | 状态 |
|------|------|------|
| `community.html` | 社区首页（板块入口、热门选手） | ✅ |
| `forum-home.html` | 讨论区首页（版块卡片、统计、热门帖子） | ✅ |
| `forum-category.html` | 版块帖子列表（排序、标签筛选、分页） | ✅ |
| `post-detail.html` | 帖子详情（楼中楼回复、点赞、收藏） | ✅ |
| `post-new.html` | 发新帖（版块选择、工具栏、预览） | ✅ |
| `players.html` | 选手列表（战队/状态筛选、搜索） | ✅ |
| `player-detail.html` | 选手档案（赛季经历、人际关系、荣誉） | ✅ |
| `teams.html` | 战队阵容（S1-S10 赛季切换） | ✅ |
| `oc-home.html` | OC 列表（搜索、职业筛选） | ✅ |
| `oc-detail.html` | OC 详情（完整信息展示、评论） | ✅ |
| `oc-create.html` | 创建 OC（3步表单 + 草稿） | ✅ |
| `oc-edit.html` | 编辑 OC | ✅ |
| `profile.html` | 个人主页（等级、统计、成就、签到、帖子/OC/收藏） | ✅ |
| `settings.html` | 设置（个人资料、头像、通知偏好） | ✅ |
| `notifications.html` | 通知中心（回复/点赞/提及/系统通知） | ✅ |
| `search.html` | 搜索 | ✅ |
| `rules.html` | 规则 | 🔲 |

## 文件结构

| 文件 | 用途 |
|------|------|
| `style.css` | 全站样式（白蓝绿配色、响应式） |
| `players.js` | 选手数据（30+ 选手） |
| `teams.js` | 战队数据（16 支战队 S1-S10） |
| `oc.js` | OC 数据层（localStorage CRUD） |
| `forum.js` | 讨论区数据层（帖子/回复/点赞 CRUD） |

## 开发约定

- 所有文件在根目录，不用 `css/` `js/` 子文件夹
- 配色：白底蓝绿（`#1a73e8` / `#34a853`）
- 字体：Noto Sans SC
- 移动端响应式，768px 断点

## 完整文档

👉 [荣耀社区-完整文档.md](./荣耀社区-完整文档.md)
