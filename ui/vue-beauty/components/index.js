(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ya_vue-beauty_index"] = factory();
	else
		root["ya_vue-beauty_index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/13/Project/ya-ui-vue/ui/vue-beauty/src/components/index/index.js: Unexpected token, expected { (42:7)\n\n\u001b[0m \u001b[90m 40 | \u001b[39m\u001b[36mimport\u001b[39m spin from \u001b[32m'../spin/index'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 41 | \u001b[39m\u001b[36mimport\u001b[39m steps from \u001b[32m'../steps/index'\u001b[39m\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 42 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[36mswitch\u001b[39m from \u001b[32m'../switch/index'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 43 | \u001b[39m\u001b[36mimport\u001b[39m tabs from \u001b[32m'../tabs/index'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 44 | \u001b[39m\u001b[36mimport\u001b[39m tag from \u001b[32m'../tag/index'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 45 | \u001b[39m\u001b[36mimport\u001b[39m timePicker from \u001b[32m'../time-picker/index'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map