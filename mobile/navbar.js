import Vue from 'vue';
import './theme-default/button.css';
import Navbar from 'mint-ui/lib/navbar';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Navbar.name, 'mt-', 'm-'), Navbar);
export default Navbar;