const { VueLoaderPlugin } = require("vue-loader");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require("path")

module.exports = {
    entry: {
        "index": "./src/app.ts"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        preserveWhitespace: false,
                        loaders: {
                            css: "vue-style-loader!css-loader"
                        }
                    }
                }]
            },
            {
                test: /\.ts/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                },
                compress: {
                    drop_console: true,
                }
            }
        })]
    },
    mode: "development",
    devtool: ""
}