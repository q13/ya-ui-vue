import Vue from 'vue';
import './theme-default/spinner.css';
import Spinner from 'mint-ui/lib/spinner';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Spinner.name, 'mt-', 'm-'), Spinner);
export default Spinner;