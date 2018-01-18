
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { Select, Option, OptionGroup } from 'iview';
import {
  replaceIviewComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewSelect = shim(Select); // 加垫片
// 替换组件前缀
replaceIviewComponentPrefix(NewSelect);
// 自动注册组件
Vue.component(NewSelect.globalName, NewSelect);

const NewOption = shim(Option); // 加垫片
// 替换组件前缀
replaceIviewComponentPrefix(NewOption);
// 自动注册组件
Vue.component(NewOption.globalName, NewOption);

const NewOptionGroup = shim(OptionGroup); // 加垫片
// 替换组件前缀
replaceIviewComponentPrefix(NewOptionGroup);
// 自动注册组件
Vue.component(NewOptionGroup.globalName, NewOptionGroup);

export {
  NewSelect as Select,
  NewOption as Option,
  NewOptionGroup as OptionGroup
};
