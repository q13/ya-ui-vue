import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/breadcrumb.css';
import Breadcrumb from 'element-ui/lib/breadcrumb';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Breadcrumb.name, 'el-', 'y-'), Breadcrumb);
export default Breadcrumb;