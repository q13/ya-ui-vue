import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/option.css';
import Option from 'element-ui/lib/option';
Vue.component(Option.name, Option);
export default Option;