import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/tag.css';
import Tag from 'element-ui/lib/tag';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Tag.name, 'el-', 'y-'), Tag);
export default Tag;
