import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/dropdown-item.css';
import DropdownItem from 'element-ui/lib/dropdown-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(DropdownItem.name, 'el-', 'y-'), DropdownItem);
export default DropdownItem;