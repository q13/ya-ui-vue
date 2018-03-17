/**
 * ant mobile示例
 */
import t from '../../../src/rv/t';
import template from './template.html';
import Button from 'antd-mobile/lib/button';
import { DatePicker, List, Switch } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; // or antd/lib/button/style/css for css format file

console.log('Dp', DatePicker);

export default function () {
  return {
    template,
    data() {
      return {
        visible: true,
        text: 'test',
        removed: false,
        now: new Date()
      };
    },
    created() {
      setTimeout(() => {
        // this.visible = true;
        this.text = 'test2';
        // alert(1);
        // this.removed = true;
      }, 5000);
    },
    methods: {
      handleChange(data) {
        console.log(data);
      },
      handleClick(evt) {
        this.visible = true;
        console.log(evt.type);
      },
      handleCancel() {
        this.visible = false;
      },
      handleOk(data) {
        this.visible = false;
      }
    },
    components: {
      MyButton: t(Button),
      MyDatePicker: t(DatePicker),
      MySwitch: t(Switch),
      ListItem: t(List.Item)
    }
  };
};
