
/**
 * Component proxy
 * by 13
 */
import { progressLine, progressCircle } from 'vue-beauty';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewProgressLine = wrap(progressLine); // 加垫片
// 加垫片注册
NewProgressLine = mapComponent({
  Ctor: NewProgressLine,
  libName: 'vue-beauty'
});

let NewProgressCircle = wrap(progressCircle); // 加垫片
// 加垫片注册
NewProgressCircle = mapComponent({
  Ctor: NewProgressCircle,
  libName: 'vue-beauty'
});

export {
  NewProgressLine as progressLine,
  NewProgressCircle as progressCircle
};
