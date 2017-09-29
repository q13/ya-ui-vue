import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/table-column.css';
import TableColumn from 'element-ui/lib/table-column';
Vue.component(TableColumn.name, TableColumn);
export default TableColumn;
