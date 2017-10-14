import Vue from 'vue';
import './theme-default/picker.css';
import Picker from 'mint-ui/lib/picker';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Picker.name, 'mt-', 'm-'), Picker);
export default Picker;