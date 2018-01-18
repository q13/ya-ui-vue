
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { layout, sider, header, content, footer } from 'vue-beauty';
import {
  replaceVueBeautyComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewLayout = shim(layout); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewLayout);
// 自动注册组件
Vue.component(NewLayout.globalName, NewLayout);

const NewSider = shim(sider); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewSider);
// 自动注册组件
Vue.component(NewSider.globalName, NewSider);

const NewHeader = shim(header); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewHeader);
// 自动注册组件
Vue.component(NewHeader.globalName, NewHeader);

const NewContent = shim(content); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewContent);
// 自动注册组件
Vue.component(NewContent.globalName, NewContent);

const NewFooter = shim(footer); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewFooter);
// 自动注册组件
Vue.component(NewFooter.globalName, NewFooter);

export {
  NewLayout as layout,
  NewSider as sider,
  NewHeader as header,
  NewContent as content,
  NewFooter as footer
};
