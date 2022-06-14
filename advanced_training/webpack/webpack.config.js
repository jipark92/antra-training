const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env, options) => {

    return {
        target: "web",
        entry: "./src/index.js",
        output: {
            filename: "main.js",
            path: path.join(__dirname, "/dist"),
        },
        module: {
            rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                },
                },
            },
            ],
        },
        optimization: {
            runtimeChunk: {
            name: "runtime",
            },
            splitChunks: {
            chunks: "all",
            cacheGroups: {
                defaultVendors: {
                name: "vendors",
                test: /[\\/]node_modules[\\/]/,
                },
            },
            name: false,
            },
        },
        performance: {
            hints: false,
        },
        plugins: [
            new HtmlWebpackPlugin({
            minify: {
                    collapseWhitespace: true,
                    keepClosingSlash: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                    },
            template: "./src/index.html",
            }),
        ],
        stats: {
            assetsSort: "!size",
            colors: true,
            entrypoints: false,
            errors: true,
            errorDetails: true,
            groupAssetsByChunk: false,
            groupAssetsByExtension: false,
            groupAssetsByInfo: false,
            groupAssetsByPath: false,
            modules: false,
            relatedAssets: true,
            timings: false,
            version: false,
        },
        devServer: {
            contentBase: "dist",
            historyApiFallback: true,
            host: "0.0.0.0",
            hot: true,
            port: 8080,
        },
    }
}