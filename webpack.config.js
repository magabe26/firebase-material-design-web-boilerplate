'use strict'

const path = require('path');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist/js'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [

                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('dart-sass'),
                        },
                    },
                ],
            },
        ],
    },
};