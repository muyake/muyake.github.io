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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

window.requestNextAnimationFrame = function () {
  var originalWebkitRequestAnimationFrame = undefined,
      wrapper = undefined,
      callback = undefined,
      geckoVersion = 0,
      userAgent = navigator.userAgent,
      index = 0,
      self = this;

  // Workaround for Chrome 10 bug where Chrome
  // does not pass the time to the animation function

  if (window.webkitRequestAnimationFrame) {
    // Define the wrapper

    wrapper = function wrapper(time) {
      if (time === undefined) {
        time = +new Date();
      }
      self.callback(time);
    };

    // Make the switch

    originalWebkitRequestAnimationFrame = window.webkitRequestAnimationFrame;

    window.webkitRequestAnimationFrame = function (callback, element) {
      self.callback = callback;

      // Browser calls the wrapper and wrapper calls the callback

      originalWebkitRequestAnimationFrame(wrapper, element);
    };
  }

  //解决requestAnimationFrame回调函数的参数不是时间戳，而是时间间隔的问题
  //

  if (window.requestAnimationFrame) {
    // Define the wrapper

    wrapper = function wrapper(time) {
      // if (time === undefined) {
      time = +new Date();
      // }
      self.callback(time);
    };

    // Make the switch

    originalWebkitRequestAnimationFrame = window.requestAnimationFrame;

    window.requestAnimationFrame = function (callback, element) {
      self.callback = callback;

      // Browser calls the wrapper and wrapper calls the callback

      originalWebkitRequestAnimationFrame(wrapper, element);
    };
  }

  // Workaround for Gecko 2.0, which has a bug in
  // mozRequestAnimationFrame() that restricts animations
  // to 30-40 fps.

  if (window.mozRequestAnimationFrame) {
    // Check the Gecko version. Gecko is used by browsers
    // other than Firefox. Gecko 2.0 corresponds to
    // Firefox 4.0.

    index = userAgent.indexOf('rv:');

    if (userAgent.indexOf('Gecko') != -1) {
      geckoVersion = userAgent.substr(index + 3, 3);

      if (geckoVersion === '2.0') {
        // Forces the return statement to fall through
        // to the setTimeout() function.

        window.mozRequestAnimationFrame = undefined;
      }
    }
  }

  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
    var start = void 0,
        finish = void 0;

    window.setTimeout(function () {
      start = +new Date();
      callback(start);
      finish = +new Date();

      self.timeout = 1000 / 60 - (finish - start);
    }, self.timeout);
  };
}();

/***/ }),

/***/ 1:
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

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gameEngine = __webpack_require__(1);

__webpack_require__(0);

__webpack_require__(17);

