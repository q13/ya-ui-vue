import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/message.css';
import Mesage from 'element-ui/lib/message';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Mesage.name, 'el-', 'y-'), Mesage);
Vue.prototype.$message = Message;
export default Mesage;