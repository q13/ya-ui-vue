import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/cascader.css';
import Cascader from 'element-ui/lib/cascader';
Vue.component(Cascader.name, Cascader);
export default Cascader;