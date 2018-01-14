/**
 * 示例页
 */
import elementUi from './element-ui/index';

const Vue = window.Vue;
const widgets = [
  elementUi()
];
const App = Vue.extend({
  render(h) {
    return h('div', {}, widgets.map((config) => {
      return h(Vue.extend(config));
    }));
  }
});

new App().$mount('#app');
