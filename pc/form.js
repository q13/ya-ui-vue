import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/form.css';
import Form from 'element-ui/lib/form';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Form.name, 'el-', 'y-'), Form);
export default Form;