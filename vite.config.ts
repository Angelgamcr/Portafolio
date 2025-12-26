import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "/Portafolio/", // Cambia por el nombre exacto de tu repo

  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
