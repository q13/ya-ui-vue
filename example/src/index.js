/**
 * eslint-disable
 */

/**
 * 示例页
 */
import 'babel-polyfill';
import Vue from 'vue';
// import elementUi from './element-ui/index';
import mobile from './mobile/index';
// import ant from './ant/index';
import antMobile from './ant-mobile/index';
// import mintUi from './mint-ui/index';
// import iviewUi from './iview/index';
// import vueBeautyUi from './vue-beauty/index';
// console.log(elementUi);
// import test from './test/index';
// const Vue = window.Vue;
import YaPc from './ya/pc/index';
const widgets = [
  // elementUi(),
  // mintUi(),
  // iviewUi(),
  // vueBeautyUi()
  // test()
  // mobile(),
  // ant()
  // antMobile(),
  YaPc()
];
const App = Vue.extend({
  render(h) {
    return h('div', {}, widgets.map((config) => {
      return h(Vue.extend(config));
    }));
  }
});

new App().$mount('#app');
