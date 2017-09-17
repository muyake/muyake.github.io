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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var clipObj = exports.clipObj = {
    canvas: null,
    radius: 0,
    start: false,
    maxRadius: 0,
    flag: true, //true为减小，false为增大。
    init: function init(overcallback, resetcallback) {
        this.canvas = element.mycanvas;
        var width = this.canvas.width;
        var height = this.canvas.height;

        this.maxRadius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;

        this.radius = this.maxRadius;
        this.context = gameControl.context;
        this.overCallback = overcallback;
        this.resetCallback = resetcallback;
    },
    setClippingRegion: function setClippingRegion(radius) {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2, radius, 0, Math.PI * 2, false);
        this.context.clip();
    },
    fillCanvas: function fillCanvas(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    drawAnimationFrame: function drawAnimationFrame(radius) {
        this.fillCanvas('black');
        this.setClippingRegion(radius);
    },
    startDraw: function startDraw() {
        this.start = true;
    },
    draw: function draw() {
        if (this.start == true) {
            if (!(this.radius > this.maxRadius)) {
                if (this.radius > 0 && this.flag) {
                    this.radius -= this.canvas.width / 150;
                    this.radius = this.radius < 0 ? 0 : this.radius;
                } else {
                    if (this.flag == true) {
                        this.resetCallback();
                    }

                    this.flag = false;
                    this.radius += this.canvas.width / 150;
                }

                this.drawAnimationFrame(this.radius);
            } else {
                this.endAnimation();
            }
        }
    },
    endAnimation: function endAnimation() {
        this.start = false;
        this.flag = true;
        this.radius = this.canvas.width / 2;
        this.overCallback();
        //this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
};

/***/ })

/******/ });