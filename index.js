/**
 * pc和mobile转接
 */
import pc from './src/pc/index';
import mobile from './src/mobile/index';
export default function ui(type='pc') {
  if (type === 'pc') {
    return pc;
  } else if (type === 'mobile') {
    return mobile;
  }
};