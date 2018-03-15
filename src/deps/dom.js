/**
 * dom方法封装
 */
import ya from './env';

var Dom = function (el) {
  if (!(this instanceof Dom)) {
    return new Dom(el);
  } else {
    this[0] = this.element = el;
  }
};
ya.dom = Dom; // 保留在ya下引用
// 扩展dom方法
Object.assign(Dom.prototype, {
  /**
   * 取得距离页面左右角的坐标
   */
  offset: function () {
    var node = this[0];
    try {
      var rect = node.getBoundingClientRect();
      // Make sure element is not hidden (display: none) or disconnected
      // https://github.com/jquery/jquery/pull/2043/files#r23981494
      if (rect.width || rect.height || node.getClientRects().length) {
        var doc = node.ownerDocument;
        var root = doc.documentElement;
        var win = doc.defaultView;
        return {
          top: rect.top + win.pageYOffset - root.clientTop,
          left: rect.left + win.pageXOffset - root.clientLeft
        };
      }
    } catch (e) {
      return {
        left: 0,
        top: 0
      };
    }
  }
});

export default Dom;

// alias
export var root = document.documentElement;
