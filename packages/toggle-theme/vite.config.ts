// https://vitejs.dev/config/
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { newConfig } from "@hrc/vite-config";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: "lib/{main.ts,ThemeButton.tsx}" }),
  ],
  build: newConfig.build({
    extraEntries: { "load-theme": "lib/load-theme.ts" },
  }),
});