var sourceLoadObj = {
    sourceNum: 0,
    currentNum: 0,
    progressbar: new COREHTML5.Progressbar(element.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250),
    loadedCallback: function loadedCallback() {
        var percent = this.currentNum / this.sourceNum * 100;
        this.progressbar.draw(percent);
        if (this.currentNum == this.sourceNum) {
            this.progressOver();
        }
    },
    progressOver: function progressOver() {
        element.mycanvas.style.display = 'block';
        element.progressDiv.style.display = 'none';
        element.tipDiv.style.display = 'block';
        element.progressBox.style.display = 'none';
        //加载图片完成后执行。
        createFactory.init();

        createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
        gameControl.start();
        progressObj.countDownStart();
        //背景音乐响起     
        audioControl.BGMPlay(gameSourceObj.audioList.BGM);
        audioControl.timeupdateAddEventListener(gameSourceObj.audioList.jumpAll);
        audioControl.timeupdateAddEventListener(gameSourceObj.audioList.collision);
        audioControl.timeupdateAddEventListener(gameSourceObj.audioList.music);
        game.init();

        // drawSpriteList.mario.rise(WH.mario.bigstatus.height, 3);
    }

    //gameSourceUrl来自gameSourceUrl.js
};var gameSourceObj = lib.convertToObject(gameSourceUrl, sourceLoadObj);
var game = {
    lastKeyListenerTime: 0,
    init: function init() {
        var self = this;
        clipObj.init(function () {

            console.log('游戏开始');
            gameControl.gamePause = false;
        }, function () {
            if (drawSpriteList.mario.lifeNum > 0) {
                var num = progressObj.mileageNum > 37 * 174 / 100 ? 37 * 174 / 100 : 0;
                self.reset(num);
            } else {
                self.over();
            }
            if (drawSpriteList.isSuccess) {
                self.success();
            }
        });
        this.bindEvent();
    },
    mapKey: {
        "left": false, //left
        "right": false, //right
        "s": false,
        "w": false,
        "d": false,
        "space": false
    },
    over: function over() {
        audioControl.audioPlay(gameSourceObj.audioList.GameOver, gameAudio.GameOver);
        audioControl.BGMPause(gameSourceObj.audioList.BGM);
        drawSpriteList.gameOver.push(new Over({
            name: 'Over'
        }));
    },
    success: function success() {
        var success = new Over({
            name: 'Over'
        });
        success.painter.image.src = gameSourceUrl.imageList.gameSuccess;
        drawSpriteList.gameOver.push(success);
    },
    reset: function reset(num) {
        console.log("reset");
        //时间重置。
        progressObj.totaltime = 300;
        progressObj.countDownWatch.reset();
        progressObj.countDownWatch.start();
        progressObj.mileageNum = num;
        progressObj.createSpriteMileNum = num * gameConfig.objectSpeedRate;
        drawSpriteList.arrayOthersA = [];
        createFactory.arrayTotalProgress.forEach(function (item) {
            if (item.isMonster) {
                item.isAdd = false;
            }
        });
        drawSpriteList.createAnimationSpriteList = [];
        createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);

        drawSpriteList.mario.reset();
        drawSpriteList.statusArr.life.minuteLife(drawSpriteList.mario.lifeNum);
    },
    bindEvent: function bindEvent() {
        //createFactory.createBadflower(300, 0);
        this.reset(0);

        // drawSpriteList.createAnimationSpriteList.push(new Shell({left:300}));
        var self = this;
        document.querySelector('#smallBtn').addEventListener('click', function () {
            drawSpriteList.arrayOthersA.forEach(function (item) {
                if (item.name == 'flag') {
                    item.down();
                }
            });
        }, false);
        document.querySelector('#flower').addEventListener('click', function () {
            drawSpriteList.mario.laqi();
            //createFactory.createUpMoney(100, 100);
        }, false);
        document.querySelector('#flower1').addEventListener('click', function () {

            createFactory.createBullet(100, 100);
        }, false);
        document.querySelector('#createStar').addEventListener('click', function () {
            // drawSpriteList.mario.rise(WH.mario.smallstatus.height,1);
            createFactory.createStar(100, 100);
        }, false);
        document.querySelector('#bigBtn').addEventListener('click', function () {
            drawSpriteList.mario.laqi();
            gameControl.gamePause = true;
        }, false);
        document.querySelector('#fire').addEventListener('click', function () {
            // drawSpriteList.mario.rise(WH.mario.height * 0.5);
            //  createFactory.createBullet(100, 30);
            createFactory.createBullet(progressObj.createSpriteMileNum + drawSpriteList.mario.left + drawSpriteList.mario.width, 30);
        }, false);

        document.querySelector('#monster').addEventListener('click', function () {
            createFactory.createBadflower(300, 0);
        }, false);

        document.querySelector('#monsterdie').addEventListener('click', function () {
            drawSpriteList.createAnimationSpriteList.forEach(function (item) {
                if (item.name == 'shell') {
                    item.shoot(100);
                }
            });
        }, false);
        document.querySelector('#mariodie').addEventListener('click', function () {
            drawSpriteList.mario.collisiondie();
        }, false);
        document.querySelector('#gamePause').addEventListener('click', function () {
            gameControl.gamePause = true;
        }, false);

        // Key Listeners..............................................
        gameControl.addKeyListener({
            key: 'p',
            listener: function () {
                var flag = true; //按下抬起算一次。
                return function (status) {
                    // alert(key);
                    if (status == 1 && flag) {
                        if (drawSpriteList.mario.status == 4) {
                            //背景是无敌音乐
                            if (gameSourceObj.audioList.WD.paused) {
                                gameSourceObj.audioList.WD.play();
                                //audioControl.BGMPlay(gameSourceObj.audioList.BGM);
                            } else {
                                gameSourceObj.audioList.WD.pause();
                                //audioControl.BGMPause(gameSourceObj.audioList.BGM);
                            }
                        } else {
                            if (gameSourceObj.audioList.BGM.paused) {
                                audioControl.BGMPlay(gameSourceObj.audioList.BGM);
                            } else {
                                audioControl.BGMPause(gameSourceObj.audioList.BGM);
                            }
                        }

                        gameControl.togglePaused();
                        if (progressObj.countDownWatch.isRunning()) {
                            progressObj.countDownPause();
                        } else {
                            progressObj.countDownStart();
                        }
                        flag = false;
                    } else if (status == 0) {
                        flag = true;
                    }
                };
            }()
        });
        gameControl.addKeyListener({
            key: 's',
            listener: function listener(status) {
                if (gameControl.paused) {
                    return;
                }
                if (status == 1) {
                    self.mapKey['s'] = true;
                } else {
                    self.mapKey['s'] = false;
                }
                self.activeEventCallback();
            }
        });
        gameControl.addKeyListener({
            key: 'w',
            listener: function listener(status) {
                if (gameControl.paused) {
                    return;
                }
                if (status == 1) {
                    self.mapKey['w'] = true;
                } else {
                    self.mapKey['w'] = false;
                }
                self.activeEventCallback();
            }
        });
        gameControl.addKeyListener({
            key: 'd',
            listener: function listener(status) {
                if (gameControl.paused) {
                    return;
                }
                if (status == 1) {
                    self.mapKey['d'] = true;
                } else {
                    self.mapKey['d'] = false;
                    self.advance = 0;
                }
                self.activeEventCallback();
            }
        });
        gameControl.addKeyListener({
            key: 'right',
            listener: function listener(status) {
                if (status == 1) {
                    self.mapKey['right'] = true;
                } else {
                    self.mapKey['right'] = false;
                }
                self.activeEventCallback();
            }
        });
        gameControl.addKeyListener({
            key: 'left',
            listener: function listener(status) {
                if (status == 1) {
                    self.mapKey['left'] = true;
                } else {
                    self.mapKey['left'] = false;
                }
                self.activeEventCallback();
            }
        });
    },
    activeEventCallback: function activeEventCallback() {
        // if(gameControl.gamePause==true){
        //     return;
        // }
        var time = Date.now();
        var jumpKey = this.mapKey["s"] || this.mapKey["w"]; //按蹦跳键
        var runKey = this.mapKey["left"] && !this.mapKey["right"] || !this.mapKey["left"] && this.mapKey["right"]; //左右键中，只按了左键或只按了右键
        //只按左键或只按右键(大蹦，小蹦不管)
        if (runKey) {
            createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
            if (gameControl.gamePause == true) {
                return;
            }
            gameConfig.setSpeedDefault();
            //如果是左键
            if (this.mapKey["left"] && !this.mapKey["right"]) {
                //如果马里奥当前面向右，然后从右转向左，则设置初始化默认速度，以防当前面有墙，被墙挡住，速度为0，掉头后速度设为默认值。
                if (drawSpriteList.mario.rColliding) {
                    gameConfig.setSpeedZero();
                }
                this.setDirection(-1);
                drawSpriteList.mario.isReverse = false;
                // console.log("按左键");    
            } else {
                if (drawSpriteList.mario.lColliding) {
                    gameConfig.setSpeedZero();
                }
                // console.log("按右键");
                drawSpriteList.mario.isReverse = true;
                this.setDirection(1);
            }
        } else {
            //如果左右键都不按，或同时按，则背景速度为0
            this.setDirection(0);
        }
        //根据按键设置，马里奥的画笔和行为。
        //分为只按左右键，只按蹦跳键，同时按左键（或右键）和蹦跳键，还有其他不合理按键（例如同时按左右键），和都不按键
        //只要按蹦跳键，则马里奥处于蹦跳状态或者如果不处于蹦跳状态则执行蹦跳动作，所以，蹦跳键的行为大于左右键的行为，因为如果同时按右键和蹦跳键，是处于蹦跳状态的。
        if (jumpKey) {
            //如果按了蹦跳键
            if (gameControl.gamePause == true) {
                return;
            }
            if (!drawSpriteList.mario.isJump) {
                var status = this.mapKey["s"] ? marioGameConfig.smallJumpV : marioGameConfig.bigJumpV;
                drawSpriteList.mario.jump(status);
            } else {
                drawSpriteList.mario.painter = drawSpriteList.mario.painters.jump;
                drawSpriteList.mario.behaviors = [];
            }
        } else {
            //没有按蹦跳键
            if (runKey) {
                //只按了左键或只按右键
                if (gameControl.gamePause == true) {
                    return;
                }
                if (drawSpriteList.mario.isJump) {
                    drawSpriteList.mario.painter = drawSpriteList.mario.painters.jump;
                    drawSpriteList.mario.behaviors = [];
                } else {
                    drawSpriteList.mario.painter = drawSpriteList.mario.painters.run;
                    drawSpriteList.mario.behaviors = [drawSpriteList.mario.behaviorStatus.runInPlace];
                }
            } else {
                //同时按了左键和右键，或者两者都没按
                if (gameControl.gamePause == true) {
                    return;
                }
                if (drawSpriteList.mario.isJump) {
                    drawSpriteList.mario.painter = drawSpriteList.mario.painters.jump;
                } else {
                    drawSpriteList.mario.painter = drawSpriteList.mario.painters.stand;
                }
                drawSpriteList.mario.behaviors = [];
            }
        }

        if (this.mapKey['d'] && (drawSpriteList.mario.status == 4 && drawSpriteList.mario.originalStatus == 3 || drawSpriteList.mario.status == 3) && time - this.advance > 300) {
            if (drawSpriteList.mario.isReverse) {
                createFactory.createBullet(progressObj.createSpriteMileNum + drawSpriteList.mario.left + drawSpriteList.mario.width, drawSpriteList.mario.top + drawSpriteList.mario.height / 3, drawSpriteList.mario.isReverse);
            } else {
                createFactory.createBullet(progressObj.createSpriteMileNum + drawSpriteList.mario.left, drawSpriteList.mario.top + drawSpriteList.mario.height / 3, drawSpriteList.mario.isReverse);
            }
            this.advance = time;
        }
    },
    advance: 0,
    setDirection: function setDirection(status) {
        switch (status) {
            case 0:
                {
                    drawSpriteList.goDirection(0);
                }
                break;
            case 1:
                {
                    drawSpriteList.goDirection(-1);
                }
                break;
            case -1:
                {
                    drawSpriteList.goDirection(1);
                }
                break;;

        }
    }
};

