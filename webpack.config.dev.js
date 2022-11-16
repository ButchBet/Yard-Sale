const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: "/",
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            "@images": path.resolve(__dirname, "src/assets/images"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
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
                test: /\.(png|svg|jp?g|gif)$/i,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 10000
                      }
                    }
                ]
            }
        ],
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),

        new miniCssExtractPlugin({
          filename: '[name].css',
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        historyApiFallback: true,
        port: 3006,
        open: true,
    } 
}