const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app-bundle.js'
    },
    
    target: 'node', 
    externals: [nodeExternals()],
    
    module: {
        rules:[
            {
                test: '/\.(js|jsx)$/',
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: '/\.pug$/',
                use: 'pug-loader'
            },
            {
                test: '/\.css$/',
                use: ['styles-loader', 'css-loader']
            }
        ]
    },
/*
    plugins: [
        
        new HtmlWebpackPlugin({
            template: 'src/views/_layout.pug',
            filename: '_layout.pug'
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/app.pug',
            filename: 'app.pug'
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/home.pug',
            filename: 'home.pug'
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/login.pug',
            filename: 'login.pug'
        }),

        new HtmlWebpackPugPlugin()
    ]*/
}