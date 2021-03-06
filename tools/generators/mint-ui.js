/**
 * mint-ui 代码生成器
 */
const path = require('path');
const fsExtra = require('fs-extra');
const fs = require('fs');
const glob = require('glob');
const {
  upperFirst,
  camelCase
} = require('lodash');
const { logger } = require('../utils');

const REF_PATH = path.resolve(__dirname, '..', '..', 'node_modules', 'mint-ui');
const LIB_PATH = path.resolve(__dirname, '../../ui/mint-ui');
const SRC_PATH = path.resolve(LIB_PATH, 'src');
/**
 * 根据组件名生成js模板
 * @param {string} name 组件名
 */
function getCptTemplate(name) {
  return {
    index: `
/**
 * Component proxy
 * by 13
 */
import Ctor from 'mint-ui/lib/${name}';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewCtor = wrap(Ctor); // 封装
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'mint-ui'
});

export default NewCtor;
`,
    styling: `
/**
 * Component proxy with default style
 * by 13
 */
import '../../themes/default/base.scss';
import '../../themes/default/${name}.scss';

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
function getThemeTemplate(cptNames) {
  const importCss = cptNames.map((cptName) => {
    return `@import './${cptName}.css';`;
  }).join('\n');

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
${importCss}
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
  const cptNames = glob.sync('*/', {
    cwd: path.resolve(REF_PATH, 'lib')
  }).map((value) => {
    return value.slice(0, -1);
  });
  cptNames.forEach((cptName) => {
    fsExtra.copySync(path.resolve(REF_PATH, 'lib/' + cptName + '/style.css'), path.resolve(SRC_PATH, 'themes/default/' + cptName + '.css'));
  });
  logger.info('mint-ui: themes copy done.');
  // 生成theme索引文件
  const themeDirs = glob.sync('*/', {
    cwd: path.resolve(SRC_PATH, 'themes'),
    absolute: true // 获取完整路径
  });
  // 生成索引和打包入口文件
  const themeTpls = getThemeTemplate(cptNames);
  themeDirs.forEach((dirPath) => {
    let filePath = path.resolve(dirPath, 'index.js');
    fsExtra.outputFileSync(filePath, themeTpls['theme']);
    filePath = path.resolve(dirPath, 'index.css');
    if (!fs.existsSync(filePath)) { // index style文件存在不覆盖
      fsExtra.outputFileSync(filePath, themeTpls['style']);
    }
  });
  logger.info('mint-ui: theme scaffold ready.');
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
    logger.info('mint-ui: ' + name + ' created.');
  });
  // 创建完整包索引
  const filePath = path.resolve(SRC_PATH, 'components/index/index.js');
  if (!fs.existsSync(filePath)) {
    fsExtra.outputFileSync(filePath, getPackageTemplate(cptNames));
  }
  logger.info('mint-ui: component create done.');
}

module.exports = generateCode;
