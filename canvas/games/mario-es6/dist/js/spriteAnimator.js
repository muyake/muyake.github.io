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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteAnimator = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterSpriteAnimator = function (_SpriteAnimator) {
    _inherits(CharacterSpriteAnimator, _SpriteAnimator);

    function CharacterSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, CharacterSpriteAnimator);

        var _this = _possibleConstructorReturn(this, (CharacterSpriteAnimator.__proto__ || Object.getPrototypeOf(CharacterSpriteAnimator)).call(this, undefined, elapsedCallback));

        if (elapsedCallback) {
            _this.elapsedCallback = elapsedCallback;
        }
        _this.sprite = sprite;
        _this.isRunning = false;
        return _this;
    }

    _createClass(CharacterSpriteAnimator, [{
        key: 'end',
        value: function end(sprite) {
            sprite.animating = false;
            if (this.elapsedCallback) {
                this.elapsedCallback(sprite);
            }
        }
    }, {
        key: 'start',
        value: function start() {
            this.isRunning = true;
        }
    }, {
        key: 'execute',
        value: function execute() {
            var animator = this;
            if (animator.isRunning) {
                // console.log(this.sprite.initialTop);
                this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
                this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
                // console.log(this.sprite.top);
                if (this.sprite.top < this.sprite.initialTop) {
                    this.sprite.isJump = true;
                    //this.sprite.painter = this.sprite.jumpPainter;
                } else {
                    this.sprite.top = this.sprite.initialTop;
                    this.sprite.isJump = false;
                    animator.isRunning = false;
                    animator.end(this.sprite); //一定要放到isRunning = false;下面
                }
            }
        }
    }]);

    return CharacterSpriteAnimator;
}(_spriteAnimator.SpriteAnimator);

var UpSpriteAnimator = function (_CharacterSpriteAnima) {
    _inherits(UpSpriteAnimator, _CharacterSpriteAnima);

    function UpSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, UpSpriteAnimator);

        return _possibleConstructorReturn(this, (UpSpriteAnimator.__proto__ || Object.getPrototypeOf(UpSpriteAnimator)).call(this, elapsedCallback, sprite));
    }

    _createClass(UpSpriteAnimator, [{
        key: 'execute',
        value: function execute() {
            var animator = this;
            if (animator.isRunning) {
                //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
                this.sprite.top -= this.sprite.velocityY / this.sprite.fpsNum;
                if (this.sprite.top > this.sprite.initialTop) {
                    this.sprite.isJump = true;
                    // this.sprite.painter = this.sprite.jumpPainter;
                } else {
                    this.sprite.upover = true;
                    this.sprite.top = this.sprite.initialTop;
                    this.sprite.isJump = false;
                    animator.isRunning = false;
                    animator.end(this.sprite); //一定要放到isRunning = false;下面
                }
            }
        }
    }]);

    return UpSpriteAnimator;
}(CharacterSpriteAnimator);

var DownSpriteAnimator = function (_CharacterSpriteAnima2) {
    _inherits(DownSpriteAnimator, _CharacterSpriteAnima2);

    function DownSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, DownSpriteAnimator);

        return _possibleConstructorReturn(this, (DownSpriteAnimator.__proto__ || Object.getPrototypeOf(DownSpriteAnimator)).call(this, elapsedCallback, sprite));
    }

    _createClass(DownSpriteAnimator, [{
        key: 'execute',
        value: function execute() {
            var animator = this;
            if (animator.isRunning) {
                //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
                this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
                //  console.log(this.sprite.top)     
                if (this.sprite.top < this.sprite.initialTop) {
                    this.sprite.isJump = true;
                    // this.sprite.painter = this.sprite.jumpPainter;
                } else {
                    this.sprite.upover = true;
                    this.sprite.top = this.sprite.initialTop;
                    this.sprite.isJump = false;
                    animator.isRunning = false;
                    animator.end(this.sprite); //一定要放到isRunning = false;下面
                }
            }
        }
    }]);

    return DownSpriteAnimator;
}(CharacterSpriteAnimator);

