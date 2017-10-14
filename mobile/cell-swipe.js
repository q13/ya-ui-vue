import Vue from 'vue';
import './theme-default/button.css';
import CellSwipe from 'mint-ui/lib/cell-swipe';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(CellSwipe.name, 'mt-', 'm-'), CellSwipe);
export default CellSwipe;