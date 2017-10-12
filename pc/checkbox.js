import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/checkbox.css';
import Checkbox from 'element-ui/lib/checkbox';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Checkbox.name, 'el-', 'y-'), Checkbox);
export default Checkbox;