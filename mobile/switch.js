import Vue from 'vue';
import './theme-default/button.css';
import Switch from 'mint-ui/lib/switch';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Switch.name, 'mt-', 'm-'), Switch);
export default Switch;