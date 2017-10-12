import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/steps.css';
import Steps from 'element-ui/lib/steps';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Steps.name, 'el-', 'y-'), Steps);
export default Steps;
