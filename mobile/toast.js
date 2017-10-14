import Vue from 'vue';
import './theme-default/toast.css';
import Toast from 'mint-ui/lib/toast';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Toast.name, 'mt-', 'm-'), Toast);
export default Toast;