import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/radio.css';
import Radio from 'element-ui/lib/radio';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Radio.name, 'el-', 'y-'), Radio);
export default Radio;