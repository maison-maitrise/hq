/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      ice: "#96daff",
      snow: "#dffcff",
      mars: "#e6bd9e",
      lipstick: "#cd0000",
    },
    fontFamily: {
      bauer: "'Bauer Bodni', serif",
      maison: "'Maison Neue', sans serif",
    },
    fontWeight: {
      title: 100,
      bold: 700,
      medium: 500,
      normal: 400,
      light: 300,
      black: 900,
    },
    extend: {
      backgroundImage: {
        "pattern-yellow": "url('/assets/bg.jpg')",
        "pattern-black": "url('/assets/bg-black.jpg')",
        "pattern-red": "url('/assets/bg-red.jpg')",
        "pattern-blue": "url('/assets/bg-blue.jpg')",
      },
    },
  },
  plugins: [],
};
