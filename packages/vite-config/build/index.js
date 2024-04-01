import { scanEntries } from "./scan.js";
import { resolve } from "path";
const config = {
    rollupOptions: ({ extraDeps } = {}) => ({
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
    alias: (dirname) => ({
        "@scss": resolve(dirname, "lib/scss"),
        "@lib": resolve(dirname, "lib"),
    }),
    entries: () => ({
        main: "lib/main.ts",
        ...scanEntries("lib/components"),
    }),
};
export default config;
