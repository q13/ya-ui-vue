
/**
 * 组件封装
 * by 13
 */
function wrap(Ctor) {
  Ctor.methods.handleInput = function (event) {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    var tempValue = event.target.value;
    this.debounceTimer = setTimeout(() => {
      this.setCurrentValue(tempValue);
    }, this.debounce);
  };
  // 扩展
  return Ctor;
}
export default wrap;
