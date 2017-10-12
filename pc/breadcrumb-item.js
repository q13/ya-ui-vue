import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/breadcrumb-item.css';
import BreadcrumbItem from 'element-ui/lib/breadcrumb-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(BreadcrumbItem.name, 'el-', 'y-'), BreadcrumbItem);
export default BreadcrumbItem;