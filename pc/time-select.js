import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/time-select.css';
import TimeSelect from 'element-ui/lib/time-select';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(TimeSelect.name, 'el-', 'y-'), TimeSelect);
export default TimeSelect;
