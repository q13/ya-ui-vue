import Vue from 'vue';
import './theme-default/button.css';
import Badge from 'mint-ui/lib/badge';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Badge.name, 'mt-', 'm-'), Badge);
export default Badge;