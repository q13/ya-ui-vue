/**
 * ant示例
 */
// import Vue from 'vue';
import template from './template.html';
// import { VuePlugin } from '../../../src/rv/index';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import DatePicker from 'antd/lib/date-picker';
import Tag from 'antd/lib/tag';
import Modal from 'antd/lib/modal';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import 'antd/dist/antd.css'; // or antd/lib/button/style/css for css format file
import t from '../../../src/rv/t';

// Vue.use(VuePlugin);

export default function () {
  return {
    template,
    data() {
      return {
        visible: true,
        text: 'test',
        removed: false
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
      handleClick() {
        this.visible = true;
      },
      handleCancel() {
        this.visible = false;
      }
    },
    components: {
      MyButton: t(Button),
      MyInput: t(Input),
      DatePicker: t(DatePicker),
      Modal: t(Modal),
      Tag: t(Tag),
      MyCol: t(Col),
      MyRow: t(Row),
      VueCpt: {
        template: '<div><my-button>Vue component at React component</my-button></div>',
        components: {
          MyButton: t(Button)
        }
      }
    }
  };
};
