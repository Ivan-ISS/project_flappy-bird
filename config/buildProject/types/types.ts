export interface IBuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
    public: string;
}

export type TBuildMode = 'production' | 'development';

export interface IBuildOptions {
    port: number;
    paths: IBuildPaths;
    mode: TBuildMode;
}
