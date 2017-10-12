import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/rate.css';
import Rate from 'element-ui/lib/rate';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Rate.name, 'el-', 'y-'), Rate);
export default Rate;