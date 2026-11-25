import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    // The design checks keep a Chrome profile and screenshots here; watching them crashes the dev server.
    watch: { ignored: ["**/.taste-skill/**", "**/.impeccable/**", "**/.playwright-mcp/**"] },
  },
});
