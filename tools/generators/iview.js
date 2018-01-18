/**
 * iview 代码生成器
 */
const path = require('path');
const fsExtra = require('fs-extra');
const fs = require('fs');
const glob = require('glob');
const {
  camelCase,
  capitalize,
  upperFirst
} = require('lodash');
const { logger } = require('../utils');

const REF_PATH = path.resolve(__dirname, '..', '..', 'node_modules', 'iview');
const LIB_PATH = path.resolve(__dirname, '../../ui/iview');
const SRC_PATH = path.resolve(LIB_PATH, 'src');
/**
 * 根据组件名生成js模板
 * @param {string} name 组件名
 */
function getCptTemplate(name) {
  // 组件构造函数名
  const Ctor = upperFirst(camelCase(name));

  return {
    index: `
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { ${Ctor} } from 'iview';
import {
  replaceIviewComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewCtor = shim(${Ctor}); // 加垫片
// 替换组件前缀
replaceIviewComponentPrefix(NewCtor);
// 自动注册组件
Vue.component(NewCtor.globalName, NewCtor);

export default NewCtor;
`,
    styling: `
/**
 * Button proxy with default style
 * by 13
 */
import '../../themes/default/${name}.less';

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
import './index.less';
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
function getPackageTemplate(cptNames) { 
  return `/**
 * 完整库引用
 * by 13
 */
` + cptNames.map((cptName) => {
    const Ctor = upperFirst(camelCase(cptName));
    return `
import ${Ctor} from '../${cptName}/index';`;
  }).join('') + '\nexport {\n' +
  cptNames.map((cptName) => {
    return '  ' + upperFirst(camelCase(cptName));
  }).join(',\n') + '\n};\n';
}

function generateCode() {
  // copy default theme
  fsExtra.copySync(path.resolve(REF_PATH, 'src/styles'), path.resolve(SRC_PATH, 'themes/default'));
  logger.info('iview: themes copy done.');
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
    filePath = path.resolve(dirPath, 'index.less');
    if (!fs.existsSync(filePath)) { // index style文件存在不覆盖
      fsExtra.outputFileSync(filePath, themeTpls['style']);
    }
  });
  logger.info('iview: theme scaffold ready.');
  // compiler
  const cptNames = glob.sync('*/', {
    cwd: path.resolve(REF_PATH, 'src/components')
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
    if (!fs.existsSync(filePath)) {
      fsExtra.outputFileSync(filePath, tpls['index']);
    }
    // styling
    filePath = path.resolve(cptPath, 'styling.js');
    if (!fs.existsSync(filePath)) {
      fsExtra.outputFileSync(filePath, tpls['styling']);
    }
    // shim
    filePath = path.resolve(cptPath, 'shim.js');
    if (!fs.existsSync(filePath)) { // shim文件存在不覆盖
      fsExtra.outputFileSync(filePath, tpls['shim']);
    }

    logger.info('iview: ' + name + ' created.');
  });
  // 创建完整包索引
  const filePath = path.resolve(SRC_PATH, 'components/index/index.js');
  if (!fs.existsSync(filePath)) {
    fsExtra.outputFileSync(filePath, getPackageTemplate(cptNames));
  }
  logger.info('iview: component create done.');
}

module.exports = generateCode;
