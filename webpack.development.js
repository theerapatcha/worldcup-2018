const path = require('path');
const webpack = require('webpack');
const merge = require('@ersinfotech/merge');
const webpackConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackConfig, {
  devtool: '#cheap-module-source-map',
  entry: {
    app: ['webpack-hot-middleware/client'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[hash:8].js',
    chunkFilename: '[name]_[chunkhash:8].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      //favicon: path.join(__dirname, 'src/favicon.ico'),
      inject: false,
    }),
  ],
});
