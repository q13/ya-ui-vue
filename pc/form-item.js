import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/form-item.css';
import FormItem from 'element-ui/lib/form-item';
Vue.component(FormItem.name, FormItem);
export default FormItem;