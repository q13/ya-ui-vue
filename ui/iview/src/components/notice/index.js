
/**
 * Component proxy
 * by 13
 */
import { Notice } from 'iview';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

Notice.name = 'Notice';
let NewCtor = wrap(Notice); // 加垫片
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'iview'
});

export default NewCtor;
