import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/time-select.css';
import TimeSelect from 'element-ui/lib/time-select';
Vue.component(TimeSelect.name, TimeSelect);
export default TimeSelect;
