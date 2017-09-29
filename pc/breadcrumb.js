import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/breadcrumb.css';
import Breadcrumb from 'element-ui/lib/breadcrumb';
Vue.component(Breadcrumb.name, Breadcrumb);
export default Breadcrumb;