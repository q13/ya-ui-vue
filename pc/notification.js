import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/notification.css';
import Notification from 'element-ui/lib/notification';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Notification.name, 'el-', 'y-'), Notification);
Vue.prototype.$notify = Notification;
export default Notification;