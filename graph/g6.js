(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["g6"] = factory();
	else
		root["g6"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@antv/g6");

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Net", function() { return NetVue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return TreeVue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__antv_g6__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__antv_g6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__antv_g6__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__antv_g6__) if(["Net","Tree","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__antv_g6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * G6封装，与vue绑定
 */



var baseCfg = {
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
  var cfg = null;
  var Ctor = null;
  if (type === 'Net') {
    cfg = _extends({}, baseCfg, {
      layout: {
        type: Function
      },
      clipboard: {
        type: Boolean
      },
      rollback: {
        type: Boolean
      }
    });
    Ctor = __WEBPACK_IMPORTED_MODULE_1__antv_g6__["Net"];
  } else if (type === 'Tree') {
    cfg = _extends({}, baseCfg, {
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
    });
    Ctor = __WEBPACK_IMPORTED_MODULE_1__antv_g6__["Tree"];
  }
  // 返回配置项
  return {
    props: _extends({
      configs: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    }, cfg, {
      onDraw: {
        type: Function,
        default: function _default(graph) {
          graph.render(); // 默认图表渲染
        }
      }
    }),
    data: function data() {
      return {
        graphData: null // 保存最近一次graph数据，在下次rerender时可以取用
      };
    },

    // template: '<div><div ref="container"></div>{{ padding.top }}</div>',
    render: function render(h) {
      return h('div', {
        ref: 'container'
      });
    },

    watch: _extends({}, Object.keys(cfg).concat('configs').reduce(function (pv, cv) {
      if (cv !== 'data') {
        // 排除data
        return _extends({}, pv, _defineProperty({}, cv, {
          handler: function handler() {
            var _this = this;

            // 防止同时改变多个attr引发多次create行为
            clearTimeout(this.createGraphTid);
            this.createGraphTid = setTimeout(function () {
              _this.createGraph();
            }, 0);
          },

          deep: true // 深度watch
        }));
      } else {
        return pv;
      }
    }, {})),
    methods: {
      getGraphConfigs: function getGraphConfigs() {
        var _this2 = this;

        // 获取merged图表配置项
        var configs = Object.keys(cfg).reduce(function (pv, cv) {
          if (typeof _this2[cv] !== 'undefined') {
            return _extends({}, pv, _defineProperty({}, cv, _this2[cv]));
          } else {
            return pv;
          }
        }, {});
        // this.configs优先级更高
        configs = _extends({}, configs, this.configs);
        return configs;
      },

      /**
       * 创建graph
       */
      createGraph: function createGraph() {
        var container = this.$refs.container;
        if (this.core) {
          // 先销毁原来的graph
          this.core.destroy();
        }
        var configs = this.getGraphConfigs();
        // 保存引用
        this.core = new Ctor(_extends({
          container: container
        }, configs));
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
      bindEvents: function bindEvents() {
        var listeners = this.$listeners;
        var core = this.core;
        Object.keys(listeners).forEach(function (evtType) {
          core.on(evtType, listeners[evtType]); // 图表事件注册
        });
      },

      /**
       * 代理graph off方法
       */
      off: function off() {
        var core = this.core;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        core.off.apply(core, args);
      },

      /**
       * 封装g2方法
       */
      graph: function graph(method) {
        var core = this.core;
        if (!core) {
          console.error('Graph not render');
        } else {
          var fn = core[method];
          if (!fn) {
            console.warn('There is no ' + method + ' on graph');
          } else {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            var result = fn.apply(core, args);
            if (method === 'source') {
              // 保留最近一次data引用
              this.graphData = args[0];
              // 执行绘制
              this.onDraw(this.core);
            }
            return result;
          }
        }
      }
    },
    mounted: function mounted() {
      this.createGraph();
    },
    destroyed: function destroyed() {
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

var NetVue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('g6-net', getCfgByType('Net'));
var TreeVue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('g6-tree', getCfgByType('Tree'));




/***/ })

/******/ });
});
//# sourceMappingURL=g6.js.map