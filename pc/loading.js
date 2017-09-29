import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/loading.css';
import Loading from 'element-ui/lib/loading';
Vue.component(Loading.name, Loading);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
export default Loading;