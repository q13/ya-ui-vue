import Vue from 'vue';
import './theme-default/checklist.css';
import Checklist from 'mint-ui/lib/checklist';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Checklist.name, 'mt-', 'm-'), Checklist);
export default Checklist;