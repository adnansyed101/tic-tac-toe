const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Tic Tac Toe',
            filename: 'index.html',
            template:'src/template.html'
        })
    ]

};