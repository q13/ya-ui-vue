import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/tooltip.css';
import Tooltip from 'element-ui/lib/tooltip';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Tooltip.name, 'el-', 'y-'), Tooltip);
export default Tooltip;
