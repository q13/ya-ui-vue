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
function getCptTemplate(name) {
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
} from 'deps/utils';
import shim from './shim';

const NewCtor = shim(Ctor); // 加垫片
// 替换组件前缀
replaceElementUiComponentPrefix(NewCtor);
// 自动注册组件
Vue.component(NewCtor.globalName, NewCtor);

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

/**
 * 获取theme模板文件
 */
function getThemeTemplate() {
  return {
    theme: `
/**
 * 主题打包入口
 * by 13
 */
import './index.scss';
`,
    style: `
/**
 * 组件样式化索引
 * by 13
 */
`
  };
}
/**
 * 获取完整包引用模板
 */
function getPackageTemplate() { 
  return `
/**
 * 完整引用
 * by 13
 */ 
import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
export default ElementUI;
`;
}

function generateCode() {
  // copy default theme
  fsExtra.copySync(path.resolve(REF_PATH, 'packages/theme-chalk/src'), path.resolve(SRC_PATH, 'themes/default'));
  logger.info('element-ui: themes copy done.');
  // 生成theme索引文件
  const themeDirs = glob.sync('*/', {
    cwd: path.resolve(SRC_PATH, 'themes'),
    absolute: true // 获取完整路径
  });
  // 生成索引和打包入口文件
  const themeTpls = getThemeTemplate();
  themeDirs.forEach((dirPath) => {
    let filePath = path.resolve(dirPath, 'index.js');
    fsExtra.outputFileSync(filePath, themeTpls['theme']);
    filePath = path.resolve(dirPath, 'index.scss');
    if (!fs.existsSync(filePath)) { // index style文件存在不覆盖
      fsExtra.outputFileSync(filePath, themeTpls['style']);
    }
  });
  logger.info('element-ui: theme scaffold ready.');
  // compiler
  const files = glob.sync('*.js', {
    cwd: path.resolve(REF_PATH, 'lib')
  }).map((name) => {
    return path.basename(name, '.js');
  });
  // 创建js文件
  files.filter((name) => {
    return (name !== 'index' && name !== 'element-ui.common'); // 排除这两个index和element-ui.common文件
  }).forEach((name) => {
    const tpls = getCptTemplate(name);
    const cptPath = path.resolve(SRC_PATH, 'components', name);
    // index
    let filePath = path.resolve(cptPath, 'index.js');
    fsExtra.outputFileSync(filePath, tpls['index']);
    // styling
    filePath = path.resolve(cptPath, 'styling.js');
    fsExtra.outputFileSync(filePath, tpls['styling']);
    // shim
    filePath = path.resolve(cptPath, 'shim.js');
    if (!fs.existsSync(filePath)) { // shim文件存在不覆盖
      fsExtra.outputFileSync(filePath, tpls['shim']);
    }

    logger.info('element-ui: ' + name + ' created.');
  });
  // 创建完整包索引
  fsExtra.outputFileSync(path.resolve(SRC_PATH, 'components/index/index.js'), getPackageTemplate());
  logger.info('element-ui: component create done.');
}

module.exports = generateCode;
