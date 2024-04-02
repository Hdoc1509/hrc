import { scanEntries } from "./scan.js";
import { resolve } from "path";

type RollupOptions = {
  /** Set extra external dependencies
   * It already includes `react` and `react/jsx-runtime`
   */
  extraDeps?: string | string[];
};

/**
 * Vite config
 */
export const newConfig = {
  /**
   * Set build options
   * - `lib.entry` and `lib.formats`
   * */
  build: ({
    extraDeps,
    extraEntries,
  }: {
    /** Set extra external dependencies
     * It already includes `react` and `react/jsx-runtime`
     */
    extraDeps?: string | string[];
    /** Set extra entries
     * `main` is already set
     */
    extraEntries?: Record<string, string>;
  } = {}) => ({
    lib: {
      entry: {
        main: "lib/main.ts",
        ...extraEntries,
        ...scanEntries("lib/components"),
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
      output: {
        assetFileNames: "css/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  }),
  /**
   * Set resolve options
   * Currently is only used for aliases
   * */
  resolve: (dirname: string) => ({
    alias: {
      "@scss": resolve(dirname, "lib/scss"),
      "@lib": resolve(dirname, "lib"),
    },
  }),
};

const config = {
  rollupOptions: ({ extraDeps }: RollupOptions = {}) => ({
    external: [
      "react",
      "react/jsx-runtime",
      ...(extraDeps ? [extraDeps].flat() : []),
    ],
    output: {
      assetFileNames: "css/[name][extname]",
      entryFileNames: "[name].js",
    },
  }),
  alias: (dirname: string) => ({
    "@scss": resolve(dirname, "lib/scss"),
    "@lib": resolve(dirname, "lib"),
  }),
  entries: (
    extraEntries: Record<string, string> = {},
  ): { main: string; [key: string]: string } => ({
    main: "lib/main.ts",
      ...extraEntries,
    ...scanEntries("lib/components"),
  }),
};

export default config;
