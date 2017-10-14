import Vue from 'vue';
import './theme-default/cell.css';
import Cell from 'mint-ui/lib/cell';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Cell.name, 'mt-', 'm-'), Cell);
export default Cell;