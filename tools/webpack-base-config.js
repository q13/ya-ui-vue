/**
 * webpack基础配置
 */

const path = require('path');
const Prepare = require('./prepare');

function getBaseConfig(configName) {
  return {
    output: {
      // library: 'ya',
      libraryTarget: 'umd'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                modules: false, // 设置ES6 模块转译的模块格式 默认是 commonjs
                targets: {
                  browsers: ['> 1%', 'last 2 versions', 'last 3 iOS versions', 'not ie <= 8', 'Android >= 4.0']
                },
                useBuiltIns: true, // 引入babel-polyfill会根据env设定去自动shim不支持的特性
                loose: false // normal方式，参考 https://www.w3ctech.com/topic/1708
              }],
              'stage-0'
            ]
          }
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }]
    },
    devtool: 'source-map',
    // externals: ['vue'],
    resolve: {
      alias: {
        'deps': path.resolve(__dirname, '../src/deps'), // 依赖目录
        'ya-ui-vue': path.resolve(__dirname, '..') // 根目录
      }
    },
    plugins: (configName === 'dist' ? [new Prepare()] : []).concat([
    ])
  };
}
module.exports = getBaseConfig;