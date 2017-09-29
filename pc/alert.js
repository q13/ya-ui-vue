import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/alert.css';
import Alert from 'element-ui/lib/alert';
Vue.component(Alert.name, Alert);
export default Alert;