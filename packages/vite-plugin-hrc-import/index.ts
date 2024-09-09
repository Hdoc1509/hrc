import { transformCode } from "./transform.js";
import type { Plugin } from "vite";

// based on https://github.com/LiJiahaoCoder/vitejs-plugin-antd-import
export default function hrcImportPlugin(): Plugin {
  return {
    name: "vite-plugin-hrc-import",
    enforce: "pre",
    transform(code, fileName) {
      return transformCode(code, fileName);
    },
  };
}
