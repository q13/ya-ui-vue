import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/container.css';
import Container from 'element-ui/lib/container';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Container.name, 'el-', 'y-'), Container);
export default Container;