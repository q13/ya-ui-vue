
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { col, row } from 'vue-beauty';
import {
  replaceVueBeautyComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewCol = shim(col); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewCol);
// 自动注册组件
Vue.component(NewCol.globalName, NewCol);

const NewRow = shim(row); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewRow);
// 自动注册组件
Vue.component(NewRow.globalName, NewRow);

export {
  NewCol as col,
  NewRow as row
};
