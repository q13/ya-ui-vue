import {
  upperFirst
} from 'lodash';
/**
 * 替换组件name前缀
 * @param {string} name
 * @param {string} prefix1
 * @param {string} prefix2
 */
function replaceComponentPrefix(name, prefix1, prefix2) {
  if (prefix1 === 'el-') {
    prefix1 = 'El';
  }
  if (prefix2 === 'y-') {
    prefix2 = 'Y';
  }
  return name.replace(prefix1, prefix2);
};

/**
 * 获取对应组件库的前缀预设
 * @param {string} libName
 */
function getProperComponentPrefix(libName) {
  const libPrefix = Object.assign({ // 库前缀自定义
    'element-ui': 'el'
  }, window.__lib_prefix__ || {});
  return libPrefix[libName];
}
/**
 * 替换element-ui组件前缀
 */
function replaceElementUiComponentPrefix(Ctor) {
  const libPrefix = getProperComponentPrefix('element-ui');
  const name = Ctor.name;
  let newName = name.slice(2);
  newName = upperFirst(libPrefix) + newName;
  Ctor.name = newName; // 替换成新的组件名
  return Ctor;
}
export {
  replaceElementUiComponentPrefix,
  replaceComponentPrefix
};
