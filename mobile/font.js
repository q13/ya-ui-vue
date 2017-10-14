import Vue from 'vue';
import './theme-default/font.css';
import Font from 'mint-ui/lib/font';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Font.name, 'mt-', 'm-'), Font);
export default Font;