const path = require('path');

module.exports = {
    "mode": 'production',
    "entry": {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    "output": {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                tests: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test:/\.(?:ico|gif|png|jp?g|svg)$/i,
                type: 'assets/resource',
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ]
            },
        ]
    },
    devtool: 'inline-source-map',
}