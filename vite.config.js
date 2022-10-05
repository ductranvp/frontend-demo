import { config } from 'dotenv'
config({ path: process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : '.env' });

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.APP_PORT
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  envPrefix: 'APP_'
});