import Vue from 'vue';
import './theme-default/button.css';
import DatetimePicker from 'mint-ui/lib/button';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(DatetimePicker.name, 'mt-', 'm-'), DatetimePicker);
export default DatetimePicker;