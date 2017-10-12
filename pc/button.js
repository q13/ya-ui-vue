import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/button.css';
import Button from 'element-ui/lib/button';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Button.name, 'el-', 'y-'), Button);
export default Button;