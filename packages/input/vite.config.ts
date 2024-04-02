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
    dts({
      include: ["lib"],
      exclude: ["lib/components/Icons.tsx", "lib/components/Label/index.tsx"],
    }),
  ],
  build: newConfig.build({ extraDeps: "clsx", componentsDir: true }),
  resolve: newConfig.resolve(__dirname),
});
