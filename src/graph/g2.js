/**
 * G2封装，与vue绑定
 */
import Vue from 'vue';
import {
  Chart
} from '@antv/g2';

// 图表默认配置项
const cfg = {
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 500
  },
  padding: {
    default: 'auto'
  },
  background: {
    type: Object
  },
  plotBackground: {
    type: Object
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
    default() {
      return [];
    }
  }
};

const ChartVue = Vue.component('g2-chart', {
  props: {
    configs: {
      type: Object,
      default() {
        return {};
      }
    },
    ...cfg,
    onDraw: {
      type: Function,
      default(graph) {
        graph.render(); // 默认图表渲染
      }
    }
  },
  data() {
    return {
      graphData: null // 保存最近一次graph数据，在下次rerender时可以取用
    };
  },
  // template: '<div><div ref="container"></div>{{ padding.top }}</div>',
  render(h) {
    return h('div', {
      ref: 'container'
    });
  },
  watch: {
    ...Object.keys(cfg).concat('configs').reduce((pv, cv) => {
      if (cv !== 'data') { // 排除data
        return {
          ...pv,
          [cv]: {
            handler() {
              // 防止同时改变多个attr引发多次create行为
              clearTimeout(this.createGraphTid);
              this.createGraphTid = setTimeout(() => {
                this.createGraph();
              }, 0);
            },
            deep: true // 深度watch
          }
        };
      } else {
        return pv;
      }
    }, {})
  },
  methods: {
    getGraphConfigs() {
      // 获取merged图表配置项
      let configs = Object.keys(cfg).reduce((pv, cv) => {
        if (typeof this[cv] !== 'undefined') {
          return {
            ...pv,
            [cv]: this[cv]
          };
        } else {
          return pv;
        }
      }, {});
      // this.configs优先级更高
      configs = {
        ...configs,
        ...this.configs
      };
      if (this.graphData) {
        configs.data = this.graphData;
      }
      return configs;
    },
    /**
     * 创建graph
     */
    createGraph() {
      const container = this.$refs.container;
      if (this.core) { // 先销毁原来的graph
        this.core.destroy();
      }
      const configs = this.getGraphConfigs();
      // 保存引用
      this.core = new Chart({
        container,
        ...configs
      });
      // 绑定事件
      this.bindEvents();
      // 执行绘制
      this.onDraw(this.core);
    },
    /**
     * 绑定事件
     */
    bindEvents() {
      const listeners = this.$listeners;
      const core = this.core;
      Object.keys(listeners).forEach((evtType) => {
        core.on(evtType, listeners[evtType]); // 图表事件注册
      });
    },
    /**
     * 代理graph off方法
     */
    off(...args) {
      const core = this.core;
      core.off.apply(core, args);
    },
    /**
     * 封装g2方法
     */
    graph(method, ...args) {
      const core = this.core;
      if (!core) {
        console.error('Graph not render');
      } else {
        const fn = core[method];
        if (!fn) {
          console.warn('There is no ' + method + ' on graph');
        } else {
          const result = fn.apply(core, args);
          if (method === 'source' || method === 'changeData') { // 保留最近一次data引用
            this.graphData = args[0];
            if (method === 'source') {
              // 执行绘制
              this.onDraw(this.core);
            }
          }
          return result;
        }
      }
    }
  },
  mounted() {
    this.createGraph();
  },
  destroyed() {
    // 销毁事宜
    clearTimeout(this.createGraphTid);
    this.createGraphTid = null;
    if (this.core) {
      this.core.off();
      this.core.destroy();
      this.core = null;
    }
  }
});

export default ChartVue;

export * from '@antv/g2';
