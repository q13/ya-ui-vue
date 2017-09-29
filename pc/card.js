import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/card.css';
import Card from 'element-ui/lib/card';
Vue.component(Card.name, Card);
export default Card;