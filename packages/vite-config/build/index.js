import { scanEntries } from "./scan.js";
import { resolve } from "path";
/**
 * Vite config
 */
export const newConfig = {
    /**
     * Set build options:
     * - `lib.entry`
     * - `lib.formats`
     * - `copyPublicDir`
     * - `rollupOptions.external`
     * - `rollupOptions.output.assetFileNames`
     * - `rollupOptions.output.entryFileNames`
     * */
    build: ({ extraDeps, extraEntries, componentsDir } = {}) => ({
        lib: {
            entry: {
                main: "lib/main.ts",
                ...extraEntries,
                ...(componentsDir ? scanEntries("lib/components") : {}),
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
    /**
     * Set resolve options
     *
     * _Currently is only used for aliases_
     * */
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
