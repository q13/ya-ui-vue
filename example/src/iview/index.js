/**
 * iview 示例
 */
import '../../../ui/iview/themes/default/index.css';
import '../../../ui/iview/components/button';
import '../../../ui/iview/components/slider';

export default function () {

  return {
    template: `<div>
      <i-button>111</i-button>
      <i-slider v-model="value"></i-slider>
    </div>`,
    data() {
      return {
        value: 25
      };
    }
  };
}
