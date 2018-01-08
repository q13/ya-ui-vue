import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/header.css';
import Header from 'element-ui/lib/header';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Header.name, 'el-', 'y-'), Header);
export default Header;