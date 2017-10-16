import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/radio-button.css';
import RadioButton from 'element-ui/lib/radio-button';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(RadioButton.name, 'el-', 'y-'), RadioButton);
export default RadioButton;