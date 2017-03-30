var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var path = require('path');

var plugins = [
  new CleanPlugin('./webpack'),
  new AureliaWebpackPlugin({
    src: path.resolve('./aurelia/')
  }),
  new ProvidePlugin({
    Promise: 'bluebird'
  })
];

module.exports = {
  entry:  {
    main: ['./aurelia/main']
  },
  output: {
    path: './webpack',
    filename: "[name].bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test:    /\.js$/,
        loader:  'babel',
        include: __dirname + '/aurelia/',
        exclude: /node_modules/,
        query: {
          presets: ['es2015-loose', 'stage-1'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test:   /\.html$/,
        loader: 'html'
      }
    ],
  }
};
