import webpack from 'webpack';
import { buildDevSrver } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildStats } from './buildStats';
import { IBuildOptions } from './types/types';

export function buildWebpack(options: IBuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const isDev = mode === 'development';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'source-map',
        devServer: isDev ? buildDevSrver(options) : undefined,
        stats: buildStats(),
    };
}
