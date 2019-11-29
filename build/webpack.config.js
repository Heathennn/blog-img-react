const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    devServer: {
        hot: true,
        contentBase: './dist',
        port: '7564'
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'assets': resolve(__dirname, 'src', 'assets'),
            'components': resolve(__dirname, 'src', 'components')
        },
        extensions: ['.js', '.jsx', '.less', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: resolve(__dirname, 'dist/index.html')
        })
    ]
};
