/* eslint-disable */
/**
 * vue-beauty 示例
 */
import '../../../ui/vue-beauty/themes/default/index.css';
import '../../../ui/vue-beauty/components/button';
import '../../../ui/vue-beauty/components/menu';

export default function() {
  return {
    template: `<div>
      <v-button>111</v-button>
      <v-menu style="width:240px" mode="inline" :data="inlineMenuData"></v-menu>
    </div>`,
    data() {
      return {
        inlineMenuData: [{
          name: '导航一',
          icon: 'mail',
          groups: [{
            groupName: "分组1",
            list: [{
              name: "选项1"
            }, {
              name: "选项2"
            }]
          }, {
            groupName: "分组2",
            list: [{
              name: "选项3"
            }, {
              name: "选项4"
            }]
          }]
        }, {
          name: '导航二',
          icon: 'appstore',
          children: [{
            name: "选项5"
          }, {
            name: "选项6"
          }, {
            name: "三级导航",
            children: [{
              name: "选项7"
            }, {
              name: "选项8"
            }]
          }]
        }, {
          name: '导航三',
          icon: 'setting',
          children: [{
            name: "选项9"
          }, {
            name: "选项10"
          }, {
            name: "选项11"
          }, {
            name: "选项12"
          }]
        }]
      };
    }
  };
}
