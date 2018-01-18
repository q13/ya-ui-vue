/**
 * vue-beauty 代码生成器
 */
const path = require('path');
const fsExtra = require('fs-extra');
const fs = require('fs');
const glob = require('glob');
const {
  camelCase,
  capitalize
} = require('lodash');
const { logger } = require('../utils');

const REF_PATH = path.resolve(__dirname, '..', '..', 'node_modules', 'vue-beauty');
const LIB_PATH = path.resolve(__dirname, '../../ui/vue-beauty');
const SRC_PATH = path.resolve(LIB_PATH, 'src');
/**
 * 根据组件名生成js模板
 * @param {string} name 组件名
 */
function getCptTemplate(name) {
  // 组件构造函数名
  const Ctor = camelCase(name);

  return {
    index: `
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { ${Ctor} } from 'vue-beauty';
import {
  replaceVueBeautyComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewCtor = shim(${Ctor}); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewCtor);
// 自动注册组件
Vue.component(NewCtor.globalName, NewCtor);

export default NewCtor;
`,
    styling: `
/**
 * Button proxy with default style
 * by 13
 */
import '../../themes/default/${name}.css';

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
import './index.css';
`,
    style: `
/**
 * 组件样式化索引
 * by 13
 */
`
  };
}

function generateCode() {
  // copy default theme
  fsExtra.copySync(path.resolve(REF_PATH, 'package/style/vue-beauty.css'), path.resolve(SRC_PATH, 'themes/default/index.css'));
  logger.info('vue-beauty: themes copy done.');
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
    filePath = path.resolve(dirPath, 'index.css');
    if (!fs.existsSync(filePath)) { // index style文件存在不覆盖
      fsExtra.outputFileSync(filePath, themeTpls['style']);
    }
  });
  logger.info('vue-beauty: theme scaffold ready.');
  // compiler
  const cptNames = glob.sync('*/', {
    cwd: path.resolve(REF_PATH, 'vb/components')
  }).map((name) => {
    return name.slice(0, -1);
  });
  // 创建js文件
  cptNames.filter((name) => {
    return true;
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

    logger.info('vue-beauty: ' + name + ' created.');
  });
  logger.info('vue-beauty: component create done.');
}

module.exports = generateCode;
