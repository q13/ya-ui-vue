import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/col.css';
import Col from 'element-ui/lib/col';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Col.name, 'el-', 'y-'), Col);
export default Col;