/**
 * 运行示例配置
 */

const path = require('path');
const {
  mergeWith,
  isArray
} = require('lodash');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    },
    lodash: { // 所有第三方库都走外部依赖
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  devServer: {
    contentBase: BASE_DIST_PATH,
    host: '0.0.0.0',
    hot: true
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
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
