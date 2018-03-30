(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["t"] = factory();
	else
		root["t"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Transform react component to vue component
 */
// import {
//   isEqual
// } from 'lodash';





var store = new Map(); // 存储转换过的组件类，不重复生成

/**
 * Transform vue children to react component
 */

var C = function (_React$Component) {
  _inherits(C, _React$Component);

  function C(props) {
    _classCallCheck(this, C);

    var _this = _possibleConstructorReturn(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(C, [{
    key: 'renderVueComponent',
    value: function renderVueComponent() {
      var props = this.props;
      var slot = props.slot;
      var vueComponent = this.vueComponent;
      if (!vueComponent) {
        var el = this.v;

        var _getNormalizeProps = getNormalizeProps(props),
            _getNormalizeProps$in = _getNormalizeProps.innerTag,
            innerTag = _getNormalizeProps$in === undefined ? 'div' : _getNormalizeProps$in,
            _getNormalizeProps$in2 = _getNormalizeProps.innerClass,
            innerClass = _getNormalizeProps$in2 === undefined ? '' : _getNormalizeProps$in2;

        vueComponent = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a({
          el: el,
          data: {
            slot: slot
          },
          render: function render(h) {
            return h(innerTag, {
              class: getNormalizeClass(innerClass)
            }, this.slot);
          }
        });
        this.vueComponent = vueComponent;
      } else {
        vueComponent.slot = slot;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderVueComponent();
    }
    // componentWillReceiveProps() {
    // }
    // shouldComponentUpdate() {
    //   return true;
    // }

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderVueComponent();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.vueComponent) {
        this.vueComponent.$destroy();
        this.vueComponent = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var _getNormalizeProps2 = getNormalizeProps(props),
          _getNormalizeProps2$i = _getNormalizeProps2.innerTag,
          innerTag = _getNormalizeProps2$i === undefined ? 'div' : _getNormalizeProps2$i,
          _getNormalizeProps2$i2 = _getNormalizeProps2.innerClass,
          innerClass = _getNormalizeProps2$i2 === undefined ? '' : _getNormalizeProps2$i2;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(innerTag, {
        ref: function ref(el) {
          _this2.v = el;
        },
        className: getNormalizeClass(innerClass, 'react')
      }, null);
    }
  }]);

  return C;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
/**
 * 返回转换函数
 */


/* harmony default export */ __webpack_exports__["default"] = (function (R) {
  var V = store.get(R);
  if (!V) {
    V = __WEBPACK_IMPORTED_MODULE_2_vue___default.a.extend({
      inheritAttrs: false, // class/style except
      methods: {
        renderReactComponent: function renderReactComponent() {
          var attrs = this.$attrs;
          var slot = this.$slots.default;
          var listeners = this.$listeners;
          // let reactRenderedDom = this.reactRenderedDom; // 兼容preact

          var _getNormalizeProps3 = getNormalizeProps(attrs),
              outerTag = _getNormalizeProps3.outerTag,
              innerTag = _getNormalizeProps3.innerTag,
              outerClass = _getNormalizeProps3.outerClass,
              innerClass = _getNormalizeProps3.innerClass,
              restAttrs = _objectWithoutProperties(_getNormalizeProps3, ['outerTag', 'innerTag', 'outerClass', 'innerClass']);
          // 组装成react props


          var reactProps = _extends({}, restAttrs);
          Object.keys(listeners).forEach(function (eventName) {
            reactProps['on' + capitalize(eventName)] = listeners[eventName];
          });
          var c = null;
          // let e = null;
          if (slot) {
            c = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(C, {
              slot: slot,
              innerTag: innerTag,
              innerClass: innerClass
            }, null);
          }
          var r = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(R, reactProps, c);
          this.$r = r; // 保存react引用
          return __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(r, this.$refs.r);
        }
      },
      mounted: function mounted() {
        this.renderReactComponent();
      },
      updated: function updated() {
        this.renderReactComponent();
      },
      beforeDestroy: function beforeDestroy() {
        this.$r = null; // 释放$r引用
        __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unmountComponentAtNode(this.$refs.r);
      },
      render: function render(h) {
        var _getNormalizeProps4 = getNormalizeProps(this.$attrs),
            _getNormalizeProps4$o = _getNormalizeProps4.outerTag,
            outerTag = _getNormalizeProps4$o === undefined ? 'div' : _getNormalizeProps4$o,
            _getNormalizeProps4$o2 = _getNormalizeProps4.outerClass,
            outerClass = _getNormalizeProps4$o2 === undefined ? '' : _getNormalizeProps4$o2;

        return h(outerTag, {
          ref: 'r',
          class: getNormalizeClass(outerClass)
        });
      }
    });
  }
  return V;
});;

/**
 * 首字母大写
 * @param {String} str - string
 */
function capitalize(str) {
  var _str = _toArray(str),
      first = _str[0],
      rest = _str.slice(1);

  return first.toUpperCase() + rest.join('');
}
/**
 * 标准化class
 * @param {Mix} value - 混合类型，可能是string/object/array
 * @param {String} type - vue/react
 */
function getNormalizeClass(value) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'vue';

  var result = {};
  if (typeof value === 'string') {
    value = value.split(/\s+/).filter(function (v) {
      return !!v;
    });
    if (value.length) {
      value.forEach(function (className) {
        result[className] = true;
      });
    }
  } else if (Array.isArray(value)) {
    value.forEach(function (className) {
      result[className] = true;
    });
  } else {
    result = value;
  }
  if (type === 'react') {
    result = Object.keys(result).filter(function (className) {
      return result[className];
    }).join(' ');
  }
  return result;
}

/**
 * 标准化属性
 * @param {Object} props - 待格式化属性
 */
function getNormalizeProps(props) {
  var extraKeys = new Map([['outer-tag', 'outerTag'], ['outer-class', 'outerClass'], ['inner-tag', 'innerTag'], ['inner-class', 'innerClass']]);
  return Object.keys(props).reduce(function (pv, cv) {
    if (extraKeys.has(cv)) {
      return _extends({}, pv, _defineProperty({}, extraKeys.get(cv), props[cv]));
    } else {
      return _extends({}, pv, _defineProperty({}, cv, props[cv]));
    }
  }, {});
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ })
/******/ ]);
});
//# sourceMappingURL=t.js.map