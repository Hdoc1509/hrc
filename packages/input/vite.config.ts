// https://vitejs.dev/config/
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import config from "@hrc/vite-config";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ["lib"],
      exclude: ["lib/components/Icons.tsx", "lib/components/Label/index.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: config.entries(),
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: config.rollupOptions({ extraDeps: "clsx" }),
  },
  resolve: {
    alias: config.alias(__dirname),
  },
});
