import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/carousel-item.css';
import CarouselItem from 'element-ui/lib/carousel-item';
Vue.component(CarouselItem.name, CarouselItem);
export default CarouselItem;