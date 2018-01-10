/**
 * G6封装，与vue绑定
 */
import Vue from 'vue';
import {
  Net,
  Tree
} from '@antv/g6';

const baseCfg = {
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  fitView: {
    type: [String, Object]
  },
  fitViewPadding: {
    type: Number
  },
  grid: {
    type: Object
  },
  useAnchor: {
    type: Boolean
  },
  mode: {
    type: String
  },
  animate: {
    type: Boolean
  }
};

function getCfgByType(type) {
  let cfg = null;
  let Ctor = null
  if (type === 'Net') {
    cfg = {
      ...baseCfg,
      layout: {
        type: Function
      },
      clipboard: {
        type: Boolean
      },
      rollback: {
        type: Boolean
      }
    };
    Ctor = Net;
  } else if (type === 'Tree') {
    cfg = {
      ...baseCfg,
      layout: {
        type: Function
      },
      showButton: {
        type: Boolean
      },
      layoutFn: {
        type: Function
      },
      layoutCfg: {
        type: Object
      }
    };
    Ctor = Tree;
  }
  // 返回配置项
  return {
    props: {
      ...cfg,
      onDraw: {
        type: Function,
        default: function (graph) {
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
      ...Object.keys(cfg).reduce((pv, cv) => {
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
      getGraphOptions() {
        // 获取merged图表配置项
        let options = Object.keys(cfg).reduce((pv, cv) => {
          if (typeof this[cv] !== 'undefined') {
            return {
              ...pv,
              [cv]: this[cv]
            };
          } else {
            return pv;
          }
        }, {});
        return options;
      },
      /**
       * 创建graph
       */
      createGraph() {
        const container = this.$refs.container;
        if (this.core) { // 先销毁原来的graph
          this.core.destroy();
        }
        const options = this.getGraphOptions();
        // 保存引用
        this.core = new Ctor({
          container,
          ...options
        });
        // 绑定事件
        this.bindEvents();
        if (this.graphData) {
          this.core.source(this.graphData);
        }
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
            if (method === 'source') { // 保留最近一次data引用
              this.graphData = args[0];
              // 执行绘制
              this.onDraw(this.core);
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
  };
}

const NetVue = Vue.component('y-net', getCfgByType('Net'));
const TreeVue = Vue.component('y-tree', getCfgByType('Tree'));

export * from '@antv/g6';
export {
  NetVue as Net,
  TreeVue as Tree
};
