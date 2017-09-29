import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/collapse-item.css';
import CollapseItem from 'element-ui/lib/collapse-item';
Vue.component(CollapseItem.name, CollapseItem);
export default CollapseItem;