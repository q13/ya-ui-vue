import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/pagination.css';
import Pagination from 'element-ui/lib/pagination';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Pagination.name, 'el-', 'y-'), Pagination);
export default Pagination;