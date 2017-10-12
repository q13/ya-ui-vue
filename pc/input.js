import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/input.css';
import Input from 'element-ui/lib/input';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Input.name, 'el-', 'y-'), Input);
export default Input;