type BuildOptions = {
    /** Set extra external dependencies
     * It already includes `react` and `react/jsx-runtime`
     */
    extraDeps?: string | string[];
    /** Set extra entries
     * `main` is already set
     */
    extraEntries?: Record<string, string>;
    /** Set entries based on `lib/components` directory structure
     *
     * If `true`, it will scan `lib/components` and add entries based on:
     * 1: **If found a file**, use `filename` without extension as entry name
     * 2: **If found a directory**, use `directoryname` as entry name
     */
    componentsDir?: boolean;
};
/**
 * Vite config
 */
declare const config: {
    /**
     * Set build options:
     * - `lib.entry`
     * - `lib.formats`
     * - `copyPublicDir`
     * - `rollupOptions.external`
     * - `rollupOptions.output.assetFileNames`
     * - `rollupOptions.output.entryFileNames`
     * */
    build: ({ extraDeps, extraEntries, componentsDir }?: BuildOptions) => {
        lib: {
            entry: {
                [key: string]: string;
                main: string;
            };
            formats: ["es"];
        };
        copyPublicDir: boolean;
        rollupOptions: {
            external: string[];
            output: {
                assetFileNames: string;
                entryFileNames: string;
            };
        };
    };
    /**
     * Set resolve options
     *
     * _Currently is only used for aliases_
     * */
    resolve: (dirname: string) => {
        alias: {
            "@scss": string;
            "@lib": string;
        };
    };
};
export default config;
