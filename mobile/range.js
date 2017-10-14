import Vue from 'vue';
import './theme-default/range.css';
import Range from 'mint-ui/lib/range';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Range.name, 'mt-', 'm-'), Range);
export default Range;