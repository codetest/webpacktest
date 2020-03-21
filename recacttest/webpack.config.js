const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        "main": "./main.tsx"
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: ["ts-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        })
    ]
}