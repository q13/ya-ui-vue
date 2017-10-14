import Vue from 'vue';
import './theme-default/button.css';
import TabContainer from 'mint-ui/lib/tab-container';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(TabContainer.name, 'mt-', 'm-'), TabContainer);
export default TabContainer;