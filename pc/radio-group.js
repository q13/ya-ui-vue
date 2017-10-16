import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/radio-group.css';
import RadioGroup from 'element-ui/lib/radio-group';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(RadioGroup.name, 'el-', 'y-'), RadioGroup);
export default RadioGroup;