import Vue from 'vue';
import './theme-default/button.css';
import IndexList from 'mint-ui/lib/index-list';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(IndexList.name, 'mt-', 'm-'), IndexList);
export default IndexList;