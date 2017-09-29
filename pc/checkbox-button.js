import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/checkbox-button.css';
import CheckboxButton from 'element-ui/lib/checkbox-button';
Vue.component(CheckboxButton.name, CheckboxButton);
export default CheckboxButton;