var SpriteAnimatorEndCallbackList = {
    marioJumpend: function marioJumpend(mario) {
        if (mario.isDie) {
            if (mario.lifeNum > 0) {
                console.log('暂停');
                gameControl.gamePause = true;
                clipObj.startDraw();
            } else {
                clipObj.startDraw();
                // game.over();
            }
        }

        mario.isJump = false;
        mario.startVelocityY = 0;
        mario.velocityY = 0;
        mario.isJump = false;
        game.activeEventCallback();
    },
    moneyupend: function moneyupend(sprite) {
        lib.removeByValue(drawSpriteList.createSpriteList, 'id', sprite.id);
        sprite = null;
    },
    brickupend: function brickupend(sprite) {
        lib.removeByValue(drawSpriteList.createBrickSpriteList, 'id', sprite.id);
        sprite = null;
    },
    monsterJumpend: function monsterJumpend(sprite) {
        if (sprite.isDie == true) {
            lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', sprite.id);
            sprite = null;
            console.log('移除怪兽');
        }
    }
};

var drawSpriteList = {
    isSuccess: false,
    success: function success() {
        this.mario.intoTower();
        console.log('游戏胜利');
    },
    bg: new BG({
        name: "BG",
        width: element.mycanvasWidth,
        height: element.mycanvasHeight,
        top: 0,
        left: 0
    }),
    //马里奥
    mario: new Mario({
        name: "mario",
        isReverse: true,
        success: function success() {
            clipObj.startDraw();
        }
    }),

    //总体进度
    progressObj: progressObj,
    //分数，生命值等
    statusArr: {
        life: new Life({
            name: 'life'
        })
    },
    //墙，管道，固定金币等可以为第一层
    arrayOthersA: [],
    gameOver: [],

    //洞
    // arrayOthersB: [],
    //花，弹出的金币
    createSpriteList: [], //可以为第一层
    //其他移动物体，例如蘑菇，怪兽等可以水平移动的物体
    createAnimationSpriteList: [],
    //砖碎片列表
    createBrickSpriteList: [],
    //子弹列表
    createBulletSpriteList: [],
    //通过按键来控制这些对象的速度状态。
    goDirection: function goDirection(status) {
        this.bg.velocityX = gameConfig.skySpeed * status;
        this.progressObj.velocityX = gameConfig.progressObjSpeed * status;
        this.arrayOthersA.forEach(function (itemDraw) {
            itemDraw.velocityX = gameConfig.objectSpeed * status;
        });
        var createSpriteList = this.createSpriteList;
        createSpriteList.forEach(function (item) {
            item.velocityX = gameConfig.objectSpeed * status;
        });
        this.createAnimationSpriteList.forEach(function (item) {
            item.velocityX = item.initvelocityX + gameConfig.objectSpeed * status;
        });
        this.createBulletSpriteList.forEach(function (item) {
            item.velocityX = item.initvelocityX + gameConfig.objectSpeed * status;
        });
    },
    //事物间的碰撞
    judgeCD: {
        config: {
            wall: {
                funcName: 'judgeMWall'
            },
            money: {
                funcName: 'judgeMM'
            },
            final: {
                funcName: 'judgeMFianl',
                callback: function callback() {
                    console.log(33);
                    drawSpriteList.isSuccess = true;
                    gameControl.gamePause = true;
                }
            },
            flower: {
                funcName: 'judgeMF'
            },
            star: {
                funcName: 'judgeMS'
            },
            bullet: {
                funcName: 'judgeBBarrier'
            },
            mushroom: {
                funcName: 'judgeMMR'
            },
            hole: {
                funcName: 'judgeMH'
            },
            monster: {
                funcName: 'judgeMMonster'
            },
            tortoise: {
                funcName: 'judgeMMonster'
            },
            shell: {
                funcName: 'judgeMShell'
            },
            flag: {
                funcName: 'judgeMflag'
            },
            moverBarrier: {
                callback: function callback(mushroomSprite) {
                    lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', mushroomSprite.id);
                    audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.growup);
                    mushroomSprite = null;
                }
            },
            pipe: {
                funcName: 'judgeMPipe'
            },
            tower: {
                funcName: 'judgeMTower'
            },
            badflower: {
                funcName: 'judegMBadFlower'
            }
        },
        cdfunc: function cdfunc() {
            if (drawSpriteList.isSuccess) {
                return;
            }
            var self = this;
            var arrothers = drawSpriteList.arrayOthersA;
            //设置速度默认值，例如，先设置速度正常,当马里奥被管道水平挡住,速度为0，当反向走时，脱离管道碰撞，速度恢复正常。
            if (gameConfig.gamePause == true) {
                gameConfig.setSpeedZero();
            } else {
                gameConfig.setSpeedDefault();
            }

            //马里奥与墙、管道,固定金币等碰撞
            drawSpriteList.arrayOthersA.forEach(function (itemDraw) {
                var callback = self.config[itemDraw.name].callback || function () {};
                CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback);
            });
            //马里奥与花，弹起的金币等碰撞
            drawSpriteList.createSpriteList.forEach(function (itemDraw) {
                var callback = self.config[itemDraw.name].callback || function () {};
                CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback);
            });
            //子弹与障碍物碰撞，（包括与管道和墙的左右碰撞，并不完善（尚未完成），与怪兽的碰撞）
            drawSpriteList.createBulletSpriteList.forEach(function (itemDraw) {
                drawSpriteList.arrayOthersA.forEach(function (barrier) {
                    if (barrier.name == 'wall' || barrier.name == 'pipe') {
                        var callback2 = self.config["bullet"].callback || function () {};
                        CD['judgeBBarrier'](itemDraw, barrier, callback2);
                    }
                    if (barrier.name == 'hole') {
                        CD['judgeBulletHole'](itemDraw, barrier);
                    }
                    if (barrier.name == 'badflower') {
                        CD['judgeBulletBadflower'](itemDraw, barrier);
                    }
                });

                drawSpriteList.createAnimationSpriteList.forEach(function (barrier) {
                    if (barrier.name == 'monster' || barrier.name == 'tortoise' || barrier.name == 'shell') {
                        var callback2 = self.config["bullet"].callback || function () {};
                        CD['judgeBMonster'](itemDraw, barrier, callback2);
                    }
                });
            });
            //蘑菇，怪兽等水平的对象与障碍物（马里奥，管道，墙等）的碰撞
            drawSpriteList.createAnimationSpriteList.forEach(function (mover) {
                var callback = self.config[mover.name].callback || function () {};
                CD[self.config[mover.name].funcName](drawSpriteList.mario, mover, callback);

                //如果蘑菇已经上升完毕，则在判断蘑菇与墙，管道的碰撞效果。//可以整理一下 
                if (!mover.upover && (mover.name == 'mushroom' || mover.name == 'star')) {
                    return;
                } else {
                    if (mover.name == 'shell') {
                        //是乌龟壳且运动中。
                        drawSpriteList.createAnimationSpriteList.forEach(function (mover2) {
                            if (mover2.name == 'monster' || mover2.name == 'tortoise' || mover2.name == 'shell') {
                                if (mover2 != mover) {
                                    CD['judgeShellMover'](mover, mover2);
                                }
                            }
                        });
                    }
                    drawSpriteList.arrayOthersA.forEach(function (barrier) {
                        if (barrier.name == 'wall' || barrier.name == 'pipe') {
                            CD['judgeMoverBarrier'](mover, barrier);
                        }
                        if (barrier.name == 'hole') {
                            CD['judgeMoverHole'](mover, barrier);
                        }
                    });
                }
            });
            //如果移动物体走出视野，就移除
            drawSpriteList.createAnimationSpriteList.forEach(function (mover, index, arr) {
                if (mover.left + mover.width < 0 || mover.left > element.mycanvasWidth) {
                    lib.removeByValue(arr, 'id', mover.id);
                }
            });
        }
    }
};
var gameControl = new _gameEngine.Game('game', element.mycanvas);
gameControl.speed = 1;
gameControl.startAnimate = function (time) {
    //层级分法：从下往上依次为1.背景层，作为游戏的整个背景，放在最底部，2，洞为二层，因为洞两侧有多余部分，所以，不能让多余部分遮挡移动的物体（马里奥，蘑菇等）
    //3.蘑菇，移动的金币，小星星等放在第三层，因为从砖里出来，所以在砖的下一层4.砖，管道等，为第四层，5马里奥为第五层。6碎砖块为第六层。
    gameControl.context.save();
    clipObj.draw();
    drawSpriteList.bg.draw(gameControl.context, time, gameControl.fps.num);

    animateList.countDown(time);

    //绘制第二层（洞）等。 
    // console.log('huizhi2');
    drawSpriteList.arrayOthersA.forEach(function (itemDraw) {
        // console.log('huizhi');
        if (itemDraw.name == 'hole') {
            itemDraw.draw(gameControl.context, time, gameControl.fps.num);
        }
    });
    drawSpriteList.createSpriteList.forEach(function (item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    // drawSpriteList.statusArr.forEach(function(item) {
    //     item.draw(gameControl.context, time, gameControl.fps.num);
    // });
    for (var i in drawSpriteList.statusArr) {
        drawSpriteList.statusArr[i].draw(gameControl.context, time, gameControl.fps.num);
    }

    drawSpriteList.createAnimationSpriteList.forEach(function (item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    drawSpriteList.createBulletSpriteList.forEach(function (item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });

    //createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthers);
    //绘制其他的场景，例如墙，金币等。 
    // console.log('huizhi2');
    drawSpriteList.arrayOthersA.forEach(function (itemDraw) {
        // console.log('huizhi');
        if (itemDraw.name != 'hole') {
            itemDraw.draw(gameControl.context, time, gameControl.fps.num);
        }
    });

    drawSpriteList.mario.draw(gameControl.context, time, gameControl.fps.num);
    drawSpriteList.createBrickSpriteList.forEach(function (item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    drawSpriteList.gameOver.forEach(function (item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    //碰撞检测
    drawSpriteList.judgeCD.cdfunc();
    gameControl.context.restore();
};
var animateList = {
    //倒计时
    ctx: gameControl.context,
    countDown: function countDown() {
        var strTime = new Date().Format("yyyy-MM-dd hh:mm:ss.S").split(' ');
        var can = element.mycanvas;
        var cans = can.getContext('2d');
        cans.font = 'bold 14px arial';
        cans.fillStyle = 'red';
        cans.fillText((gameControl.fps.num >> 0) + 'fps', 50, 20);
        progressObj.mileageNumUpdate(gameControl.fps.num);
        progressObj.countDownNumUpdate();

        cans.fillText("行程:" + (progressObj.mileageNum / 174 * 100 >> 0) + "m", 400, 20);
        cans.fillText("倒计时:" + (progressObj.currentTime >> 0) + "s", 480, 20);
        // if(progressObj.currentTime<=290){       
        //  drawSpriteList.mario.collisiondie();          
        // }
    }
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};

/***/ })

/******/ });