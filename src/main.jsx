import React from "react";
import ReactDOM from "react-dom/client";
import { flushSync } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Each page names its own URL on the live domain.
const canonical = document.querySelector('link[rel="canonical"]');
// The About page is also the home page, so both addresses name the home page.
const path = window.location.pathname === "/about" ? "/" : window.location.pathname;
if (canonical) canonical.href = "https://vinhpham.netlify.app" + path;

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the page synchronously so the kit's scripts find a finished DOM.
// Every page is a full load (plain links), so they run once per page, as on a static site.
flushSync(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
});

for (const src of [
  "/assets/system.js",
  "/assets/motion/motion.js",
  "/assets/layout/layout.js",
  "/assets/diagrams/mount.js",
]) {
  const script = document.createElement("script");
  script.type = "module";
  script.src = src;
  document.body.appendChild(script);
}
