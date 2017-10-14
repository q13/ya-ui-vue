import Vue from 'vue';
import './theme-default/button.css';
import IndexSection from 'mint-ui/lib/index-section';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(IndexSection.name, 'mt-', 'm-'), IndexSection);
export default IndexSection;