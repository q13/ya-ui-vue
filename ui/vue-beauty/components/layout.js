(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ya-ui-vue/deps/utils"));
	else if(typeof define === 'function' && define.amd)
		define(["ya-ui-vue/deps/utils"], factory);
	else if(typeof exports === 'object')
		exports["ya_vue-beauty_layout"] = factory(require("ya-ui-vue/deps/utils"));
	else
		root["ya_vue-beauty_layout"] = factory(root["ya-ui-vue/deps/utils"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue-beauty");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return NewLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sider", function() { return NewSider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return NewHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return NewContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return NewFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_beauty__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_beauty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_beauty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deps_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deps_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deps_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wrap__ = __webpack_require__(43);

/**
 * Component proxy
 * by 13
 */




var NewLayout = Object(__WEBPACK_IMPORTED_MODULE_2__wrap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_vue_beauty__["layout"]); // 加垫片
// 加垫片注册
NewLayout = Object(__WEBPACK_IMPORTED_MODULE_1_deps_utils__["mapComponent"])({
  Ctor: NewLayout,
  libName: 'vue-beauty'
});

var NewSider = Object(__WEBPACK_IMPORTED_MODULE_2__wrap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_vue_beauty__["sider"]); // 加垫片
// 加垫片注册
NewSider = Object(__WEBPACK_IMPORTED_MODULE_1_deps_utils__["mapComponent"])({
  Ctor: NewSider,
  libName: 'vue-beauty'
});

var NewHeader = Object(__WEBPACK_IMPORTED_MODULE_2__wrap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_vue_beauty__["header"]); // 加垫片
// 加垫片注册
NewHeader = Object(__WEBPACK_IMPORTED_MODULE_1_deps_utils__["mapComponent"])({
  Ctor: NewHeader,
  libName: 'vue-beauty'
});

var NewContent = Object(__WEBPACK_IMPORTED_MODULE_2__wrap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_vue_beauty__["content"]); // 加垫片
// 加垫片注册
NewContent = Object(__WEBPACK_IMPORTED_MODULE_1_deps_utils__["mapComponent"])({
  Ctor: NewContent,
  libName: 'vue-beauty'
});

var NewFooter = Object(__WEBPACK_IMPORTED_MODULE_2__wrap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_vue_beauty__["footer"]); // 加垫片
// 加垫片注册
NewFooter = Object(__WEBPACK_IMPORTED_MODULE_1_deps_utils__["mapComponent"])({
  Ctor: NewFooter,
  libName: 'vue-beauty'
});



/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * 组件封装
 * by 13
 */
function wrap(Ctor) {
  // 扩展
  return Ctor;
}
/* harmony default export */ __webpack_exports__["a"] = (wrap);

/***/ })

/******/ });
});
//# sourceMappingURL=layout.js.map