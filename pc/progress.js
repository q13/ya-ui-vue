import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/progress.css';
import Progress from 'element-ui/lib/progress';
Vue.component(Progress.name, Progress);
export default Progress;