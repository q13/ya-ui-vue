import Vue from 'vue';
import './theme-default/button.css';
import Header from 'mint-ui/lib/header';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Header.name, 'mt-', 'm-'), Header);
export default Header;