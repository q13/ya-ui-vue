import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/carousel.css';
import Carousel from 'element-ui/lib/carousel';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Carousel.name, 'el-', 'y-'), Carousel);
export default Carousel;