import Vue from 'vue';
import './theme-default/button.css';
import Indicator from 'mint-ui/lib/indicator';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Indicator.name, 'mt-', 'm-'), Indicator);
export default Indicator;