var BulletJumpSpriteAnimator = function (_CharacterSpriteAnima3) {
    _inherits(BulletJumpSpriteAnimator, _CharacterSpriteAnima3);

    function BulletJumpSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, BulletJumpSpriteAnimator);

        return _possibleConstructorReturn(this, (BulletJumpSpriteAnimator.__proto__ || Object.getPrototypeOf(BulletJumpSpriteAnimator)).call(this, elapsedCallback, sprite));
    }

    _createClass(BulletJumpSpriteAnimator, [{
        key: 'execute',
        value: function execute() {
            var animator = this;
            if (animator.isRunning) {
                if (this.sprite.left + this.sprite.width < 0 || this.sprite.left > this.sprite.mycanvas.width) {
                    lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', this.sprite.id);
                }
                this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE * 2 / this.sprite.fpsNum;
                this.sprite.translateLeft += this.sprite.velocityX / this.sprite.fpsNum;
                this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
                if (this.sprite.top < this.sprite.initialTop) {
                    this.sprite.isJump = true;
                    // this.sprite.painter = this.sprite.jumpPainter;
                } else {
                    this.sprite.top = this.sprite.initialTop;
                    //console.log( this.sprite.velocityY);
                    this.sprite.velocityY = -200; //如果设置为-this.sprite.velocityY不能保证每次速度是一样的，因为this.sprite.fpsNum在变换。
                    // this.sprite.velocityY=-this.sprite.velocityY- this.sprite.GRAVITY_FORCE*2 / this.sprite.fpsNum;           
                }
            }
        }
    }]);

    return BulletJumpSpriteAnimator;
}(CharacterSpriteAnimator);

var RiseSpriteAnimator = function (_CharacterSpriteAnima4) {
    _inherits(RiseSpriteAnimator, _CharacterSpriteAnima4);

    function RiseSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, RiseSpriteAnimator);

        return _possibleConstructorReturn(this, (RiseSpriteAnimator.__proto__ || Object.getPrototypeOf(RiseSpriteAnimator)).call(this, elapsedCallback, sprite));
    }

    _createClass(RiseSpriteAnimator, [{
        key: 'execute',
        value: function execute() {
            var animator = this;
            if (animator.isRunning) {
                //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
                this.sprite.height += this.sprite.risespeed / this.sprite.fpsNum;
                var whRate = WH.mario.bigstatus.width / WH.mario.bigstatus.height;
                this.sprite.width += this.sprite.risespeed * whRate / this.sprite.fpsNum;
                this.sprite.top -= this.sprite.risespeed / this.sprite.fpsNum;
                this.sprite.left -= this.sprite.risespeed * whRate / this.sprite.fpsNum / 2;
                if (this.sprite.risespeed > 0 && this.sprite.height < this.sprite.initialHeight || this.sprite.risespeed < 0 && this.sprite.height > this.sprite.initialHeight) {
                    this.sprite.isRising = true;
                } else {
                    // this.sprite.upover=true;
                    this.sprite.height = this.sprite.initialHeight;
                    var whrate = WH.mario.bigstatus.width / WH.mario.bigstatus.height;
                    this.sprite.width = this.sprite.initialHeight * whrate;
                    this.sprite.isRising = false;
                    animator.isRunning = false;
                    animator.end(this.sprite); //一定要放到isRunning = false;下面
                }
            }
        }
    }]);

    return RiseSpriteAnimator;
}(CharacterSpriteAnimator);

