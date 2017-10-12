import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/input-number.css';
import InputNumber from 'element-ui/lib/input-number';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(InputNumber.name, 'el-', 'y-'), InputNumber);
export default InputNumber;