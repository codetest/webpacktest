module.exports = {
    entry: {
        "bundle": "./main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "babel-loader"
                ]
            }
        ]
    },
    devtool: "source-map"
}