import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/alert.css';
import Alert from 'element-ui/lib/alert';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Alert.name, 'el-', 'y-'), Alert);
export default Alert;