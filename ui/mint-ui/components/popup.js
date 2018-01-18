(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ya-ui-vue/deps/utils"));
	else if(typeof define === 'function' && define.amd)
		define(["ya-ui-vue/deps/utils"], factory);
	else if(typeof exports === 'object')
		exports["ya_mint-ui_popup"] = factory(require("ya-ui-vue/deps/utils"));
	else
		root["ya_mint-ui_popup"] = factory(root["ya-ui-vue/deps/utils"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui_lib_popup_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui_lib_popup_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui_lib_popup_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deps_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deps_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_deps_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shim__ = __webpack_require__(66);

/**
 * Button proxy
 * by 13
 */





var NewCtor = Object(__WEBPACK_IMPORTED_MODULE_3__shim__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_mint_ui_lib_popup_index___default.a); // 加垫片
// 替换组件前缀
Object(__WEBPACK_IMPORTED_MODULE_2_deps_utils__["replaceMintUiComponentPrefix"])(NewCtor);
// 自动注册组件
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(NewCtor.globalName, NewCtor);

/* harmony default export */ __webpack_exports__["default"] = (NewCtor);

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = require("mint-ui/lib/popup/index");

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 垫片侵入
 * by 13
 */
function shim(Ctor) {
  // 扩展
  var methods = Ctor.mixins[0].methods;
  var _doOpen = methods.doOpen;

  var Popup = Vue.component('m-popup', {
    extends: Ctor,
    methods: {
      doOpen: function doOpen(props) {
        var modal = props.modal;
        var lockScroll = props.lockScroll;
        if (modal && lockScroll) {
          var winScrollTop = document.body.scrollTop + document.documentElement.scrollTop;
          this.winScrollTop = winScrollTop; // window scroll top
          var childNodes = Array.prototype.slice.call(document.body.childNodes, 0);
          childNodes.some(function (node) {
            if (node.style && node.tagName === 'DIV') {
              // 只找第一个div
              // node.style.transform = 'translateY(-' + winScrollTop  + 'px)';
              node.style.marginTop = -winScrollTop + 'px';
              return true;
            }
          });
        }
        return _doOpen.apply(this, arguments);
      },
      doClose: function doClose() {
        var _this = this;

        this.visible = false;
        this.$emit('input', false);
        this._closing = true;

        this.onClose && this.onClose();

        if (this.lockScroll) {
          clearTimeout(this.closeTid);
          this.closeTid = setTimeout(function () {
            if (_this.modal && _this.bodyOverflow !== 'hidden') {
              document.body.style.overflow = _this.bodyOverflow;
              document.body.style.paddingRight = _this.bodyPaddingRight;
            }
            _this.bodyOverflow = null;
            _this.bodyPaddingRight = null;
            if (_this.winScrollTop !== -1) {
              var childNodes = Array.prototype.slice.call(document.body.childNodes, 0);
              childNodes.some(function (node) {
                if (node.style && node.tagName === 'DIV') {
                  // 只找第一个div
                  // node.style.transform = 'none';
                  node.style.marginTop = 'auto';
                  return true;
                }
              });
              window.scrollTo(0, _this.winScrollTop);
              _this.winScrollTop = -1;
            }
          }, 100);
        }

        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      }
    }
  });
  return Popup;
}
/* harmony default export */ __webpack_exports__["a"] = (shim);

/***/ })

/******/ });
});
//# sourceMappingURL=popup.js.map