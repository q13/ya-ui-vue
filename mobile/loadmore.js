import Vue from 'vue';
import './theme-default/loadmore.css';
import Loadmore from 'mint-ui/lib/loadmore';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Loadmore.name, 'mt-', 'm-'), Loadmore);
export default Loadmore;