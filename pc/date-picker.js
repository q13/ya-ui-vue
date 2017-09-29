import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/date-picker.css';
import DatePicker from 'element-ui/lib/date-picker';
Vue.component(DatePicker.name, DatePicker);
export default DatePicker;