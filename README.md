# 🪄 Noura Lifestyle Template – Headless Shopify & WordPress Starter (Next.js 14 + Tailwind)

A modern, emotional, and minimalist frontend template for lifestyle brands built with **Next.js 14 (App Router)**, **Tailwind CSS**, and ready for **headless Shopify/WordPress** integration.  
Perfect for digital creators, artists, designers, and ethical brands that value calm UX, branding clarity, and flexible design.

---

## 🌟 Why Noura?

🔹 Designed around simplicity, softness, and emotional experience  
🔹 Built with modular React components and clean architecture  
🔹 Custom Lightbox with captions, thumbnails, and sharing  
🔹 Centralized theme system and reusable form styles  
🔹 Ready to connect with Shopify (via Storefront API) or WordPress (via REST/GraphQL)  
🔹 Scalable, fast, and fully responsive

---

## 🔧 Features

✅ Next.js 14 App Router  
✅ Tailwind CSS 3  
✅ Headless Shopify support  
✅ Lightbox (with Zoom, Captions, Thumbnails)  
✅ Dynamic product grid & filters  
✅ Custom toast notifications  
✅ Theme and design token system  
✅ Fully componentized and ready to customize

---

## 🔐 Env Variables (Shopify-ready)
NEXT_PUBLIC_SHOPIFY_DOMAIN=https://your-store.myshopify.com
SHOPIFY_TOKEN=your-storefront-token
NEXT_PUBLIC_SITE_URL=http://localhost:3000

---
## 🎨 Theming
All visual styles (colors, spacing, font system) are centralized in:

/src/styles/theme.ts

/src/styles/formStyles.ts

---
## 📦 Folder Structure

components/

├── product/

├── forms/

├── ui/

styles/

types/

utils/

config/

---
## 💡 Customize Behavior

All feature toggles (like lightbox options) are configured in:
// src/config/settings.ts
export const LIGHTBOX_CONFIG = {
  thumbnails: true,
  enableNext: true,
  animationEffects: true,
  keyboardShortcuts: true,
  shareButtons: true,
  previewOnWall: false,
  vignetteEffect: true,
}

## 🤝 Contributions
Pull requests welcome. Want to add blog support, animations, or CMS integration? Let’s build it together.
---

## ✨ Created with love by Mohammad Dakhilitarghi
---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/noura-template
cd noura-template
npm install
npm run dev



