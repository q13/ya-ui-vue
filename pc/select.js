import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/select.css';
import Select from 'element-ui/lib/select';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Select.name, 'el-', 'y-'), Select);
export default Select;
