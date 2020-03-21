const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        "app": "./main_server.ts"
    },
    target: 'node',
    externals: [nodeExternals()],
    output: {
        libraryTarget: 'commonjs',
        filename: 'main_server.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['js', 'ts']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
        ]
    }
}