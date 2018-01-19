
/**
 * Component proxy
 * by 13
 */
import { steps, step } from 'vue-beauty';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewSteps = wrap(steps); // 加垫片
// 加垫片注册
NewSteps = mapComponent({
  Ctor: NewSteps,
  libName: 'vue-beauty'
});

let NewStep = wrap(step); // 加垫片
// 加垫片注册
NewSteps = mapComponent({
  Ctor: NewStep,
  libName: 'vue-beauty'
});

export {
  NewSteps as steps,
  NewStep as step
};
