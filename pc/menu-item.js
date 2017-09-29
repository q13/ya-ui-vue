import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/menu-item.css';
import MenuItem from 'element-ui/lib/menu-item';
Vue.component(MenuItem.name, MenuItem);
export default MenuItem;