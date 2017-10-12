import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/submenu.css';
import Submenu from 'element-ui/lib/submenu';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Submenu.name, 'el-', 'y-'), Submenu);
export default Submenu;
