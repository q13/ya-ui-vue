import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/main.css';
import Main from 'element-ui/lib/main';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Main.name, 'el-', 'y-'), Main);
export default Main;