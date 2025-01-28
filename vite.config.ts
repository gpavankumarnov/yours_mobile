import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/reference-data": {
        target: "http://localhost:8081",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
