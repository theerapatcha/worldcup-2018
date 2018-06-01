const path = require('path');
const webpack = require('webpack');
const merge = require('@ersinfotech/merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackConfig, {
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: ["style-loader", "css-loader", "sass-loader"],
      }),
      exclude: /components/,
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[hash:8].js',
    chunkFilename: '[name]_[chunkhash:8].js',
    publicPath: './'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin({
      filename: '[name]_[contenthash:8].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.prod.html'),
      favicon: path.join(__dirname, 'src/favicon.ico'),
      inject: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'vendor',
        'react',
        'lodash',
        'common'
      ],
      minChunks: Infinity,
    }),
  ],
});
