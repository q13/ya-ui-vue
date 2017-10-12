import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/row.css';
import Row from 'element-ui/lib/row';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Row.name, 'el-', 'y-'), Row);
export default Row;