/**
 * iview 示例
 */
import '../../../ui/iview/themes/default/index.css';
import '../../../ui/iview/components/button';
import '../../../ui/iview/components/slider';

export default function () {

  return {
    template: `<div>
      <Button>111</Button>
      <Slider v-model="value"></Slider>
    </div>`,
    data() {
      return {
        value: 25
      };
    }
  };
}
