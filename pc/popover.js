import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/popover.css';
import Popover from 'element-ui/lib/popover';
Vue.component(Popover.name, Popover);
export default Popover;