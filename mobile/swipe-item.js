import Vue from 'vue';
import './theme-default/swipe-item.css';
import SwipeItem from 'mint-ui/lib/swipe-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(SwipeItem.name, 'mt-', 'm-'), SwipeItem);
export default SwipeItem;