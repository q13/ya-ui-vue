import Vue from 'vue';
import './theme-default/tabbar.css';
import Tabbar from 'mint-ui/lib/tabbar';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Tabbar.name, 'mt-', 'm-'), Tabbar);
export default Tabbar;