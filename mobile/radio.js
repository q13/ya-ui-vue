import Vue from 'vue';
import './theme-default/button.css';
import Radio from 'mint-ui/lib/radio';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Radio.name, 'mt-', 'm-'), Radio);
export default Radio;