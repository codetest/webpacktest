const { VueLoaderPlugin } = require("vue-loader");
const path = require("path")

module.exports = {
    entry: {
        "server": "./server.ts"
    },
    resolve: {
        extensions: [".ts"]
    },
    output: {
        libraryTarget: 'commonjs',
        filename: 'server.js',
        path: path.resolve(__dirname, './dist')
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.ts/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: "development"
}