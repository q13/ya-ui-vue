import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/footer.css';
import Footer from 'element-ui/lib/footer';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Footer.name, 'el-', 'y-'), Footer);
export default Footer;