import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import path from 'path';

type TMode = 'production' | 'development';

interface IEnvVariables {
    mode: TMode;
    port: number;
}

export default (env: IEnvVariables) => {
    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
            isDev && new webpack.ProgressPlugin(),
            isProd &&
                new MiniCssExtractPlugin({
                    filename: 'css/[name].[contenthash:8].css',
                    chunkFilename: 'css/[name].[contenthash:8].css',
                }),
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev && 'source-map',
        devServer: isDev
            ? ({
                  port: env.port ?? 3000,
                  open: true,
              } as DevServerConfiguration)
            : undefined,
        stats: {
            children: true,
            modulesSpace: 0,
        },
    };
    return config;
};
