import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/upload.css';
import Upload from 'element-ui/lib/upload';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(Upload.name, 'el-', 'y-'), Upload);
export default Upload;
