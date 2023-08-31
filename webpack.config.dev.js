const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 1234,
    },
    optimization: {
        runtimeChunk: 'single',
    },
})
