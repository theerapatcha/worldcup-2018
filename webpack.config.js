const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [path.join(__dirname, 'src/index')],
    vendor: [
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux',
      'bootstrap',
      'jquery'
    ],
    react: [
      'react',
      'react-dom'
    ],
    lodash: 'lodash',
    common: [
      'bluebird',
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      actions: path.join(__dirname, 'src', 'actions'),
      reducers: path.join(__dirname, 'src', 'reducers'),
      datasource: path.join(__dirname, 'src', 'datasource')
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader?importLoaders=1'],
      //include: /components/,
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
      //include: /components/,
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)/i,
      loader: 'file-loader?name=img_[hash:8].[ext]',
    }, {
      test: /\.(ttf|eot|woff|woff2)/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
