const path = require('path');

module.exports = {
    entry: '../src/index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: '/\.css$/i',
                use: ['style-loader', 'css-loader'],
            },
            {
                test: '/\.(png|svg|jpg|jpeg|gif)$/i',
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devtool: 'inline-source-map',
}