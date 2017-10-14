import Vue from 'vue';
import './theme-default/button.css';
import TabItem from 'mint-ui/lib/tab-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(TabItem.name, 'mt-', 'm-'), TabItem);
export default TabItem;