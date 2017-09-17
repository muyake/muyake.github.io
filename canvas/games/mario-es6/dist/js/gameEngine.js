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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getTimeNow = function getTimeNow() {
    return +new Date();
};

var Game = exports.Game = function () {
    function Game(gameName, canvas) {
        _classCallCheck(this, Game);

        // let canvas = document.getElementById(canvasId);           
        this.speed = 1;
        this.context = canvas.getContext('2d');
        this.gameName = gameName;
        this.sprites = [];
        this.keyListeners = [];
        this.gamePause = false;
        // Time
        this.startTime = 0;
        this.lastTime = 0;
        this.gameTime = 0;
        this.fps = {
            num: 0,
            interval: 1000,
            lastTime: 0
        };
        this.STARTING_FPS = 60;
        this.paused = false;
        this.startedPauseAt = 0;
        this.PAUSE_TIMEOUT = 100;

        var self = this;
        window.onkeypress = function (e) {
            self.activeEvent(e, 1);
        };
        window.onkeydown = function (e) {
            self.activeEvent(e, 1);
        };
        window.onkeyup = function (e) {
            self.activeEvent(e, 0);
        };
    }

    _createClass(Game, [{
        key: 'start',
        value: function start() {
            var self = this;
            this.startTime = getTimeNow();
            window.requestNextAnimationFrame(function (time) {
                self.animate.call(self, time);
            });
        }
    }, {
        key: 'animate',
        value: function animate(time) {
            var self = this;
            //this.updateFrameRate(time);
            if (this.paused) {
                //每隔100ms，看看是否还处于暂停状态，不需要太频繁。
                setTimeout(function () {
                    window.requestNextAnimationFrame(function (time) {
                        self.animate.call(self, time);
                    });
                }, this.PAUSE_TIMEOUT);
            } else {
                this.tick(time);
                this.clearScreen();
                this.startAnimate(time);
                this.lastTime = time;
                window.requestNextAnimationFrame(function (time) {
                    self.animate.call(self, time);
                });
            }
        }
    }, {
        key: 'clearScreen',
        value: function clearScreen() {
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        }
    }, {
        key: 'tick',
        value: function tick(time) {
            this.updateFrameRate(time);
            this.gameTime = getTimeNow() - this.startTime;
        }
    }, {
        key: 'updateFrameRate',
        value: function updateFrameRate(time) {
            if (this.lastTime === 0) {
                this.fps.num = this.STARTING_FPS;
            } else {
                if (time - this.fps.lastTime > this.fps.interval) {
                    this.fps.num = 1000 / (time - this.lastTime);
                    this.fps.lastTime = time;;
                }
            }
        }
    }, {
        key: 'paintUnderSprites',
        value: function paintUnderSprites(time) {}

        //监听事件

    }, {
        key: 'addKeyListener',
        value: function addKeyListener(keyAndListener) {
            this.keyListeners.push(keyAndListener);
        }
    }, {
        key: 'findKeyListener',
        value: function findKeyListener(key) {
            var listener = undefined;
            for (var i = 0; i < this.keyListeners.length; i++) {
                var keyAndListener = this.keyListeners[i];
                var currentKey = keyAndListener.key;
                if (currentKey === key) {
                    listener = keyAndListener.listener;
                }
            }
            return listener;
        }
    }, {
        key: 'activeEvent',
        value: function activeEvent(e, status) {

            var listener = undefined;
            var key = undefined;
            switch (e.keyCode) {
                case 32:
                    key = 'space';
                    break;
                case 68:
                    key = 'd';
                    break;
                case 87:
                    key = 'w';
                    break;
                case 75:
                    key = 'k';
                    break;
                case 83:
                    key = 's';
                    break;
                case 80:
                    key = 'p';
                    break;
                case 37:
                    key = 'left';
                    break;
                case 39:
                    key = 'right';
                    break;
                case 38:
                    key = 'up';
                    break;
                case 40:
                    key = 'down';
                    break;
            }
            listener = this.findKeyListener(key);
            if (listener) {
                listener(status);
            }
        }
    }, {
        key: 'togglePaused',
        value: function togglePaused() {
            var now = getTimeNow();
            this.paused = !this.paused;
            if (this.paused) {
                this.startedPauseAt = now;
                this.fps.lastTime = now;;
            } else {
                this.startTime = this.startTime + now - this.startedPauseAt;
                this.lastTime = now;
            }
        }
    }, {
        key: 'startAnimate',
        value: function startAnimate(time) {}
    }]);

    return Game;
}();

/***/ })
/******/ ]);