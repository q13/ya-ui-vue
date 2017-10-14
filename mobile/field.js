import Vue from 'vue';
import './theme-default/field.css';
import Field from 'mint-ui/lib/field';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Field.name, 'mt-', 'm-'), Field);
export default Field;