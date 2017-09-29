import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/time-picker.css';
import TimePicker from 'element-ui/lib/time-picker';
Vue.component(TimePicker.name, TimePicker);
export default TimePicker;
