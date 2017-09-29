import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/tooltip.css';
import Tooltip from 'element-ui/lib/tooltip';
Vue.component(Tooltip.name, Tooltip);
export default Tooltip;
