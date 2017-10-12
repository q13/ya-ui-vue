import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/progress.css';
import Progress from 'element-ui/lib/progress';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Progress.name, 'el-', 'y-'), Progress);
export default Progress;