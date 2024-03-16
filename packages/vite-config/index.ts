import { scanEntries } from "./scan";
import { resolve } from "path";

type RollupOptions = {
  /** Set extra external dependencies
   * It already includes `react` and `react/jsx-runtime`
   */
  extraDeps?: string | string[];
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
  entries: (dirname: string): { main: string; [key: string]: string } => ({
    main: "lib/main.ts",
    ...scanEntries(`${dirname}/lib/components`),
  }),
};

export default config;
