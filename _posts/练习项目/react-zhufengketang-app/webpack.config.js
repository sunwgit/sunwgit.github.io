const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'build.js',
        path: path.resolve('dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        alias: { src: path.join(__dirname, './src/') }
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        hot: true
    },
    module: {
        rules: [
            { test: /\.js/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css/, use: ['style-loader', 'css-loder'] },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            { test: /.(jpg|png|gif)$/, use: 'url-loader?limit=8000' }
        ]
    }
};
