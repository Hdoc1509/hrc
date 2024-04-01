type RollupOptions = {
    /** Set extra external dependencies
     * It already includes `react` and `react/jsx-runtime`
     */
    extraDeps?: string | string[];
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
    entries: () => {
        [key: string]: string;
        main: string;
    };
};
export default config;
