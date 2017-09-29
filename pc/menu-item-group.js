import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/menu-item-group.css';
import MenuItemGroup from 'element-ui/lib/menu-item-group';
Vue.component(MenuItemGroup.name, MenuItemGroup);
export default MenuItemGroup;