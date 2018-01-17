/**
 * 自动生成封装代码
 */
const elementUi = require('./generators/element-ui');
const mintUi = require('./generators/mint-ui');
const iview = require('./generators/iview');
const vueBeauty = require('./generators/vue-beauty');

function generateCode() {
  elementUi();
  mintUi();
  iview();
  vueBeauty();
}
module.exports = generateCode;
