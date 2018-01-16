(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ya_deps_utils"] = factory();
	else
		root["ya_deps_utils"] = factory();
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElementUiComponentPrefix", function() { return replaceElementUiComponentPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceMintUiComponentPrefix", function() { return replaceMintUiComponentPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceComponentPrefix", function() { return replaceComponentPrefix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/**
 * 替换组件name前缀
 * @param {string} name
 * @param {string} prefix1
 * @param {string} prefix2
 */
function replaceComponentPrefix(name, prefix1, prefix2) {
  if (prefix1 === 'el-') {
    prefix1 = 'El';
  }
  if (prefix2 === 'y-') {
    prefix2 = 'Y';
  }
  return name.replace(prefix1, prefix2);
};

/**
 * 获取对应组件库的前缀预设
 * @param {string} libName
 */
function getProperComponentPrefix(libName) {
  var libPrefix = Object.assign({ // 库前缀自定义
    'element-ui': 'el',
    'mint-ui': 'mt'
  }, window.__lib_prefix__ || {});
  return libPrefix[libName];
}
/**
 * 替换element-ui组件前缀
 */
function replaceElementUiComponentPrefix(Ctor) {
  var libPrefix = getProperComponentPrefix('element-ui');
  var name = Ctor.name;
  var newName = name.slice(2);
  newName = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["upperFirst"])(libPrefix) + newName;
  Ctor.name = newName; // 替换成新的组件名
  return Ctor;
}
/**
 * 替换mint-ui组件前缀
 */
function replaceMintUiComponentPrefix(Ctor) {
  var libPrefix = getProperComponentPrefix('mint-ui');
  var name = Ctor.name;
  var newName = name.slice(3);
  newName = libPrefix + '-' + newName;
  Ctor.name = newName; // 替换成新的组件名
  return Ctor;
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);
});
//# sourceMappingURL=utils.js.map