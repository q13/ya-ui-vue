import Vue from 'vue';
import './theme-default/button.css';
import MessageBox from 'mint-ui/lib/message-box';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(MessageBox.name, 'mt-', 'm-'), MessageBox);
export default MessageBox;