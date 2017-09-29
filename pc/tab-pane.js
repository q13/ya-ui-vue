import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/tab-pane.css';
import TabPane from 'element-ui/lib/tab-pane';
Vue.component(TabPane.name, TabPane);
export default TabPane;
