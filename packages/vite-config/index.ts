import { glob } from "glob";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "url";

type BuildOptions = {
  /** Set extra external dependencies
   * It already includes `react` and `react/jsx-runtime`
   */
  extraDeps?: string | string[];
  /** Set extra entries
   * `main` is already set
   */
  extraEntries?: Record<string, string>;
};

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
      // Taken and adapted from:
      // https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma#split-up-the-css
      input: Object.fromEntries(
        glob.sync(`${resolve(dirname)}/lib/**/*.{ts,tsx}`).map((file) => [
          // entry point name
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // entry point path
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
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
