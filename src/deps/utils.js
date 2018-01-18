import {
  upperFirst
} from 'lodash';

/**
 * 获取对应组件库的前缀预设
 * @param {string} libName
 */
function getProperComponentPrefix(libName) {
  const libPrefix = Object.assign({ // 库前缀自定义
    'element-ui': 'el',
    'mint-ui': 'mt',
    'iview': 'i',
    'vue-beauty': 'v'
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
  Ctor.globalName = newName; // 替换成新的组件名
  return Ctor;
}
/**
 * 替换mint-ui组件前缀
 */
function replaceMintUiComponentPrefix(Ctor) {
  const libPrefix = getProperComponentPrefix('mint-ui');
  const name = Ctor.name;
  let newName = name.slice(3);
  newName = libPrefix + '-' + newName;
  Ctor.globalName = newName; // 替换成新的组件名
  return Ctor;
}
/**
 * 替换iview组件前缀
 */
function replaceIviewComponentPrefix(Ctor) {
  const libPrefix = getProperComponentPrefix('iview');
  const name = Ctor.name;
  let newName = name;
  newName = upperFirst(libPrefix) + newName;
  Ctor.globalName = newName; // 替换成新的组件名
  return Ctor;
}
/**
 * 替换vue-beauty组件前缀
 */
function replaceVueBeautyComponentPrefix(Ctor) {
  const libPrefix = getProperComponentPrefix('vue-beauty');
  const name = Ctor.name;
  let newName = name;
  newName = upperFirst(libPrefix) + newName;
  Ctor.globalName = newName; // 替换成新的组件名
  return Ctor;
}
export {
  replaceElementUiComponentPrefix,
  replaceMintUiComponentPrefix,
  replaceIviewComponentPrefix,
  replaceVueBeautyComponentPrefix
};