var BrikeSpriteAnimator = function (_CharacterSpriteAnima5) {
    _inherits(BrikeSpriteAnimator, _CharacterSpriteAnima5);

    function BrikeSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, BrikeSpriteAnimator);

        return _possibleConstructorReturn(this, (BrikeSpriteAnimator.__proto__ || Object.getPrototypeOf(BrikeSpriteAnimator)).call(this, elapsedCallback, sprite));
    }

    _createClass(BrikeSpriteAnimator, [{
        key: 'execute',
        value: function execute() {
            var animator = this;
            if (animator.isRunning) {
                this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE * 2 / this.sprite.fpsNum;
                this.sprite.translateLeft += this.sprite.velocityX / this.sprite.fpsNum;
                this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
                if (this.sprite.top < this.sprite.initialTop) {
                    this.sprite.isJump = true;
                    //this.sprite.painter = this.sprite.jumpPainter;
                } else {
                    this.sprite.upover = true;
                    this.sprite.top = this.sprite.initialTop;
                    this.sprite.isJump = false;
                    animator.isRunning = false;
                    animator.end(this.sprite); //一定要放到isRunning = false;下面
                }
            }
        }
    }]);

    return BrikeSpriteAnimator;
}(CharacterSpriteAnimator);

var MoveSpriteAnimator = function (_CharacterSpriteAnima6) {
    _inherits(MoveSpriteAnimator, _CharacterSpriteAnima6);

    function MoveSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, MoveSpriteAnimator);

        return _possibleConstructorReturn(this, (MoveSpriteAnimator.__proto__ || Object.getPrototypeOf(MoveSpriteAnimator)).call(this, elapsedCallback, sprite));
    }

    _createClass(MoveSpriteAnimator, [{
        key: 'execute',
        value: function execute() {
            var animator = this;
            if (animator.isRunning) {
                // console.log(this.sprite.translateLeft);
                this.sprite.translateLeft += this.sprite.initvelocityX / this.sprite.fpsNum;
            }
        }
    }]);

    return MoveSpriteAnimator;
}(CharacterSpriteAnimator);

var MairoSpriteAnimator = function (_CharacterSpriteAnima7) {
    _inherits(MairoSpriteAnimator, _CharacterSpriteAnima7);

    function MairoSpriteAnimator(elapsedCallback, sprite) {
        _classCallCheck(this, MairoSpriteAnimator);

        return _possibleConstructorReturn(this, (MairoSpriteAnimator.__proto__ || Object.getPrototypeOf(MairoSpriteAnimator)).call(this, elapsedCallback, sprite));
    }

    _createClass(MairoSpriteAnimator, [{
        key: 'execute',
        value: function execute() {
            var animator = this;
            if (animator.isRunning) {
                if (-this.sprite.translateLeft < element.mycanvasWidth - 100) {
                    this.sprite.translateLeft += this.sprite.initvelocityX / this.sprite.fpsNum;
                } else {
                    animator.isRunning = false;
                    this.sprite.painter = undefined;
                    this.sprite.behaviors = [];
                    this.elapsedCallback();
                }
            }
        }
    }]);

    return MairoSpriteAnimator;
}(CharacterSpriteAnimator);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//这是过程动画，在本游戏中没有用到
var SpriteAnimator = function () {
    function SpriteAnimator() {
        var painters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var elapsedCallback = arguments[1];

        _classCallCheck(this, SpriteAnimator);

        this.painters = painters;
        if (elapsedCallback) {
            this.elapsedCallback = elapsedCallback;
        }
        // this.painters = [];
        this.duration = 1000;
        this.startTime = 0;
        this.index = 0;
        this.elapsedCallback = undefined;
    }

    _createClass(SpriteAnimator, [{
        key: "end",
        value: function end(sprite, originalPainter) {
            sprite.animating = false;
            if (this.elapsedCallback) {
                this.elapsedCallback(sprite);
            } else {
                sprite.painter = originalPainter;
            }
        }
    }, {
        key: "start",
        value: function start(sprite, duration) {
            var endTime = +new Date() + duration;
            var periond = duration / this.painters.length;
            var interval = undefined;
            var animator = this;
            var originalPainter = sprite.painters;
            this.index = 0;
            sprite.animating = true;
            sprite.painter = this.painters[this.index];
            interval = setInterval(function () {
                if (+new Date() < endTime) {
                    sprite.painter = animator.painters[++animator.index];
                } else {
                    animator.end(sprite, originalPainter);
                    clearInterval(interval);
                }
            }, period);
        }
    }]);

    return SpriteAnimator;
}();

exports.SpriteAnimator = SpriteAnimator;

/***/ })

/******/ });