/**
 * vue-beauty 代码生成器
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
 * Component proxy
 * by 13
 */
import { ${Ctor} } from 'vue-beauty';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewCtor = wrap(${Ctor}); // 加垫片
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'vue-beauty'
});

export default NewCtor;
`,
    styling: `
/**
 * Component proxy with default style
 * by 13
 */
import '../../themes/default/${name}.css';

export * from './index';
`,
    wrap: `
/**
 * 组件封装
 * by 13
 */
function wrap(Ctor) {
  // 扩展
  return Ctor;
}
export default wrap;
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

/**
 * 获取完整包引用模板
 */
function getPackageTemplate(cptNames) { 
  return `/**
 * 完整库引用
 * by 13
 */
` + cptNames.map((cptName) => {
    let Ctor = camelCase(cptName);
    if (Ctor === 'switch') {
      Ctor = 'vSwitch';
    }
    return `
import ${Ctor} from '../${cptName}/index';`;
  }).join('') + '\nexport {\n' +
  cptNames.map((cptName) => {
    if (cptName === 'switch') {
      cptName = 'vSwitch';
    } else {
      cptName = camelCase(cptName);
    }
    return '  ' + cptName;
  }).join(',\n') + '\n};\n';
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
    if (!fs.existsSync(filePath)) {
      fsExtra.outputFileSync(filePath, tpls['index']);
    }
    // styling
    filePath = path.resolve(cptPath, 'styling.js');
    if (!fs.existsSync(filePath)) {
      fsExtra.outputFileSync(filePath, tpls['styling']);
    }
    // wrap
    filePath = path.resolve(cptPath, 'wrap.js');
    if (!fs.existsSync(filePath)) { // wrap文件存在不覆盖
      fsExtra.outputFileSync(filePath, tpls['wrap']);
    }
    logger.info('vue-beauty: ' + name + ' created.');
  });
  // 创建完整包索引
  const filePath = path.resolve(SRC_PATH, 'components/index/index.js');
  if (!fs.existsSync(filePath)) {
    fsExtra.outputFileSync(filePath, getPackageTemplate(cptNames));
  }
  logger.info('vue-beauty: component create done.');
}

module.exports = generateCode;
