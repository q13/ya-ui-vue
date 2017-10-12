import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/tab-pane.css';
import TabPane from 'element-ui/lib/tab-pane';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(TabPane.name, 'el-', 'y-'), TabPane);
export default TabPane;
