import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/option.css';
import Option from 'element-ui/lib/option';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Option.name, 'el-', 'y-'), Option);
export default Option;