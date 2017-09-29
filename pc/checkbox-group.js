import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/checkbox-group.css';
import CheckboxGroup from 'element-ui/lib/checkbox-group';
Vue.component(CheckboxGroup.name, CheckboxGroup);
export default CheckboxGroup;