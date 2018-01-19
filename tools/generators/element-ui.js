/**
 * element-ui 代码生成器
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
 * Component proxy
 * by 13
 */
import Ctor from 'element-ui/lib/${name}';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewCtor = wrap(Ctor); // 封装
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'element-ui'
});

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
  const cptNames = files.filter((name) => {
    return (name !== 'index' && name !== 'element-ui.common'); // 排除这两个index和element-ui.common文件
  });
  cptNames.forEach((name) => {
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
    logger.info('element-ui: ' + name + ' created.');
  });
  // 创建完整包索引
  const filePath = path.resolve(SRC_PATH, 'components/index/index.js');
  if (!fs.existsSync(filePath)) {
    fsExtra.outputFileSync(filePath, getPackageTemplate(cptNames));
  }
  logger.info('element-ui: component create done.');
}

module.exports = generateCode;
