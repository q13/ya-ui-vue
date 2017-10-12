import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/collapse.css';
import CollapseItem from 'element-ui/lib/collapse';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Collapse.name, 'el-', 'y-'), Collapse);
export default Collapse;