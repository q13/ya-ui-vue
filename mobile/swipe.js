import Vue from 'vue';
import './theme-default/swipe.css';
import Swipe from 'mint-ui/lib/swipe';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Swipe.name, 'mt-', 'm-'), Swipe);
export default Swipe;