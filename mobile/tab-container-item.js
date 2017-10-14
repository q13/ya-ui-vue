import Vue from 'vue';
import './theme-default/tab-container-item.css';
import TabContainerItem from 'mint-ui/lib/tab-container-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(TabContainerItem.name, 'mt-', 'm-'), TabContainerItem);
export default TabContainerItem;