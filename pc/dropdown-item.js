import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/dropdown-item.css';
import DropdownItem from 'element-ui/lib/dropdown-item';
Vue.component(DropdownItem.name, DropdownItem);
export default DropdownItem;