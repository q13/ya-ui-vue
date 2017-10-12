import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/menu-item.css';
import MenuItem from 'element-ui/lib/menu-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(MenuItem.name, 'el-', 'y-'), MenuItem);
export default MenuItem;