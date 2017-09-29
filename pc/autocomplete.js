import Vue from 'vue';
import './theme-default/base.css';
import './theme-default/index.css';
import './theme-default/autocomplete.css';
import Autocomplete from 'element-ui/lib/autocomplete';
Vue.component(Autocomplete.name, Autocomplete);
export default Autocomplete;