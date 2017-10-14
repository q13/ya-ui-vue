/**
 * 替换组件name前缀
 * @param {string} name 
 * @param {string} prefix1 
 * @param {string} prefix2 
 */
export function replaceComponentPrefix(name, prefix1, prefix2) {
  if (prefix1 === 'el-') {
    prefix1 = 'El';
  }
  if (prefix2 === 'y-') {
    prefix2 = 'Y';
  }
  return name.replace(prefix1, prefix2);
};