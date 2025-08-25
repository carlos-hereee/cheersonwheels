import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/utils/app"),
      "@context": path.resolve(__dirname, "./src/utils/context"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@actions": path.resolve(__dirname, "./src/@types/actions"),
      "@hooks": path.resolve(__dirname, "./src/utils/hooks"),
      "@formatters": path.resolve(__dirname, "./src/utils/formatters"),
      "@router": path.resolve(__dirname, "./src/utils/router"),
      "@axios": path.resolve(__dirname, "./src/utils/axios"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@types": path.resolve(__dirname, "./src/@types"),
    },
  },
  plugins: [react()],
});
