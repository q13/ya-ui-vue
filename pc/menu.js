import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/menu.css';
import Menu from 'element-ui/lib/menu';
Vue.component(Menu.name, Menu);
export default Menu;