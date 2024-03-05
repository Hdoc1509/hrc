type RollupOptions = {
    clsx?: boolean;
    external?: string[];
};
declare const config: {
    rollupOptions: ({ clsx, external }?: RollupOptions) => {
        external: string[];
        output: {
            assetFileNames: string;
            entryFileNames: string;
        };
    };
    alias: (dirname: string) => {
        "@scss": string;
    };
};
export default config;
