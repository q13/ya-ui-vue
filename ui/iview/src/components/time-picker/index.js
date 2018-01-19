
/**
 * Component proxy
 * by 13
 */
import { TimePicker } from 'iview';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

TimePicker.name = 'TimePicker';
let NewCtor = wrap(TimePicker); // 加垫片
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'iview'
});

export default NewCtor;
