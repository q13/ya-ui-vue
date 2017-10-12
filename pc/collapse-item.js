import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/collapse-item.css';
import CollapseItem from 'element-ui/lib/collapse-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(CollapseItem.name, 'el-', 'y-'), CollapseItem);
export default CollapseItem;