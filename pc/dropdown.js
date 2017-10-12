import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/dropdown.css';
import Dropdown from 'element-ui/lib/dropdown';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Dropdown.name, 'el-', 'y-'), Dropdown);
export default Dropdown;