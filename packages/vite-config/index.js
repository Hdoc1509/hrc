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
};
export default config;
