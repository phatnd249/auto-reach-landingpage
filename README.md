# AutoReach - Landing Page

Landing page cho **AutoReach** - nền tảng tự động hóa nội dung số, giúp tạo và phân phối nội dung nhanh chóng, hiệu quả trên nhiều nền tảng.

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS 4
- Oxlint

## Cài đặt & Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## Cấu trúc dự án

```
src/
  components/
    sections/      # Các section của landing page
    ui/            # Component UI tái sử dụng
  hooks/           # Custom hooks (useForm, useScrollHeader)
  lib/             # Analytics, Pixel tracking
  assets/          # Hình ảnh, icons
  styles/          # CSS
```

## Sections

- **Header** - Navigation
- **HeroSection** - Giới thiệu chính
- **ChallengesSection** - Các thách thức
- **SolutionSection** - Giải pháp
- **ProcessSection** - Quy trình
- **FeaturesSection** - Tính năng
- **ValueSection** - Giá trị
- **TargetAudienceSection** - Đối tượng khách hàng
- **TeamProjectSection** - Đội ngũ
- **FAQSection** - Câu hỏi thường gặp
- **CTASection** - Call to action
- **Footer** - Chân trang

## Biến môi trường

Copy `.env.local` và điền các giá trị:

| Variable | Mô tả |
|---|---|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics Measurement ID |
| `VITE_FB_PIXEL_ID` | Facebook Pixel ID |
| `VITE_WEBHOOK_URL` | Webhook URL (CRM/form submission) |
| `VITE_API_BASE_URL` | API base URL |

> **Lưu ý:** Các biến env được nhúng vào bundle lúc build nên phải cấu hình lại trên chính nền tảng deploy, không đọc lúc runtime.

## Deploy

Đây là landing page tĩnh - chỉ cần build và upload thư mục `dist/`.

### Vercel (Recommended)

```bash
# Cài CLI toàn cục (lần đầu)
npm i -g vercel

# Deploy lên preview
vercel

# Deploy production
vercel --prod
```

Hoặc đơn giản hơn: push code lên GitHub rồi import repo tại [vercel.com/new](https://vercel.com/new) - mỗi lần push là tự deploy. Framework chọn **Vite**, build command `npm run build`, output dir `dist`.

### Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --dir=dist          # preview
netlify deploy --prod --dir=dist   # production
```

Hoặc qua [app.netlify.com](https://app.netlify.com): build command `npm run build`, publish dir `dist`.

### Cloudflare Pages

Yêu cầu đã cài `wrangler` và đăng nhập:

```bash
npm i -g wrangler
wrangler login

# Deploy trực tiếp
wrangler pages deploy dist --project-name=auto-reach
```

### GitHub Pages

Cần thêm `base` vào `vite.config.js` trước khi build:

```js
export default defineConfig({
  base: '/<tên-repo>/',
  plugins: [tailwindcss(), react()],
})
```

```bash
npm run build
# Upload nội dung thư mục dist/ lên nhánh gh-pages
npx gh-pages -d dist
```

### Self-host (Nginx/VPS)

```bash
npm run build
# Upload thư mục dist/ lên server, ví dụ:
# /var/www/auto-reach
```

Sau đó cấu hình Nginx trỏ document root vào thư mục đó và nhớ thêm fallback SPA:

```nginx
location / {
  root  /var/www/auto-reach;
  index index.html;
  try_files $uri $uri/ /index.html;
}
```
