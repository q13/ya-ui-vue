/**
 * react to vue transform
 */
const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');
const { mergeWith, isArray } = require('lodash');

const getBaseConfig = require('./webpack-base-config');

const SRC_PATH = path.resolve(__dirname, '..', 'src/rv');
const DIST_PATH = path.resolve(__dirname, '..', 'rv');

const entries = glob.sync('*.js', {
  cwd: SRC_PATH
}).reduce((pv, cv) => {
  return Object.assign(pv, {
    [path.basename(cv, '.js')]: path.resolve(SRC_PATH, cv)
  });
}, {});

console.log(entries);

module.exports = mergeWith({}, getBaseConfig('lib'), {
  entry: entries,
  output: {
    filename: '[name].js',
    path: DIST_PATH,
    library: '[name]'
  },
  module: {
    rules: []
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
  ]
}, (target, source) => {
  if (isArray(target)) {
    return target.concat(source);
  }
});
