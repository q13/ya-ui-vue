import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/dialog.css';
import Dialog from 'element-ui/lib/dialog';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Dialog.name, 'el-', 'y-'), Dialog);
export default Dialog;