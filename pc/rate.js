import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/rate.css';
import Rate from 'element-ui/lib/rate';
Vue.component(Rate.name, Rate);
export default Rate;