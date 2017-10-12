import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/option-group.css';
import OptionGroup from 'element-ui/lib/option-group';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(OptionGroup.name, 'el-', 'y-'), OptionGroup);
export default OptionGroup;