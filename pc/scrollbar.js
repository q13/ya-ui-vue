import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/row.css';
import Scrollbar from 'element-ui/lib/scrollbar';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Scrollbar.name, 'el-', 'y-'), Scrollbar);
export default Scrollbar;
