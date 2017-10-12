import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/transfer.css';
import Transfer from 'element-ui/lib/transfer';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Transfer.name, 'el-', 'y-'), Transfer);
export default Transfer;
