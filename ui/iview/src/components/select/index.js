
/**
 * Component proxy
 * by 13
 */
import { Select, Option, OptionGroup } from 'iview';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewSelect = wrap(Select); // 加垫片
// 加垫片注册
NewSelect = mapComponent({
  Ctor: NewSelect,
  libName: 'iview'
});

let NewOption = wrap(Option); // 加垫片
// 加垫片注册
NewOption = mapComponent({
  Ctor: NewOption,
  libName: 'iview'
});

let NewOptionGroup = wrap(OptionGroup); // 加垫片
// 加垫片注册
NewOptionGroup = mapComponent({
  Ctor: NewOptionGroup,
  libName: 'iview'
});
export {
  NewSelect as Select,
  NewOption as Option,
  NewOptionGroup as OptionGroup
};
