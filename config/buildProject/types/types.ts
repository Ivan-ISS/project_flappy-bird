export interface IBuildPaths {
    entry: string;
    html: string;
    output: string;
}

export type TBuildMode = 'production' | 'development';

export interface IBuildOptions {
    port: number;
    paths: IBuildPaths;
    mode: TBuildMode;
}
