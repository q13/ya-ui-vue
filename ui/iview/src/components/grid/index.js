
/**
 * Component proxy
 * by 13
 */
import { Row, Col } from 'iview';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewRow = wrap(Row); // 加垫片
// 加垫片注册
NewRow = mapComponent({
  Ctor: NewRow,
  libName: 'iview'
});

let NewCol = wrap(Col); // 加垫片
// 加垫片注册
NewCol = mapComponent({
  Ctor: NewCol,
  libName: 'iview'
});

export {
  NewRow as Row,
  NewCol as Col
};
