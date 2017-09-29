import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/carousel.css';
import Carousel from 'element-ui/lib/carousel';
Vue.component(Carousel.name, Carousel);
export default Carousel;