const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        "app": "./main.ts"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
