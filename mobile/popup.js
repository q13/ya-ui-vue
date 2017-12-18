import Vue from 'vue';
import './theme-default/popup.css';
import OriginPopup from 'mint-ui/lib/popup';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
// Vue.component(replaceComponentPrefix(Popup.name, 'mt-', 'm-'), Popup);
const methods = OriginPopup.mixins[0].methods;
const doOpen = methods.doOpen;
const doClose = methods.doClose;

const Popup = Vue.component('m-popup', {
  extends: OriginPopup,
  methods: {
    doOpen(props) {
      const modal = props.modal;
      const lockScroll = props.lockScroll;
      if (modal && lockScroll) {
        const winScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
        this.winScrollTop = winScrollTop; // window scroll top
        const childNodes = Array.prototype.slice.call(document.body.childNodes, 0);
        childNodes.some((node) => {
          if (node.style && node.tagName === 'DIV') { // 只找第一个div
            // node.style.transform = 'translateY(-' + winScrollTop  + 'px)';
            node.style.marginTop = -winScrollTop  + 'px';
            return true;
          }
        });
      }
      return doOpen.apply(this, arguments);
    },
    doClose() {
      this.visible = false;
      this.$emit('input', false);
      this._closing = true;

      this.onClose && this.onClose();

      if (this.lockScroll) {
        clearTimeout(this.closeTid);
        this.closeTid = setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
          if (this.winScrollTop !== -1) {
            window.scrollTo(0, this.winScrollTop);
            this.winScrollTop = -1;
            const childNodes = Array.prototype.slice.call(document.body.childNodes, 0);
            childNodes.some((node) => {
              if (node.style && node.tagName === 'DIV') { // 只找第一个div
                // node.style.transform = 'none';
                node.style.marginTop = 'auto';
                return true;
              }
            });
          }
        }, 100);
      }

      this.opened = false;

      if (!this.transition) {
        this.doAfterClose();
      }
    }
  }
});
export default Popup;
