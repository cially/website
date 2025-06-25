// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), starlight({
    title: "Cially",
    favicon: "logo.svg",
    customCss: [
        './src/styles/docs.css',
      ],
  })],
});