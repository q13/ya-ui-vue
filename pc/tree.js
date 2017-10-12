import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/tree.css';
import Tree from 'element-ui/lib/tree';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Tree.name, 'el-', 'y-'), Tree);
export default Tree;
