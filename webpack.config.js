const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // assetModuleFilename: "assets/images/[name].[contenthash].[ext]",
        clean: true,
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/styles')
        },

    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },

            {
              test: /\.(s[ac]ss|css)$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource"
            }
        ],
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        })
    ]
}