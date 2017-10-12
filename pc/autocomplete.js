import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/autocomplete.css';
import Autocomplete from 'element-ui/lib/autocomplete';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Autocomplete.name, 'el-', 'y-'), Autocomplete);
export default Autocomplete;