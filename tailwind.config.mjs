/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      ice: "#96daff",
      snow: "#dffcff",
      mars: "#e6bd9e",
      lipstick: "#cd0000",
      "red-revolt": "#f00000",
      "tender-pink": "#E2A5A5",
      noir: "#0F0F0F"
    },
    fontFamily: {
      bauer: "'Bauer Bodni', serif",
      maison: "'Maison Neue', sans serif",
      nympha: "Nympha, serif",
    },
    fontWeight: {
      bold: 700,
      demi: 600,
      medium: 500,
      normal: 400,
      light: 300,
      xlight: 200,
      thin: 100,
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
