import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/carousel-item.css';
import CarouselItem from 'element-ui/lib/carousel-item';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(CarouselItem.name, 'el-', 'y-'), CarouselItem);
export default CarouselItem;