import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";

import playformCompress from "@playform/compress";
import postcss from "@astrojs/postcss";
import autoprefixer from "autoprefixer";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), playformCompress(), postcss()],
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
