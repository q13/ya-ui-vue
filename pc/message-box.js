import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/message-box.css';
import MesageBox from 'element-ui/lib/message-box';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(MesageBox.name, 'el-', 'y-'), MesageBox);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
export default MesageBox;