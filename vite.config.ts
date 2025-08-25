import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@utils": "./src/utils",
      "@components": "./src/components",
      "@pages": "./src/pages",
      "@data": "./src/data",
    },
  },
  plugins: [react()],
});
