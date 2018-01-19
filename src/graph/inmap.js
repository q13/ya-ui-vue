/**
 * inmap封装，与vue绑定
 */
import Vue from 'vue';
import inmap from 'inmap';
import {
  upperFirst
} from 'lodash';

var counts = 0; // 计数
const Inmap = Vue.component('inmap', {
  props: {
    mapConfigs: {
      type: Object,
      default() {
        return {};
      }
    },
    overlayConfigs: {
      type: Object,
      default() {
        return {};
      }
    },
    overlayType: 'dot',
    onDraw: {
      type: Function,
      default: function (map, overlay) {
        map.add(overlay); // 添加图层
      }
    }
  },
  data() {
    return {
    };
  },
  // template: '<div><div ref="container"></div>{{ padding.top }}</div>',
  render(h) {
    return h('div', {
      ref: 'container',
      attrs: {
        id: 'inmap-' + (counts++)
      }
    });
  },
  watch: {
    ...['mapConfigs', 'overlayConfigs'].reduce((pv, cv) => {
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
    }, {})
  },
  methods: {
    /**
     * 创建inmap和overlay
     */
    createGraph() {
      const containerId = this.$refs.container.id;
      if (this.core) { // 先销毁原来的graph
        this.core.destroy();
      }
      const mapConfigs = this.mapConfigs;
      // 保存引用
      this.map = new inmap.Map({
        id: containerId,
        ...mapConfigs
      });
      const overlayType = this.overlayType;
      const overlayConfigs = this.overlayConfigs;
      this.overlay = new inmap[upperFirst(overlayType) + 'Overlay']({
        ...overlayConfigs
      });
      // 绑定事件
      this.bindEvents();

      //调用onDraw
      this.onDraw(this.map, this.overlay);
    },
    /**
     * 绑定事件
     */
    bindEvents() {
      const listeners = this.$listeners;
      const map = this.map;
      Object.keys(listeners).forEach((evtType) => {
        map.on(evtType, listeners[evtType]); // 图表事件注册
      });
    },
    /**
     * 代理graph off方法
     */
    off(...args) {
      const map = this.map;
      map.off.apply(map, args);
    },
    /**
     * 封装map和overlay方法
     */
    map(method, ...args) {
      const map = this.map;
      if (!map) {
        console.error('map not render');
      } else {
        const fn = map[method];
        if (!fn) {
          console.warn('There is no ' + method + ' on map');
        } else {
          const result = fn.apply(map, args);
          return result;
        }
      }
    },
    overlay(method, ...args) {
      const overlay = this.overlay;
      if (!overlay) {
        console.error('overlay not render');
      } else {
        const fn = overlay[method];
        if (!fn) {
          console.warn('There is no ' + method + ' on map');
        } else {
          const result = fn.apply(overlay, args);
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
    if (this.map) {
      this.map.off();
      this.map = null;
    }
    if (this.overlay) {
      this.overlay.off();
      this.overlay = null;
    }
  }
});

export default Inmap;

export * from 'inmap';
