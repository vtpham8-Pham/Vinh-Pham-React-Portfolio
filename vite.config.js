import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev only. Every page is a full load (plain links), and on Back/Forward Chrome reuses its cached copies
// of the page's modules without asking the server, so an edited page came back as its old version.
// no-store keeps the dev server's files out of that cache; the pre-bundled deps (immutable) are left alone.
function noStoreInDev() {
  return {
    name: "no-store-in-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const setHeader = res.setHeader.bind(res);
        res.setHeader = (name, value) => {
          if (String(name).toLowerCase() === "cache-control" && !String(value).includes("immutable")) {
            return setHeader(name, "no-store");
          }
          return setHeader(name, value);
        };
        setHeader("Cache-Control", "no-store");
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [noStoreInDev(), react()],
  base: "/",
  server: {
    // The design checks keep a Chrome profile and screenshots here; watching them crashes the dev server.
    watch: { ignored: ["**/.taste-skill/**", "**/.impeccable/**", "**/.playwright-mcp/**"] },
  },
});
