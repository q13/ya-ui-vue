/**
 * 环境设置
 */
var ya = null;
if (!window.ya) {
  ya = {
    noop: () => {}
  };
}
window.ya = ya;
export default ya;
