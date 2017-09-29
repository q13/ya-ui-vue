import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/button-group';
import ButtonGroup from 'element-ui/lib/button-group';
Vue.component(ButtonGroup.name, ButtonGroup);
export default ButtonGroup;