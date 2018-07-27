/**
 * Ya compilation
 */
const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');
const { mergeWith, isArray } = require('lodash');

const getBaseConfig = require('./webpack-base-config');

const SRC_PATH = path.resolve(__dirname, '..', 'src/ya');
const DIST_PATH = path.resolve(__dirname, '..', 'ya');

const entries = glob.sync('**/*.js', {
  cwd: SRC_PATH
}).reduce((pv, cv) => {
  console.log(path.relative(SRC_PATH, cv));
  let relPaths = path.relative(SRC_PATH, cv).split(path.sep);
  relPaths = relPaths.filter((item) => {
    return item !== '..';
  });
  relPaths = relPaths.join('/');
  relPaths = relPaths.slice(0, -3);
  console.log(relPaths);
  return Object.assign(pv, {
    // [path.basename(cv, '.js')]: path.resolve(SRC_PATH, cv)
    [relPaths]: path.resolve(SRC_PATH, cv)
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
  ].concat({
    [`rv/t`]: `ya-ui-vue/rv/t`
  }),
  plugins: [
  ]
}, (target, source) => {
  if (isArray(target)) {
    return target.concat(source);
  }
});
