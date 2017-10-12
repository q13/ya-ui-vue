import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/icon.css';
import Icon from 'element-ui/lib/icon';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Icon.name, 'el-', 'y-'), Icon);
export default Icon;