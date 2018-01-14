/**
 * webpack基础配置
 */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Prepare = require('./prepare');

function getBaseConfig(configName) {
  // sass/scss
  const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
  });
  let scssRule = {
    test: /\.scss$/,
    use: [{
      loader: 'style-loader',
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
  };
  if (configName === 'dist') {
    scssRule = {
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
    };
  }
  return {
    output: {
      library: 'ya',
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
                modules: false,
                targets: {
                  browsers: ['> 1%', 'last 2 versions', 'last 3 iOS versions', 'not ie <= 8', 'Android >= 4.0']
                },
                useBuiltIns: true,
                loose: false
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
      }, scssRule, {
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
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue'
      }
    },
    plugins: [
      new Prepare(),
      extractSass
    ]
  };
}
module.exports = getBaseConfig;
