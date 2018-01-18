
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { steps, step } from 'vue-beauty';
import {
  replaceVueBeautyComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewSteps = shim(steps); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewSteps);
// 自动注册组件
Vue.component(NewSteps.globalName, NewSteps);

const NewStep = shim(step); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewStep);
// 自动注册组件
Vue.component(NewStep.globalName, NewStep);

export {
  NewSteps as steps,
  NewStep as step
};
