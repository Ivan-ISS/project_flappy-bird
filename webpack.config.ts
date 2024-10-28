import path from 'path';
import webpack from 'webpack';
import { TBuildMode, IBuildPaths } from './config/buildProject/types/types';

import { buildWebpack } from './config/buildProject/buildWebpack';

interface IEnvVariables {
    mode: TBuildMode;
    port: number;
}

export default (env: IEnvVariables) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html: path.resolve(__dirname, 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
    });
    return config;
};
