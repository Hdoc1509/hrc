import { resolve } from "path";
import { createInputEntries } from "./scan.js";
import type { BuildOptions } from "./types.js";

/**
 * Vite config
 */
const config = {
  /**
   * Set build options:
   * - `lib.entry`
   * - `lib.formats`
   * - `copyPublicDir`
   * - `rollupOptions.external`
   * - `rollupOptions.input`
   * - `rollupOptions.output.assetFileNames`
   * - `rollupOptions.output.entryFileNames`
   * */
  build: (dirname: string, { extraDeps, extraEntries }: BuildOptions = {}) => ({
    lib: {
      entry: {
        main: "lib/main.ts",
        ...extraEntries,
      } as { main: string; [key: string]: string },
      formats: ["es"] as ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        ...(extraDeps ? [extraDeps].flat() : []),
      ],
      input: createInputEntries(dirname),
      output: {
        assetFileNames: "css/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  }),
  /**
   * Set resolve options
   *
   * _Currently is only used for aliases_
   * */
  resolve: (dirname: string) => ({
    alias: {
      "@scss": resolve(dirname, "lib/scss"),
      "@lib": resolve(dirname, "lib"),
    },
  }),
};

export default config;
