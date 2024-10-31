import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/types';

export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[contenthash][ext]',
        },
    };

    const audioLoader = {
        test: /\.(wav)$/i,
        use: {
            loader: 'file-loader',
            options: {
                name: 'audio/[name].[ext]',
            },
        },
    };

    const scssLoaderGlobal = {
        test: /\.scss$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /src\/styles\/modules/,
    };

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[local]--[hash:base64:5]' : '[hash:base64:8]',
            },
        },
    };

    const scssLoaderModule = {
        test: /\.scss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            'sass-loader',
        ],
        include: /src\/styles\/modules/,
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: isDev && true,
                },
            },
        ],
        exclude: /node_modules/,
    };

    return [audioLoader, assetLoader, scssLoaderGlobal, scssLoaderModule, tsLoader];
}
