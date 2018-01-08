import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/aside.css';
import Aside from 'element-ui/lib/aside';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Aside.name, 'el-', 'y-'), Aside);
export default Aside;