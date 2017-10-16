import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/button-group.css';
import ButtonGroup from 'element-ui/lib/button-group';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(ButtonGroup.name, 'el-', 'y-'), ButtonGroup);
export default ButtonGroup;