import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/cascader.css';
import Cascader from 'element-ui/lib/cascader';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Cascader.name, 'el-', 'y-'), Cascader);
export default Cascader;