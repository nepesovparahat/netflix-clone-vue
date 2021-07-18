import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["swiper/vue"],
  },
  plugins: [vue()],
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/scss/main.scss';`,
      },
    },
  },
});
