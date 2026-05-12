# 荣耀社区 - 阿里云后端部署指南

## 架构

```
前端（GitHub Pages）
    ↓ API 请求
阿里云函数计算（Express 后端）
    ↓ 发邮件
Resend（免费 3000 封/月）
    ↓ 存用户
阿里云 OSS（JSON 文件数据库）
```

## 第一步：注册 Resend（免费邮件服务）

1. 打开 https://resend.com
2. 用 GitHub 账号登录
3. 进 API Keys → Create API Key → 复制保存（格式：`re_xxxxx`）
4. 免费额度：3000 封/月，足够用了

## 第二步：开通阿里云 OSS

1. 登录阿里云控制台 → 搜索"对象存储 OSS" → 开通
2. 创建 Bucket：
   - Bucket 名称：`glory-db`（或自定义）
   - 地域：选离你最近的（如华东1杭州）
   - 读写权限：**私有**
3. 记下 Bucket 名称和地域代码（如 `oss-cn-hangzhou`）

## 第三步：创建 AccessKey

1. 阿里云控制台 → 右上角头像 → AccessKey管理
2. 创建 AccessKey（建议用子账号，权限只给 OSS 读写）
3. 记录：AccessKey ID、AccessKey Secret

## 第四步：部署函数计算

### 4.1 打包代码

在本地电脑上：

```bash
# 进入后端目录
cd glory/backend

# 安装依赖
npm install

# 打包成 ZIP
zip -r glory-api.zip . -x "node_modules/.cache/*"
```

### 4.2 创建函数

1. 阿里云控制台 → 搜索"函数计算 FC" → 开通（选 3.0 版本）
2. 创建函数 → 使用内置运行时创建
3. 配置：
   - 函数名称：`glory-api`
   - 运行环境：**Node.js 18**
   - 请求处理程序：`index.handler`
   - 代码上传方式：**上传 ZIP 包** → 上传 `glory-api.zip`

### 4.3 配置环境变量

函数配置 → 环境变量 → 添加：

| 变量名 | 值 |
|--------|---|
| `RESEND_API_KEY` | `re_xxxxx`（你的 Resend API Key）|
| `FROM_EMAIL` | `onboarding@resend.dev` |
| `FROM_NAME` | `荣耀社区` |
| `OSS_REGION` | `oss-cn-hangzhou` |
| `OSS_ACCESS_KEY_ID` | 你的 AccessKey ID |
| `OSS_ACCESS_KEY_SECRET` | 你的 AccessKey Secret |
| `OSS_BUCKET_NAME` | `glory-db` |
| `JWT_SECRET` | 随便填一个32位以上的字符串 |
| `SITE_URL` | `https://ya-chang.github.io/glory` |

### 4.4 创建 HTTP 触发器

1. 触发器管理 → 创建触发器
2. 配置：
   - 触发器类型：HTTP 触发器
   - 认证方式：**无需认证**
   - 请求方法：GET, POST
3. 记录生成的**访问域名**（如 `https://glory-api.xxx.fc.aliyuncs.com`）

## 第五步：更新前端配置

把函数计算的域名替换到 4 个前端文件中的 `API_BASE`：

- `index.html`
- `register.html`
- `verify.html`
- `reset.html`

找到这行：
```js
const API_BASE = 'https://你的函数计算域名';
```

替换为你的实际域名。然后 push 到 GitHub。

## 第六步：测试

1. 打开注册页面，注册一个账号
2. 检查邮箱（包括垃圾邮件）是否收到验证邮件
3. 点击验证链接
4. 登录

## 费用

| 服务 | 费用 |
|------|------|
| 函数计算 | 免费（100万次/月） |
| OSS | 免费（5GB以内） |
| Resend | 免费（3000封/月） |
| **总计** | **¥0** |

## 后续：自动部署（可选）

配好 GitHub Actions 后，push 代码自动部署到函数计算，不用每次手动打包。
