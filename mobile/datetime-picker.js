import Vue from 'vue';
import './theme-default/datetime-picker.css';
import DatetimePicker from 'mint-ui/lib/datetime-picker';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(DatetimePicker.name, 'mt-', 'm-'), DatetimePicker);
export default DatetimePicker;