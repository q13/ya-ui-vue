import Vue from 'vue';
import './theme-default/button.css';
import Button from 'mint-ui/lib/button';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Button.name, 'mt-', 'm-'), Button);
export default Button;