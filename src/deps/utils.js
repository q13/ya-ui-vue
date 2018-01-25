/**
 * 工具库函数集
 */
import Vue from 'vue';
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
 * 获取默认的组件库名称
 */
function getDefaultComponentLibName() {
  const defaultLibName = window.__lib_name__ || '';
  return defaultLibName;
}

/**
 * 获取默认保留关键字列表
 * @param {string} name 库名称
 */
function getKeywordsReservedByLibName(name) {
  let keywords = [];
  if (name === 'iview') {
    keywords = ['Circle', 'Form', 'Col', 'Select', 'Option', 'Switch'];
  } else if (name === 'vue-beauty') {
    keywords = ['Switch'];
  }
  return keywords;
}

/**
 * Map component
 */
function mapComponent(options) {
  const { Ctor, libName } = options;
  const libPrefix = getProperComponentPrefix(libName);
  const defaultLibName = getDefaultComponentLibName(); // 默认库名
  let keywordsReserved = getKeywordsReservedByLibName(libName); // 保留关键字
  let name = Ctor.name;
  let componentName = '';
  if (libName === 'element-ui') {
    if (name) {
      if (name !== 'MessageBox') {
        componentName = name.slice(2);
      }
      componentName = upperFirst(libPrefix) + componentName;
    }
  } else if (libName === 'mint-ui') {
    componentName = name.slice(3);
    componentName = libPrefix + '-' + componentName;
  } else if (libName === 'iview') {
    if (keywordsReserved.map((keyword) => {
      return 'i' + keyword;
    }).some((v) => {
      return v === name;
    })) {
      name = name.slice(1);
    };
    componentName = name;
    componentName = upperFirst(libPrefix) + componentName;
  } else if (libName === 'vue-beauty') {
    if (name === 'Switch') {
      Ctor.name = 'Switch_';
    }
    componentName = name;
    componentName = upperFirst(libPrefix) + componentName;
  }
  if (defaultLibName === libName) { // 注册默认库，省略前缀
    if (!keywordsReserved.some((keyword) => { // 排除和保留关键字冲突的组件名注册
      return keyword === name
    })) {
      Vue.component(name, Ctor);
    }
  }
  // 注册global component
  let Cpt = null;
  if (componentName) {
    Cpt = Vue.component(componentName, Ctor);
  } else {
    Cpt = Ctor;
  }
  return Cpt;
}
export {
  mapComponent
};
