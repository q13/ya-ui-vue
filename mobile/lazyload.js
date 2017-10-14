import Vue from 'vue';
import './theme-default/lazyload.css';
import Lazyload from 'mint-ui/lib/lazyload';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Lazyload.name, 'mt-', 'm-'), Lazyload);
export default Lazyload;