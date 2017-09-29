import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/pagination.css';
import Pagination from 'element-ui/lib/pagination';
Vue.component(Pagination.name, Pagination);
export default Pagination;