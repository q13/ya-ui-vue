import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/slider.css';
import Slider from 'element-ui/lib/slider';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Slider.name, 'el-', 'y-'), Slider);
export default Slider;
