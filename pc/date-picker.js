import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/date-picker.css';
import DatePicker from 'element-ui/lib/date-picker';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(DatePicker.name, 'el-', 'y-'), DatePicker);
export default DatePicker;