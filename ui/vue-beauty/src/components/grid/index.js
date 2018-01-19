
/**
 * Component proxy
 * by 13
 */
import { col, row } from 'vue-beauty';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewCol = wrap(col); // 加垫片
// 加垫片注册
NewCol = mapComponent({
  Ctor: NewCol,
  libName: 'vue-beauty'
});

let NewRow = wrap(row); // 加垫片
// 加垫片注册
NewRow = mapComponent({
  Ctor: NewRow,
  libName: 'vue-beauty'
});

export {
  NewCol as col,
  NewRow as row
};
