import { scanEntries } from "vite-plugin-lib-inject-css";
import { resolve } from "path";

type RollupOptions = {
  clsx?: boolean;
  external?: string[];
};

const config = {
  rollupOptions: ({ clsx, external }: RollupOptions = {}) => ({
    external: [
      "react",
      "react/jsx-runtime",
      ...(clsx ? ["clsx"] : []),
      ...(external || []),
    ],
    output: {
      assetFileNames: "css/[name][extname]",
      entryFileNames: "[name].js",
    },
  }),
  alias: (dirname: string) => ({
    "@scss": resolve(dirname, "lib/scss"),
  }),
  entries: (dirname: string): { main: string; [key: string]: string } => ({
    main: "lib/main.ts",
    ...scanEntries(`${dirname}/lib/components`),
  }),
};

export default config;
