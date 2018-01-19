
/**
 * Component proxy
 * by 13
 */
import Ctor from 'element-ui/lib/radio-button';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewCtor = wrap(Ctor); // 封装
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'element-ui'
});

export default NewCtor;
