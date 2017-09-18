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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var publicConfig = {
  GRAVITY_FORCE: 353 //9.8 * 2 * 18,
  //pixelsPerMeter : element.width / ARENA_LENGTH_IN_METERS,
};
var monsterConfig = {

  config: {
    totalCount: 5,
    sprite_0: {
      width: 50,
      height: 61,
      left: 0,
      top: 0
    },

    sprite_1: {
      width: 50,
      height: 61,
      left: 58,
      top: 0
    },

    sprite_2: {
      width: 50,
      height: 61,
      left: 119,
      top: 0
    },

    sprite_3: {
      width: 50,
      height: 61,
      left: 179,
      top: 0
    },

    sprite_4: {
      width: 50,
      height: 61,
      left: 240,
      top: 0
    }
  }
};

var tortoiseConfig = {

  config: {
    totalCount: 12,
    sprite_11: {
      width: 54,
      height: 67,
      left: 0,
      top: 0
    },

    sprite_10: {
      width: 54,
      height: 67,
      left: 54,
      top: 0
    },

    sprite_9: {
      width: 54,
      height: 67,
      left: 108,
      top: 0
    },

    sprite_8: {
      width: 54,
      height: 67,
      left: 162,
      top: 0
    },

    sprite_7: {
      width: 54,
      height: 67,
      left: 216,
      top: 0
    },
    sprite_6: {
      width: 54,
      height: 67,
      left: 270,
      top: 0
    },

    sprite_5: {
      width: 54,
      height: 67,
      left: 324,
      top: 0
    },

    sprite_4: {
      width: 54,
      height: 67,
      left: 378,
      top: 0
    },

    sprite_3: {
      width: 54,
      height: 67,
      left: 432,
      top: 0
    },

    sprite_2: {
      width: 54,
      height: 67,
      left: 486,
      top: 0
    },
    sprite_1: {
      width: 54,
      height: 67,
      left: 540,
      top: 0
    },

    sprite_0: {
      width: 54,
      height: 67,
      left: 594,
      top: 0
    }
  }
};

