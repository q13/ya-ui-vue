
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { progressLine, progressCircle } from 'vue-beauty';
import {
  replaceVueBeautyComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewProgressLine = shim(progressLine); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewProgressLine);
// 自动注册组件
Vue.component(NewProgressLine.globalName, NewProgressLine);

const NewProgressCircle = shim(progressCircle); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewProgressCircle);
// 自动注册组件
Vue.component(NewProgressCircle.globalName, NewProgressCircle);

export {
  NewProgressLine as progressLine,
  NewProgressCircle as progressCircle
}
