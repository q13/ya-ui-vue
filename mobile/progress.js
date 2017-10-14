import Vue from 'vue';
import './theme-default/progress.css';
import Progress from 'mint-ui/lib/progress';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Progress.name, 'mt-', 'm-'), Progress);
export default Progress;