/**
 * 打包前准备，调用各组件库generator
 * webpack插件形式实现
 */
const generator = require('./generator');

function Prepare() {
};

Prepare.prototype.apply = function (compiler) {
  const handleRun = function (compiler, callback) {
    generator();
    callback();
  };
  // 在run前执行，watch模式下不执行
  compiler.plugin('before-run', handleRun);
};

module.exports = Prepare;
