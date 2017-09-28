import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/dialog.css';
import Dialog from 'element-ui/lib/dialog';
Vue.component(Dialog.name, Dialog);
export default Dialog;