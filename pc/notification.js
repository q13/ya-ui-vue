import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/notification.css';
import Notification from 'element-ui/lib/notification';
Vue.component(Notification.name, Notification);
Vue.prototype.$notify = Notification;
export default Notification;