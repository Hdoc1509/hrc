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
    entries: (dirname: string) => {
        [key: string]: string;
        main: string;
    };
};
export default config;
