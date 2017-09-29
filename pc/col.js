import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/col.css';
import Col from 'element-ui/lib/col';
Vue.component(Col.name, Col);
export default Col;