// https://vitejs.dev/config/
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import config from "@hrc/vite-config";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  build: config.build(__dirname, { extraDeps: "clsx" }),
  resolve: config.resolve(__dirname),
});
