import Vue from 'vue';
import './theme-default/button.css';
import TabContainerItem from 'mint-ui/lib/tab-container-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(TabContainerItem.name, 'mt-', 'm-'), TabContainerItem);
export default TabContainerItem;