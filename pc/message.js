import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/message.css';
import Mesage from 'element-ui/lib/message';
Vue.component(Mesage.name, Mesage);
Vue.prototype.$message = Message;
export default Mesage;