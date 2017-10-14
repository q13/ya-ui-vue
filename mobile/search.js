import Vue from 'vue';
import './theme-default/search.css';
import Search from 'mint-ui/lib/search';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Search.name, 'mt-', 'm-'), Search);
export default Search;