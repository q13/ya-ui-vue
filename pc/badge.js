import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/badge.css';
import Badge from 'element-ui/lib/badge';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Badge.name, 'el-', 'y-'), Badge);
export default Badge;