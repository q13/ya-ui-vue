/**
 * 运行示例配置
 */

const path = require('path');
const {
  mergeWith,
  isArray
} = require('lodash');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getBaseConfig = require('./webpack-base-config');

const BASE_PATH = path.resolve(__dirname, '..', 'example');
const BASE_SRC_PATH = path.resolve(BASE_PATH, 'src');
const BASE_DIST_PATH = path.resolve(BASE_PATH, 'public');

module.exports = mergeWith({}, getBaseConfig(), {
  entry: path.resolve(BASE_SRC_PATH, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: BASE_DIST_PATH
  },
  module: {
  },
  devServer: {
    contentBase: BASE_DIST_PATH,
    hot: true
  },
  plugins: [
    // 示例页面模板
    new HtmlWebpackPlugin({
      title: 'Example',
      template: path.resolve(BASE_PATH, 'tpl.html')
    }),
    // Hot reload
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}, (target, source) => {
  if (isArray(target)) {
    return target.concat(source);
  }
});
