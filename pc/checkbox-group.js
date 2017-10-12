import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/checkbox-group.css';
import CheckboxGroup from 'element-ui/lib/checkbox-group';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(CheckboxGroup.name, 'el-', 'y-'), CheckboxGroup);
export default CheckboxGroup;