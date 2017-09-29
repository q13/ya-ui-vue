import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/option-group.css';
import OptionGroup from 'element-ui/lib/option-group';
Vue.component(OptionGroup.name, OptionGroup);
export default OptionGroup;