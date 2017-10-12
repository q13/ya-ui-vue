import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/form-item.css';
import FormItem from 'element-ui/lib/form-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(FormItem.name, 'el-', 'y-'), FormItem);
export default FormItem;