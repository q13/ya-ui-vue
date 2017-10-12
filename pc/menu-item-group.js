import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/menu-item-group.css';
import MenuItemGroup from 'element-ui/lib/menu-item-group';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(MenuItemGroup.name, 'el-', 'y-'), MenuItemGroup);
export default MenuItemGroup;