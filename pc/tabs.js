import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/tabs.css';
import Tabs from 'element-ui/lib/tabs';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Tabs.name, 'el-', 'y-'), Tabs);
export default Tabs;
