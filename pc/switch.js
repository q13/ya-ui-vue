import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/switch.css';
import Switch from 'element-ui/lib/switch';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Switch.name, 'el-', 'y-'), Switch);
export default Switch;