var shellConfig = {

  config: {
    totalCount: 12,
    sprite_11: {
      width: 45,
      height: 43,
      left: 135,
      top: 0
    },
    sprite_10: {
      width: 45,
      height: 43,
      left: 180,
      top: 0
    },

    sprite_9: {
      width: 45,
      height: 43,
      left: 225,
      top: 0
    },

    sprite_8: {
      width: 45,
      height: 43,
      left: 0,
      top: 0
    },

    sprite_7: {
      width: 45,
      height: 43,
      left: 45,
      top: 0
    },

    sprite_6: {
      width: 45,
      height: 43,
      left: 225,
      top: 0
    },
    sprite_5: {
      width: 45,
      height: 43,
      left: 405,
      top: 0
    },

    sprite_4: {
      width: 45,
      height: 43,
      left: 450,
      top: 0
    },

    sprite_3: {
      width: 45,
      height: 43,
      left: 495,
      top: 0
    },

    sprite_2: {
      width: 45,
      height: 43,
      left: 270,
      top: 0
    },

    sprite_1: {
      width: 45,
      height: 43,
      left: 315,
      top: 0
    },
    sprite_0: {
      width: 45,
      height: 43,
      left: 360,
      top: 0
    }

  }
};
var lifeConfig = {
  config: {
    totalCount: 5,
    sprite_1: { height: 46, width: 124, left: 0, top: 0 },
    sprite_4: { height: 47, width: 127, left: 0, top: 46 },
    sprite_3: { height: 48, width: 128, left: 0, top: 93 },
    sprite_5: { height: 48, width: 129, left: 0, top: 141 },
    sprite_2: { height: 47, width: 129, left: 0, top: 189 }
  }
};
var badFlowerConfig = {

  config: {
    totalCount: 35,
    sprite_34: { height: 6, width: 40, left: 0, top: 0 },
    sprite_8: { height: 38, width: 44, left: 0, top: 6 },
    sprite_35: { height: 5, width: 45, left: 0, top: 44 },
    sprite_28: { height: 31, width: 45, left: 0, top: 49 },
    sprite_29: { height: 27, width: 45, left: 0, top: 80 },
    sprite_19: { height: 57, width: 45, left: 0, top: 107 },
    sprite_0: { height: 11, width: 45, left: 0, top: 164 },
    sprite_33: { height: 10, width: 46, left: 0, top: 175 },
    sprite_27: { height: 32, width: 46, left: 0, top: 185 },
    sprite_9: { height: 43, width: 46, left: 0, top: 217 },
    sprite_20: { height: 53, width: 46, left: 0, top: 260 },
    sprite_7: { height: 33, width: 46, left: 0, top: 313 },
    sprite_30: { height: 22, width: 47, left: 0, top: 346 },
    sprite_2: { height: 18, width: 48, left: 0, top: 368 },
    sprite_1: { height: 15, width: 48, left: 0, top: 386 },
    sprite_26: { height: 32, width: 48, left: 0, top: 401 },
    sprite_10: { height: 49, width: 48, left: 0, top: 433 },
    sprite_23: { height: 38, width: 49, left: 0, top: 482 },
    sprite_21: { height: 51, width: 49, left: 0, top: 520 },
    sprite_3: { height: 19, width: 50, left: 0, top: 571 },
    sprite_22: { height: 48, width: 51, left: 0, top: 590 },
    sprite_11: { height: 46, width: 51, left: 0, top: 638 },
    sprite_31: { height: 19, width: 51, left: 0, top: 684 },
    sprite_32: { height: 14, width: 53, left: 0, top: 703 },
    sprite_18: { height: 58, width: 53, left: 0, top: 717 },
    sprite_12: { height: 46, width: 54, left: 0, top: 775 },
    sprite_25: { height: 31, width: 54, left: 0, top: 821 },
    sprite_13: { height: 46, width: 55, left: 0, top: 852 },
    sprite_17: { height: 58, width: 55, left: 0, top: 898 },
    sprite_24: { height: 34, width: 55, left: 0, top: 956 },
    sprite_6: { height: 30, width: 56, left: 0, top: 990 },
    sprite_4: { height: 20, width: 57, left: 0, top: 1020 },
    sprite_14: { height: 55, width: 58, left: 0, top: 1040 },
    sprite_5: { height: 21, width: 59, left: 0, top: 1095 },
    sprite_15: { height: 59, width: 59, left: 0, top: 1116 },
    sprite_16: { height: 67, width: 62, left: 0, top: 1175 }
  }
  //马里奥动画配置参数
};var marioConfig = {

  config: {
    totalCount: 21,
    sprite_0: {
      width: 50,
      height: 62,
      left: 5,
      top: 5
    },

    sprite_1: {
      width: 53,
      height: 68,
      left: 65,
      top: 5
    },

    sprite_10: {
      width: 50,
      height: 64,
      left: 128,
      top: 5
    },

    sprite_11: {
      width: 50,
      height: 67,
      left: 188,
      top: 5
    },

    sprite_12: {
      width: 39,
      height: 68,
      left: 248,
      top: 5
    },

    sprite_13: {
      width: 35,
      height: 68,
      left: 5,
      top: 83
    },

    sprite_14: {
      width: 32,
      height: 68,
      left: 50,
      top: 83
    },

    sprite_15: {
      width: 33,
      height: 68,
      left: 92,
      top: 83
    },

    sprite_16: {
      width: 32,
      height: 68,
      left: 135,
      top: 83
    },

    sprite_17: {
      width: 35,
      height: 72,
      left: 177,
      top: 83
    },

    sprite_18: {
      width: 36,
      height: 73,
      left: 222,
      top: 83
    },

    sprite_19: {
      width: 44,
      height: 69,
      left: 5,
      top: 166
    },

    sprite_2: {
      width: 48,
      height: 68,
      left: 59,
      top: 166
    },

    sprite_20: {
      width: 48,
      height: 65,
      left: 117,
      top: 166
    },

    sprite_21: {
      width: 49,
      height: 63,
      left: 175,
      top: 166
    },

    sprite_3: {
      width: 48,
      height: 69,
      left: 234,
      top: 166
    },

    sprite_4: {
      width: 44,
      height: 68,
      left: 297,
      top: 5
    },

    sprite_5: {
      width: 39,
      height: 72,
      left: 268,
      top: 83
    },

    sprite_6: {
      width: 40,
      height: 71,
      left: 292,
      top: 165
    },

    sprite_7: {
      width: 44,
      height: 68,
      left: 5,
      top: 246
    },

    sprite_8: {
      width: 50,
      height: 63,
      left: 59,
      top: 246
    },
    sprite_9: {
      width: 53,
      height: 63,
      left: 119,
      top: 246
    }
  }
};

