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


var imgUrlArr = [];
for (var i = 6; i < 11; i++) {
    imgUrlArr.push('http://www.muyake.site/web/pubuliu/' + i + '.jpg');
}

function loadImage(uri, callback) {
    if (typeof callback != 'function') {
        callback = function callback(uri) {
            console.log(uri);
        };
    }
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.timeout = 1000;
    xhr.onload = function () {
        callback(window.URL.createObjectURL(xhr.response));
    };
    xhr.onprogress = function (event) {
        if (event.lengthComputable) {
            addProgress(uri, event.loaded, event.total);
        }
    };
    xhr.onreadystatechange = function (e) {};
    xhr.onloadstart = function (e) {
        console.log('onloadstart');
    };
    xhr.onabort = function () {
        console.log('传输取消。');
    };
    xhr.onerror = function () {
        console.log('传输错误。');
    };
    xhr.onloadend = function () {
        console.log('传输结束。');
    };
    xhr.ontimeout = function (event) {
        console.log('请求超时！');
    };
    xhr.open('GET', uri, true);
    xhr.send();
}
var addProgress = function addProgress(uri, percent, totalSize) {
    var barSelector = document.querySelector('.progress-bar');
    barSelector.style.width = percent / totalSize * 100 + '%';
    document.querySelector('.result').innerHTML = uri + percent / totalSize * 100 + '%';
};

var i = 0;

function loadArr(i) {
    loadImage(imgUrlArr[i], function (url) {
        var img = new Image();
        img.src = url;
        img.style.width = "80px";
        img.style.height = "80px";
        // 插入预览图片
        document.querySelector(".imgcontainer").appendChild(img);
        ++i;
        if (i < imgUrlArr.length) {
            loadArr(i);
        }
    });
}
loadArr(i);

/***/ })
/******/ ]);