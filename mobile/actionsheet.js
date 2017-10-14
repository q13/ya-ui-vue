import Vue from 'vue';
import './theme-default/actionsheet.css';
import Actionsheet from 'mint-ui/lib/actionsheet';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Actionsheet.name, 'mt-', 'm-'), Actionsheet);
export default Actionsheet;