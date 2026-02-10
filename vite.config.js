import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  server: {
    hmr: false,
  },
  esbuild: {
    jsx: "automatic",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
