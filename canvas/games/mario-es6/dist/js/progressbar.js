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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright (C) 2012 David Geary. This code is from the book
 * Core HTML5 Canvas, published by Prentice-Hall in 2012.
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person 
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

var COREHTML5 = COREHTML5 || {};

COREHTML5.Progressbar = function (div, strokeStyle, red, green, blue) {
  this.domElement = document.createElement('div');
  this.context = document.createElement('canvas').getContext('2d');
  this.domElement.appendChild(this.context.canvas);
  div.appendChild(this.domElement);
  w = div.offsetWidth;
  h = div.offsetHeight;
  this.context.canvas.width = w; // On each end, corner radius = h/2
  this.context.canvas.height = h;

  this.setProgressbarProperties(w, h);

  this.background.globalAlpha = 0.3;
  this.drawToBuffer(this.background, strokeStyle, red, green, blue);
  this.drawToBuffer(this.foreground, strokeStyle, red, green, blue);

  this.percentComplete = 0;
  return this;
};

COREHTML5.Progressbar.prototype = {
  LEFT: 0,
  TOP: 0,

  setProgressbarProperties: function setProgressbarProperties(w, h) {
    this.w = w;
    this.h = h;
    this.cornerRadius = this.h / 2, this.right = this.LEFT + this.w, this.bottom = this.TOP + this.h;

    this.background = document.createElement('canvas').getContext('2d'), this.foreground = document.createElement('canvas').getContext('2d'), this.background.canvas.width = w + h; // On each end, corner radius = h/2
    this.background.canvas.height = h;

    this.foreground.canvas.width = w + h; // On each end, corner radius = h/2
    this.foreground.canvas.height = h;
  },

  draw: function draw(percentComplete) {
    this.erase();
    this.context.drawImage(this.background.canvas, 0, 0);

    if (percentComplete > 0) {
      this.context.drawImage(this.foreground.canvas, 0, 0, this.foreground.canvas.width * (percentComplete / 100), this.foreground.canvas.height, 0, 0, this.foreground.canvas.width * (percentComplete / 100), this.foreground.canvas.height);
    }
  },

  drawToBuffer: function drawToBuffer(context, strokeStyle, red, green, blue) {
    context.save();

    context.fillStyle = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    context.strokeStyle = strokeStyle;

    context.beginPath();

    context.moveTo(this.LEFT + this.cornerRadius, this.TOP);
    context.lineTo(this.right - this.cornerRadius, this.TOP);

    context.arc(this.right - this.cornerRadius, this.TOP + this.cornerRadius, this.cornerRadius, -Math.PI / 2, Math.PI / 2);

    context.lineTo(this.LEFT + this.cornerRadius, this.TOP + this.cornerRadius * 2);

    context.arc(this.LEFT + this.cornerRadius, this.TOP + this.cornerRadius, this.cornerRadius, Math.PI / 2, -Math.PI / 2);

    context.fill();

    context.shadowColor = undefined;

    var gradient = context.createLinearGradient(this.LEFT, this.TOP, this.LEFT, this.bottom);
    gradient.addColorStop(0, 'rgba(255,255,255,0.4)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.7)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.5)');
    gradient.addColorStop(1, 'rgba(255,255,255,0.1)');
    context.fillStyle = gradient;
    context.fill();

    context.lineWidth = 0.4;
    context.stroke();

    context.restore();
  },

  erase: function erase() {
    this.context.clearRect(this.LEFT, this.TOP, this.context.canvas.width, this.context.canvas.height);
  }
};
exports.COREHTML5 = COREHTML5;

/***/ })

/******/ });