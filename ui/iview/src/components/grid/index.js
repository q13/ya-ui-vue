
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { Row, Col } from 'iview';
import {
  replaceIviewComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewRow = shim(Row); // 加垫片
// 替换组件前缀
replaceIviewComponentPrefix(NewRow);
// 自动注册组件
Vue.component(NewRow.globalName, NewRow);

const NewCol = shim(Col); // 加垫片
// 替换组件前缀
replaceIviewComponentPrefix(NewCol);
// 自动注册组件
Vue.component(NewCol.globalName, NewCol);

export {
  NewRow as Row,
  NewCol as Col
};
