/**
 * 手势识别器
 */
import { merge } from 'lodash';
import ya from '../deps/env';

var ua = navigator.userAgent.toLowerCase();
// http://stackoverflow.com/questions/9038625/detect-if-device-is-ios
function iOSversion() {
  // https://developer.apple.com/library/prerelease/mac/releasenotes/General/WhatsNewInSafari/Articles/Safari_9.html
  // http://mp.weixin.qq.com/s?__biz=MzA3MDQ4MzQzMg==&mid=256900619&idx=1&sn=b29f84cff0b8d7b9742e5d8b3cd8f218&scene=1&srcid=1009F9l4gh9nZ7rcQJEhmf7Q#rd
  if (/iPad|iPhone|iPod/i.test(ua) && !window.MSStream) {
    if ('backdropFilter' in document.documentElement.style) {
      return 9;
    }
    if (!!window.indexedDB) {
      return 8;
    }
    if (!!window.SpeechSynthesisUtterance) {
      return 7;
    }
    if (!!window.webkitAudioContext) {
      return 6;
    }
    if (!!window.matchMedia) {
      return 5;
    }
    if (!!window.history && 'pushState' in window.history) {
      return 4;
    }
    return 3;
  }
  return NaN;
}

var events = {}; // 存储手势事件名
var hooks = {}; // 按手势类存储apply/unapply
// 保存引用
ya.gesture = {
  events,
  hooks
};
var Recognizer = (ya.gestureHooks = {
  isAndroid: ua.indexOf('android') > 0,
  isIOS: iOSversion(),
  pointers: {},
  // 以AOP切入touchstart, touchmove, touchend, touchcancel回调
  start: function (event, callback) {
    // touches是当前屏幕上所有触摸点的列表;
    // targetTouches是当前对象上所有触摸点的列表;
    // changedTouches是涉及当前事件的触摸点的列表。
    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      // var pointer = {
      //   startTouch: mixLocations({}, touch),
      //   startTime: Date.now(),
      //   status: 'tapping',
      //   element: event.target
      // };
      var pointer = Object.assign((Recognizer.pointers[touch.identifier] || {}), {
        startTouch: mixLocations({}, touch),
        startTime: Date.now(),
        status: 'tapping',
        element: event.target
      });
      // console.log('id', touch.identifier);
      // console.log('point', pointer);
      Recognizer.pointers[touch.identifier] = pointer;
      callback(pointer, touch);
    }
  },
  move: function (event, callback) {
    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var pointer = Recognizer.pointers[touch.identifier];
      if (!pointer) {
        return;
      }

      if (!('lastTouch' in pointer)) {
        pointer.lastTouch = pointer.startTouch;
        pointer.lastTime = pointer.startTime;
        pointer.deltaX = pointer.deltaY = pointer.duration = pointer.distance = 0;
      }

      var time = Date.now() - pointer.lastTime;

      if (time > 0) {
        var RECORD_DURATION = 70;
        if (time > RECORD_DURATION) {
          time = RECORD_DURATION;
        }
        if (pointer.duration + time > RECORD_DURATION) {
          pointer.duration = RECORD_DURATION - time;
        }

        pointer.duration += time;
        pointer.lastTouch = mixLocations({}, touch);

        pointer.lastTime = Date.now();

        pointer.deltaX = touch.clientX - pointer.startTouch.clientX;
        pointer.deltaY = touch.clientY - pointer.startTouch.clientY;
        var x = pointer.deltaX * pointer.deltaX;
        var y = pointer.deltaY * pointer.deltaY;
        pointer.distance = Math.sqrt(x + y);
        pointer.isVertical = x < y;

        callback(pointer, touch);
      }
    }
  },
  end: function (event, callback) {
    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var id = touch.identifier;
      var pointer = Recognizer.pointers[id];
      console.log('end', Recognizer.pointers);

      if (!pointer) continue;

      callback(pointer, touch);
      delete Recognizer.pointers[id];
    }
  },
  // 人工触发合成事件
  fire: function (elem, type, props) {
    console.log('fire', type);
    if (elem) {
      var event = document.createEvent('Events');
      event.initEvent(type, true, true);
      merge(event, props);
      elem.dispatchEvent(event);
    }
  },
  // 添加各种识别器
  add: function (name, recognizer) {
    function move(event) {
      recognizer.touchmove(event);
    }

    function end(event) {
      recognizer.touchend(event);

      document.removeEventListener('touchmove', move);

      document.removeEventListener('touchend', end);

      document.removeEventListener('touchcancel', cancel);
    }

    function cancel(event) {
      recognizer.touchcancel(event);

      document.removeEventListener('touchmove', move);

      document.removeEventListener('touchend', end);

      document.removeEventListener('touchcancel', cancel);
    }
    // 注册事件名和hooks
    events[name] = {};
    recognizer.events.forEach(function (eventName) {
      events[name][eventName] = 1;
    });
    hooks[name] = {
      /**
       * 赋予element手势能力
       * @param {HTMLElement} el - element
       */
      apply(el) {
        if (!el['touch-' + name]) {
          el['touch-' + name] = 1;
          const handler = function (event) {
            recognizer.touchstart(event);

            document.addEventListener('touchmove', move);

            document.addEventListener('touchend', end);

            document.addEventListener('touchcancel', cancel);
          }
          el.addEventListener('touchstart', handler);
          // 保留引用
          hooks[name].handler = handler;
        }
      },
      /**
       * 取消element手势能力
       * @param {HTMLElement} el - element
       */
      unapply(el) {
        el.removeEventListener('touchstart', hooks[name].handler);
        delete el['touch-' + name];
        delete hooks[name].handler;
      }
    };
  }
});

var locations = ['screenX', 'screenY', 'clientX', 'clientY', 'pageX', 'pageY'];

// 复制 touch 对象上的有用属性到固定对象上
function mixLocations(target, source) {
  if (source) {
    locations.forEach(function (key) {
      target[key] = source[key];
    });
  }
  return target;
}

export { Recognizer, events, hooks };
