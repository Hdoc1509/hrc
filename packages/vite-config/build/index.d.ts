type RollupOptions = {
    /** Set extra external dependencies
     * It already includes `react` and `react/jsx-runtime`
     */
    extraDeps?: string | string[];
};
/**
 * Vite config
 */
export declare const newConfig: {
    /**
     * Set build options
     * - `lib.entry` and `lib.formats`
     * */
    build: ({ extraDeps, extraEntries, }?: {
        /** Set extra external dependencies
         * It already includes `react` and `react/jsx-runtime`
         */
        extraDeps?: string | string[];
        /** Set extra entries
         * `main` is already set
         */
        extraEntries?: Record<string, string>;
    }) => {
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
     * Currently is only used for aliases
     * */
    resolve: (dirname: string) => {
        alias: {
            "@scss": string;
            "@lib": string;
        };
    };
};
declare const config: {
    rollupOptions: ({ extraDeps }?: RollupOptions) => {
        external: string[];
        output: {
            assetFileNames: string;
            entryFileNames: string;
        };
    };
    alias: (dirname: string) => {
        "@scss": string;
        "@lib": string;
    };
    entries: (extraEntries?: Record<string, string>) => {
        [key: string]: string;
        main: string;
    };
};
export default config;
