import Vue from 'vue';
import './theme-default/palette-button.css';
import PaletteButton from 'mint-ui/lib/palette-button';
import {
  replaceComponentPrefix
} from '../src/deps/utils';
Vue.component(replaceComponentPrefix(PaletteButton.name, 'mt-', 'm-'), PaletteButton);
export default PaletteButton;