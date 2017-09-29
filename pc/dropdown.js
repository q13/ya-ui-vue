import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/dropdown.css';
import Dropdown from 'element-ui/lib/dropdown';
Vue.component(Dropdown.name, Dropdown);
export default Dropdown;