var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var DashboardPlugin = require('webpack-dashboard/plugin');

var ip = 'localhost';
var config = require('./webpack.base.config.js');
config.ip = ip;

config.devtool = "#eval-source-map";

config.entry = {
  index: [
    'webpack-dev-server/client?http://' + ip + ':3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
};

config.output.publicPath = 'http://' + ip + ':3000' + '/assets/bundles/';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BundleTracker({filename: './webpack-stats-local.json'}),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'BASE_API_URL': JSON.stringify('https://'+ ip +':8000/api/v1/'),
  }}),
  new DashboardPlugin(),
]);

config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }
);

module.exports = config;
