/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @format */

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/Index.js',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: { crypto: false }
    },

    devServer: { contentBase: path.join(__dirname, 'src') },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
      },
    module: {
        rules: [
            // js
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            // files loader
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'src/assets/media/[name].[ext]',
                    esModule: false
                }
            },
        ]
    },
    devServer: {
        historyApiFallback: true
        // host:'http://localhost:8080/#/login'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css",
            chunkFilename: "index.css",
          }),
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })
    ]
};