var bulletConfig = {
  RV: 980, //旋转角速度
  VX: 240
};
var WH = {
  wall: {
    width: 35,
    height: 35
  },
  life: {
    width: 127 * 0.5,
    height: 48 * 0.5
  },
  badflower: {
    width: 55 * 0.5,
    height: 58 * 0.5
  },
  monster: {
    width: 50 * 0.4,
    height: 61 * 0.4
  },
  tortoise: {
    width: 54 * 0.4,
    height: 67 * 0.4
  },
  tower: {
    width: 279 * 0.85,
    height: 342 * 0.6
  },
  shell: {
    width: 45 * 0.4,
    height: 43 * 0.4
  },
  hole: {
    width: 167 * 0.7,
    height: 73 * 0.7
  },
  bullet: {
    width: 24,
    height: 24
  },
  MAX: {
    width: 45
  },
  flower: {
    width: 35,
    height: 35
  },
  star: {
    width: 35,
    height: 35
  },
  mushroom: {
    width: 35,
    height: 35
  },
  money: {
    width: 35,
    height: 35
  },
  mario: {
    bigstatus: {
      width: 33,
      height: 68
    },
    smallstatus: {
      width: 33 * 0.5,
      height: 68 * 0.5
    }
  },
  pipe: {
    width: 45,
    height: 94
  },
  flag: {
    width: 81 * 0.5,
    height: 70 * 0.5
  },
  final: {
    width: 75 * 0.5,
    height: 450 * 0.5
  }
};
var wallConfig = {
  normalSprite: {
    width: 50,
    height: 50,
    left: 215,
    top: 0
  },
  abnormalwall: {
    height: 50,
    width: 50,
    left: 115,
    top: 0
  },

  afterabnormalSprite: {
    height: 50,
    width: 50,
    left: 165,
    top: 0
  },
  leftupSprite: {
    height: 23,
    width: 23,
    left: 0,
    top: 0
  },
  leftdownSprite: {
    height: 30,
    width: 30,
    left: 51,
    top: 0
  },
  rightupSprite: {
    height: 33,
    width: 35,
    left: 80,
    top: 0
  },
  rightdownSprite: {
    height: 30,
    width: 28,
    left: 23,
    top: 0
  }
};

var marioGameConfig = {
  bigJumpV: 320,
  smallJumpV: 200
};
var element = {
  mycanvas: document.getElementById('mycanvas'),
  mycanvasWidth: document.getElementById('mycanvas').width,
  mycanvasHeight: document.getElementById('mycanvas').height,
  progressDiv: document.getElementById('load'),
  tipDiv: document.querySelector('.tip'),
  progressBox: document.querySelector('.loadDiv')
};
var gameConfig = {
  // wallSpeed: 90,  // moneySpeed:90,
  shellSpeed: 100,
  monsterSpeed: 70,
  objectSpeed: 60,
  progressObjSpeed: -2,
  objectSpeedRate: 60 / 2, //表示显示的米数与实际的距离的比值。
  skySpeed: 32,
  setSpeedDefault: function setSpeedDefault() {
    this.objectSpeed = 60;
    this.progressObjSpeed = -2;
    this.skySpeed = 60;
  },
  setSpeedZero: function setSpeedZero() {
    this.objectSpeed = 0;
    this.progressObjSpeed = 0;
    this.skySpeed = 0;
  },

  roadHeight: 10

};
exports.publicConfig = publicConfig;
exports.monsterConfig = monsterConfig;
exports.tortoiseConfig = tortoiseConfig;
exports.shellConfig = shellConfig;
exports.lifeConfig = lifeConfig;
exports.badFlowerConfig = badFlowerConfig;
exports.marioConfig = marioConfig;
exports.bulletConfig = bulletConfig;
exports.WH = WH;
exports.wallConfig = wallConfig;
exports.marioGameConfig = marioGameConfig;
exports.element = element;
exports.gameConfig = gameConfig;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MairoSpriteAnimator = exports.MoveSpriteAnimator = exports.BrikeSpriteAnimator = exports.RiseSpriteAnimator = exports.BulletJumpSpriteAnimator = exports.DownSpriteAnimator = exports.UpSpriteAnimator = exports.CharacterSpriteAnimator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteAnimator = __webpack_require__(9);

var _config = __webpack_require__(0);

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
                var whRate = _config.WH.mario.bigstatus.width / _config.WH.mario.bigstatus.height;
                this.sprite.width += this.sprite.risespeed * whRate / this.sprite.fpsNum;
                this.sprite.top -= this.sprite.risespeed / this.sprite.fpsNum;
                this.sprite.left -= this.sprite.risespeed * whRate / this.sprite.fpsNum / 2;
                if (this.sprite.risespeed > 0 && this.sprite.height < this.sprite.initialHeight || this.sprite.risespeed < 0 && this.sprite.height > this.sprite.initialHeight) {
                    this.sprite.isRising = true;
                } else {
                    // this.sprite.upover=true;
                    this.sprite.height = this.sprite.initialHeight;
                    var whrate = _config.WH.mario.bigstatus.width / _config.WH.mario.bigstatus.height;
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
                if (-this.sprite.translateLeft < _config.element.mycanvasWidth - 100) {
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

exports.CharacterSpriteAnimator = CharacterSpriteAnimator;
exports.UpSpriteAnimator = UpSpriteAnimator;
exports.DownSpriteAnimator = DownSpriteAnimator;
exports.BulletJumpSpriteAnimator = BulletJumpSpriteAnimator;
exports.RiseSpriteAnimator = RiseSpriteAnimator;
exports.BrikeSpriteAnimator = BrikeSpriteAnimator;
exports.MoveSpriteAnimator = MoveSpriteAnimator;
exports.MairoSpriteAnimator = MairoSpriteAnimator;

/***/ }),

/***/ 9:
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