/**
 * 自动生成封装代码
 */
const elementUi = require('./generators/element-ui');
const mintUi = require('./generators/mint-ui');

function generateCode() {
  elementUi();
  mintUi();
}
module.exports = generateCode;
