import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/popover.css';
import Popover from 'element-ui/lib/popover';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Popover.name, 'el-', 'y-'), Popover);
export default Popover;