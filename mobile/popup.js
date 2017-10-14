import Vue from 'vue';
import './theme-default/button.css';
import Popup from 'mint-ui/lib/popup';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Popup.name, 'mt-', 'm-'), Popup);
export default Popup;