# 🐐 TattooGOAT.com

> **The G.O.A.T. Index & Gear Lab**
> The definitive global directory of the world's greatest tattoo masters and independently tested aftercare, wireless rotary machines, and inks.

---

## 🎯 业务模型 (2 + 5 融合打法)

1. **Top Artists / Hall of Fame (方向 2 - 行业殿堂级权威目录)**
   - 评选全球顶级纹身大师（按日式、黑灰写实、单针微刺青、水彩、几何流派索引）。
   - 艺术家作品集、入驻认证徽章、预约及 Instagram 外链引流。
   - **冷启动杠杆**：被收录大师在社交媒体（IG Story/Twitter）主动转发，免费带来顶级权重反向外链与自然流量。
   - **自传播机制**：`/nominate` 提名入口沉淀行业口碑与粉丝自发推广。

2. **Gear & Aftercare Reviews (方向 5 - 科学评测与联盟变现)**
   - 面向大众：纹身护理膏、第二层皮肤愈合膜、麻醉膏选购指南。
   - 面向纹身师：无线纹身机、针嘴色料深度横评。
   - **变现闭环**：Amazon Associates + 专业纹身供应链联盟营销（直接转化高客单价佣金）。

---

## ⚡️ 技术栈

* **框架**：[Astro 5+](https://astro.build/) (Zero-JS 默认静态编译，极速秒开霸榜 Google Core Web Vitals)
* **样式**：[Tailwind CSS v4](https://tailwindcss.com/) (极简暗黑奢华画廊质感)
* **内容系统**：Astro Content Layer + Zod 类型安全校验
* **SEO**：自动生成 `sitemap-index.xml` + `robots.txt` + Schema.org JSON-LD 结构化数据
* **部署目标**：[Cloudflare Pages](https://pages.cloudflare.com/) (全球 300+ 节点边缘加速，每月 $0 维护成本)

---

## 🚀 本地开发与预览

```bash
# 安装依赖
npm install

# 启动本地开发服务
npm run dev

# 构建生产包 (静态生成)
npm run build

# 预览静态输出
npm run preview
```

---

## 📝 如何添加新内容

### 1. 添加一位新的殿堂级纹身大师
在 `src/content/artists/` 目录下新建一个 `[slug].json`（如 `alex-sorsa.json`）：
```json
{
  "name": "Alex Sorsa",
  "handle": "@alexsorsa",
  "headline": "Moscow Master of High-Contrast Dark Realism & Surreal Portraits",
  "city": "Moscow",
  "country": "Russia",
  "studio": "Sorsa Atelier",
  "styles": ["Black & Grey", "Realism", "Surrealism"],
  "badge": "Modern Master",
  "bio": "Alex Sorsa is widely recognized for his explosive black and grey surrealist portraits...",
  "instagram": "https://instagram.com/alexsorsa",
  "bookingUrl": "https://alexsorsa.com/booking",
  "bookingStatus": "Waitlist",
  "avatar": "https://images.unsplash.com/...",
  "coverImage": "https://images.unsplash.com/...",
  "experienceYears": 12,
  "awards": ["Best Black & Grey 2024"],
  "featured": true,
  "rank": 6
}
```

### 2. 发布一篇新的评测指南
在 `src/content/guides/` 目录下新建一个 `[slug].md`：
包含前置 YAML 元数据（标题、分类、Top Picks 评级、优缺点、Affiliate 链接）和 Markdown 正文。构建时会自动生成 Schema.org Review 结构化数据。

---

## 🌐 Cloudflare Pages 部署步骤

1. 将当前项目推送到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "feat: launch tattoogoat v1"
   git remote add origin git@github.com:YOUR_USERNAME/tattoogoat.com.git
   git push -u origin main
   ```
2. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/) -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**。
3. 选择你的 `tattoogoat.com` 仓库：
   * **Framework preset**: `Astro`
   * **Build command**: `npm run build`
   * **Build output directory**: `dist`
   * **Environment variables**: 设置 `NODE_VERSION` 为 `22`
4. 点击 **Save and Deploy**。
5. 在 **Custom domains** 页面，绑定你的域名 `tattoogoat.com`，Cloudflare 会自动完成全球 CDN 与免费 SSL 证书下发！
