const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            }, 
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader',  // compiles Less to CSS
                        options: { javascriptEnabled: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            maxInitialRequests: 6,
            cacheGroups: {
                commons: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 1,
                    minSize: 50000,
                    maxSize: 200000,
                }
            }
        }
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist/"),
        port: 3000,
        // publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
