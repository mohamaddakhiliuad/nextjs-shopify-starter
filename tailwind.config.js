/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // برای مسیر فایل‌ها
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
        },
        colors: {
          cream: "#fef6ee", // رنگ پس‌زمینه خاص نوره
          brown: "#5b4636", // رنگ متن‌ها
          beige: "#fff8f2", // رنگ کارت‌ها
        },
      },
    },
    plugins: [],
  }
  