
/**
 * Component proxy
 * by 13
 */
import { BackTop } from 'iview';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

BackTop.name = 'BackTop';
let NewCtor = wrap(BackTop); // 加垫片
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'iview'
});

export default NewCtor;
