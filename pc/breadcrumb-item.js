import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/breadcrumb-item.css';
import BreadcrumbItem from 'element-ui/lib/breadcrumb-item';
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
export default BreadcrumbItem;