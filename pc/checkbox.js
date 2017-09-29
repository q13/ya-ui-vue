import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/checkbox.css';
import Checkbox from 'element-ui/lib/checkbox';
Vue.component(Checkbox.name, Checkbox);
export default Checkbox;