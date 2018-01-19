
/**
 * Component proxy
 * by 13
 */
import { DatePicker } from 'iview';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

DatePicker.name = 'DatePicker';
let NewCtor = wrap(DatePicker); // 加垫片
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'iview'
});

export default NewCtor;
