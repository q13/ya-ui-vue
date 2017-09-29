import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/dropdown-menu.css';
import DropdownMenu from 'element-ui/lib/dropdown-menu';
Vue.component(DropdownMenu.name, DropdownMenu);
export default DropdownMenu;