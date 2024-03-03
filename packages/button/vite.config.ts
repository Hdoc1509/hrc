// https://vitejs.dev/config/
import { defineConfig } from "vite";
import { libInjectCss, scanEntries } from "vite-plugin-lib-inject-css";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  build: {
    lib: {
      entry: { main: "lib/main.ts", ...scanEntries("lib/components") },
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "clsx"],
    },
  },
  resolve: {
    alias: {
      "@scss": resolve(__dirname, "./lib/scss"),
    },
  },
});
