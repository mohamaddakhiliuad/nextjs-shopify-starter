# 🖼️ Noura Art Lightbox – Headless Shopify Starter (Next.js 14 + Tailwind)

A modern, elegant, and highly customizable headless frontend for showcasing and selling visual artworks or designer products using **Next.js 14 (App Router)** and **Shopify Storefront API**. Built with modular architecture and enhanced lightbox UI for a premium gallery experience. 🌿

---

## ✨ Key Features

* ✅ **Next.js App Router (14)** – clean routing with server components
* ✅ **Tailwind CSS 3** – fully responsive and scalable design
* ✅ **Headless Shopify Integration** – powered by Storefront GraphQL API
* ✅ **Custom Lightbox UI** – handcrafted overlay with captions, share buttons, vignette effect, and product linking
* ✅ **Thumbnail + Fullscreen Support** – toggleable UI elements via config
* ✅ **Keyboard Escape & Preview Hooks** – polished user experience
* ✅ **Dynamic Product Handling** – supports gallery + related artworks
* ✅ **Developer-Friendly Settings** – enable/disable features via `LIGHTBOX_CONFIG`

---

## 💎 Live Lightbox Experience

> The lightbox component in this project has been crafted as a digital gallery experience.
> It supports artwork previews, product linking, share buttons, and optional mockups for future features like "Preview on Wall".

---

## 🧠 Tech Stack

* [Next.js 14 (App Router)](https://nextjs.org)
* [Tailwind CSS 3](https://tailwindcss.com)
* [Shopify Storefront API](https://shopify.dev/docs/api/storefront)
* TypeScript, Axios
* [Yet-Another-React-Lightbox](https://yet-another-react-lightbox.com/) with Zoom, Thumbnails, and Captions plugins

---

## ⚠️ Important

> This is a **public UI starter**.
> Business logic (checkout, cart, backend API, analytics, etc.) is kept in private repositories for production projects.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mohamaddakhiliuad/noura-art-lightbox
cd noura-art-lightbox
```
---

## Add environment variables
NEXT_PUBLIC_SHOPIFY_DOMAIN=https://your-store.myshopify.com
SHOPIFY_TOKEN=your-storefront-token
NEXT_PUBLIC_SITE_URL=http://localhost:3000

---

## 🛠️ Customize Settings
All visual and functional toggles are managed via

// /src/config/settings.ts

export const LIGHTBOX_CONFIG = {
  thumbnails: true,
  enableNext: true,
  animationEffects: true,
  keyboardShortcuts: true,
  shareButtons: true,
  previewOnWall: false,
  vignetteEffect: true,
  imageTopSpacing: '3vh',
}

---
## 🤝 Contributions
Feel free to fork and submit pull requests for feature ideas, refactors, or bug fixes.

---
## ✨ Created with passion by Mohammad Dakhilitarghi

