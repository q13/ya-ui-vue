import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/input-number.css';
import InputNumber from 'element-ui/lib/input-number';
Vue.component(InputNumber.name, InputNumber);
export default InputNumber;