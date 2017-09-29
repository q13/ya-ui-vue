import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/upload.css';
import Upload from 'element-ui/lib/upload';
Vue.component(Upload.name, Upload);
export default Upload;
