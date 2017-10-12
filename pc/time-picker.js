import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/time-picker.css';
import TimePicker from 'element-ui/lib/time-picker';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(TimePicker.name, 'el-', 'y-'), TimePicker);
export default TimePicker;
