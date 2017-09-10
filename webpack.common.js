var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}

// const path = require('path');
// const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: {
//         main: './src/index.js',
//         vendor: [
//             'lodash'
//         ]
//     },
//     plugins: [
//         new CleanWebpackPlugin(['dist']),
//         new HtmlWebpackPlugin({
//             title: 'Caching'
//         }),
//         new webpack.HashedModuleIdsPlugin(),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor'
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'runtime'
//         })
//     ],
//     output: {
//         filename: '[name].[chunkhash].js',
//         path: path.resolve(__dirname, 'dist')
//     }
// }