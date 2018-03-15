/**
 * Add gesture for vue directives
 */
import { hooks } from '../gesture/recognizer';
// import '../gesture/drag';
// import '../gesture/pinch';
import '../gesture/press';
// import '../gesture/rotate';
import '../gesture/swipe';
// import '../gesture/tap';

var Gesture = {};

Gesture.install = function (Vue, options) {
  Vue.directive('gesture', {
    // 卸载组件时解绑
    unbind (el, binding, vnode, oldVnode) {
      const gestureCateName = binding.arg; // 手势类名
      if (gestureCateName) { // 取消指定手势类
        hooks[gestureCateName].unapply(el);
      } else { // 取消所有手势
        Object.keys(hooks).forEach((name) => {
          hooks[name].unapply(el);
        });
      }
    },
    bind (el, binding, vnode, oldVnode) {
      const gestureCateName = binding.arg; // 手势类名
      if (gestureCateName) { // 赋予指定手势类功能
        hooks[gestureCateName].apply(el);
      } else { // 赋予所有手势
        Object.keys(hooks).forEach((name) => {
          hooks[name].apply(el);
        });
      }
    }
  });
};

export default Gesture;
