/**
 * element-ui 代码生成器
 */
const path = require('path');
const fsExtra = require('fs-extra');
const fs = require('fs');
const glob = require('glob');
const { logger } = require('../utils');

const REF_PATH = path.resolve(__dirname, '..', '..', 'node_modules', 'element-ui');
const LIB_PATH = path.resolve(__dirname, '../../ui/element-ui');
const SRC_PATH = path.resolve(LIB_PATH, 'src');
/**
 * 根据组件名生成js模板
 * @param {string} name 组件名
 */
function getJsTemplate(name) {
  return {
    index: `
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import Ctor from 'element-ui/lib/${name}';
import {
  replaceElementUiComponentPrefix
} from '../../../../../src/deps/utils';
import shim from './shim';

const NewCtor = shim(Ctor); // 加垫片
// 替换组件前缀
replaceElementUiComponentPrefix(NewCtor);
// 自动注册组件
Vue.component(NewCtor.name, NewCtor);

export default NewCtor;
`,
    styling: `
/**
 * Button proxy with default style
 * by 13
 */
import '../../themes/default/base.scss';
import '../../themes/default/${name}.scss';

export * from './index';
`,
    shim: `
/**
 * 垫片侵入
 * by 13
 */
function shim(Ctor) {
  // 扩展
  return Ctor;
}
export default shim;
`
  };
};

function generateCode() {
  // copy default theme
  fsExtra.copySync(path.resolve(REF_PATH, 'packages/theme-chalk/src'), path.resolve(SRC_PATH, 'themes/default'));
  logger.info('element-ui: themes copy done.');
  // compiler
  const files = glob.sync('*.js', {
    cwd: path.resolve(REF_PATH, 'lib')
  }).map((name) => {
    return path.basename(name, '.js');
  });
  // 创建js文件
  files.forEach((name) => {
    const tpls = getJsTemplate(name);
    const cptPath = path.resolve(SRC_PATH, 'components', name);
    Object.keys(tpls).forEach((fileName) => {
      const filePath = path.resolve(cptPath, fileName + '.js');
      if (!(fileName === 'shim' && fs.existsSync(filePath))) { // shim文件存在不覆盖
        fsExtra.outputFileSync(filePath, tpls[fileName]);
      }
    });
    logger.info('element-ui: ' + name + ' created.');
  });
  logger.info('element-ui: component create done.');
}

module.exports = generateCode;
