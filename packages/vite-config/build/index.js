import { scanEntries } from "./scan.js";
import { resolve } from "path";
// TODO: Export newConfig as .mjs file
//   Follow https://github.com/vitejs/vite/issues/5370#issuecomment-1950402860
export const newConfig = {
    build: ({ extraDeps, extraEntries, } = {}) => ({
        lib: {
            entry: {
                main: "lib/main.ts",
                ...extraEntries,
                ...scanEntries("lib/components"),
            },
            formats: ["es"],
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
    resolve: (dirname) => ({
        alias: {
            "@scss": resolve(dirname, "lib/scss"),
            "@lib": resolve(dirname, "lib"),
        },
    }),
};
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
    entries: (extraEntries = {}) => ({
        main: "lib/main.ts",
        ...extraEntries,
        ...scanEntries("lib/components"),
    }),
};
export default config;
