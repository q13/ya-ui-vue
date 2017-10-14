import Vue from 'vue';
import './theme-default/button.css';
import InfiniteScroll from 'mint-ui/lib/infinite-scroll';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(InfiniteScroll.name, 'mt-', 'm-'), InfiniteScroll);
export default InfiniteScroll;