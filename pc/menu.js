import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/menu.css';
import Menu from 'element-ui/lib/menu';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Menu.name, 'el-', 'y-'), Menu);
export default Menu;