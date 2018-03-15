/**
 * 移动端示例
 */
import Vue from 'vue';
import template from './template.html';
import Gesture from '../../../src/plugins/gesture';

Vue.use(Gesture);

export default function () {
  return {
    template,
    methods: {
      handleTap(event) {
        console.log('event', event);
        alert(event.type);
      },
      handleSwipe(event) {
        console.log('event', event);
        alert(event.type);
      },
      handleTouchstart(event) {
        var touchs = event.changedTouches;
        console.log('touchs', touchs);
        for (var i = 0; i < event.changedTouches.length; i++) {
          var touch = event.changedTouches[i];
          // alert(touch.identifier);
          this.$refs.test.innerHTML = touch.identifier;
        }
      }
    }
  };
};
