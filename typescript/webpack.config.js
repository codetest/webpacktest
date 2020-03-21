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
    }
}
