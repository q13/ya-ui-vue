import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/table.css';
import Table from 'element-ui/lib/table';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Table.name, 'el-', 'y-'), Table);
export default Table;
