
/**
 * Component proxy
 * by 13
 */
import { layout, sider, header, content, footer } from 'vue-beauty';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewLayout = wrap(layout); // 加垫片
// 加垫片注册
NewLayout = mapComponent({
  Ctor: NewLayout,
  libName: 'vue-beauty'
});

let NewSider = wrap(sider); // 加垫片
// 加垫片注册
NewSider = mapComponent({
  Ctor: NewSider,
  libName: 'vue-beauty'
});

let NewHeader = wrap(header); // 加垫片
// 加垫片注册
NewHeader = mapComponent({
  Ctor: NewHeader,
  libName: 'vue-beauty'
});

let NewContent = wrap(content); // 加垫片
// 加垫片注册
NewContent = mapComponent({
  Ctor: NewContent,
  libName: 'vue-beauty'
});

let NewFooter = wrap(footer); // 加垫片
// 加垫片注册
NewFooter = mapComponent({
  Ctor: NewFooter,
  libName: 'vue-beauty'
});

export {
  NewLayout as layout,
  NewSider as sider,
  NewHeader as header,
  NewContent as content,
  NewFooter as footer
};
