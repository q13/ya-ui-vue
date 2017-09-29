import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/color-picker.css';
import ColorPicker from 'element-ui/lib/color-picker';
Vue.component(ColorPicker.name, ColorPicker);
export default ColorPicker;