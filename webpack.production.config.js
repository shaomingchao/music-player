'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
console.log(ROOT_PATH)
var basePath=path.resolve(ROOT_PATH,'src');

module.exports = {
    // The entry file. All your app roots fromn here.
    entry: [
        path.resolve(basePath, 'app/index.js')
    ],
    // Where you want the output to go
    output: {
        path: path.resolve(ROOT_PATH, './dist/'),
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    plugins: [
        // webpack gives your modules and chunks ids to identify them. Webpack can vary the
        // distribution of the ids to get the smallest id length for often used ids with
        // this plugin
        new webpack.optimize.OccurrenceOrderPlugin(),

        // handles creating an index.html file and injecting assets. necessary because assets
        // change name because the hash part changes. We want hash name changes to bust cache
        // on client browsers.
        new HtmlWebpackPlugin({
            template: path.resolve(basePath,'index.tpl.html'),
            inject: 'body',
            filename: './index.html'
        }),
        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

    module: {
        loaders: [
            {
              test: /\.js|jsx$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    resolve:{
        extensions:['.js','.json','.scss','.jsx','.css']
    }
};
