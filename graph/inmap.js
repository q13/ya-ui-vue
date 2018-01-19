(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["inmap"] = factory();
	else
		root["inmap"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("inmap");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inmap__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inmap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inmap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1_inmap__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1_inmap__[key]; }) }(__WEBPACK_IMPORT_KEY__));
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * inmap封装，与vue绑定
 */




var counts = 0; // 计数
var Inmap = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('inmap', {
  props: {
    mapConfigs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    overlayConfigs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    overlayType: 'dot',
    onDraw: {
      type: Function,
      default: function _default(map, overlay) {
        map.add(overlay); // 添加图层
      }
    }
  },
  data: function data() {
    return {};
  },

  // template: '<div><div ref="container"></div>{{ padding.top }}</div>',
  render: function render(h) {
    return h('div', {
      ref: 'container',
      attrs: {
        id: 'inmap-' + counts++
      }
    });
  },

  watch: _extends({}, ['mapConfigs', 'overlayConfigs'].reduce(function (pv, cv) {
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
  }, {})),
  methods: {
    /**
     * 创建inmap和overlay
     */
    createGraph: function createGraph() {
      var containerId = this.$refs.container.id;
      if (this.core) {
        // 先销毁原来的graph
        this.core.destroy();
      }
      var mapConfigs = this.mapConfigs;
      // 保存引用
      this.map = new __WEBPACK_IMPORTED_MODULE_1_inmap___default.a.Map(_extends({
        id: containerId
      }, mapConfigs));
      var overlayType = this.overlayType;
      var overlayConfigs = this.overlayConfigs;
      this.overlay = new __WEBPACK_IMPORTED_MODULE_1_inmap___default.a[Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["upperFirst"])(overlayType) + 'Overlay'](_extends({}, overlayConfigs));
      // 绑定事件
      this.bindEvents();

      //调用onDraw
      this.onDraw(this.map, this.overlay);
    },

    /**
     * 绑定事件
     */
    bindEvents: function bindEvents() {
      var listeners = this.$listeners;
      var map = this.map;
      Object.keys(listeners).forEach(function (evtType) {
        map.on(evtType, listeners[evtType]); // 图表事件注册
      });
    },

    /**
     * 代理graph off方法
     */
    off: function off() {
      var map = this.map;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      map.off.apply(map, args);
    },

    /**
     * 封装map和overlay方法
     */
    map: function map(method) {
      var map = this.map;
      if (!map) {
        console.error('map not render');
      } else {
        var fn = map[method];
        if (!fn) {
          console.warn('There is no ' + method + ' on map');
        } else {
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          var result = fn.apply(map, args);
          return result;
        }
      }
    },
    overlay: function overlay(method) {
      var overlay = this.overlay;
      if (!overlay) {
        console.error('overlay not render');
      } else {
        var fn = overlay[method];
        if (!fn) {
          console.warn('There is no ' + method + ' on map');
        } else {
          for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }

          var result = fn.apply(overlay, args);
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

/* harmony default export */ __webpack_exports__["default"] = (Inmap);



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);
});
//# sourceMappingURL=inmap.js.map