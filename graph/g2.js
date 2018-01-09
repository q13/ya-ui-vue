/**
 * G2封装，与vue绑定
 */
import Vue from 'vue';
import {
  Chart
} from '@antv/g2';

async function test () {

}
// 图表默认配置项
const cfg = {
  width: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 0
  },
  padding: {
    default: 'auto'
  },
  background: {
    type: Object,
    default: {}
  },
  plotBackground: {
    type: Object,
    default: {}
  },
  forceFit: {
    type: Boolean,
    default: false
  },
  animate: {
    type: Boolean,
    default: true
  },
  pixelRatio: {
    type: Number
  },
  data: {
    default: []
  }
};

const G2 = Vue.component('g2', {
  props: {
    options: {
      type: Object,
      default: {} // 默认配置项
    },
    ...cfg
  },
  render(h) {
    return h('div', {
      ref: 'container'
    });
  },
  watch: {
    options() {
      // recreate chart
      this.createChart();
    }
  },
  methods: {
    getChartOptions() {
      // 获取merged图表配置项
      let chartOptions = Object.keys(cfg).reduce((pv, cv) => {
        if (typeof this[cv] !== 'undefined') {
          return {
            ...pv,
            [cv]: this[cv]
          };
        } else {
          return pv;
        }
      }, {});
      // options 配置的优先级高
      return {
        ...chartOptions,
        ...this.options
      };
    },
    /**
     * 创建chart
     */
    createChart() {
      if (this.chart) { // 先销毁原来的chart
        this.chart.destroy();
      }
      const chartOptions = this.getChartOptions();
      // 保存引用
      const container = this.$refs.container;
      this.chart = new Chart({
        container,
        ...chartOptions
      });
    }
  },
  mounted() {
    this.createChart();
  }
});

export default G2;
