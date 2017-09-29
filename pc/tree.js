import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/tree.css';
import Tree from 'element-ui/lib/tree';
Vue.component(Tree.name, Tree);
export default Tree;
