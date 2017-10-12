import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/checkbox-button.css';
import CheckboxButton from 'element-ui/lib/checkbox-button';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(CheckboxButton.name, 'el-', 'y-'), CheckboxButton);
export default CheckboxButton;