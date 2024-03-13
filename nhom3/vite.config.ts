import { defineConfig } from "vite";
// import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./build",
  },
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  server: {
    port: 3000,
  },
});
