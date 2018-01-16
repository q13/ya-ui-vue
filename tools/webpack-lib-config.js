/**
 * 主题打包
 */

const path = require('path');
const { mergeWith, isArray } = require('lodash');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

// 获取库独特配置
const configs = {
  'element-ui': require('./configs/element-ui')
};

const {
  logger
} = require('./utils');

const getBaseConfig = require('./webpack-base-config');

const ROOT_PATH = path.resolve(__dirname, '..');
const UI_PATH = path.resolve(__dirname, '..', 'ui');
const DEPS_PATH = path.resolve(__dirname, '../src/deps');

/**
 * 库打包
 */
function build() {
  // 打包/src/deps下文件到根目录下deps
  const depNames = glob.sync('*.js', {
    cwd: DEPS_PATH
  }).map((name) => {
    return path.basename(name, '.js');
  });
  const depEntries = depNames.reduce((pv, cv) => {
    return Object.assign(pv, {
      [cv]: path.resolve(DEPS_PATH, `${cv}.js`)
    });
  }, {});
  const compiler = webpack(mergeWith({}, getBaseConfig('lib'), {
    entry: depEntries,
    output: {
      filename: '[name].js',
      path: path.resolve(ROOT_PATH, 'deps'),
      // libraryTarget: 'amd'
      // library: `ya_deps_[name]`
      library: `ya_deps_[name]`
    },
    externals: [
      nodeExternals()
    ],
    plugins: [new CleanWebpackPlugin(['deps'], {
      root: ROOT_PATH
    })]
  }, (target, source) => {
    if (isArray(target)) {
      return target.concat(source);
    }
  }));
  compiler.run((err, stats) => {
    if (err) {
      logger.error(err);
    } else {
      logger.info('deps build.');
    }
  });

  // 获取所有libs名
  const libNames = glob.sync('*/', {
    cwd: UI_PATH
  }).map((value) => {
    return value.slice(0, -1);
  });
  // 挨个组件库打包
  libNames.forEach((libName) => {
    const libPath = path.resolve(UI_PATH, libName);
    const srcPath = path.resolve(libPath, 'src');
    // 主题打包
    const themeNames = glob.sync('*/', {
      cwd: path.resolve(srcPath, 'themes')
    }).map((value) => {
      return value.slice(0, -1);
    });

    // const themeEntries = themeNames.reduce((pv, cv) => {
    //   return Object.assign(pv, {
    //     [cv]: path.resolve(srcPath, 'themes', cv, 'index.js')
    //   });
    // }, {});
    // console.log(themeEntries);
    themeNames.forEach((themeName) => {
      const extractSass = new ExtractTextPlugin({
        filename: 'index.css'
      });
      const entry = path.resolve(srcPath, 'themes', themeName, 'index.js');
      // run webpack
      const compiler = webpack(mergeWith({}, getBaseConfig('lib'), {
        entry,
        output: {
          filename: '[name].js',
          path: path.resolve(libPath, 'themes', themeName)
        },
        module: {
          rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
              use: [{
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }],
              fallback: 'style-loader'
            })
          }]
        },
        plugins: [extractSass]
      }, (target, source) => {
        if (isArray(target)) {
          return target.concat(source);
        }
      }));

      compiler.run((err, stats) => {
        if (err) {
          logger.error(err);
        } else {
          logger.info(libName + ': ' + themeName + ' theme created.');
        }
      });
    });
    // 组件打包
    const componentNames = glob.sync('*/', {
      cwd: path.resolve(srcPath, 'components')
    }).map((value) => {
      return value.slice(0, -1);
    });
    const componentEntries = componentNames.reduce((pv, cv) => {
      return Object.assign(pv, {
        [cv]: path.resolve(srcPath, 'components', cv, 'index.js')
      });
    }, {});
    const compiler = webpack(mergeWith({}, getBaseConfig('lib'), {
      entry: componentEntries,
      output: {
        filename: '[name].js',
        path: path.resolve(libPath, 'components'),
        library: `ya_${libName}_[name]` // TODO:// component name会互相覆盖
      },
      // externals: [
      //   nodeExternals()
      // ],
      externals: [
        nodeExternals()
      ].concat(depNames.map((depName) => {
        return {
          [`deps/${depName}`]: `ya-ui-vue/deps/${depName}`
        };
      })),
      plugins: [new CleanWebpackPlugin(['components'], {
        root: libPath
      })]
    }, configs[libName].lib, (target, source) => {
      if (isArray(target)) {
        return target.concat(source);
      }
    }));
    // console.log(mergeWith({}, getBaseConfig('lib'), {
    //   entry: componentEntries,
    //   output: {
    //     filename: '[name].js',
    //     path: path.resolve(libPath, 'components')
    //   },
    //   externals: [
    //     NodeExternals()
    //   ],
    //   plugins: [new CleanWebpackPlugin(['components'], {
    //     root: libPath
    //   })]
    // }, configs[libName].lib, (target, source) => {
    //   if (isArray(target)) {
    //     return target.concat(source);
    //   }
    // }));
    compiler.run((err, stats) => {
      if (err) {
        logger.error(err);
      } else {
        logger.info(libName + ': components created.');
      }
    });
  });
}

module.exports = build;
