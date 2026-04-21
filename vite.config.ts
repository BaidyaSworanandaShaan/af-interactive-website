import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Root deploys should use '/'. Override with VITE_BASE_PATH for subpath hosting.
  base: process.env.VITE_BASE_PATH || "/",

  
});
