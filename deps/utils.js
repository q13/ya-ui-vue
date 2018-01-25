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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapComponent", function() { return mapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/**
 * 工具库函数集
 */



/**
 * 获取对应组件库的前缀预设
 * @param {string} libName
 */
function getProperComponentPrefix(libName) {
  var libPrefix = Object.assign({ // 库前缀自定义
    'element-ui': 'el',
    'mint-ui': 'mt',
    'iview': 'i',
    'vue-beauty': 'v'
  }, window.__lib_prefix__ || {});
  return libPrefix[libName];
}
/**
 * 获取默认的组件库名称
 */
function getDefaultComponentLibName() {
  var defaultLibName = window.__lib_name__ || '';
  return defaultLibName;
}

/**
 * 获取默认保留关键字列表
 * @param {string} name 库名称
 */
function getKeywordsReservedByLibName(name) {
  var keywords = [];
  if (name === 'iview') {
    keywords = ['Circle', 'Form', 'Col', 'Select', 'Option', 'Switch'];
  } else if (name === 'vue-beauty') {
    keywords = ['Switch'];
  }
  return keywords;
}

/**
 * Map component
 */
function mapComponent(options) {
  var Ctor = options.Ctor,
      libName = options.libName;

  var libPrefix = getProperComponentPrefix(libName);
  var defaultLibName = getDefaultComponentLibName(); // 默认库名
  var keywordsReserved = getKeywordsReservedByLibName(libName); // 保留关键字
  var name = Ctor.name;
  var componentName = '';
  if (libName === 'element-ui') {
    if (name) {
      if (name !== 'MessageBox') {
        componentName = name.slice(2);
      }
      componentName = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["upperFirst"])(libPrefix) + componentName;
    }
  } else if (libName === 'mint-ui') {
    componentName = name.slice(3);
    componentName = libPrefix + '-' + componentName;
  } else if (libName === 'iview') {
    if (keywordsReserved.map(function (keyword) {
      return 'i' + keyword;
    }).some(function (v) {
      return v === name;
    })) {
      name = name.slice(1);
    };
    componentName = name;
    componentName = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["upperFirst"])(libPrefix) + componentName;
  } else if (libName === 'vue-beauty') {
    if (name === 'Switch') {
      Ctor.name = 'Switch_';
    }
    componentName = name;
    componentName = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["upperFirst"])(libPrefix) + componentName;
  }
  if (defaultLibName === libName) {
    // 注册默认库，省略前缀
    if (!keywordsReserved.some(function (keyword) {
      // 排除和保留关键字冲突的组件名注册
      return keyword === name;
    })) {
      __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(name, Ctor);
    }
  }
  // 注册global component
  var Cpt = null;
  if (componentName) {
    Cpt = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(componentName, Ctor);
  } else {
    Cpt = Ctor;
  }
  return Cpt;
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);
});
//# sourceMappingURL=utils.js.map