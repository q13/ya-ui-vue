import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/table-column.css';
import TableColumn from 'element-ui/lib/table-column';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(TableColumn.name, 'el-', 'y-'), TableColumn);
export default TableColumn;
