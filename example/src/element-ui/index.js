/**
 * element-ui 示例
 */

import '../../../ui/element-ui/src/components/button/styling';
import '../../../ui/element-ui/src/components/select/styling';
import '../../../ui/element-ui/src/components/option/styling';

export default function () {
  return {
    template: `<div>
      <el-button>111</el-button>
      <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>`,
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    }
  };
}
