/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var preloadImage = function preloadImage(path) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
};
var g = /*#__PURE__*/regeneratorRuntime.mark(function g() {
    var foo;
    return regeneratorRuntime.wrap(function g$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return getFoo();

                case 3:
                    foo = _context.sent;

                    console.log(foo);
                    _context.next = 10;
                    break;

                case 7:
                    _context.prev = 7;
                    _context.t0 = _context['catch'](0);

                    console.log(_context.t0);

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, g, this, [[0, 7]]);
});
var preLoadObj = {
    imgUrlArr: [],
    //这里可以改正map对象http://www.cnblogs.com/sker/p/5520392.html
    imgObjList: {},
    progressCallback: function progressCallback() {},
    progressOverCallback: function progressOverCallback() {},
    setProgress: function setProgress() {
        var length = this.imgUrlArr.length;
        var count = 0;
        var self = this;
        var promiseArr = [];
        var promises = this.imgUrlArr.map(function (item) {
            return preloadImage(item);
        });
        Promise.all(promises).then(function (posts) {
            self.progressOverCallback();
        }, null, function (num) {
            console.log(num);
        }).catch(function (reason) {
            // ...
        });
    },
    init: function init(option) {
        if (typeof option.imgUrlArr != 'undefined') {
            this.imgUrlArr = option.imgUrlArr;
        }
        if (typeof option.progressCallback != 'undefined') {
            this.progressCallback = option.progressCallback;
        }
        if (typeof option.progressOverCallback != 'undefined') {
            this.progressOverCallback = option.progressOverCallback;
        }
        this.setProgress();
    }
};
var option = {
    imgUrlArr: ['../img/1.jpg', '../img/2.jpg', '../img/3.jpg', '../img/4.jpg', '../img/5.jpg', '../img/6.jpg'],
    progressCallback: function progressCallback(progress) {
        var barSelector = document.querySelector('.progress-bar');
        barSelector.style.width = progress * 100 + '%';
    },
    progressOverCallback: function progressOverCallback() {
        // console.log(preLoadObj.imgObjList['http://www.muyake.site/web/pubuliu/1.jpg'].src);
        console.log('完成加载');
    }
};
preLoadObj.init(option);

/***/ })
/******/ ]);