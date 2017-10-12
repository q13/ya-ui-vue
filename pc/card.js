import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/card.css';
import Card from 'element-ui/lib/card';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Card.name, 'el-', 'y-'), Card);
export default Card;