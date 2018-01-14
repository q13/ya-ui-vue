/**
 * 依赖包含版，打包成一个文件对外输出
 * vue不会被包含
 */
const path = require('path');
const { mergeWith, isArray } = require('lodash');
// const webpack = require('webpack');

const getBaseConfig = require('./webpack-base-config');

const BASE_SRC_PATH = path.resolve(__dirname, '..', 'ui');
const BASE_DIST_PATH = path.resolve(__dirname, '..', 'dist');

module.exports = mergeWith({}, getBaseConfig('dist'), {
  entry: path.resolve(BASE_SRC_PATH, 'index.js'),
  output: {
    filename: 'index.js',
    path: BASE_DIST_PATH
  },
  module: {
  },
  plugins: [
  ]
}, (target, source) => {
  if (isArray(target)) {
    return target.concat(source);
  }
});
