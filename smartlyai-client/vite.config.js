import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default ({ mode }) => {
  // load environment variables prefixed with VITE_ for the current mode
  const env = loadEnv(mode, process.cwd(), "VITE_");

  // VITE_BASE_URL used as Vite `base` (for assets/paths)
  const base = env.VITE_BASE_URL || "/";

  // VITE_API_URL used for proxy target; default to localhost:3000
  const apiUrl = env.VITE_API_URL || "http://localhost:3000";

  return defineConfig({
    base,
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        // proxy /api requests to the API URL from env
        "/api": {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
