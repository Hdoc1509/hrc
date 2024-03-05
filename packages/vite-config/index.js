import { scanEntries } from "vite-plugin-lib-inject-css";
import { resolve } from "path";
const config = {
    rollupOptions: ({ clsx, external } = {}) => ({
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
    alias: (dirname) => ({
        "@scss": resolve(dirname, "lib/scss"),
    }),
    entries: (dirname) => ({
        main: "lib/main.ts",
        ...scanEntries(`${dirname}/lib/components`),
    }),
};
export default config;
