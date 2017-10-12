import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/step.css';
import Step from 'element-ui/lib/step';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Step.name, 'el-', 'y-'), Step);
export default Step;
