import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/color-picker.css';
import ColorPicker from 'element-ui/lib/color-picker';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(ColorPicker.name, 'el-', 'y-'), ColorPicker);
export default ColorPicker;