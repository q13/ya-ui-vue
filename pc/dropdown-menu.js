import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/dropdown-menu.css';
import DropdownMenu from 'element-ui/lib/dropdown-menu';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(DropdownMenu.name, 'el-', 'y-'), DropdownMenu);
export default DropdownMenu;