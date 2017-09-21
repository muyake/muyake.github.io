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
/******/ ([
/* 0 */
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
      width: 20,
      height: 24.4,
      left: 0,
      top: 0
    },

    sprite_1: {
      width: 20,
      height: 24.4,
      left: 23.2,
      top: 0
    },

    sprite_2: {
      width: 20,
      height: 24.4,
      left: 47.6,
      top: 0
    },

    sprite_3: {
      width: 20,
      height: 24.4,
      left: 71.6,
      top: 0
    },

    sprite_4: {
      width: 20,
      height: 24.4,
      left: 96,
      top: 0
    }
  }
};

var tortoiseConfig = {

  config: {
    totalCount: 12,
    sprite_11: {
      width: 21.6,
      height: 26.8,
      left: 0,
      top: 0
    },

    sprite_10: {
      width: 21.6,
      height: 26.8,
      left: 21.6,
      top: 0
    },

    sprite_9: {
      width: 21.6,
      height: 26.8,
      left: 43.2,
      top: 0
    },

    sprite_8: {
      width: 21.6,
      height: 26.8,
      left: 64.8,
      top: 0
    },

    sprite_7: {
      width: 21.6,
      height: 26.8,
      left: 86.4,
      top: 0
    },
    sprite_6: {
      width: 21.6,
      height: 26.8,
      left: 108,
      top: 0
    },

    sprite_5: {
      width: 21.6,
      height: 26.8,
      left: 129.6,
      top: 0
    },

    sprite_4: {
      width: 21.6,
      height: 26.8,
      left: 151.2,
      top: 0
    },

    sprite_3: {
      width: 21.6,
      height: 26.8,
      left: 172.8,
      top: 0
    },

    sprite_2: {
      width: 21.6,
      height: 26.8,
      left: 194.4,
      top: 0
    },
    sprite_1: {
      width: 21.6,
      height: 26.8,
      left: 86.4,
      top: 0
    },

    sprite_0: {
      width: 21.6,
      height: 26.8,
      left: 237.6,
      top: 0
    }
  }
};

var shellConfig = {
  config: {
    totalCount: 12,
    sprite_11: {
      width: 18,
      height: 17.2,
      left: 53.6,
      top: 0
    },
    sprite_10: {
      width: 18,
      height: 17.2,
      left: 72,
      top: 0
    },

    sprite_9: {
      width: 18,
      height: 17.2,
      left: 90,
      top: 0
    },

    sprite_8: {
      width: 18,
      height: 17.2,
      left: 0,
      top: 0
    },

    sprite_7: {
      width: 18,
      height: 17.2,
      left: 18,
      top: 0
    },

    sprite_6: {
      width: 18,
      height: 17.2,
      left: 90,
      top: 0
    },
    sprite_5: {
      width: 18,
      height: 17.2,
      left: 162,
      top: 0
    },

    sprite_4: {
      width: 18,
      height: 17.2,
      left: 72,
      top: 0
    },

    sprite_3: {
      width: 18,
      height: 17.2,
      left: 198,
      top: 0
    },

    sprite_2: {
      width: 18,
      height: 17.2,
      left: 108,
      top: 0
    },

    sprite_1: {
      width: 18,
      height: 17.2,
      left: 126,
      top: 0
    },
    sprite_0: {
      width: 18,
      height: 17.2,
      left: 144,
      top: 0
    }

  }

};
var lifeConfig = {
  config: {
    totalCount: 5,
    sprite_1: {
      height: 23,
      width: 62,
      left: 0,
      top: 0
    },
    sprite_4: {
      height: 23.5,
      width: 63.5,
      left: 0,
      top: 23
    },
    sprite_3: {
      height: 24,
      width: 64,
      left: 0,
      top: 46.5
    },
    sprite_5: {
      height: 48,
      width: 64.5,
      left: 0,
      top: 70.5
    },
    sprite_2: {
      height: 23.5,
      width: 64.5,
      left: 0,
      top: 94.5
    }
  }
};
var badFlowerConfig = {

  config: {
    totalCount: 35,
    sprite_34: {
      height: 3,
      width: 20,
      left: 0,
      top: 0
    },
    sprite_8: {
      height: 19,
      width: 22,
      left: 0,
      top: 3
    },
    sprite_35: {
      height: 2.5,
      width: 22.5,
      left: 0,
      top: 22
    },
    sprite_28: {
      height: 15.5,
      width: 22.5,
      left: 0,
      top: 24.5
    },
    sprite_29: {
      height: 23.5,
      width: 22.5,
      left: 0,
      top: 40
    },
    sprite_19: {
      height: 28.5,
      width: 22.5,
      left: 0,
      top: 53.5
    },
    sprite_0: {
      height: 5.5,
      width: 22.5,
      left: 0,
      top: 82
    },
    sprite_33: {
      height: 5,
      width: 23,
      left: 0,
      top: 87.5
    },
    sprite_27: {
      height: 16,
      width: 23,
      left: 0,
      top: 92.5
    },
    sprite_9: {
      height: 21.5,
      width: 23,
      left: 0,
      top: 108.5
    },
    sprite_20: {
      height: 26.5,
      width: 23,
      left: 0,
      top: 130
    },
    sprite_7: {
      height: 16.5,
      width: 23,
      left: 0,
      top: 156.5
    },
    sprite_30: {
      height: 11,
      width: 23.5,
      left: 0,
      top: 173
    },
    sprite_2: {
      height: 9,
      width: 24,
      left: 0,
      top: 184
    },
    sprite_1: {
      height: 7.5,
      width: 24,
      left: 0,
      top: 193
    },
    sprite_26: {
      height: 16,
      width: 24,
      left: 0,
      top: 200.5
    },
    sprite_10: {
      height: 24.5,
      width: 24,
      left: 0,
      top: 216.5
    },
    sprite_23: {
      height: 19,
      width: 24.5,
      left: 0,
      top: 241
    },
    sprite_21: {
      height: 25.5,
      width: 24.5,
      left: 0,
      top: 260
    },
    sprite_3: {
      height: 9.5,
      width: 25,
      left: 0,
      top: 285.5
    },
    sprite_22: {
      height: 24,
      width: 25.5,
      left: 0,
      top: 295
    },
    sprite_11: {
      height: 23,
      width: 25.5,
      left: 0,
      top: 319
    },
    sprite_31: {
      height: 9.5,
      width: 25.5,
      left: 0,
      top: 342
    },
    sprite_32: {
      height: 7,
      width: 26.5,
      left: 0,
      top: 351.5
    },
    sprite_18: {
      height: 29,
      width: 26.5,
      left: 0,
      top: 358.5
    },
    sprite_12: {
      height: 23,
      width: 27,
      left: 0,
      top: 387.5
    },
    sprite_25: {
      height: 15.5,
      width: 27,
      left: 0,
      top: 410.5
    },
    sprite_13: {
      height: 23,
      width: 27.5,
      left: 0,
      top: 426
    },
    sprite_17: {
      height: 29,
      width: 27.5,
      left: 0,
      top: 449
    },
    sprite_24: {
      height: 17,
      width: 27.5,
      left: 0,
      top: 478
    },
    sprite_6: {
      height: 15,
      width: 28,
      left: 0,
      top: 495
    },
    sprite_4: {
      height: 10,
      width: 28.5,
      left: 0,
      top: 510
    },
    sprite_14: {
      height: 27.5,
      width: 29,
      left: 0,
      top: 520
    },
    sprite_5: {
      height: 10.5,
      width: 29.5,
      left: 0,
      top: 547.5
    },
    sprite_15: {
      height: 29.5,
      width: 29.5,
      left: 0,
      top: 558
    },
    sprite_16: {
      height: 33.5,
      width: 31,
      left: 0,
      top: 587.5
    }
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
    width: 63.5,
    height: 24
  },
  badflower: {
    width: 27.5,
    height: 29
  },
  monster: {
    width: 20,
    height: 24.4
  },
  tortoise: {
    width: 21.6,
    height: 26.8
  },
  tower: {
    width: 279 * 0.85,
    height: 342 * 0.6
  },
  shell: {
    width: 18,
    height: 17.2
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
      width: 16.5,
      height: 34
    }
  },
  pipe: {
    width: 45,
    height: 94
  },
  flag: {
    width: 40.5,
    height: 35
  },
  final: {
    width: 37.5,
    height: 225
  }
};
var wallConfig = {
  normalSprite: {
    width: 35,
    height: 35,
    left: 150.5,
    top: 0
  },
  abnormalwall: {
    height: 35,
    width: 35,
    left: 80.5,
    top: 0
  },

  afterabnormalSprite: {
    height: 35,
    width: 35,
    left: 115.5,
    top: 0
  },
  leftupSprite: {
    height: 16.1,
    width: 16.1,
    left: 0,
    top: 0
  },
  leftdownSprite: {
    height: 21,
    width: 21,
    left: 35.7,
    top: 0
  },
  rightupSprite: {
    height: 23.1,
    width: 24.5,
    left: 56,
    top: 0
  },
  rightdownSprite: {
    height: 21,
    width: 19.6,
    left: 16.7,
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var lib = {

    //Object.prototype.toString.call(o)能直接返回对象的类属性，形如"[object class]"的字符串，我们通过截取class，并能知道传入的对象是什么类型
    isClass: function isClass(o) {
        if (o === null) return "Null";
        if (o === undefined) return "Undefined";
        return Object.prototype.toString.call(o).slice(8, -1);
    },
    removeByValue: function removeByValue(arr, attrName, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][attrName] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    },
    removeElement: function removeElement(_element) {
        if (!_element) {
            return;
        }
        var _parentElement = _element.parentNode;
        if (_parentElement) {
            _parentElement.removeChild(_element);
        }
    },
    sort: function sort(arr, attributeName, status) {
        //status=0位正序，1为倒序
        var s = status || 0;

        function compare(item1, item2) {
            var value1 = item1[attributeName];
            var value2 = item2[attributeName];
            if (value1 < value2) {
                return s == 0 ? -1 : 1;
            } else if (value1 > value2) {
                return s == 0 ? 1 : -1;
            } else {
                return 0;
            }
        }
        arr.sort(compare);
    },
    //整数返回1，负数返回-1，0返回0
    getSign: function getSign(n) {
        return n === 0 ? 0 : n / Math.abs(n);
    },
    newGuid: function newGuid() {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            // if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            //     guid += "-";
        }
        return guid;
    },
    deepClone: function deepClone(obj) {
        var result = void 0,
            oClass = this.isClass(obj);
        //如果直接用arguments.callee，this指向arguments对象,如果用局部函数的话，let tempFun= arguments.callee。this指向window.所以需要绑定this.
        //let tempFun= arguments.callee.bind(this);

        //确定result的类型
        if (oClass === "Object") {
            result = {};
        } else if (oClass === "Array") {
            result = [];
        } else {
            return obj;
        }
        for (var key in obj) {
            var copy = obj[key];
            if (this.isClass(copy) == "Object") {
                result[key] = arguments.callee.bind(this)(copy); //递归调用
            } else if (this.isClass(copy) == "Array") {
                result[key] = arguments.callee.bind(this)(copy);
            } else {
                result[key] = obj[key];
            }
        }
        return result;
    },

    //将图片或音频转为对象。
    convertToObject: function convertToObject(obj, sourceLoadObj) {
        var result = void 0,
            oClass = this.isClass(obj);
        if (oClass === "Object") {
            result = {};
        } else if (oClass === "Array") {
            result = [];
        } else {
            return obj;
        }
        for (var key in obj) {
            var copy = obj[key];
            if (this.isClass(copy) == "Object") {
                result[key] = lib.convertToObject(copy, sourceLoadObj); //递归调用
            } else if (this.isClass(copy) == "Array") {
                result[key] = lib.convertToObject(copy, sourceLoadObj);
            } else {
                if (this.chkFormat(obj[key], 'img')) {
                    result[key] = new Image();
                    result[key].src = obj[key];
                    sourceLoadObj.sourceNum++;
                    result[key].addEventListener('load', function (e) {
                        sourceLoadObj.currentNum++;
                        sourceLoadObj.loadedCallback(e);
                    });
                    result[key].addEventListener('error', function (e) {
                        sourceLoadObj.currentNum++;
                        sourceLoadObj.loadedCallback(e);
                    });
                } else if (this.chkFormat(obj[key], 'audio')) {
                    result[key] = new Audio(obj[key]);
                    sourceLoadObj.sourceNum++;
                    result[key].addEventListener('loadedmetadata', function (e) {
                        sourceLoadObj.currentNum++;
                        sourceLoadObj.loadedCallback(e);
                    });
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    },
    // $.extend();
    jQueryExtend: function jQueryExtend() {
        var options = void 0,
            name = void 0,
            src = void 0,
            copy = void 0,
            copyIsArray = void 0,
            clone = void 0,
            target = arguments[0] || {},
            // 默认第0个参数为目标参数
        i = 1,
            // i表示从第几个参数凯斯想目标参数进行合并，默认从第1个参数开始向第0个参数进行合并
        length = arguments.length,
            deep = false; // 默认为浅度拷贝

        // 判断第0个参数的类型，若第0个参数是boolean类型，则获取其为true还是false
        // 同时将第1个参数作为目标参数，i从当前目标参数的下一个
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // 判断目标参数的类型，若目标参数既不是object类型，也不是function类型，则为目标参数重新赋值 
        // Handle case when target is a string or something (possible in deep copy)
        if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }

        // 若目标参数后面没有参数了，如$.extend({_name:'wenzi'}), $.extend(true, {_name:'wenzi'})
        // 则目标参数即为jQuery本身，而target表示的参数不再为目标参数
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        // 从第i个参数开始
        for (; i < length; i++) {
            // 获取第i个参数，且该参数不为null和undefind，在js中null和undefined，如果不区分类型，是相等的，null==undefined为true，
            // 因此可以用null来同时过滤掉null和undefind
            // 比如$.extend(target, {}, null);中的第2个参数null是不参与合并的
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {

                // 使用for~in获取该参数中所有的字段
                // Extend the base object
                for (name in options) {
                    src = target[name]; // 目标参数中name字段的值
                    copy = options[name]; // 当前参数中name字段的值

                    // 若参数中字段的值就是目标参数，停止赋值，进行下一个字段的赋值
                    // 这是为了防止无限的循环嵌套，我们把这个称为，在下面进行比较详细的讲解
                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // 若deep为true，且当前参数中name字段的值存在且为object类型或Array类型，则进行深度赋值
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        // 若当前参数中name字段的值为Array类型
                        // 判断目标参数中name字段的值是否存在，若存在则使用原来的，否则进行初始化
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            // 若原对象存在，则直接进行使用，而不是创建
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // 递归处理，此处为2.2
                        // Never move original objects, clone them  
                        target[name] = jQuery.extend(deep, clone, copy);

                        // deep为false，则表示浅度拷贝，直接进行赋值
                        // 若copy是简单的类型且存在值，则直接进行赋值
                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        // 若原对象存在name属性，则直接覆盖掉；若不存在，则创建新的属性
                        target[name] = copy;
                    }
                }
            }
        }

        // 返回修改后的目标参数
        // Return the modified object
        return target;
    },
    Regexs: {
        url: /^http:\/\/([0-9a-z][0-9a-z\-]*\.)+[a-z]{2,}(:\d+)?\/[0-9a-z%\-_\/\.]+/i, //网址           
        cnum: /[^0-9a-zA-Z_.-]/,
        img: /\.jpg$|\.jpeg$|\.png$|\.gif$/i, //图片格式  
        audio: /\.mp3$|\.wmv$/i, //图片格式   
        photo1: /\.(jpe?g|gif)$/i //图片格式       
    },
    //判断是否为中文
    chkChinese: function chkChinese(s) {
        for (var i = 0; i < s.length; i++) {
            if (s.charCodeAt(i) > 255) return true;
        }
        return false;
    },
    chkFormat: function chkFormat(str, ftype) {
        var nReg = this.Regexs[ftype];
        if (str == null || str == "") return false; //输入为空，认为是验证不通过    
        if (ftype == 'num') {
            if (!nReg.test(str) && !this.chkChinese(str)) {
                //10.23 tenfy 必须为数字且不能有中文    
                return true;
            } else {
                return false;
            }
        }
        if (!nReg.test(str)) {
            return false;
        } else {

            return true;
        }
    }
    //排序
};
exports.lib = lib;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var gameAudio = {
    //gameSourceObj.audioList.jumpAll
    smallJump: {
        startTime: 0.5,
        endTime: 2
    },
    bigJump: {
        startTime: 3.2,
        endTime: 4
    },
    eatMushroom: {
        startTime: 5,
        endTime: 7
    },
    intoPipe: {
        startTime: 8,
        endTime: 9

    },
    monsterDie: {
        endTime: 11
    },
    GameOver: {
        startTime: 0,
        endTime: 5
    },
    //gameSourceObj.audioList.collision
    eatMoney: {
        startTime: 7,
        endTime: 7.5
    },
    flowerup: {
        startTime: 9.8,
        endTime: 11.5
    },
    fire: {
        startTime: 11.3,
        endTime: 11.6
    },
    downflag: {
        startTime: 9,
        endTime: 11.5
    },
    gameSuccess: {
        startTime: 0,
        endTime: 7
    },

    //长大
    growup: {
        startTime: 5.5,
        endTime: 7
    },
    //变小
    changeSmall: {
        startTime: 8.5,
        endTime: 9.5
    },
    hitwall: {
        startTime: 4.9,
        endTime: 5
    },
    wallbreak: {
        startTime: 3.4,
        endTime: 3.9
    },
    WD: {
        startTime: 0,
        endTime: 20
    },
    die: {
        startTime: 0.5,
        endTime: 4
    },
    monsterdie: {
        startTime: 0.5,
        endTime: 1
    },
    monsterShootDie: {
        startTime: 2.6,
        endTime: 3
    }
};

//audioControl
var audioControl = {
    //如果isplay不传，则总是播放，如果传了则只播放一次，例如人物死亡
    audioPlay: function audioPlay(audioObj, videoConfig) {
        audioObj.currentTime = videoConfig.startTime;
        audioObj.endTime = videoConfig.endTime;
        audioObj.play();
    },
    BGMPlay: function BGMPlay(audioObj) {
        audioObj.loop = true;
        audioObj.volume = 0.2;
        audioObj.play();
    },
    BGMPause: function BGMPause(audioObj) {
        audioObj.pause();
    },
    timeupdateAddEventListener: function timeupdateAddEventListener(audioObj) {
        audioObj.addEventListener('timeupdate', function () {
            if (this.currentTime > this.endTime) {
                this.pause();
            }
        }, false);
    }
};
exports.gameAudio = gameAudio;
exports.audioControl = audioControl;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFactory = exports.totalProgressSprite = exports.PJNum = exports.progressObj = undefined;

var _stopwatch = __webpack_require__(14);

var _stopwatch2 = _interopRequireDefault(_stopwatch);

var _config = __webpack_require__(0);

var _audioControl = __webpack_require__(2);

var _gameSprite = __webpack_require__(4);

var _public = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var progressObj = {
    mileageNum: 0, //马里奥走的里程
    totaltime: 300, //游戏倒计时
    velocityX: 0,
    currentTime: 300,
    fpsNum: 60,
    countDownWatch: new _stopwatch2.default(),
    createSpriteMileNum: 0,
    mileageNumUpdate: function mileageNumUpdate(fpsNum) {
        this.fpsNum = fpsNum == 0 ? 1 : fpsNum || this.fpsNum;
        // console.log(this.velocityX );
        this.mileageNum += this.velocityX / this.fpsNum;

        this.createSpriteMileNum = this.mileageNum * _config.gameConfig.objectSpeedRate;
    },
    countDownNumUpdate: function countDownNumUpdate() {
        this.currentTime = this.totaltime - this.countDownWatch.getElapsedTime() / 1000;
    },
    countDownStart: function countDownStart() {
        this.countDownWatch.start();
    },
    countDownPause: function countDownPause() {
        this.countDownWatch.stop();
        this.totaltime = this.currentTime;
    }
};

var PJNum = {
    wall1: 500,
    wall2: 2150,
    wall3: 2150 + _config.WH.wall.width * 10 + _config.WH.monster.width + 20,
    wall4: 2150 + _config.WH.wall.width * 10 + _config.WH.monster.width + 20 + _config.WH.wall.width * 60 + _config.WH.hole.width + _config.WH.pipe.width - 20,
    wallTop: 100,
    wallTop2: 140,
    money1: 700,
    pipe1: 550,
    hole1: 700,
    badflower1: 500,
    final1: 2150 + _config.WH.wall.width * 10 + _config.WH.monster.width + 20 + _config.WH.wall.width * 60 + _config.WH.hole.width + _config.WH.pipe.width - 20 + _config.WH.wall.width * 20 + _config.WH.monster.width + 20
};

var totalProgressSprite = {
    wall: [{
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall1, //left=progressObj.mileageNum-positionmile   
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall1 + 100, //left=progressObj.mileageNum-positionmile   
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall1 + 100 + _config.WH.wall.width,
        physicaltop: PJNum.wallTop,
        contain: 2 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall1 + 100 + _config.WH.wall.width * 2,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall1 + 100 + _config.WH.wall.width * 2,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall1 + 100 + _config.WH.wall.width * 3,
        physicaltop: PJNum.wallTop,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall1 + 100 + _config.WH.wall.width * 4,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。

        //第二个坑左右
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + 0,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall2 + _config.WH.wall.width,
        physicaltop: PJNum.wallTop,
        contain: 2 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + _config.WH.wall.width * 2,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + _config.WH.wall.width * 3,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + _config.WH.wall.width * 4,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + +_config.WH.wall.width * 5,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + _config.WH.wall.width * 6,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + _config.WH.wall.width * 7,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + _config.WH.wall.width * 8,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall2 + _config.WH.wall.width * 9,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 1,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 2,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 3,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 4,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 4,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 7,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 8,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 13,
        physicaltop: PJNum.wallTop,
        contain: 4 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 16,
        physicaltop: PJNum.wallTop,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 16,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 19,
        physicaltop: PJNum.wallTop,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 25,
        physicaltop: PJNum.wallTop,
        moneyCount: 5,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 28,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 29,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 30,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 35,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 36,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 37,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 36,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 37,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 38,
        physicaltop: PJNum.wallTop + PJNum.wallTop2,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    },, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall4 + _config.WH.wall.width * 7,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    },, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall4 + _config.WH.wall.width * 8,
        physicaltop: PJNum.wallTop,
        contain: 0 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    },, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall4 + _config.WH.wall.width * 9,
        physicaltop: PJNum.wallTop,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    },, {
        isVisible: true,
        id: _public.lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall4 + _config.WH.wall.width * 10,
        physicaltop: PJNum.wallTop,
        contain: 1 //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }],
    money: [{
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: PJNum.wallTop,
        positionmile: PJNum.money1 + 500
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: PJNum.wallTop,
        positionmile: PJNum.money1 + 600
    }],
    pipe: [{

        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: -40,
        positionmile: PJNum.pipe1 + 440
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: -20,
        positionmile: PJNum.pipe1 + 640
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.pipe1 + 840
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.pipe1 + 1040
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 40 + _config.WH.monster.width + 20
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 47
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 60 + 15
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 60 + _config.WH.hole.width + _config.WH.pipe.width - 20
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: -20,
        positionmile: PJNum.wall4 + _config.WH.wall.width * 4
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: -20,
        positionmile: PJNum.wall4 + _config.WH.wall.width * 11 + _config.WH.monster.width + 20
    }],
    final: [{

        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: -10,
        positionmile: PJNum.final1
    }],
    flag: [{
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 162,
        positionmile: PJNum.final1 + 20
    }],
    fire: [],
    badflower: [{
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 55
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 37
    }],
    monster: [{
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.pipe1 + 740
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.pipe1 + 940
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.pipe1 + 945 + _config.WH.monster.width + 15
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall2 + _config.WH.wall.width * 17
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall2 + _config.WH.wall.width * 17 + _config.WH.monster.width + 20
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall3 + _config.WH.wall.width * 30
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall3 + _config.WH.wall.width * 30 + _config.WH.monster.width + 20
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall3 + _config.WH.wall.width * 37
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall3 + _config.WH.wall.width * 37 + _config.WH.monster.width + 20
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall4 + _config.WH.wall.width * 8
    }, {
        isDie: false,
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall4 + _config.WH.wall.width * 8 + _config.WH.monster.width + 20
    }],
    //mushroom: [],
    tortoise: [{
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall3 + _config.WH.wall.width * 16
    }, {
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall3 + _config.WH.wall.width * 20
    }, {
        isAdd: false, //判断是否加入过数组
        isMonster: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        positionmile: PJNum.wall3 + _config.WH.wall.width * 50
    }],
    star: [],
    tower: [{
        isReverse: false,
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: -6
    }, {
        isReverse: true,
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: 0,
        positionmile: PJNum.final1 + 234
    }],
    hole: [
    // {
    //     isVisible: true,
    //     id: lib.newGuid(),
    //     physicaltop: -33,
    //     positionmile: 450,
    // },
    {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: -33,
        positionmile: PJNum.pipe1 + 1340
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: -33,
        positionmile: PJNum.wall2 + _config.WH.wall.width * 7
    }, {
        isVisible: true,
        id: _public.lib.newGuid(),
        physicaltop: -33,
        positionmile: PJNum.wall3 + _config.WH.wall.width * 60 + _config.WH.pipe.width
    }]
};

var createFactory = {
    arrayTotalProgress: [],
    //创造升起的金币
    createUpMoney: function createUpMoney(positionmile, physicaltop) {
        var createUpMoneyObj = new _gameSprite.Money({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: _public.lib.newGuid(),
            jumpEndCallback: SpriteAnimatorEndCallbackList.moneyupend
        });
        createUpMoneyObj.up(200);
        drawSpriteList.createSpriteList.push(createUpMoneyObj);
    },

    createUpFlower: function createUpFlower(positionmile, physicaltop) {
        var createUpFlowerObj = new _gameSprite.Flower({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: _public.lib.newGuid()
        });
        createUpFlowerObj.up(100);
        drawSpriteList.createSpriteList.push(createUpFlowerObj);
    },
    //创造蘑菇
    createUpMushroom: function createUpMushroom(positionmile, physicaltop) {
        var createUpMushroomObj = new _gameSprite.Mushroom({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: _public.lib.newGuid()
        });
        createUpMushroomObj.up(200);
        drawSpriteList.createAnimationSpriteList.push(createUpMushroomObj);
    },
    //创造坏花
    createBadflower: function createBadflower(setting) {
        return new _gameSprite.BadFlower({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
    },
    //创造star
    createStar: function createStar(positionmile, physicaltop) {
        var createUpStarObj = new _gameSprite.Star({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: _public.lib.newGuid(),
            jumpEndCallback: function jumpEndCallback(sprite) {
                sprite.up(150);
            }
        });
        createUpStarObj.up(200);
        createUpStarObj.move(-50);
        drawSpriteList.createAnimationSpriteList.push(createUpStarObj);
    },

    //创造子弹
    createBullet: function createBullet(positionmile, physicaltop, isreverse) {
        var createBulletObj = new _gameSprite.Bullet({
            top: physicaltop,
            positionmile: positionmile,
            id: _public.lib.newGuid()
        });
        if (isreverse) {
            createBulletObj.jump(-_config.bulletConfig.VX);
        } else {
            createBulletObj.jump(_config.bulletConfig.VX);
        }
        _audioControl.audioControl.audioPlay(gameSourceObj.audioList.jumpAll, _audioControl.gameAudio.fire);

        drawSpriteList.createBulletSpriteList.push(createBulletObj);
    },
    //创造墙
    createWall: function createWall(setting) {
        setting.status = setting.status || 0;
        var wall = void 0;
        wall = new _gameSprite.Wall({
            id: setting.id,
            contain: setting.contain,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            status: setting.status,
            moneyCount: setting.moneyCount,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
        return wall;
    },
    //创造管道
    createPipe: function createPipe(setting) {
        return new _gameSprite.Pipe({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
    },
    //创造旗杆
    createFinal: function createFinal(setting) {
        return new _gameSprite.Final({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
    },
    //创造旗帜
    createFlag: function createFlag(setting) {
        return new _gameSprite.Flag({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            callback: function callback() {
                drawSpriteList.success();
            },
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
    },
    //创造固定金币
    createMoney: function createMoney(setting) {
        return new _gameSprite.Money({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum

        });
    },

    //创造砖块
    createBrick: function createBrick(positionmile, physicaltop) {
        var arr = ["leftup", "leftdown", "rightup", "rightdown"];
        arr.forEach(function (item) {
            var createUpBrickObj = new _gameSprite.Brick({
                id: _public.lib.newGuid(),
                physicaltop: physicaltop,
                positionmile: positionmile,
                status: item,
                jumpEndCallback: SpriteAnimatorEndCallbackList.brickupend

            });
            createUpBrickObj.up();
            drawSpriteList.createBrickSpriteList.push(createUpBrickObj);
        });
    },
    // //创造坏花
    // createBadflower: function(setting) {

    // },
    //创造花
    createFlower: function createFlower(setting) {
        return new _gameSprite.Flower({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
    },
    //创造怪兽
    createMonster: function createMonster(setting) {
        if (setting.isAdd || setting.isDie) {
            return;
        }

        setting.isAdd = true;
        var monster = new _gameSprite.Monster({
            id: setting.id,
            // physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
        drawSpriteList.createAnimationSpriteList.push(monster);
    },
    //创造乌龟
    createTortoise: function createTortoise(setting) {
        if (setting.isAdd || setting.isDie) {
            return;
        }

        setting.isAdd = true;
        var tortoise = new _gameSprite.Tortoise({
            id: setting.id,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
        drawSpriteList.createAnimationSpriteList.push(tortoise);
    },

    //创造城堡
    createTower: function createTower(setting) {
        return new _gameSprite.Tower({
            isReverse: setting.isReverse,
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
    },
    //创造洞
    createHole: function createHole(setting) {
        return new _gameSprite.Hole({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum
        });
    },
    nameToCreateFun: {
        'wall': 'createWall',
        'money': 'createMoney',
        'pipe': 'createPipe',

        'badflower': 'createBadflower',

        'monster': 'createMonster',
        'tortoise': 'createTortoise',
        'star': 'createStar',
        'tower': 'createTower',
        'final': 'createFinal',
        'hole': 'createHole',
        'flag': 'createFlag'
    },
    hasId: function hasId(id, spriteList) {
        return spriteList.some(function (item) {
            return item.id == id;
        });
    },
    //从总的数组队列中选择满足条件的对象进行显示。
    insertDrawSpriteList: function insertDrawSpriteList(mileageNum, drawSpriteList) {
        drawSpriteList.forEach(function (removeItem) {
            if (!removeItem.visible || removeItem.positionmile - progressObj.createSpriteMileNum < -removeItem.width || removeItem.positionmile - progressObj.createSpriteMileNum > _config.element.mycanvasWidth) {
                var id = removeItem.id;
                _public.lib.removeByValue(drawSpriteList, 'id', id);
            }
        });
        var self = this;
        var totalProgressArray = this.arrayTotalProgress;
        totalProgressArray.forEach(function (item) {
            if (item.isVisible && item.positionmile - progressObj.createSpriteMileNum >= -_config.WH[item.name].width && item.positionmile - progressObj.createSpriteMileNum <= _config.element.mycanvasWidth) {
                var id = item.id;
                if (!self.hasId(id, drawSpriteList)) {
                    if (item.isMonster) {
                        self[self.nameToCreateFun[item.name]](item);
                    } else {
                        drawSpriteList.push(self[self.nameToCreateFun[item.name]](item));
                    }
                }
            }
        });
    },

    init: function init() {
        var _this = this;

        var _loop = function _loop(key) {
            totalProgressSprite[key].forEach(function (item) {
                item.name = key;
            });
            _this.arrayTotalProgress = _this.arrayTotalProgress.concat(totalProgressSprite[key]);
        };

        //将所有对象填入到数组中，并进行排列。
        for (var key in totalProgressSprite) {
            _loop(key);
        }
        _public.lib.sort(this.arrayTotalProgress, 'positionmile', 0);
    }
};
exports.progressObj = progressObj;
exports.PJNum = PJNum;
exports.totalProgressSprite = totalProgressSprite;
exports.createFactory = createFactory;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BG = exports.Brick = exports.Hole = exports.Tower = exports.Flag = exports.Final = exports.Pipe = exports.Bullet = exports.Star = exports.Mushroom = exports.BadFlower = exports.Flower = exports.Money = exports.Wall = exports.Over = exports.Life = exports.Shell = exports.Tortoise = exports.Monster = exports.Mario = exports.SceneImagePainter = exports.SceneSprite = exports.CharacterRiseSpriteSheetPainter = exports.CharacterRunSpriteSheetPainter = exports.CharacterImagePainter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteSheetPainter = __webpack_require__(15);

var _public = __webpack_require__(1);

var _sprite = __webpack_require__(16);

var _gameProgress = __webpack_require__(3);

var _config = __webpack_require__(0);

var _behaviorList = __webpack_require__(17);

var _audioControl = __webpack_require__(2);

var _gameSource = __webpack_require__(5);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _imagePainter = __webpack_require__(59);

var _spriteAnimator = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//游戏所有元素的sprite
var CharacterImagePainter = function (_ImagePainter) {
    _inherits(CharacterImagePainter, _ImagePainter);

    function CharacterImagePainter(imageUrl) {
        _classCallCheck(this, CharacterImagePainter);

        return _possibleConstructorReturn(this, (CharacterImagePainter.__proto__ || Object.getPrototypeOf(CharacterImagePainter)).call(this, imageUrl));
    }

    _createClass(CharacterImagePainter, [{
        key: 'paint',
        value: function paint(characterSprite, context, mycanvas) {
            //isReverse代表正。
            if (characterSprite.isReverse) {
                context.drawImage(this.image, characterSprite.left, characterSprite.top, characterSprite.width, characterSprite.height);
            } else {
                //图片的反转。
                var canvas = characterSprite.mycanvas;
                context.translate(canvas.width, 0);
                context.scale(-1, 1);
                context.drawImage(this.image, canvas.width - characterSprite.width - characterSprite.left, characterSprite.top, characterSprite.width, characterSprite.height);
                context.translate(canvas.width, 0);
                context.scale(-1, 1);
            }
        }
    }]);

    return CharacterImagePainter;
}(_imagePainter.ImagePainter);

var CharacterRunSpriteSheetPainter = function (_SpriteSheetPainter) {
    _inherits(CharacterRunSpriteSheetPainter, _SpriteSheetPainter);

    function CharacterRunSpriteSheetPainter(cells, spritesheeturl, mycanvas, imgcount) {
        _classCallCheck(this, CharacterRunSpriteSheetPainter);

        var _this2 = _possibleConstructorReturn(this, (CharacterRunSpriteSheetPainter.__proto__ || Object.getPrototypeOf(CharacterRunSpriteSheetPainter)).call(this, cells, spritesheeturl, mycanvas));

        _this2.imgcount = imgcount;
        return _this2;
    }

    _createClass(CharacterRunSpriteSheetPainter, [{
        key: 'paint',
        value: function paint(sprite, context) {
            var cell = this.cells['sprite_' + this.cellIndex];
            if (sprite.isReverse) {
                context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
            } else {
                var canvas = this.mycanvas;
                context.translate(canvas.width, 0);
                context.scale(-1, 1);
                context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, canvas.width - sprite.width - sprite.left, sprite.top, sprite.width, sprite.height);
                context.translate(canvas.width, 0);
                context.scale(-1, 1);
            }
        }
    }, {
        key: 'advance',
        value: function advance(sprite, context) {
            this.cellIndex++;
            if (this.cellIndex == this.imgcount) {
                this.cellIndex = 0;
            }
        }
    }]);

    return CharacterRunSpriteSheetPainter;
}(_spriteSheetPainter.SpriteSheetPainter);

var CharacterRiseSpriteSheetPainter = function (_SpriteSheetPainter2) {
    _inherits(CharacterRiseSpriteSheetPainter, _SpriteSheetPainter2);

    function CharacterRiseSpriteSheetPainter(cells, spritesheeturl, mycanvas, imgcount) {
        _classCallCheck(this, CharacterRiseSpriteSheetPainter);

        var _this3 = _possibleConstructorReturn(this, (CharacterRiseSpriteSheetPainter.__proto__ || Object.getPrototypeOf(CharacterRiseSpriteSheetPainter)).call(this, cells, spritesheeturl, mycanvas));

        _this3.imgcount = imgcount;
        return _this3;
    }

    _createClass(CharacterRiseSpriteSheetPainter, [{
        key: 'paint',
        value: function paint(sprite, context) {
            var cell = this.cells['sprite_' + this.cellIndex];
            sprite.width = cell.width;
            sprite.height = cell.height;
            sprite.top = _config.element.mycanvasHeight - sprite.height - _config.gameConfig.roadHeight - sprite.physicaltop;
            if (sprite.isReverse) {
                context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
            } else {
                var canvas = this.mycanvas;
                context.translate(canvas.width, 0);
                context.scale(-1, 1);
                context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, canvas.width - sprite.width - sprite.left, sprite.top, sprite.width, sprite.height);
                context.translate(canvas.width, 0);
                context.scale(-1, 1);
            }
        }
    }, {
        key: 'advance',
        value: function advance(sprite, context) {
            this.cellIndex++;
            if (this.cellIndex == this.imgcount) {
                this.cellIndex = 0;
            }
        }
    }]);

    return CharacterRiseSpriteSheetPainter;
}(_spriteSheetPainter.SpriteSheetPainter);

var SceneSprite = function (_Sprite) {
    _inherits(SceneSprite, _Sprite);

    function SceneSprite(name, painter, behaviors) {
        _classCallCheck(this, SceneSprite);

        return _possibleConstructorReturn(this, (SceneSprite.__proto__ || Object.getPrototypeOf(SceneSprite)).call(this, name, painter, behaviors));
    }

    _createClass(SceneSprite, [{
        key: 'update',
        value: function update(context, time, fpsNum) {
            for (var i = this.behaviors.length; i > 0; --i) {
                this.behaviors[i - 1].execute(this, context, time, fpsNum);
            }
        }
    }]);

    return SceneSprite;
}(_sprite.Sprite);

var SceneImagePainter = function (_ImagePainter2) {
    _inherits(SceneImagePainter, _ImagePainter2);

    function SceneImagePainter(imageUrl) {
        _classCallCheck(this, SceneImagePainter);

        return _possibleConstructorReturn(this, (SceneImagePainter.__proto__ || Object.getPrototypeOf(SceneImagePainter)).call(this, imageUrl));
    }

    _createClass(SceneImagePainter, [{
        key: 'paint',
        value: function paint(sprite, context) {
            if (!!this.image) {
                if (sprite.imgwidth) {
                    context.drawImage(this.image, sprite.imgleft, sprite.imgtop, sprite.imgwidth, sprite.imgheight, sprite.left, sprite.top, sprite.width, sprite.height);
                } else {
                    context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
                }
            }
        }
    }]);

    return SceneImagePainter;
}(_imagePainter.ImagePainter);

var Mario = function (_Sprite2) {
    _inherits(Mario, _Sprite2);

    function Mario(setting) {
        _classCallCheck(this, Mario);

        var _this6 = _possibleConstructorReturn(this, (Mario.__proto__ || Object.getPrototypeOf(Mario)).call(this, setting.name));

        _this6.isDie = false;
        _this6.isReverse = setting.isReverse;
        _this6.painters = {
            run: new CharacterRunSpriteSheetPainter(_config.marioConfig.config, _gameSource2.default.imageList.mario.commonMairo.run, _config.element.mycanvas, _config.marioConfig.config.totalCount),
            jump: new CharacterImagePainter(_gameSource2.default.imageList.mario.commonMairo.jump),
            stand: new CharacterImagePainter(_gameSource2.default.imageList.mario.commonMairo.stand),
            laqi: new CharacterImagePainter(_gameSource2.default.imageList.mario.commonMairo.laqi)
        };
        _this6.mycanvas = _config.element.mycanvas;
        //this.velocityX = setting.velocityX;
        _this6.width = setting.width || _config.WH.mario.smallstatus.width;
        // this.roleType = 'mairo';
        _this6.height = setting.height || _config.WH.mario.smallstatus.height;
        _this6.physicaltop = setting.physicaltop || 0;
        _this6.top = _config.element.mycanvasHeight - _this6.height - _config.gameConfig.roadHeight - _this6.physicaltop;
        _this6.left = _this6.mycanvas.width / 3 - _this6.width / 2;
        _this6.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE; //重力
        _this6.isJump = false; //是否在跳中

        _this6.jumpPainter = _this6.painters.jump;
        _this6.upColliding = null; //下面的墙或管道等
        _this6.risespeed = 0; //长大的速度
        _this6.initialTop = _this6.top;
        _this6.behaviorStatus = {
            runInPlace: new _behaviorList.behaviorList.runInPlace()
        };
        _this6.lifeNum = 3;
        _this6.status = 1; //1为小人，2为吃蘑菇长大，3为吃花吐子弹,4为无敌状态。
        _this6.painter = _this6.painters.stand;
        _this6.marioSpriteAnimatorJump = new _spriteAnimator.CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, _this6);
        _this6.marioSpriteAnimatorRising = new _spriteAnimator.RiseSpriteAnimator(null, _this6);
        _this6.marioSpriteAnimatorMove = new _spriteAnimator.MairoSpriteAnimator(setting.success, _this6);
        _this6.initvelocityX = -_config.gameConfig.monsterSpeed;

        return _this6;
    }

    _createClass(Mario, [{
        key: 'setClothes',
        value: function setClothes(marioStatus) {
            this.painters.run.spritesheet.src = _gameSource2.default.imageList.mario[marioStatus].run;
            this.painters.jump.image.src = _gameSource2.default.imageList.mario[marioStatus].jump;
            this.painters.stand.image.src = _gameSource2.default.imageList.mario[marioStatus].stand;
            this.painters.laqi.image.src = _gameSource2.default.imageList.mario[marioStatus].laqi;
        }
    }, {
        key: 'laqi',
        value: function laqi() {
            this.painter = this.painters.laqi;
            this.velocityY = 0;
            this.behaviors = [];
            this.translateLeft = -this.left;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.isDie = false;
            this.painter = this.painters.stand;
            this.status = 1;
            this.setClothes("commonMairo");
            this.height = _config.WH.mario.smallstatus.height;
            this.width = _config.WH.mario.smallstatus.width;
            //this.painter = this.painters.stand;
            this.initialTop = _config.element.mycanvasHeight - this.height - _config.gameConfig.roadHeight;
            this.top = _config.element.mycanvasHeight - this.height - _config.gameConfig.roadHeight - this.physicaltop;
            this.left = this.mycanvas.width / 3 - this.width / 2;
        }
    }, {
        key: 'jump',
        value: function jump(VY) {
            //this.startVelocityY = VY;
            //跳跃声音的产生。
            if (!this.isDie) {
                switch (VY) {
                    case _config.marioGameConfig.smallJumpV:
                        {
                            //  console.log(VY);
                            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.jumpAll, _audioControl.gameAudio.smallJump);
                        }
                        break;
                    case _config.marioGameConfig.bigJumpV:
                        {
                            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.jumpAll, _audioControl.gameAudio.bigJump);
                        }
                        break;
                }
            }

            //console.log('蹦');
            this.velocityY = -VY;
            this.behaviors = [];
            this.painter = this.jumpPainter;
            this.marioSpriteAnimatorJump.start();
        }
    }, {
        key: 'rise',
        value: function rise(endHeight, status) {
            var self = this;
            if (endHeight > this.height) {
                this.risespeed = 30;
            } else if (endHeight < this.height) {

                this.risespeed = -30;
            } else {
                this.risespeed = 0;
            }
            if (this.status != 4) {
                switch (status) {
                    case 1:
                    case 2:
                        {
                            this.setClothes('commonMairo');
                        }
                        break;
                    case 3:
                        {
                            this.setClothes('fireMairo');
                        }
                        break;
                    case 4:
                        {
                            this.setClothes('invinciblefireMairo');
                            _audioControl.audioControl.BGMPause(gameSourceObj.audioList.BGM);
                            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.WD, _audioControl.gameAudio.WD);
                            gameSourceObj.audioList.WD.volume = 0.4;
                        }
                        break;
                }
                this.originalStatus = this.status;
                this.status = status;
            } else {
                //如果是状态4，则只设原始状态为status
                this.originalStatus = status;
            }
            this.status4DuringTime = _gameProgress.progressObj.currentTime - 20;
            if (endHeight < this.height) {
                _audioControl.audioControl.audioPlay(gameSourceObj.audioList.jumpAll, _audioControl.gameAudio.changeSmall);
            } else {
                _audioControl.audioControl.audioPlay(gameSourceObj.audioList.jumpAll, _audioControl.gameAudio.growup);
            }

            this.initialHeight = endHeight;
            this.marioSpriteAnimatorRising.start();
        }
    }, {
        key: 'die',
        value: function die() {
            if (!this.isDie) {
                this.isDie = true;
                this.lifeNum--;
                console.log('die');

                this.initialTop = _config.element.mycanvasHeight + 200;
                if (!this.isJump) {
                    this.jump(0);
                }
            }
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.die, _audioControl.gameAudio.die);
        }
    }, {
        key: 'collisiondie',
        value: function collisiondie() {
            // this.jump(0);
            if (!this.isDie) {
                this.isDie = true;
                this.lifeNum--;
                this.initialTop = _config.element.mycanvasHeight + 200;
                if (!this.isJump) {
                    this.jump(_config.marioGameConfig.smallJumpV / 2);
                }
                _audioControl.audioControl.audioPlay(gameSourceObj.audioList.die, _audioControl.gameAudio.die);
            }
        }
    }, {
        key: 'intoTower',
        value: function intoTower() {
            // this.jump(0);
            this.positionmile = _gameProgress.progressObj.createSpriteMileNum;
            this.marioSpriteAnimatorMove.start();
            this.painter = this.painters.run;
            this.behaviors = [this.behaviorStatus.runInPlace, new _behaviorList.behaviorList.SpriteLeftToRight()];
            _audioControl.audioControl.BGMPause(gameSourceObj.audioList.BGM);
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.gamesuccess, _audioControl.gameAudio.gameSuccess);
            //audioControl.audioPlay(gameSourceObj.audioList.die, gameAudio.die);
        }
    }, {
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            this.fpsNum = fpsNum; //给marioSpriteAnimator传递fpsnum
            this.marioSpriteAnimatorJump.execute();
            this.marioSpriteAnimatorRising.execute();
            this.marioSpriteAnimatorMove.execute();
            if (this.status == 4 && this.status4DuringTime > _gameProgress.progressObj.currentTime) {
                this.status = this.originalStatus;
                console.log("恢复");
                _audioControl.audioControl.BGMPlay(gameSourceObj.audioList.BGM);
                switch (this.status) {
                    case 1:
                    case 2:
                        {
                            this.setClothes('commonMairo');
                        }
                        break;
                    case 3:
                        {
                            this.setClothes('fireMairo');
                        }
                        break;
                    case 4:
                        {
                            this.setClothes('invinciblefireMairo');
                        }
                        break;
                }
            }

            // //碰撞的向后顺序是先撞墙，再吃金币  l
            //if (!gameControl.gamePause&&gamesprite) {
            this.update(ctx, time, fpsNum);
            //}


            this.paint(ctx);
        }
    }]);

    return Mario;
}(_sprite.Sprite);

var Monster = function (_Sprite3) {
    _inherits(Monster, _Sprite3);

    function Monster(setting) {
        _classCallCheck(this, Monster);

        var _this7 = _possibleConstructorReturn(this, (Monster.__proto__ || Object.getPrototypeOf(Monster)).call(this, setting.name));

        _this7.painters = {
            run: new CharacterRunSpriteSheetPainter(_config.monsterConfig.config, _gameSource2.default.imageList.monster, _config.element.mycanvas, _config.monsterConfig.config.totalCount),
            collisiondie: new CharacterImagePainter(_gameSource2.default.imageList.monsterDie)
        };
        _this7.isDie = false;
        _this7.isReverse = false;
        _this7.mycanvas = _config.element.mycanvas;
        _this7.name = 'monster';
        _this7.translateLeft = 0;
        _this7.id = _public.lib.newGuid(),
        //this.velocityX = setting.velocityX;
        _this7.width = setting.width || _config.WH.monster.width;
        // this.roleType = 'mairo';
        _this7.height = setting.height || _config.WH.monster.height;
        _this7.physicaltop = setting.physicaltop || 0;
        _this7.top = _config.element.mycanvasHeight - _this7.height - _config.gameConfig.roadHeight - _this7.physicaltop;
        // this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - 100 - WH.wall.height;
        _this7.left = setting.left || _this7.mycanvas.width - _this7.width / 2;
        _this7.positionmile = setting.positionmile;
        _this7.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE; //重力
        _this7.isJump = false; //是否在跳中
        // this.initvelocityX = 70;
        _this7.initvelocityX = _config.gameConfig.monsterSpeed;
        //this.jumpPainter = this.painters.jump;
        _this7.upColliding = null; //下面的墙或管道等 
        _this7.initialTop = _this7.top;
        _this7.behaviorStatus = {
            runInPlace: new _behaviorList.behaviorList.runInPlace({
                PAGEFLIP_INTERVAL: 100
            })
        };
        _this7.behaviors = [_this7.behaviorStatus.runInPlace, new _behaviorList.behaviorList.SpriteLeftToRight()];
        _this7.status = 1;
        _this7.painter = _this7.painters.run;
        _this7.monsterSpriteAnimatorJump = new _spriteAnimator.CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.monsterJumpend, _this7);
        _this7.monsterSpriteAnimatorMove = new _spriteAnimator.MoveSpriteAnimator(null, _this7);
        _this7.monsterSpriteAnimatorMove.start();
        return _this7;
    }

    _createClass(Monster, [{
        key: 'jump',
        value: function jump(VY) {
            this.velocityY = -VY;
            this.monsterSpriteAnimatorJump.start();
        }
    }, {
        key: 'collisionDie',
        value: function collisionDie() {
            this.initvelocityX = 0;
            this.behaviors = [new _behaviorList.behaviorList.SpriteLeftToRight()];
            this.isDie = true;
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.monsterdie);
            this.painter = this.painters.collisiondie;
        }
    }, {
        key: 'die',
        value: function die() {
            this.jump(0);
            this.isDie = true;
        }
    }, {
        key: 'shootDie',
        value: function shootDie() {
            // this.jump(0);
            if (!this.isDie) {
                this.isDie = true;
                this.behaviors = [this.behaviorStatus.runInPlace];
                this.initialTop = _config.element.mycanvasHeight + 200;
                if (!this.isJump) {
                    _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.monsterShootDie);
                    this.jump(_config.marioGameConfig.smallJumpV / 2);
                }
            }
        }
    }, {
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            this.fpsNum = fpsNum; //给monsterSpriteAnimator传递fpsnumbehaviors
            if (!gameControl.gamePause) {
                this.monsterSpriteAnimatorMove.execute();
                this.monsterSpriteAnimatorJump.execute();
                this.update(ctx, time, fpsNum);
            }

            this.paint(ctx);
        }
    }, {
        key: 'fall',
        value: function fall(VY) {
            this.velocityY = -VY;
            console.log('fall');
            this.initialTop = _config.element.mycanvasHeight - this.height - _config.gameConfig.roadHeight;
            this.monsterSpriteAnimatorJump.start();
        }
    }]);

    return Monster;
}(_sprite.Sprite);

var Tortoise = function (_Sprite4) {
    _inherits(Tortoise, _Sprite4);

    function Tortoise(setting) {
        _classCallCheck(this, Tortoise);

        var _this8 = _possibleConstructorReturn(this, (Tortoise.__proto__ || Object.getPrototypeOf(Tortoise)).call(this, setting.name));

        _this8.isDie = false;
        _this8.isReverse = true;
        _this8.id = _public.lib.newGuid(), _this8.mycanvas = _config.element.mycanvas;
        _this8.name = 'tortoise';
        _this8.translateLeft = 0;
        //this.velocityX = setting.velocityX;
        _this8.width = setting.width || _config.WH.tortoise.width;
        // this.roleType = 'mairo';
        _this8.height = setting.height || _config.WH.tortoise.height;
        _this8.physicaltop = setting.physicaltop || 0;
        _this8.top = _config.element.mycanvasHeight - _this8.height - _config.gameConfig.roadHeight;
        //this.top=element.mycanvasHeight - this.height - gameConfig.roadHeight - 100-WH.wall.height;
        _this8.left = setting.left || _this8.mycanvas.width / 2 - _this8.width / 2;
        _this8.positionmile = setting.positionmile;
        _this8.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE; //重力
        _this8.isJump = false; //是否在跳中
        _this8.initvelocityX = _config.gameConfig.monsterSpeed;
        _this8.painters = {
            run: new CharacterRunSpriteSheetPainter(_config.tortoiseConfig.config, _gameSource2.default.imageList.tortoise, _config.element.mycanvas, _config.tortoiseConfig.config.totalCount)
        };

        _this8.upColliding = null; //下面的墙或管道等 
        _this8.initialTop = _this8.top;
        _this8.behaviorStatus = {
            runInPlace: new _behaviorList.behaviorList.runInPlace({
                PAGEFLIP_INTERVAL: 40
            })
        };
        _this8.behaviors = [_this8.behaviorStatus.runInPlace, new _behaviorList.behaviorList.SpriteLeftToRight()];
        // this.status = 1; 
        _this8.painter = _this8.painters.run;
        _this8.tortoiseSpriteAnimatorJump = new _spriteAnimator.CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.tortoiseJumpend, _this8);
        _this8.tortoiseSpriteAnimatorMove = new _spriteAnimator.MoveSpriteAnimator(null, _this8);
        _this8.tortoiseSpriteAnimatorMove.start();
        return _this8;
    }

    _createClass(Tortoise, [{
        key: 'jump',
        value: function jump(VY) {
            this.velocityY = -VY;
            this.tortoiseSpriteAnimatorJump.start();
        }
    }, {
        key: 'die',
        value: function die() {
            this.jump(0);
        }
    }, {
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.fpsNum = fpsNum; //给tortoiseSpriteAnimator传递fpsnumbehaviors
                this.tortoiseSpriteAnimatorMove.execute();
                this.tortoiseSpriteAnimatorJump.execute();
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }, {
        key: 'fall',
        value: function fall(VY) {
            this.velocityY = -VY;
            this.initialTop = _config.element.mycanvasHeight - this.height - _config.gameConfig.roadHeight;
            this.tortoiseSpriteAnimatorJump.start();
        }
    }, {
        key: 'collisionDie',
        value: function collisionDie() {
            this.initvelocityX = 0;
            this.behaviors = [new _behaviorList.behaviorList.SpriteLeftToRight()];
            this.isDie = true;
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.monsterdie);
            this.painter = this.painters.collisiondie;
        }
    }, {
        key: 'shootDie',
        value: function shootDie() {
            // this.jump(0);
            if (!this.isDie) {
                this.isDie = true;
                this.behaviors = [this.behaviorStatus.runInPlace];
                this.initialTop = _config.element.mycanvasHeight + 200;
                if (!this.isJump) {
                    _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.monsterShootDie);
                    this.jump(_config.marioGameConfig.smallJumpV / 2);
                }
            }
        }
    }]);

    return Tortoise;
}(_sprite.Sprite);

var Shell = function (_Sprite5) {
    _inherits(Shell, _Sprite5);

    function Shell(setting) {
        _classCallCheck(this, Shell);

        var _this9 = _possibleConstructorReturn(this, (Shell.__proto__ || Object.getPrototypeOf(Shell)).call(this, setting.name));

        _this9.isDie = false;
        _this9.isReverse = true;
        _this9.id = _public.lib.newGuid(), _this9.mycanvas = _config.element.mycanvas;
        _this9.name = 'shell';
        _this9.translateLeft = 0;
        _this9.painters = {
            run: new CharacterRunSpriteSheetPainter(_config.shellConfig.config, _gameSource2.default.imageList.shell, _config.element.mycanvas, _config.shellConfig.config.totalCount)
        };
        //this.velocityX = setting.velocityX;
        _this9.width = setting.width || _config.WH.shell.width;
        // this.roleType = 'mairo';
        _this9.height = setting.height || _config.WH.shell.height;
        _this9.physicaltop = setting.physicaltop || 0;
        _this9.top = _config.element.mycanvasHeight - _this9.height - _config.gameConfig.roadHeight;
        //this.top=element.mycanvasHeight - this.height - gameConfig.roadHeight - 100-WH.wall.height;
        _this9.left = setting.left;
        _this9.initvelocityX = 0;
        _this9.positionmile = _this9.left + _gameProgress.progressObj.createSpriteMileNum;
        _this9.translateLeft = 0;
        // console.log('translateLeft' + this.translateLeft);
        _this9.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE; //重力
        _this9.isJump = false; //是否在跳中
        // this.initvelocityX = 70;
        //this.jumpPainter = this.painters.jump;
        _this9.upColliding = null; //下面的墙或管道等 
        _this9.initialTop = _this9.top;
        _this9.status = 0; //0表示静止状态，1表示欲动状态。
        _this9.behaviorStatus = {
            runInPlace: new _behaviorList.behaviorList.runInPlace({
                PAGEFLIP_INTERVAL: 80
            })
        };
        //this.behaviors = [this.behaviorStatus.runInPlace, new behaviorList.SpriteLeftToRight()];
        _this9.behaviors = [new _behaviorList.behaviorList.SpriteLeftToRight()];
        //this.status = 1; //1为小人，2为吃蘑菇长大，3为吃花吐子弹,4为无敌状态。
        _this9.painter = _this9.painters.run;
        _this9.shellSpriteAnimatorJump = new _spriteAnimator.CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.shellJumpend, _this9);
        _this9.shellSpriteAnimatorMove = new _spriteAnimator.MoveSpriteAnimator(null, _this9);
        _this9.shellSpriteAnimatorMove.start();
        _this9.painters = {
            run: new CharacterRunSpriteSheetPainter(_config.shellConfig.config, _gameSource2.default.imageList.shell, _config.element.mycanvas, _config.shellConfig.config.totalCount)
        };
        return _this9;
    }

    _createClass(Shell, [{
        key: 'jump',
        value: function jump(VY) {
            this.velocityY = -VY;
            this.shellSpriteAnimatorJump.start();
        }
    }, {
        key: 'shoot',
        value: function shoot(vy) {
            this.behaviors = [this.behaviorStatus.runInPlace, new _behaviorList.behaviorList.SpriteLeftToRight()];
            this.initvelocityX = vy;
            this.status = 1;
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.behaviors = [new _behaviorList.behaviorList.SpriteLeftToRight()];
            this.initvelocityX = 0;
            this.status = 0;
        }
    }, {
        key: 'die',
        value: function die() {
            this.jump(0);
        }
    }, {
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                //console.log('draw1'+this.left);
                this.fpsNum = fpsNum; //给shellSpriteAnimator传递fpsnumbehaviors
                this.shellSpriteAnimatorMove.execute();
                this.shellSpriteAnimatorJump.execute();
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }, {
        key: 'fall',
        value: function fall(VY) {
            this.velocityY = -VY;
            this.initialTop = _config.element.mycanvasHeight - this.height - _config.gameConfig.roadHeight;
            this.shellSpriteAnimatorJump.start();
        }
    }, {
        key: 'shootDie',
        value: function shootDie() {
            // this.jump(0);
            if (!this.isDie) {
                this.isDie = true;
                this.behaviors = [this.behaviorStatus.runInPlace];
                this.initialTop = _config.element.mycanvasHeight + 200;
                if (!this.isJump) {
                    _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.monsterShootDie);
                    this.jump(_config.marioGameConfig.smallJumpV / 2);
                }
            }
        }
    }]);

    return Shell;
}(_sprite.Sprite);

var Life = function (_Sprite6) {
    _inherits(Life, _Sprite6);

    function Life(setting) {
        _classCallCheck(this, Life);

        var _this10 = _possibleConstructorReturn(this, (Life.__proto__ || Object.getPrototypeOf(Life)).call(this, setting.name || 'life', new SceneImagePainter(_gameSource2.default.imageList.life)));

        _this10.imgwidth = _config.lifeConfig.config.sprite_5.width;
        _this10.imgheight = _config.lifeConfig.config.sprite_5.height;
        _this10.imgleft = _config.lifeConfig.config.sprite_5.left;
        _this10.imgtop = _config.lifeConfig.config.sprite_5.top;
        _this10.width = _config.WH.life.width;
        _this10.height = _config.WH.life.height;
        _this10.top = 5;
        _this10.left = 580;
        _this10.status = 5;
        return _this10;
    }

    _createClass(Life, [{
        key: 'minuteLife',
        value: function minuteLife(num) {
            if (num <= 0) {
                num = 1;
            }
            this.imgwidth = _config.lifeConfig.config['sprite_' + num].width;
            this.imgheight = _config.lifeConfig.config['sprite_' + num].height;
            this.imgleft = _config.lifeConfig.config['sprite_' + num].left;
            this.imgtop = _config.lifeConfig.config['sprite_' + num].top;
        }
    }, {
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            this.paint(ctx);
        }
    }]);

    return Life;
}(_sprite.Sprite);

var Over = function (_Sprite7) {
    _inherits(Over, _Sprite7);

    function Over(setting) {
        _classCallCheck(this, Over);

        var _this11 = _possibleConstructorReturn(this, (Over.__proto__ || Object.getPrototypeOf(Over)).call(this, setting.name || 'over', new SceneImagePainter(_gameSource2.default.imageList.gameOver)));

        _this11.width = _config.element.mycanvasWidth;
        _this11.height = _config.element.mycanvasHeight;
        _this11.top = 0;
        _this11.left = 0;
        return _this11;
    }

    _createClass(Over, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            this.paint(ctx);
        }
    }]);

    return Over;
}(_sprite.Sprite);

var Wall = function (_SceneSprite) {
    _inherits(Wall, _SceneSprite);

    function Wall(setting) {
        _classCallCheck(this, Wall);

        var status = setting.status || 0;
        //setting.name = setting.name || 'wall';

        var _this12 = _possibleConstructorReturn(this, (Wall.__proto__ || Object.getPrototypeOf(Wall)).call(this, setting.name || 'wall', new SceneImagePainter(_gameSource2.default.imageList.wall), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        var self = _this12;
        _this12.width = setting.width || _config.WH.wall.width;
        _this12.id = setting.id || 0;
        _this12.positionmile = setting.positionmile || 0;
        _this12.moneyCount = setting.moneyCount || 0;
        _this12.height = setting.height || _config.WH.wall.height;
        _this12.physicaltop = setting.physicaltop || 0;
        _this12.top = _config.element.mycanvasHeight - _this12.height - _config.gameConfig.roadHeight - _this12.physicaltop;
        _this12.left = setting.left || 0;
        // this.roleType = 'wall';
        _this12.contain = setting.contain || 0; //0代表没有东西,1代表金币，2,3代表蘑菇代表花(先蘑菇后花)，4代表星星
        _this12.status = status; //0是普通墙，1是问号墙，2是问号被撞后的墙。
        _this12.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE;
        _this12.initialTop = _this12.top;
        _this12.isJump = false; //判断是否为处于上下波动中
        _this12.jumpPainter = new SceneImagePainter(_gameSource2.default.imageList.wall);
        switch (status) {
            case 0:
                {
                    _this12.imgwidth = _config.wallConfig.normalSprite.width;
                    _this12.imgheight = _config.wallConfig.normalSprite.height;
                    _this12.imgleft = _config.wallConfig.normalSprite.left;
                    _this12.imgtop = _config.wallConfig.normalSprite.top;
                }
                break;
            case 1:
                {
                    _this12.imgwidth = _config.wallConfig.abnormalwall.width;
                    _this12.imgheight = _config.wallConfig.abnormalwall.height;
                    _this12.imgleft = _config.wallConfig.abnormalwall.left;
                    _this12.imgtop = _config.wallConfig.abnormalwall.top;
                    _this12.mycanvas = _config.element.mycanvas;
                }
                break;
            case 2:
                {
                    _this12.imgwidth = _config.wallConfig.afterabnormalSprite.width;
                    _this12.imgheight = _config.wallConfig.afterabnormalSprite.height;
                    _this12.imgleft = _config.wallConfig.afterabnormalSprite.left;
                    _this12.imgtop = _config.wallConfig.afterabnormalSprite.top;
                }
                break;
        }
        _this12.mycanvas = _config.element.mycanvas;

        _this12.wallSpriteAnimatorUp = new _spriteAnimator.CharacterSpriteAnimator(self.jumpend.bind(self), _this12);
        return _this12;
    }

    _createClass(Wall, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.wallSpriteAnimatorUp.execute();
                this.fpsNum = fpsNum;
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }, {
        key: 'up',
        value: function up(VY) {
            //status为2时，为大蹦，1时为小蹦

            this.velocityY = -VY;
            this.wallSpriteAnimatorUp.start();
        }
    }, {
        key: 'changeToAA',
        value: function changeToAA() {
            this.imgwidth = _config.wallConfig.afterabnormalSprite.width;
            this.imgheight = _config.wallConfig.afterabnormalSprite.height;
            this.imgleft = _config.wallConfig.afterabnormalSprite.left;
            this.imgtop = _config.wallConfig.afterabnormalSprite.top;
            this.status = 2;
            //将墙的状态改为2
            var id = this.id;
            var wallList = _gameProgress.totalProgressSprite.wall;
            wallList.forEach(function (item) {
                if (item.id == id) {
                    item.status = 2;
                }
            });
        }
        //墙上下颠簸一下

    }, {
        key: 'jumpend',
        value: function jumpend() {
            this.isJump = false;
            this.velocityY = 0;
        }
    }]);

    return Wall;
}(SceneSprite);

var Money = function (_SceneSprite2) {
    _inherits(Money, _SceneSprite2);

    function Money(setting) {
        _classCallCheck(this, Money);

        setting.name = setting.name || 'money';

        var _this13 = _possibleConstructorReturn(this, (Money.__proto__ || Object.getPrototypeOf(Money)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.money), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this13.width = setting.width || _config.WH.money.width;
        _this13.height = setting.height || _config.WH.money.height;
        _this13.physicaltop = setting.physicaltop || 0;
        _this13.top = _config.element.mycanvasHeight - _this13.height - _config.gameConfig.roadHeight - setting.physicaltop;
        _this13.id = setting.id || 0;
        _this13.left = setting.left || 0;
        _this13.positionmile = setting.positionmile || 0;

        _this13.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE;
        _this13.initialTop = _this13.top;
        _this13.isJump = false; //判断是否为处于上下波动中
        _this13.jumpPainter = new SceneImagePainter(_gameSource2.default.imageList.money);
        _this13.mycanvas = _config.element.mycanvas;
        _this13.moneySpriteAnimatorUp = new _spriteAnimator.CharacterSpriteAnimator(setting.jumpEndCallback, _this13);
        return _this13;
    }

    _createClass(Money, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.fpsNum = fpsNum;
                this.moneySpriteAnimatorUp.execute();
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }, {
        key: 'up',
        value: function up(VY) {
            //this.startVelocityY = VY;
            this.velocityY = -VY;
            this.moneySpriteAnimatorUp.start();
        }
    }]);

    return Money;
}(SceneSprite);

var Flower = function (_SceneSprite3) {
    _inherits(Flower, _SceneSprite3);

    function Flower(setting) {
        _classCallCheck(this, Flower);

        setting.name = setting.name || 'flower';

        var _this14 = _possibleConstructorReturn(this, (Flower.__proto__ || Object.getPrototypeOf(Flower)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.flower), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this14.width = setting.width || _config.WH.flower.width;
        _this14.height = setting.height || _config.WH.flower.height;
        _this14.physicaltop = setting.physicaltop || 0;
        _this14.top = _config.element.mycanvasHeight - _this14.height - _config.gameConfig.roadHeight - setting.physicaltop;
        _this14.id = setting.id || 0;
        _this14.left = setting.left || 0;
        _this14.positionmile = setting.positionmile || 0;
        //  this.roleType = 'flower';
        //this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
        _this14.initialTop = _this14.top;
        _this14.isJump = false; //判断是否为处于上下波动中
        // this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.flower);
        _this14.mycanvas = _config.element.mycanvas;
        _this14.flowerSpriteAnimatorUp = new _spriteAnimator.UpSpriteAnimator(null, _this14);
        return _this14;
    }

    _createClass(Flower, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.fpsNum = fpsNum;
                this.flowerSpriteAnimatorUp.execute();
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }, {
        key: 'up',
        value: function up(VY) {
            // this.startVelocityY = VY;
            this.initialTop = this.top - _config.WH.wall.height;
            this.velocityY = VY;
            this.flowerSpriteAnimatorUp.start();
        }
    }]);

    return Flower;
}(SceneSprite);

var BadFlower = function (_SceneSprite4) {
    _inherits(BadFlower, _SceneSprite4);

    function BadFlower(setting) {
        _classCallCheck(this, BadFlower);

        setting.name = setting.name || 'badflower';

        var _this15 = _possibleConstructorReturn(this, (BadFlower.__proto__ || Object.getPrototypeOf(BadFlower)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.badflower), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this15.width = setting.width || _config.WH.badflower.width;
        _this15.height = setting.height || _config.WH.badflower.height;
        _this15.physicaltop = setting.physicaltop || 0;
        _this15.top = _config.element.mycanvasHeight - _this15.height - _config.gameConfig.roadHeight - setting.physicaltop;
        _this15.id = setting.id || 0;
        _this15.left = setting.left || 0;
        _this15.positionmile = setting.positionmile || 0;
        _this15.behaviorStatus = {
            upInPlace: new _behaviorList.behaviorList.upInPlace({
                PAGEFLIP_INTERVAL: 80
            })
        };
        _this15.painter = new CharacterRiseSpriteSheetPainter(_config.badFlowerConfig.config, _gameSource2.default.imageList.badflower, _config.element.mycanvas, _config.badFlowerConfig.config.totalCount);
        _this15.behaviors = [_this15.behaviorStatus.upInPlace, new _behaviorList.behaviorList.SpriteLeftToRight()];
        //  this.roleType = 'badflower';
        //this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
        _this15.initialTop = _this15.top;
        _this15.isDie = false;
        _this15.isJump = false; //判断是否为处于上下波动中
        // this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.badflower);
        _this15.mycanvas = _config.element.mycanvas;
        _this15.badflowerSpriteAnimatorUp = new _spriteAnimator.UpSpriteAnimator(null, _this15);
        return _this15;
    }

    _createClass(BadFlower, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.fpsNum = fpsNum;
                this.badflowerSpriteAnimatorUp.execute();
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }, {
        key: 'up',
        value: function up(VY) {
            // this.startVelocityY = VY;
            this.initialTop = this.top - _config.WH.wall.height;
            this.velocityY = VY;
            this.badflowerSpriteAnimatorUp.start();
        }
    }, {
        key: 'shootDie',
        value: function shootDie() {
            // this.jump(0);
            if (!this.isDie) {
                this.isDie = true;
                _public.lib.removeByValue(drawSpriteList.arrayOthersA, 'id', this.id);
                _public.lib.removeByValue(_gameProgress.createFactory.arrayTotalProgress, 'id', this.id);
                _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.monsterdie);
                this.visible = false;
            }
        }
    }]);

    return BadFlower;
}(SceneSprite);

var Mushroom = function (_SceneSprite5) {
    _inherits(Mushroom, _SceneSprite5);

    function Mushroom(setting) {
        _classCallCheck(this, Mushroom);

        setting.name = setting.name || 'mushroom';

        var _this16 = _possibleConstructorReturn(this, (Mushroom.__proto__ || Object.getPrototypeOf(Mushroom)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.mushroom), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        var self = _this16;
        _this16.width = setting.width || _config.WH.mushroom.width;
        _this16.height = setting.height || _config.WH.mushroom.height;
        _this16.physicaltop = setting.physicaltop || 0;
        _this16.top = _config.element.mycanvasHeight - _this16.height - _config.gameConfig.roadHeight - setting.physicaltop;
        _this16.id = setting.id || 0;
        _this16.left = setting.left || 0;
        _this16.initvelocityX = 0;
        _this16.positionmile = setting.positionmile || 0;
        //this.roleType = 'mushroom';
        _this16.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE;
        _this16.initialTop = _this16.top;
        _this16.isJump = false; //判断是否为处于上下波动中
        //this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.mushroom);
        _this16.mycanvas = _config.element.mycanvas;
        _this16.mushroomSpriteAnimatorUp = new _spriteAnimator.UpSpriteAnimator(self.move.bind(self, -50), _this16);
        _this16.mushroomSpriteAnimatorJump = new _spriteAnimator.CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, _this16);
        _this16.mushroomSpriteAnimatorMove = new _spriteAnimator.MoveSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, _this16);
        _this16.isDie = false;
        _this16.upover = false;
        _this16.translateLeft = 0;
        return _this16;
    }

    _createClass(Mushroom, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            this.fpsNum = fpsNum;
            if (!gameControl.gamePause) {

                this.mushroomSpriteAnimatorUp.execute();
                this.mushroomSpriteAnimatorJump.execute();
                this.mushroomSpriteAnimatorMove.execute();
                this.update(ctx, time, fpsNum);
            }
            // console.log(this.left);
            this.paint(ctx);
        }
    }, {
        key: 'up',
        value: function up(VY) {
            // this.startVelocityY = VY;
            this.initialTop = this.top - _config.WH.wall.height;
            this.velocityY = VY;
            this.mushroomSpriteAnimatorUp.start();
        }
    }, {
        key: 'fall',
        value: function fall(VY) {
            this.velocityY = -VY;
            this.initialTop = _config.element.mycanvasHeight - this.height - _config.gameConfig.roadHeight;
            this.mushroomSpriteAnimatorJump.start();
        }
    }, {
        key: 'die',
        value: function die(VY) {
            this.velocityY = -VY;
            // this.initialTop = element.mycanvasHeight - this.height - gameConfig.roadHeight;
            this.mushroomSpriteAnimatorJump.start();
        }
    }, {
        key: 'move',
        value: function move(VX) {
            this.velocityX = VX;
            this.initvelocityX = VX;
            this.velocityY = 0;
            this.mushroomSpriteAnimatorMove.start();
        }
    }]);

    return Mushroom;
}(SceneSprite);

var Star = function (_SceneSprite6) {
    _inherits(Star, _SceneSprite6);

    function Star(setting) {
        _classCallCheck(this, Star);

        setting.name = setting.name || 'star';

        var _this17 = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.star), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this17.width = setting.width || _config.WH.star.width;
        _this17.height = setting.height || _config.WH.star.height;
        _this17.physicaltop = setting.physicaltop || 0;
        _this17.top = _config.element.mycanvasHeight - _this17.height - _config.gameConfig.roadHeight - setting.physicaltop;
        _this17.id = setting.id || 0;
        _this17.left = setting.left || 0;
        _this17.positionmile = setting.positionmile || 0;
        _this17.translateLeft = 0;
        _this17.upColliding = null; //下面的墙或管道等
        _this17.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE;
        _this17.initialTop = _this17.top;
        _this17.isDie = false;
        // console.log( this.top);
        _this17.isJump = false; //判断是否为处于上下波动中
        _this17.jumpPainter = new SceneImagePainter(_gameSource2.default.imageList.star);
        _this17.mycanvas = _config.element.mycanvas;
        _this17.upover = false;
        _this17.initvelocityX = 0;
        _this17.starSpriteAnimatorUp = new _spriteAnimator.CharacterSpriteAnimator(setting.jumpEndCallback.bind(null, _this17), _this17);
        _this17.starSpriteAnimatorMove = new _spriteAnimator.MoveSpriteAnimator(null, _this17);
        return _this17;
    }

    _createClass(Star, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.fpsNum = 60;
                this.starSpriteAnimatorUp.execute();
                this.starSpriteAnimatorMove.execute();
                if (this.top < this.initialTop - _config.WH.wall.height) {
                    this.upover = true;
                }

                this.update(ctx, time, fpsNum);
            }
            //console.log( this.top);
            this.paint(ctx);
        }
    }, {
        key: 'up',
        value: function up(VY) {
            this.velocityY = -VY;
            this.starSpriteAnimatorUp.start();
        }
    }, {
        key: 'move',
        value: function move(VX) {
            this.velocityX = VX;
            this.initvelocityX = VX;
            this.starSpriteAnimatorMove.start();
        }
    }, {
        key: 'fall',
        value: function fall(VY) {
            this.initialTop = this.top - _config.WH.wall.height;
        }
    }, {
        key: 'die',
        value: function die(VY) {
            console.log('星星掉洞里了');
        }
    }]);

    return Star;
}(SceneSprite);

var Bullet = function (_SceneSprite7) {
    _inherits(Bullet, _SceneSprite7);

    function Bullet(setting) {
        _classCallCheck(this, Bullet);

        setting.name = setting.name || 'bullet';

        var _this18 = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.bullet), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this18.width = setting.width || _config.WH.bullet.width;
        _this18.height = setting.height || _config.WH.bullet.height;
        _this18.top = setting.top || 0;
        _this18.isDie = false;
        // console.log(this.top);
        // this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - setting.physicaltop;
        _this18.id = setting.id || 0;
        _this18.left = setting.left || 0;
        _this18.initvelocityX = 0;
        _this18.translateLeft = 0;
        _this18.positionmile = setting.positionmile || 0;
        _this18.roleType = 'bullet';
        _this18.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE;
        _this18.initialTop = _this18.top;
        _this18.isJump = false; //判断是否为处于上下波动中
        //this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.bullet);
        _this18.mycanvas = _config.element.mycanvas;
        _this18.bulletSpriteAnimatorJump = new _spriteAnimator.BulletJumpSpriteAnimator(setting.jumpEndCallback, _this18);
        _this18.marioSpriteAnimatorJump = new _spriteAnimator.CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, _this18);
        _this18.RV = 480; //旋转角速度
        _this18.rotate = 0; //旋转角度。
        return _this18;
    }

    _createClass(Bullet, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.fpsNum = fpsNum;
                // console.log(this.left);
                this.bulletSpriteAnimatorJump.execute();
                this.marioSpriteAnimatorJump.execute();

                this.update(ctx, time, fpsNum);
                ctx.save();

                ctx.translate(this.left + this.width / 2, this.top + this.height / 2);
                this.rotate += this.RV / fpsNum;

                ctx.rotate(this.rotate * Math.PI / 180);
            }

            ctx.drawImage(this.painter.image, -this.width / 2, -this.height / 2, this.width, this.height);
            if (!gameControl.gamePause) {
                ctx.restore();
            }
        }
    }, {
        key: 'jump',
        value: function jump(VX) {

            // this.startVelocityY = 0;
            this.initvelocityX = VX;
            this.velocityX = VX;
            this.velocityY = 0;
            if (this.initvelocityX > 0) {
                this.RV = -_config.bulletConfig.RV;
            } else {
                this.RV = _config.bulletConfig.RV;
            }

            this.initialTop = _config.element.mycanvasHeight - this.height - _config.gameConfig.roadHeight;
            //this.top = this.initialTop;
            this.bulletSpriteAnimatorJump.start();
        }
    }, {
        key: 'die',
        value: function die(VY) {
            console.log('子弹掉洞里了');
        }
    }]);

    return Bullet;
}(SceneSprite);

var Pipe = function (_SceneSprite8) {
    _inherits(Pipe, _SceneSprite8);

    function Pipe(setting) {
        _classCallCheck(this, Pipe);

        setting.name = setting.name || 'pipe';

        var _this19 = _possibleConstructorReturn(this, (Pipe.__proto__ || Object.getPrototypeOf(Pipe)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.pipe), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this19.width = setting.width || _config.WH.pipe.width;;
        _this19.height = setting.height || _config.WH.pipe.height;
        _this19.physicaltop = setting.physicaltop || 0;
        _this19.top = _config.element.mycanvasHeight - _this19.height - _this19.physicaltop;
        _this19.left = setting.left || 0;
        _this19.positionmile = setting.positionmile || 0;
        _this19.roleType = 'pipe';
        _this19.id = setting.id || 0;
        return _this19;
    }

    _createClass(Pipe, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                //console.log()
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }]);

    return Pipe;
}(SceneSprite);
//旗杆对象


var Final = function (_SceneSprite9) {
    _inherits(Final, _SceneSprite9);

    function Final(setting) {
        _classCallCheck(this, Final);

        setting.name = setting.name || 'final';

        var _this20 = _possibleConstructorReturn(this, (Final.__proto__ || Object.getPrototypeOf(Final)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.final), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this20.width = setting.width || _config.WH.final.width;;
        _this20.height = setting.height || _config.WH.final.height;
        _this20.physicaltop = setting.physicaltop || 0;
        _this20.top = _config.element.mycanvasHeight - _this20.height - _this20.physicaltop;
        _this20.left = setting.left || 0;
        _this20.positionmile = setting.positionmile || 0;
        _this20.roleType = 'final';
        _this20.id = setting.id || 0;
        return _this20;
    }

    _createClass(Final, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                //console.log()
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }]);

    return Final;
}(SceneSprite);
//旗帜对象


var Flag = function (_SceneSprite10) {
    _inherits(Flag, _SceneSprite10);

    function Flag(setting) {
        _classCallCheck(this, Flag);

        setting.name = setting.name || 'flag';

        var _this21 = _possibleConstructorReturn(this, (Flag.__proto__ || Object.getPrototypeOf(Flag)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.flag), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this21.width = setting.width || _config.WH.flag.width;;
        _this21.height = setting.height || _config.WH.flag.height;
        _this21.physicaltop = setting.physicaltop || 0;
        _this21.top = _config.element.mycanvasHeight - _this21.height - _this21.physicaltop;
        _this21.left = setting.left || 0;
        _this21.positionmile = setting.positionmile || 0;
        _this21.roleType = 'flag';
        _this21.id = setting.id || 0;
        _this21.velocityY = 0;
        _this21.flowerSpriteAnimatorUp = new _spriteAnimator.DownSpriteAnimator(function () {
            setting.callback();
        }, _this21);
        return _this21;
    }

    _createClass(Flag, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            //if (!gameControl.gamePause) {
            //console.log()
            this.fpsNum = fpsNum;
            this.flowerSpriteAnimatorUp.execute();
            this.update(ctx, time, fpsNum);
            // }
            this.paint(ctx);
        }
    }, {
        key: 'down',
        value: function down() {
            // this.startVelocityY = VY;
            this.initialTop = _config.element.mycanvasHeight - 50;
            this.velocityY = 80;
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.music, _audioControl.gameAudio.downflag);
            this.flowerSpriteAnimatorUp.start();
        }
    }]);

    return Flag;
}(SceneSprite);

var Tower = function (_SceneSprite11) {
    _inherits(Tower, _SceneSprite11);

    function Tower(setting) {
        _classCallCheck(this, Tower);

        setting.name = setting.name || 'tower';

        var _this22 = _possibleConstructorReturn(this, (Tower.__proto__ || Object.getPrototypeOf(Tower)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.tower), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this22.width = setting.width || _config.WH.tower.width;;
        _this22.height = setting.height || _config.WH.tower.height;
        _this22.physicaltop = setting.physicaltop || 0;
        _this22.top = _config.element.mycanvasHeight - _this22.height - _this22.physicaltop;
        _this22.left = setting.left || 0;
        _this22.positionmile = setting.positionmile || 0;
        _this22.roleType = 'tower';
        _this22.id = setting.id || 0;
        _this22.isReverse = setting.isReverse;
        _this22.mycanvas = _config.element.mycanvas;
        _this22.painter = new CharacterImagePainter(_gameSource2.default.imageList.tower);
        return _this22;
    }

    _createClass(Tower, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }]);

    return Tower;
}(SceneSprite);

var Hole = function (_SceneSprite12) {
    _inherits(Hole, _SceneSprite12);

    function Hole(setting) {
        _classCallCheck(this, Hole);

        setting.name = setting.name || 'hole';

        var _this23 = _possibleConstructorReturn(this, (Hole.__proto__ || Object.getPrototypeOf(Hole)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.hole), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this23.width = setting.width || _config.WH.hole.width;;
        _this23.height = setting.height || _config.WH.hole.height;
        _this23.physicaltop = setting.physicaltop || 0;
        _this23.top = _config.element.mycanvasHeight - _this23.height - _this23.physicaltop;
        _this23.left = setting.left || 0;
        _this23.positionmile = setting.positionmile || 0;
        _this23.roleType = 'hole';
        _this23.id = setting.id || 0;
        return _this23;
    }

    _createClass(Hole, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }]);

    return Hole;
}(SceneSprite);

var Brick = function (_SceneSprite13) {
    _inherits(Brick, _SceneSprite13);

    function Brick(setting) {
        _classCallCheck(this, Brick);

        setting.name = setting.name || 'brick';

        var _this24 = _possibleConstructorReturn(this, (Brick.__proto__ || Object.getPrototypeOf(Brick)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.wall), [new _behaviorList.behaviorList.SpriteLeftToRight()]));

        _this24.physicaltop = setting.physicaltop || 0;
        _this24.top = _config.element.mycanvasHeight - _this24.height - _config.gameConfig.roadHeight - setting.physicaltop;
        _this24.id = setting.id || 0;
        _this24.left = setting.left || 0;
        _this24.positionmile = setting.positionmile || 0;
        _this24.roleType = 'Brick';
        _this24.status = setting.status || "leftup";
        _this24.imgwidth = _config.wallConfig[_this24.status + "Sprite"].width;
        _this24.imgheight = _config.wallConfig[_this24.status + "Sprite"].height;
        _this24.imgleft = _config.wallConfig[_this24.status + "Sprite"].left;
        _this24.imgtop = _config.wallConfig[_this24.status + "Sprite"].top;
        _this24.width = _this24.imgwidth;
        _this24.height = _this24.imgheight; //50变35，即width*0.7;

        _this24.translateLeft = 0;
        _this24.GRAVITY_FORCE = _config.publicConfig.GRAVITY_FORCE;
        _this24.initialTop = _this24.top;
        _this24.isJump = false; //判断是否为处于上下波动中
        //this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.wall);
        _this24.mycanvas = _config.element.mycanvas;
        _this24.BrickSpriteAnimatorUp = new _spriteAnimator.BrikeSpriteAnimator(setting.jumpEndCallback, _this24);
        return _this24;
    }

    _createClass(Brick, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.fpsNum = fpsNum;
                this.BrickSpriteAnimatorUp.execute();
                this.update(ctx, time, fpsNum);
            }
            this.paint(ctx);
        }
    }, {
        key: 'up',
        value: function up() {
            this.initialTop = this.mycanvas.height;
            switch (this.status) {
                case "leftup":
                    {
                        this.velocityY = -350;
                        this.velocityX = 70;
                    }
                    break;
                case "leftdown":
                    {
                        this.velocityY = -200;
                        this.velocityX = 70;
                    }
                    break;
                case "rightup":
                    {
                        this.velocityY = -350;
                        this.velocityX = -70;
                    }
                    break;
                case "rightdown":
                    {
                        this.velocityY = -200;
                        this.velocityX = -70;
                    }
                    break;
            }

            this.BrickSpriteAnimatorUp.start();
        }
    }]);

    return Brick;
}(SceneSprite);

var BG = function (_SceneSprite14) {
    _inherits(BG, _SceneSprite14);

    function BG(setting) {
        _classCallCheck(this, BG);

        var _this25 = _possibleConstructorReturn(this, (BG.__proto__ || Object.getPrototypeOf(BG)).call(this, setting.name, new SceneImagePainter(_gameSource2.default.imageList.BG), [new _behaviorList.behaviorList.moveLeftToRight()]));

        _this25.width = setting.width;
        _this25.height = setting.height;
        _this25.top = setting.top;
        _this25.left = setting.left || 0;
        return _this25;
    }

    _createClass(BG, [{
        key: 'draw',
        value: function draw(ctx, time, fpsNum) {
            if (!gameControl.gamePause) {
                this.update(ctx, time, fpsNum);
            }
            var left = this.left;
            if (this.velocityX > 0) {
                left = left < _config.element.mycanvasWidth ? left : 0;
            } else {
                left = left > -_config.element.mycanvasWidth ? left : 0;
            }
            this.left = left;
            this.paint(ctx);
            this.left = left - this.width;
            this.paint(ctx);
            this.left = left + this.width;
            this.paint(ctx);
            this.left = left;
        }
    }]);

    return BG;
}(SceneSprite);

exports.CharacterImagePainter = CharacterImagePainter;
exports.CharacterRunSpriteSheetPainter = CharacterRunSpriteSheetPainter;
exports.CharacterRiseSpriteSheetPainter = CharacterRiseSpriteSheetPainter;
exports.SceneSprite = SceneSprite;
exports.SceneImagePainter = SceneImagePainter;
exports.Mario = Mario;
exports.Monster = Monster;
exports.Tortoise = Tortoise;
exports.Shell = Shell;
exports.Life = Life;
exports.Over = Over;
exports.Wall = Wall;
exports.Money = Money;
exports.Flower = Flower;
exports.BadFlower = BadFlower;
exports.Mushroom = Mushroom;
exports.Star = Star;
exports.Bullet = Bullet;
exports.Pipe = Pipe;
exports.Final = Final;
exports.Flag = Flag;
exports.Tower = Tower;
exports.Hole = Hole;
exports.Brick = Brick;
exports.BG = BG;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//var BG = require(require('.../images/background2.png');


//所有游戏需要加载的外部资源
var gameSourceUrl = {
    imageList: {
        //背景
        icon: __webpack_require__(18),
        BG: __webpack_require__(19),
        wall: __webpack_require__(20),
        flower: __webpack_require__(21),
        badflower: __webpack_require__(22),
        mushroom: __webpack_require__(23),
        pipe: __webpack_require__(24),
        money: __webpack_require__(25),
        star: __webpack_require__(26),
        bullet: __webpack_require__(27),
        hole: __webpack_require__(28),
        tower: __webpack_require__(29),
        monster: __webpack_require__(30),
        monsterDie: __webpack_require__(31),
        tortoise: __webpack_require__(32),
        shell: __webpack_require__(33),
        life: __webpack_require__(34),
        gameOver: __webpack_require__(35),
        gameSuccess: __webpack_require__(36),
        flag: __webpack_require__(37),
        final: __webpack_require__(38),
        //马里奥
        mario: {
            commonMairo: {
                run: __webpack_require__(39),
                jump: __webpack_require__(40),
                stand: __webpack_require__(41),
                laqi: __webpack_require__(42)
            },
            fireMairo: {
                run: __webpack_require__(43),
                jump: __webpack_require__(44),
                laqi: __webpack_require__(45),
                stand: __webpack_require__(46)
            },
            invinciblefireMairo: {
                run: __webpack_require__(47),
                jump: __webpack_require__(48),
                laqi: __webpack_require__(49),
                stand: __webpack_require__(50)
            }
        }
    },
    audioList: {
        GameOver: __webpack_require__(51),
        BGM: __webpack_require__(52),
        gamesuccess: __webpack_require__(53),
        WD: __webpack_require__(54),
        jumpAll: __webpack_require__(55), //
        collision: __webpack_require__(56), //子弹打在其他物体上
        die: __webpack_require__(57),
        music: __webpack_require__(58) //顶到藤蔓 顶碎砖块 1up 拉旗杆 过关时时间清零
    }
};
exports.default = gameSourceUrl;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.judgeMobile = judgeMobile;
function judgeMobile() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        //window.location.href=B页面;
        return false;
    } else {
        return true;
    }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//按钮区域位置
var contronposition = {
	radius: 45,
	right: {
		x: 565,
		y: 250
	},
	left: {
		x: 55,
		y: 230
	}
};
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
	if (w < 2 * r) {
		r = w / 2;
	}
	if (h < 2 * r) {
		r = h / 2;
	}
	this.beginPath();
	this.moveTo(x + r, y);
	this.arcTo(x + w, y, x + w, y + h, r);
	this.arcTo(x + w, y + h, x, y + h, r);
	this.arcTo(x, y + h, x, y, r);
	this.arcTo(x, y, x + w, y, r);
	this.closePath();
	return this;
};
var controler = {
	// thrustersCanvas: document.getElementById('controlCanvas'),
	// context: document.getElementById('controlCanvas').getContext('2d'),
	// result: document.querySelector('.result'),
	RIGHT: 1,
	LEFT: 2,
	ARROW_MARGIN: 15,
	BALL_RADIUS: 1.5,
	LEDGE_LEFT: 15,
	LEDGE_TOP: 9,
	LEDGE_WIDTH: 4.4,
	LEDGE_HEIGHT: 1.2,
	ANIMATION_DURATION: 20,
	THRUSTER_FILL_STYLE: 'rgba(100,140,230,0.8)',
	THRUSTER_FIRING_FILL_STYLE: 'rgba(255,255,0,0.8)',
	arrowWidth: 120,
	arrowHeight: 65,
	lastTime: 0,
	arrowRadius: 25,

	//右侧按钮两种状态
	press: {
		down: {
			backgroundColor: 'rgba(220, 75, 63, 0.5)',
			textColor: 'rgba(247, 20, 20, 0.78)'
		},
		up: {
			backgroundColor: 'rgba(100, 140, 230, 0.5)',
			textColor: 'rgba(0, 182, 255, 0.78)'
		}

	},

	//绘制右侧按钮的位置
	btnArr: {
		"Y": {
			position: {
				x: contronposition.right.x,
				y: contronposition.right.y - contronposition.radius
			}
		},
		"A": {
			position: {
				x: contronposition.right.x,
				y: contronposition.right.y + contronposition.radius
			}
		},
		"X": {
			position: {
				x: contronposition.right.x - contronposition.radius,
				y: contronposition.right.y
			}
		},
		"B": {
			position: {
				x: contronposition.right.x + contronposition.radius,
				y: contronposition.right.y
			}
		}
	},
	//判断按钮是否被按下
	arrowArr: {
		"left": {
			isPress: false,
			position: {
				x: 102,
				y: 90
			}
		},
		"right": {
			isPress: false,
			position: {
				x: 102,
				y: 155
			}
		},
		"X": {
			isPress: false,
			position: {
				x: 112,
				y: 522
			}
		},
		"Y": {
			isPress: false,
			position: {
				x: 158,
				y: 566
			}
		},
		"B": {
			isPress: false,
			position: {
				x: 112,
				y: 612
			}
		},
		"A": {
			isPress: false,
			position: {
				x: 68,
				y: 566
			}
		}
	},
	pause: {
		isPress: false,
		position: {
			x: 80,
			y: 330
		}
	},
	//判断按钮是否被按住
	juadegeP: function juadegeP(loc1, loc2, r) {
		if (Math.pow(loc1.x - loc2.x, 2) + Math.pow(loc1.y - loc2.y, 2) < Math.pow(r, 2)) {
			return true;
		} else {
			return false;
		}
	},
	juadegePause: function juadegePause(loc1, loc2, r) {
		if (Math.pow(loc1.x - loc2.x + 7, 2) + Math.pow(loc1.y - loc2.y + 12, 2) < Math.pow(r, 2)) {
			return true;
		} else {
			return false;
		}
	},
	//绘制所有按钮
	draw: function draw() {
		this.context.clearRect(0, 0, this.canvasWidht, this.canvasHeight);
		this.context.save();
		this.context.shadowColor = 'rgba(0, 0, 0, 0.8)';
		this.context.shadowOffsetX = 2;
		this.context.shadowOffsetY = 2;
		this.context.shadowBlur = 2;
		this.drawTwoArcs();
		this.context.beginPath();
		this.context.fillStyle = this.pause.isPress ? this.THRUSTER_FIRING_FILL_STYLE : this.THRUSTER_FILL_STYLE;
		this.context.roundRect(this.pause.position.y - 12, this.canvasHeight - this.pause.position.x - 7, this.arrowRadius, this.arrowRadius / 2, 4);
		this.context.fill();
		// this.context.beginPath();
		// this.context.arc(this.pause.position.y, this.canvasHeight - this.pause.position.x, this.arrowRadius/1.5, 0, 2 * Math.PI, false);
		// this.context.stroke();
		this.paintThrusters();
		this.context.restore();
	},
	//判断箭头状态
	paintThrusters: function paintThrusters() {
		var self = this;
		self.context.save();
		var arr = ['left', 'right'];
		arr.forEach(function (item) {
			self.context.save();
			self.context.fillStyle = self.arrowArr[item].isPress ? self.THRUSTER_FIRING_FILL_STYLE : self.THRUSTER_FILL_STYLE;
			if (item == 'left') {
				self.paintLeftArrow(self.context);
			}
			if (item == 'right') {
				self.paintRightArrow(self.context);
			}
			self.context.restore();
		});
	},
	//绘制左箭头
	paintLeftArrow: function paintLeftArrow(context) {
		var self = this;
		self.context.save();
		self.context.translate(contronposition.left.x, contronposition.left.y);
		self.paintArrow(self.context);
		self.context.restore();
	},
	//绘制右箭头
	paintRightArrow: function paintRightArrow(context) {
		var self = this;
		self.context.save();
		self.context.translate(contronposition.left.x, contronposition.left.y);
		self.context.translate(self.arrowWidth + self.ARROW_MARGIN, 0);
		self.context.scale(-1, 1);
		self.paintArrow(self.context);
		self.context.restore();
	},
	//绘制箭头
	paintArrow: function paintArrow(context) {
		this.context.beginPath();
		var arrowWidth = this.arrowWidth;
		var ARROW_MARGIN = this.ARROW_MARGIN;
		var arrowHeight = this.arrowHeight;
		this.context.moveTo(arrowWidth / 2 - ARROW_MARGIN / 2, ARROW_MARGIN / 2);

		this.context.lineTo(arrowWidth / 2 - ARROW_MARGIN / 2, arrowHeight - ARROW_MARGIN);

		this.context.quadraticCurveTo(arrowWidth / 2 - ARROW_MARGIN / 2, arrowHeight - ARROW_MARGIN / 2, arrowWidth / 2 - ARROW_MARGIN, arrowHeight - ARROW_MARGIN / 2);

		this.context.lineTo(ARROW_MARGIN, arrowHeight / 2 + ARROW_MARGIN / 2);

		this.context.quadraticCurveTo(ARROW_MARGIN - 3, arrowHeight / 2, ARROW_MARGIN, arrowHeight / 2 - ARROW_MARGIN / 2);

		this.context.lineTo(arrowWidth / 2 - ARROW_MARGIN, ARROW_MARGIN / 2);

		this.context.quadraticCurveTo(arrowWidth / 2 - ARROW_MARGIN, ARROW_MARGIN / 2, arrowWidth / 2 - ARROW_MARGIN / 2, ARROW_MARGIN / 2);
		this.context.fill();
		this.context.stroke();
	},
	//绘制右侧按钮
	drawTwoArcs: function drawTwoArcs() {
		var self = this;
		var keys = Object.keys(self.btnArr);
		// console.log(keys);
		self.context.font = '30px Lucida Sans';
		self.context.textAlign = 'center';
		keys.forEach(function (item) {
			var btn = self.btnArr[item];
			var isPress = self.arrowArr[item];
			var drawStatus = isPress.isPress ? self.press.down : self.press.up;
			self.context.save();
			self.context.fillStyle = drawStatus.backgroundColor;
			self.context.strokeStyle = self.context.fillStyle;
			self.context.beginPath();
			self.context.arc(btn.position.x, btn.position.y, self.arrowRadius, 0, Math.PI * 2, false); // outer: CW
			self.context.fill();
			self.context.stroke();
			self.context.restore();
			self.context.save();
			self.context.fillStyle = drawStatus.textColor;
			self.context.shadowColor = undefined;
			self.context.shadowOffsetX = 0;
			self.context.shadowOffsetY = 0;
			self.context.fillText(item, btn.position.x, btn.position.y + 10);
			self.context.restore();
		});
	},
	//鼠标按下触发的事件
	drawPressDown: function drawPressDown(pressarr) {
		var self = this;
		var arr = Object.keys(self.arrowArr);
		arr.forEach(function (item) {
			self.arrowArr[item].isPress = false;
		});
		var length = pressarr.length;
		for (var i = 0; i < length; i++) {
			var item2 = pressarr[i];
			var loc = self.windowToCanvas(item2.pageX, item2.pageY);
			var x0 = self.arrowRadius + self.arrowArr.left.position.y;
			var y0 = this.canvasHeight - self.arrowRadius - self.arrowArr.left.position.x;
			arr.forEach(function (item) {
				if (self.juadegeP(loc, self.arrowArr[item].position, self.arrowRadius)) {
					self.arrowArr[item].isPress = true;
				}
			});
			if (self.juadegeP(loc, self.pause.position, self.arrowRadius)) {
				self.pause.isPress = !self.pause.isPress;
			}
		}
	},
	//屏幕坐标转化为canvas坐标
	windowToCanvas: function windowToCanvas(x, y) {
		var bbox = this.thrustersCanvas.getBoundingClientRect();
		var self = this;
		return {
			y: (y - bbox.left) * (self.canvasWidht / bbox.height),
			x: (x - bbox.top) * (self.canvasHeight / bbox.width)
		};
	},

	init: function init() {
		var self = this;
		//self.bindEvent();
		this.thrustersCanvas = document.getElementById('controlCanvas'), this.context = document.getElementById('controlCanvas').getContext('2d'), this.result = document.querySelector('.result'), this.canvasWidht = document.getElementById('controlCanvas').width;

		this.canvasHeight = document.getElementById('controlCanvas').height;
		self.draw();
	}
};
exports.controler = controler;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gameEngine = __webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

var _progressbar = __webpack_require__(12);

var _collisionDetection = __webpack_require__(13);

var _config = __webpack_require__(0);

var _gameProgress = __webpack_require__(3);

var _public = __webpack_require__(1);

var _audioControl = __webpack_require__(2);

var _clip = __webpack_require__(62);

var _gameSource = __webpack_require__(5);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _gameSprite = __webpack_require__(4);

var _judgeMobile = __webpack_require__(6);

__webpack_require__(63);

var _control = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(64);
__webpack_require__(65);
//绘制进度条

//绘制进度条

//绘制进度条

window.gameControl = new _gameEngine.Game('game', _config.element.mycanvas);
gameControl.speed = 1;
//根据不同客户端，区分手机还是pc样式。


var sourceLoadObj = {
    sourceNum: 0,
    currentNum: 0,
    progressbar: new _progressbar.COREHTML5.Progressbar(_config.element.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250),
    loadedCallback: function loadedCallback() {
        var percent = this.currentNum / this.sourceNum * 100;
        this.progressbar.draw(percent);
        if (this.currentNum == this.sourceNum) {
            this.progressOver();
        }
    },
    progressOver: function progressOver() {
        _config.element.mycanvas.style.display = 'block';
        _config.element.progressDiv.style.display = 'none';
        _config.element.tipDiv.style.display = 'block';
        _config.element.progressBox.style.display = 'none';
        //加载图片完成后执行。
        _gameProgress.createFactory.init();
        _gameProgress.createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
        gameControl.start();
        _gameProgress.progressObj.countDownStart();
        //背景音乐响起     
        _audioControl.audioControl.BGMPlay(gameSourceObj.audioList.BGM);
        _audioControl.audioControl.timeupdateAddEventListener(gameSourceObj.audioList.jumpAll);
        _audioControl.audioControl.timeupdateAddEventListener(gameSourceObj.audioList.collision);
        _audioControl.audioControl.timeupdateAddEventListener(gameSourceObj.audioList.music);
        game.init();

        // drawSpriteList.mario.rise(WH.mario.bigstatus.height, 3);
    }

    //gameSourceUrl来自gameSourceUrl.js
};window.gameSourceObj = _public.lib.convertToObject(_gameSource2.default, sourceLoadObj);
window.game = {
    lastKeyListenerTime: 0,
    init: function init() {
        var self = this;
        _clip.clipObj.init(function () {

            console.log('游戏开始');
            gameControl.gamePause = false;
        }, function () {
            if (drawSpriteList.mario.lifeNum > 0) {
                var num = _gameProgress.progressObj.mileageNum > 37 * 174 / 100 ? 37 * 174 / 100 : 0;
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
        "space": false,
        "p": false
    },
    over: function over() {
        _audioControl.audioControl.audioPlay(gameSourceObj.audioList.GameOver, _audioControl.gameAudio.GameOver);
        _audioControl.audioControl.BGMPause(gameSourceObj.audioList.BGM);
        drawSpriteList.gameOver.push(new _gameSprite.Over({
            name: 'Over'
        }));
    },
    success: function success() {
        var success = new _gameSprite.Over({
            name: 'Over'
        });
        success.painter.image.src = _gameSource2.default.imageList.gameSuccess;
        drawSpriteList.gameOver.push(success);
    },
    reset: function reset(num) {
        console.log("reset");
        //时间重置。
        _gameProgress.progressObj.totaltime = 300;
        _gameProgress.progressObj.countDownWatch.reset();
        _gameProgress.progressObj.countDownWatch.start();
        _gameProgress.progressObj.mileageNum = num;
        _gameProgress.progressObj.createSpriteMileNum = num * _config.gameConfig.objectSpeedRate;
        drawSpriteList.arrayOthersA = [];
        _gameProgress.createFactory.arrayTotalProgress.forEach(function (item) {
            if (item.isMonster) {
                item.isAdd = false;
            }
        });
        drawSpriteList.createAnimationSpriteList = [];
        _gameProgress.createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);

        drawSpriteList.mario.reset();
        drawSpriteList.statusArr.life.minuteLife(drawSpriteList.mario.lifeNum);
    },
    setScreenPress: function setScreenPress(obj1, obj2, obj3) {
        var self = this;
        obj1['right'] = obj2['right'].isPress;
        obj1['left'] = obj2['left'].isPress;
        obj1['s'] = obj2['A'].isPress;
        obj1['w'] = obj2['X'].isPress;
        obj1['d'] = obj2['B'].isPress;
        obj1['e'] = obj2['Y'].isPress;
        if (obj1['p'] != obj3.isPress) {
            self.pause();
            obj1['p'] = obj3.isPress;
        }

        self.activeEventCallback();
    },
    bindEvent: function bindEvent() {
        //createFactory.createBadflower(300, 0);
        this.reset(0);
        var self = this;
        setInterval(function () {
            _gameProgress.createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
        }, 1000);

        var isMobile = (0, _judgeMobile.judgeMobile)();
        if (isMobile) {

            var isMove = true;
            var clearTime = null;
            var bindEventInterval = setInterval(function () {
                self.thrustersCanvas = document.getElementById('controlCanvas');
                if (!!self.thrustersCanvas) {
                    clearInterval(bindEventInterval);
                    console.log("绑定手机事件");
                    self.thrustersCanvas.addEventListener('touchstart', function (e) {
                        _control.controler.result.innerHTML = e.targetTouches.length;
                        e.preventDefault(); // prevent cursor change  
                        _control.controler.drawPressDown(e.targetTouches);
                        _control.controler.draw();
                        self.setScreenPress(self.mapKey, _control.controler.arrowArr, _control.controler.pause);
                    });
                    self.thrustersCanvas.addEventListener('touchend', function (e) {
                        _control.controler.result.innerHTML = e.targetTouches.length;
                        e.preventDefault();
                        _control.controler.drawPressDown(e.targetTouches);
                        _control.controler.draw();
                        self.setScreenPress(self.mapKey, _control.controler.arrowArr, _control.controler.pause);
                        isMove = false;
                        if (clearTime) {
                            clearTimeout(clearTime);
                        }
                    });
                    self.thrustersCanvas.addEventListener('touchmove', function (e) {
                        e.preventDefault();
                        if (isMove) {
                            clearTime = setTimeout(function () {
                                self.drawPressDown(e.targetTouches);
                                self.draw();
                                self.setScreenPress(self.mapKey, _control.controler.arrowArr, _control.controler.pause);
                                isMove = true;
                            }, 100);
                        }
                        isMove = false;
                    });
                }
            }, 1000);
        }
        // Key Listeners..............................................
        gameControl.addKeyListener({
            key: 'p',
            listener: function () {
                var flag = true; //按下抬起算一次。
                return function (status) {
                    if (status == 1 && flag) {
                        // if (drawSpriteList.mario.status == 4) {
                        //     //背景是无敌音乐
                        //     if (gameSourceObj.audioList.WD.paused) {
                        //         gameSourceObj.audioList.WD.play();
                        //     } else {
                        //         gameSourceObj.audioList.WD.pause();
                        //     }
                        // } else {
                        //     if (gameSourceObj.audioList.BGM.paused) {
                        //         audioControl.BGMPlay(gameSourceObj.audioList.BGM);
                        //     } else {
                        //         audioControl.BGMPause(gameSourceObj.audioList.BGM);
                        //     }
                        // }

                        // gameControl.togglePaused();
                        // if (progressObj.countDownWatch.isRunning()) {
                        //     progressObj.countDownPause();
                        // } else {
                        //     progressObj.countDownStart();
                        // }
                        self.pause();
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
                // console.log(2);
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
                // console.log(1);
                if (status == 1) {
                    self.mapKey['left'] = true;
                } else {
                    self.mapKey['left'] = false;
                }
                self.activeEventCallback();
            }
        });
    },
    pause: function pause() {
        if (drawSpriteList.mario.status == 4) {
            //背景是无敌音乐
            if (gameSourceObj.audioList.WD.paused) {
                gameSourceObj.audioList.WD.play();
            } else {
                gameSourceObj.audioList.WD.pause();
            }
        } else {
            if (gameSourceObj.audioList.BGM.paused) {
                _audioControl.audioControl.BGMPlay(gameSourceObj.audioList.BGM);
            } else {
                _audioControl.audioControl.BGMPause(gameSourceObj.audioList.BGM);
            }
        }

        gameControl.togglePaused();
        if (_gameProgress.progressObj.countDownWatch.isRunning()) {
            _gameProgress.progressObj.countDownPause();
        } else {
            _gameProgress.progressObj.countDownStart();
        }
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
            _gameProgress.createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
            if (gameControl.gamePause == true) {
                return;
            }
            _config.gameConfig.setSpeedDefault();
            //如果是左键
            if (this.mapKey["left"] && !this.mapKey["right"]) {
                //如果马里奥当前面向右，然后从右转向左，则设置初始化默认速度，以防当前面有墙，被墙挡住，速度为0，掉头后速度设为默认值。
                if (drawSpriteList.mario.rColliding) {
                    _config.gameConfig.setSpeedZero();
                }
                this.setDirection(-1);
                drawSpriteList.mario.isReverse = false;
                // console.log("按左键");    
            } else {
                if (drawSpriteList.mario.lColliding) {
                    _config.gameConfig.setSpeedZero();
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
                var status = this.mapKey["s"] ? _config.marioGameConfig.smallJumpV : _config.marioGameConfig.bigJumpV;
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
                _gameProgress.createFactory.createBullet(_gameProgress.progressObj.createSpriteMileNum + drawSpriteList.mario.left + drawSpriteList.mario.width, drawSpriteList.mario.top + drawSpriteList.mario.height / 3, drawSpriteList.mario.isReverse);
            } else {
                _gameProgress.createFactory.createBullet(_gameProgress.progressObj.createSpriteMileNum + drawSpriteList.mario.left, drawSpriteList.mario.top + drawSpriteList.mario.height / 3, drawSpriteList.mario.isReverse);
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

window.SpriteAnimatorEndCallbackList = {
    marioJumpend: function marioJumpend(mario) {
        if (mario.isDie) {
            if (mario.lifeNum > 0) {
                console.log('暂停');
                gameControl.gamePause = true;
                _clip.clipObj.startDraw();
            } else {
                _clip.clipObj.startDraw();
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
        _public.lib.removeByValue(drawSpriteList.createSpriteList, 'id', sprite.id);
        sprite = null;
    },
    brickupend: function brickupend(sprite) {
        _public.lib.removeByValue(drawSpriteList.createBrickSpriteList, 'id', sprite.id);
        sprite = null;
    },
    monsterJumpend: function monsterJumpend(sprite) {
        if (sprite.isDie == true) {
            _public.lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', sprite.id);
            sprite = null;
            // console.log('移除怪兽');
        }
    }
};

window.drawSpriteList = {
    isSuccess: false,
    success: function success() {
        this.mario.intoTower();
        console.log('游戏胜利');
    },
    bg: new _gameSprite.BG({
        name: "BG",
        width: _config.element.mycanvasWidth,
        height: _config.element.mycanvasHeight,
        top: 0,
        left: 0
    }),
    //马里奥
    mario: new _gameSprite.Mario({
        name: "mario",
        isReverse: true,
        success: function success() {
            _clip.clipObj.startDraw();
        }
    }),

    //总体进度
    progressObj: _gameProgress.progressObj,
    //分数，生命值等
    statusArr: {
        life: new _gameSprite.Life({
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
        this.bg.velocityX = _config.gameConfig.skySpeed * status;
        this.progressObj.velocityX = _config.gameConfig.progressObjSpeed * status;
        this.arrayOthersA.forEach(function (itemDraw) {
            itemDraw.velocityX = _config.gameConfig.objectSpeed * status;
        });
        var createSpriteList = this.createSpriteList;
        createSpriteList.forEach(function (item) {
            item.velocityX = _config.gameConfig.objectSpeed * status;
        });
        this.createAnimationSpriteList.forEach(function (item) {
            item.velocityX = item.initvelocityX + _config.gameConfig.objectSpeed * status;
        });
        this.createBulletSpriteList.forEach(function (item) {
            item.velocityX = item.initvelocityX + _config.gameConfig.objectSpeed * status;
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
                    _public.lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', mushroomSprite.id);
                    _audioControl.audioControl.audioPlay(gameSourceObj.audioList.jumpAll, _audioControl.gameAudio.growup);
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
            if (_config.gameConfig.gamePause == true) {
                _config.gameConfig.setSpeedZero();
            } else {
                _config.gameConfig.setSpeedDefault();
            }

            //马里奥与墙、管道,固定金币等碰撞
            drawSpriteList.arrayOthersA.forEach(function (itemDraw) {
                var callback = self.config[itemDraw.name].callback || function () {};
                _collisionDetection.CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback);
            });
            //马里奥与花，弹起的金币等碰撞
            drawSpriteList.createSpriteList.forEach(function (itemDraw) {
                var callback = self.config[itemDraw.name].callback || function () {};
                _collisionDetection.CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback);
            });
            //子弹与障碍物碰撞，（包括与管道和墙的左右碰撞，并不完善（尚未完成），与怪兽的碰撞）
            drawSpriteList.createBulletSpriteList.forEach(function (itemDraw) {
                drawSpriteList.arrayOthersA.forEach(function (barrier) {
                    if (barrier.name == 'wall' || barrier.name == 'pipe') {
                        var callback2 = self.config["bullet"].callback || function () {};
                        _collisionDetection.CD['judgeBBarrier'](itemDraw, barrier, callback2);
                    }
                    if (barrier.name == 'hole') {
                        _collisionDetection.CD['judgeBulletHole'](itemDraw, barrier);
                    }
                    if (barrier.name == 'badflower') {
                        _collisionDetection.CD['judgeBulletBadflower'](itemDraw, barrier);
                    }
                });

                drawSpriteList.createAnimationSpriteList.forEach(function (barrier) {
                    if (barrier.name == 'monster' || barrier.name == 'tortoise' || barrier.name == 'shell') {
                        var callback2 = self.config["bullet"].callback || function () {};
                        _collisionDetection.CD['judgeBMonster'](itemDraw, barrier, callback2);
                    }
                });
            });
            //蘑菇，怪兽等水平的对象与障碍物（马里奥，管道，墙等）的碰撞
            drawSpriteList.createAnimationSpriteList.forEach(function (mover) {
                var callback = self.config[mover.name].callback || function () {};
                _collisionDetection.CD[self.config[mover.name].funcName](drawSpriteList.mario, mover, callback);

                //如果蘑菇已经上升完毕，则在判断蘑菇与墙，管道的碰撞效果。//可以整理一下 
                if (!mover.upover && (mover.name == 'mushroom' || mover.name == 'star')) {
                    return;
                } else {
                    if (mover.name == 'shell') {
                        //是乌龟壳且运动中。
                        drawSpriteList.createAnimationSpriteList.forEach(function (mover2) {
                            if (mover2.name == 'monster' || mover2.name == 'tortoise' || mover2.name == 'shell') {
                                if (mover2 != mover) {
                                    _collisionDetection.CD['judgeShellMover'](mover, mover2);
                                }
                            }
                        });
                    }
                    drawSpriteList.arrayOthersA.forEach(function (barrier) {
                        if (barrier.name == 'wall' || barrier.name == 'pipe') {
                            _collisionDetection.CD['judgeMoverBarrier'](mover, barrier);
                        }
                        if (barrier.name == 'hole') {
                            _collisionDetection.CD['judgeMoverHole'](mover, barrier);
                        }
                    });
                }
            });
            //如果移动物体走出视野，就移除
            drawSpriteList.createAnimationSpriteList.forEach(function (mover, index, arr) {
                if (mover.left + mover.width < 0 || mover.left > _config.element.mycanvasWidth) {
                    _public.lib.removeByValue(arr, 'id', mover.id);
                }
            });
        }
    }
};

gameControl.startAnimate = function (time) {
    //层级分法：从下往上依次为1.背景层，作为游戏的整个背景，放在最底部，2，洞为二层，因为洞两侧有多余部分，所以，不能让多余部分遮挡移动的物体（马里奥，蘑菇等）
    //3.蘑菇，移动的金币，小星星等放在第三层，因为从砖里出来，所以在砖的下一层4.砖，管道等，为第四层，5马里奥为第五层。6碎砖块为第六层。
    gameControl.context.save();
    _clip.clipObj.draw();
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
        var can = _config.element.mycanvas;
        var cans = can.getContext('2d');
        cans.font = 'bold 14px arial';
        cans.fillStyle = 'red';
        cans.fillText((gameControl.fps.num >> 0) + 'fps', 50, 20);
        _gameProgress.progressObj.mileageNumUpdate(gameControl.fps.num);
        _gameProgress.progressObj.countDownNumUpdate();

        cans.fillText("行程:" + (_gameProgress.progressObj.mileageNum / 174 * 100 >> 0) + "m", 400, 20);
        cans.fillText("倒计时:" + (_gameProgress.progressObj.currentTime >> 0) + "s", 480, 20);
        // if(progressObj.currentTime<=290){       
        //  drawSpriteList.mario.collisiondie();          
        // }
    }
};

/***/ }),
/* 9 */
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
/* 10 */
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
      self = {};

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
/* 11 */
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

/***/ }),
/* 12 */
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
  var w = div.offsetWidth;
  var h = div.offsetHeight;
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CD = undefined;

var _config = __webpack_require__(0);

var _public = __webpack_require__(1);

var _audioControl = __webpack_require__(2);

var _gameProgress = __webpack_require__(3);

var _gameSprite = __webpack_require__(4);

//碰撞检测
var CD = exports.CD = {
    //碰撞函数结果库
    CDFunc: {
        //移动物不与承载物接触时
        MoverOutCarrying: function MoverOutCarrying(mover, carrying) {
            var upColliding = mover.upColliding;
            //如果马里奥下面没有承载物，或马里奥下面有承载物，且左右脱离承载物。则设置马里奥初始高度。
            //因为要判断马里奥从承载物上走下是有蹦跳效果，所以当脱离承载物的时刻，会出现下面有承载物，且左右脱离承载物，当从承载物上蹦下来时，设置下面承载物为null.
            var flog = mover.upColliding && (mover.left + mover.width < upColliding.left || upColliding.left + upColliding.width < mover.left);
            if (!mover.upColliding || flog) {
                if (mover.isDie == false) {

                    mover.initialTop = _config.element.mycanvasHeight - mover.height - _config.gameConfig.roadHeight;
                    // console.log('玛丽熬'+mover.initialTop);
                }

                //  mover.upColliding = null;
            }
            //如果下方有承载物且不是在蹦跳中，则从承载物上走下，否则如果在蹦跳中，则 mover.velocityY =0，蹦不起来。
            if (mover.upColliding == carrying && !mover.isJump) {
                mover.fall(0);
                mover.isJump = true;
                mover.upColliding = null;
            }
        },
        //马里奥不与承载物接触时
        MOutCarrying: function MOutCarrying(mario, carrying) {
            var upColliding = mario.upColliding;
            //如果马里奥下面没有承载物，或马里奥下面有承载物，且左右脱离承载物。则设置马里奥初始高度。
            //因为要判断马里奥从承载物上走下是有蹦跳效果，所以当脱离承载物的时刻，会出现下面有承载物，且左右脱离承载物，当从承载物上蹦下来时，设置下面承载物为null.
            var flog = mario.upColliding && (mario.left + mario.width < upColliding.left || upColliding.left + upColliding.width < mario.left);
            if ((!mario.upColliding || flog) && !mario.isDie) {
                mario.initialTop = _config.element.mycanvasHeight - mario.height - _config.gameConfig.roadHeight;
                //  mario.upColliding = null;
            }
            //如果下方有承载物且不是在蹦跳中，则从承载物上走下，否则如果在蹦跳中，则 mario.velocityY =0，蹦不起来。
            if (mario.upColliding == carrying && !mario.isJump) {
                mario.jump(0);
                mario.isJump = true;
                mario.upColliding = null;
            }
            if (mario.lColliding == carrying) {
                mario.lColliding = null;
            }
            if (mario.rColliding == carrying) {
                mario.rColliding = null;
            }
        },
        //马里奥在阻挡物左侧
        MleftBarrier: function MleftBarrier(mario, barrier) {
            mario.left = barrier.left - mario.width;
            _config.gameConfig.setSpeedZero();
            game.setDirection(0);
            mario.lColliding = barrier;
        },
        //马里奥在旗杆左侧
        MleftFinal: function MleftFinal(mario, barrier) {
            mario.left = barrier.left - mario.width + 10;
            _config.gameConfig.setSpeedZero();
            game.setDirection(0);
            mario.lColliding = barrier;
        },
        //马里奥在阻挡物右侧
        MrightBarrier: function MrightBarrier(mario, barrier) {
            mario.left = barrier.left + barrier.width;
            _config.gameConfig.setSpeedZero();
            game.setDirection(0);
            mario.rColliding = barrier;
        },
        //马里奥在墙上侧
        MupBarrier: function MupBarrier(mario, barrier) {

            mario.initialTop = barrier.top - mario.height;
            mario.upColliding = barrier;
        },
        MdownWall: function MdownWall(mario, wall, callback) {
            mario.velocityY = -mario.velocityY;
            mario.top = wall.top + wall.height + 1;
            // callback(wall);
            if (!wall.isJump) {
                //console.log("下侧调2");
                if (wall.status == 1) {
                    wall.up(60);
                    switch (wall.contain) {
                        case 1:
                            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.eatMoney);
                            _gameProgress.createFactory.createUpMoney(wall.positionmile, wall.physicaltop);
                            break;
                        case 2:
                        case 3:
                            {
                                //如果是长大了，就会出花，如果是小人状态，则出蘑菇。
                                _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.flowerup);

                                if (mario.status == 1 || mario.status == 4 && mario.originalStatus == 1) {
                                    _gameProgress.createFactory.createUpMushroom(wall.positionmile, wall.physicaltop);
                                } else {
                                    _gameProgress.createFactory.createUpFlower(wall.positionmile, wall.physicaltop);
                                }
                            }
                            break;
                        case 4:
                            //弹小星星
                            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.flowerup);
                            _gameProgress.createFactory.createStar(wall.positionmile, wall.physicaltop);
                            break;
                    }
                    wall.changeToAA();
                } else if (wall.status == 2) {
                    _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.hitwall);
                } else {
                    if (wall.contain == 1 && wall.status == 0 && wall.moneyCount > 0) {
                        //墙里有多个金币
                        _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.eatMoney);
                        _gameProgress.createFactory.createUpMoney(wall.positionmile, wall.physicaltop);
                        wall.up(60);
                        wall.moneyCount--;
                        if (wall.moneyCount == 0) {
                            wall.changeToAA();
                        }
                        return;
                    }
                    if (mario.status == 1) {
                        wall.up(60);
                        _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.hitwall);
                    } else {
                        //大个马里奥将砖顶碎                     
                        wall.visible = false;
                        var id = wall.id;
                        var wallList = _gameProgress.totalProgressSprite.wall;
                        wallList.forEach(function (item) {
                            if (item.id == id) {
                                item.isVisible = false;
                            }
                        });
                        console.log(wall.positionmile);
                        _gameProgress.createFactory.createBrick(wall.positionmile, wall.physicaltop);
                        _audioControl.audioControl.audioPlay(gameSourceObj.audioList.music, _audioControl.gameAudio.wallbreak);
                    }
                }
            }
        },
        MoverleftBarrier: function MoverleftBarrier(mover, barrier) {
            mover.left = barrier.left - mover.width - 3;
            mover.velocityX = -mover.velocityX;
            mover.initvelocityX = -mover.initvelocityX;
            mover.isReverse = !mover.isReverse;
        },
        MoverrightBarrier: function MoverrightBarrier(mover, barrier) {
            mover.left = barrier.left + mover.width + 3;
            mover.velocityX = -mover.velocityX;
            mover.isReverse = !mover.isReverse;
            mover.initvelocityX = -mover.initvelocityX;
        },
        //马里奥在墙上侧
        MoverupBarrier: function MoverupBarrier(mover, barrier) {
            mover.initialTop = barrier.top - mover.height;
            mover.upColliding = barrier;
        },
        BulletleftBarrier: function BulletleftBarrier(bullet, barrier) {
            _public.lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', bullet.id);
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.hitwall);
            bullet = null;
        },
        BulletrightBarrier: function BulletrightBarrier(bullet, barrier) {
            _public.lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', bullet.id);
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.hitwall);
            bullet = null;
        },
        MairoCollisionMonster: function MairoCollisionMonster(mario, monster) {
            console.log('碰撞死亡');
            mario.collision = monster;
            if (mario.status == 1 && mario.height == _config.WH.mario.smallstatus.height) {
                console.log('碰撞死亡222');
                mario.collisiondie();
            } else {
                console.log('碰撞死亡111');
                if (mario.status == 4) {
                    monster.shootDie();
                } else {
                    drawSpriteList.mario.rise(_config.WH.mario.smallstatus.height, 1);
                }
            }
        },
        //碰撞中执行的函数,
        Colliding: function Colliding(A, B, leftFun, rightFun, downFun, upFun) {
            var standardChangeX = A.width + B.width;
            var standardChangeY = A.height + B.height;
            var standardChangeSinNum = standardChangeY / Math.sqrt(standardChangeX * standardChangeX + standardChangeY * standardChangeY);
            var changeX = A.left + A.width / 2 - (B.left + B.width / 2);
            var changeY = A.top + A.height / 2 - (B.top + B.height / 2);
            var sinNum = changeY / Math.sqrt(changeX * changeX + changeY * changeY);
            if (changeX > 0) {
                if (Math.abs(sinNum) < standardChangeSinNum) {
                    // console.log("右侧2");
                    //this.CDFunc.MrightBarrier(A, B);
                    rightFun();
                } else if (sinNum > 0) {
                    // console.log("A在墙的下侧");                   

                    downFun();
                } else {
                    // console.log("上侧2");                   
                    upFun();
                }
            } else {
                if (Math.abs(sinNum) < standardChangeSinNum) {
                    // console.log("左侧1");
                    //this.CDFunc.MleftBarrier(A, B);
                    leftFun();
                } else if (sinNum > 0) {

                    downFun();
                    //console.log(B.name + "下侧1");
                } else {
                    //console.log("上侧1");
                    //this.CDFunc.MupBarrier(A, B);
                    upFun();
                }
            }
        }
    },

    //马里奥和金币
    judgeMM: function judgeMM(mario, money, callback) {
        //let funCallback = callback || function() {};
        if (money.visible == false) {
            return;
        }
        // 两个矩形检测
        if (mario.left + mario.width < money.left || money.left + money.width < mario.left || mario.top + mario.height < money.top || money.top + money.height < mario.top) {
            return true;
        } else {
            callback(money);
            //碰到金币后消失
            money.visible = false;
            var id = money.id;
            var moneyList = _gameProgress.totalProgressSprite.money;
            moneyList.forEach(function (item) {
                if (item.id == id) {
                    item.isVisible = false;
                }
            });
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.collision, _audioControl.gameAudio.eatMoney);
        }
    },
    judgeMH: function judgeMH(mario, barrier, callback) {
        if (barrier.visible == false) {
            return;
        }
        var self = this;
        if (mario.left + mario.width < barrier.left || barrier.left + barrier.width < mario.left || mario.top + mario.height < barrier.top || barrier.top + barrier.height < mario.top) {
            // this.CDFunc.MoverOutCarrying(mario, barrier);
        } else {
            if (mario.left - 15 > barrier.left && barrier.left + barrier.width - 15 > mario.left + mario.width) {
                // console.log('掉小区');

                mario.die();
                mario.isJump = true;
                mario.upColliding = barrier;
            }
        }
    },
    judgeMoverHole: function judgeMoverHole(mover, hole, callback) {
        if (hole.visible == false) {
            return;
        }
        //如果蘑菇掉井里了，就消失。
        if (mover.top >= _config.element.mycanvasHeight + 200) {
            _public.lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', mover.id);
            mover = null;
            return;
        }
        var self = this;
        if (mover.left + mover.width < hole.left || hole.left + hole.width < mover.left || mover.top + mover.height < hole.top || hole.top + hole.height < mover.top) {
            // this.CDFunc.MoverOutCarrying(mover, hole);
        } else {
            if (mover.left - 15 > hole.left && hole.left + hole.width - 15 > mover.left + mover.width) {
                // console.log('掉小区');

                if (!mover.isDie) {
                    mover.isDie = true;
                    mover.initialTop = _config.element.mycanvasHeight + 200;
                    if (!mover.isJump) {
                        mover.die(0);
                        console.log('luo');
                    }
                }
                mover.isJump = true;
                mover.upColliding = hole;
            }
        }
    },
    judgeMflag: function judgeMflag(mario, flag, callback) {
        //  if (mario.visible == false && mario.isDie == true) {
        //     return;
        // }

        // if ((flag.left + flag.width) < mario.left || (mario.left + mario.width) < flag.left || (flag.top + flag.height) < mario.top || (mario.top + mario.height) < flag.top) {

        // } else {
        //      drawSpriteList.arrayOthersA.forEach(function(item) {
        //         if (item.name == 'flag') {
        //             item.down();
        //         }
        //     })
        // }
    },
    judegMBadFlower: function judegMBadFlower(mario, badflower, callback) {
        if (mario.visible == false && mario.isDie == true) {
            return;
        }
        if (badflower.isDie == true) {
            return;
        }
        var self = this;
        //console.log(badflower.initialTop);
        // 两个矩形检测
        if (badflower.left + badflower.width < mario.left || mario.left + mario.width < badflower.left || badflower.top + badflower.height < mario.top || mario.top + mario.height < badflower.top) {
            // this.CDFunc.MoverOutCarrying(badflower, mario);
            if (mario.collision == badflower) {
                console.log("取消collision");
                mario.collision = null;
            }
        } else {
            //如果马里奥的已经被碰到了
            if (mario.collision == badflower) {
                return;
            }

            var downfun = function downfun() {
                self.CDFunc.MairoCollisionMonster(mario, badflower);
                // self.CDFunc.MairoCollisionbadflower(mario,badflower);
            };
            if (!mario.isDie && !badflower.isDie) {
                self.CDFunc.Colliding(badflower, mario, downfun, downfun, downfun, downfun);
            }
        }
    },
    judgeBulletBadflower: function judgeBulletBadflower(bullet, badflower) {
        if (badflower.left + badflower.width < bullet.left || bullet.left + bullet.width < badflower.left || badflower.top + badflower.height < bullet.top || bullet.top + bullet.height < badflower.top) {} else {
            _public.lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', bullet.id);
            badflower.shootDie();
            bullet = null;
        }
    },
    judgeBulletHole: function judgeBulletHole(mover, hole, callback) {
        if (hole.visible == false) {
            return;
        }
        //如果蘑菇掉井里了，就消失。
        if (mover.top + mover.width / 3 >= _config.element.mycanvasHeight) {
            _public.lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', mover.id);
            mover = null;
            return;
        }
        var self = this;
        if (mover.left + mover.width < hole.left || hole.left + hole.width < mover.left || mover.top + mover.height < hole.top || hole.top + hole.height < mover.top) {
            // this.CDFunc.MoverOutCarrying(mover, hole);
        } else {
            if (mover.left - 15 > hole.left && hole.left + hole.width - 15 > mover.left + mover.width) {
                // console.log('掉小区');

                if (!mover.isDie) {
                    mover.isDie = true;
                    mover.initialTop = _config.element.mycanvasHeight + 200;
                    if (!mover.isJump) {
                        mover.die(0);
                        console.log('luo');
                    }
                }
                mover.isJump = true;
                mover.upColliding = hole;
            }
        }
    },
    judgeMMonster: function judgeMMonster(mario, monster, callback) {
        if (mario.visible == false && mario.isDie == true) {
            return;
        }
        if (monster.isDie == true) {
            return;
        }
        var self = this;
        //console.log(monster.initialTop);
        // 两个矩形检测
        if (monster.left + monster.width < mario.left || mario.left + mario.width < monster.left || monster.top + monster.height < mario.top || mario.top + mario.height < monster.top) {
            // this.CDFunc.MoverOutCarrying(monster, mario);
            if (mario.collision == monster) {
                console.log("取消collision");
                mario.collision = null;
            }
        } else {
            //如果马里奥的已经被碰到了
            if (mario.collision == monster) {
                return;
            }
            var leftfun = function leftfun() {
                console.log('leftfun');
                // drawSpriteList.mario.rise(WH.mario.smallstatus.height,1);
                self.CDFunc.MairoCollisionMonster(mario, monster);
            };
            var rightfun = function rightfun() {
                console.log('rightfun');
                // drawSpriteList.mario.rise(WH.mario.smallstatus.height,1);
                self.CDFunc.MairoCollisionMonster(mario, monster);
            };
            var upfun = function upfun() {
                console.log('upfun');
                // drawSpriteList.mario.rise(WH.mario.smallstatus.height,1);
                //console.log('踩死');
                self.CDFunc.MairoCollisionMonster(mario, monster);
            };
            var downfun = function downfun() {
                // debugger;

                //  console.log('踩死1');
                if (monster.name == 'monster') {
                    monster.collisionDie();
                }
                if (monster.name == 'tortoise') {
                    console.log('猜到乌龟了');
                    monster.visible = false;
                    monster.isDie = true;
                    var shell = new _gameSprite.Shell({
                        left: monster.left
                    });

                    mario.initialTop = shell.top - mario.height;
                    console.log('设置' + mario.initialTop);
                    mario.upColliding = monster;
                    drawSpriteList.createAnimationSpriteList.push(shell);
                    SpriteAnimatorEndCallbackList.monsterJumpend(monster);
                }
                if (monster.name == 'shell') {
                    console.log('猜到乌龟壳了');
                }

                // self.CDFunc.MairoCollisionMonster(mario,monster);
            };
            if (!mario.isDie && !monster.isDie) {
                self.CDFunc.Colliding(monster, mario, leftfun, rightfun, downfun, upfun);
            }
        }
    },

    judgeMShell: function judgeMShell(mario, shell, callback) {
        if (mario.visible == false && mario.isDie == true) {
            return;
        }

        var self = this;

        // 两个矩形检测
        if (shell.left + shell.width < mario.left || mario.left + mario.width < shell.left || shell.top + shell.height < mario.top || mario.top + mario.height < shell.top) {
            this.CDFunc.MOutCarrying(mario, shell);
            mario.collision = null;
        } else {
            //如果马里奥的已经被碰到了
            if (mario.collision == shell) {
                return;
            }
            var leftfun = function leftfun() {
                //  console.log('马里奥从壳的右侧碰撞');
                if (shell.status == 0) {
                    mario.left = shell.left + shell.width;
                    shell.shoot(_config.gameConfig.shellSpeed);
                } else {
                    self.CDFunc.MairoCollisionMonster(mario, shell);
                }
            };
            var rightfun = function rightfun() {
                //  console.log('马里奥从壳的左侧碰撞');
                if (shell.status == 0) {

                    mario.left = shell.left - mario.width;
                    shell.shoot(-_config.gameConfig.shellSpeed);
                } else {
                    self.CDFunc.MairoCollisionMonster(mario, shell);
                }
            };
            var upfun = function upfun() {
                // console.log('upfun');


                self.CDFunc.MairoCollisionMonster(mario, shell);
            };
            var downfun = function downfun() {

                //console.log('downfun');

                shell.pause();
                mario.upColliding = shell;
                mario.initialTop = shell.top - mario.height;
                //  mario.upColliding=shell;
            };
            if (!mario.isDie && !shell.isDie) {
                self.CDFunc.Colliding(shell, mario, leftfun, rightfun, downfun, upfun);
            }
        }
    },
    judgeShellMover: function judgeShellMover(shell, mover) {
        if (mover.isDie || shell.isDie) {
            return;
        }
        var self = this;
        if (shell.left + shell.width < mover.left || mover.left + mover.width < shell.left || shell.top + shell.height < mover.top || mover.top + mover.height < shell.top) {
            this.CDFunc.MoverOutCarrying(shell, mover);
        } else {
            if (shell.status == 0) {
                var leftfun = function leftfun() {
                    self.CDFunc.MoverleftBarrier(mover, shell);
                };
                var rightfun = function rightfun() {
                    self.CDFunc.MoverrightBarrier(mover, shell);
                };
                var upfun = function upfun() {
                    self.CDFunc.MoverupBarrier(mover, shell);
                };
                var downfun = function downfun() {};
                self.CDFunc.Colliding(mover, shell, leftfun, rightfun, downfun, upfun);
            } else {
                var _leftfun = function _leftfun() {
                    mover.shootDie();
                };
                var _rightfun = function _rightfun() {
                    mover.shootDie();
                };
                var _upfun = function _upfun() {
                    mover.shootDie();
                };
                var _downfun = function _downfun() {
                    mover.shootDie();
                };
                self.CDFunc.Colliding(shell, mover, _leftfun, _rightfun, _downfun, _upfun);
            }
        }
    },
    judgeBBarrier: function judgeBBarrier(bullet, barrier, callback) {
        if (barrier.visible == false) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if (bullet.left + bullet.width < barrier.left || barrier.left + barrier.width < bullet.left || bullet.top + bullet.height < barrier.top || barrier.top + barrier.height < bullet.top) {
            this.CDFunc.MoverOutCarrying(bullet, barrier);
        } else {
            var leftfun = function leftfun() {
                self.CDFunc.BulletleftBarrier(bullet, barrier);
            };
            var rightfun = function rightfun() {
                self.CDFunc.BulletrightBarrier(bullet, barrier);
            };
            var upfun = function upfun() {
                self.CDFunc.MoverupBarrier(bullet, barrier);
            };
            var downfun = function downfun() {};
            self.CDFunc.Colliding(bullet, barrier, leftfun, rightfun, downfun, upfun);
        }
    },
    judgeBMonster: function judgeBMonster(bullet, monster, callback) {
        if (monster.visible == false) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if (bullet.left + bullet.width < monster.left || monster.left + monster.width < bullet.left || bullet.top + bullet.height < monster.top || monster.top + monster.height < bullet.top) {
            //this.CDFunc.MoverOutCarrying(bullet, monster);
        } else {
            var leftfun = function leftfun() {
                self.CDFunc.BulletleftBarrier(bullet, monster);
                monster.shootDie();
            };
            var rightfun = function rightfun() {
                self.CDFunc.BulletrightBarrier(bullet, monster);
                monster.shootDie();
            };
            var upfun = function upfun() {
                self.CDFunc.BulletrightBarrier(bullet, monster);
                monster.shootDie();
            };
            var downfun = function downfun() {
                self.CDFunc.BulletrightBarrier(bullet, monster);
                monster.shootDie();
            };
            self.CDFunc.Colliding(bullet, monster, leftfun, rightfun, downfun, upfun);
        }
    },
    judgeMF: function judgeMF(mario, flower, callback) {
        if (flower.visible == false) {
            return;
        }
        // 两个矩形检测
        if (mario.left + mario.width < flower.left || flower.left + flower.width < mario.left || mario.top + mario.height < flower.top || flower.top + flower.height < mario.top) {
            return true;
        } else {
            //mario.status = 3;

            _public.lib.removeByValue(drawSpriteList.createSpriteList, 'id', flower.id);
            _audioControl.audioControl.audioPlay(gameSourceObj.audioList.jumpAll, _audioControl.gameAudio.growup);
            drawSpriteList.mario.rise(_config.WH.mario.bigstatus.height, 3);
            flower = null;
            //callback(flower);
        }
    },
    judgeMS: function judgeMS(mario, star, callback) {
        if (star.visible == false) {
            return;
        }
        // 两个矩形检测
        if (mario.left + mario.width < star.left || star.left + star.width < mario.left || mario.top + mario.height < star.top || star.top + star.height < mario.top) {
            return true;
        } else {
            // callback(star);
            _public.lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', star.id);
            drawSpriteList.mario.rise(drawSpriteList.mario.height, 4);
            star = null;
        }
    },
    judgeMMR: function judgeMMR(mario, mushroom, callback) {
        if (mushroom.visible == false) {
            return;
        }
        // 两个矩形检测
        if (mario.left + mario.width < mushroom.left || mushroom.left + mushroom.width < mario.left || mario.top + mario.height < mushroom.top || mushroom.top + mushroom.height < mario.top) {
            return true;
        } else {
            // callback(mushroom);
            _public.lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', mushroom.id);
            drawSpriteList.mario.rise(_config.WH.mario.bigstatus.height, 2);
            mushroom = null;
        }
    },

    //马里奥和普通墙
    judgeMWall: function judgeMWall(mario, wall, callback) {
        if (wall.visible == false) {
            return;
        }
        if (mario.isDie == true) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if (mario.left + mario.width < wall.left || wall.left + wall.width < mario.left || mario.top + mario.height < wall.top || wall.top + wall.height < mario.top) {
            this.CDFunc.MOutCarrying(mario, wall);
        } else {
            var leftfun = function leftfun() {
                self.CDFunc.MleftBarrier(mario, wall);
            };
            var rightfun = function rightfun() {
                self.CDFunc.MrightBarrier(mario, wall);
            };
            var upfun = function upfun() {
                self.CDFunc.MupBarrier(mario, wall);
            };
            var downfun = function downfun() {
                self.CDFunc.MdownWall(mario, wall, callback);
            };
            self.CDFunc.Colliding(mario, wall, leftfun, rightfun, downfun, upfun);
        }
    },

    judgeMPipe: function judgeMPipe(mario, pipe, callback) {
        if (pipe.visible == false) {
            return;
        }
        if (mario.isDie == true) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if (mario.left + mario.width < pipe.left || pipe.left + pipe.width < mario.left || mario.top + mario.height < pipe.top || pipe.top + pipe.height < mario.top) {
            this.CDFunc.MOutCarrying(mario, pipe);
        } else {
            var leftfun = function leftfun() {
                self.CDFunc.MleftBarrier(mario, pipe);
            };
            var rightfun = function rightfun() {
                self.CDFunc.MrightBarrier(mario, pipe);
            };
            var upfun = function upfun() {
                self.CDFunc.MupBarrier(mario, pipe);
            };
            var downfun = function downfun() {};
            self.CDFunc.Colliding(mario, pipe, leftfun, rightfun, downfun, upfun);
        }
    },
    judgeMFianl: function judgeMFianl(mario, final, callback) {
        if (final.visible == false) {
            return;
        }
        if (mario.isDie == true) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if (mario.left + mario.width - 10 < final.left || final.left + final.width < mario.left || mario.top + mario.height < final.top || final.top + final.height < mario.top) {
            this.CDFunc.MOutCarrying(mario, final);
        } else {
            var leftfun = function leftfun() {
                self.CDFunc.MleftFinal(mario, final);
            };
            var rightfun = function rightfun() {
                self.CDFunc.MleftFinal(mario, final);
            };
            var upfun = function upfun() {
                self.CDFunc.MleftFinal(mario, final);
            };
            var downfun = function downfun() {};
            drawSpriteList.arrayOthersA.forEach(function (item) {
                if (item.name == 'flag') {
                    item.down();
                }
            });
            console.log(11);

            mario.laqi();
            self.CDFunc.Colliding(mario, final, leftfun, rightfun, downfun, upfun);
            mario.left = final.left + 7;
            callback();
        }
    },

    judgeMTower: function judgeMTower(mario, pipe, callback) {
        if (pipe.visible == false) {
            return;
        }
        if (mario.isDie == true) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if (mario.left + mario.width < pipe.left || pipe.left + pipe.width < mario.left || mario.top + mario.height < pipe.top || pipe.top + pipe.height < mario.top) {
            this.CDFunc.MOutCarrying(mario, pipe);
        } else {
            var leftfun = function leftfun() {
                self.CDFunc.MleftBarrier(mario, pipe);
            };
            var rightfun = function rightfun() {
                self.CDFunc.MrightBarrier(mario, pipe);
            };
            var upfun = function upfun() {
                self.CDFunc.MupBarrier(mario, pipe);
            };
            var downfun = function downfun() {};
            self.CDFunc.Colliding(mario, pipe, leftfun, rightfun, downfun, upfun);
        }
    },
    //移动物与障碍物
    judgeMoverBarrier: function judgeMoverBarrier(mover, barrier) {
        if (barrier.visible == false) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if (mover.left + mover.width < barrier.left || barrier.left + barrier.width < mover.left || mover.top + mover.height < barrier.top || barrier.top + barrier.height < mover.top) {
            this.CDFunc.MoverOutCarrying(mover, barrier);
        } else {
            var leftfun = function leftfun() {
                self.CDFunc.MoverleftBarrier(mover, barrier);
            };
            var rightfun = function rightfun() {
                self.CDFunc.MoverrightBarrier(mover, barrier);
            };
            var upfun = function upfun() {
                self.CDFunc.MoverupBarrier(mover, barrier);
            };
            var downfun = function downfun() {};
            self.CDFunc.Colliding(mover, barrier, leftfun, rightfun, downfun, upfun);
        }
    }
}; //绘制进度条

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

// Stopwatch..................................................................
//
// Like the real thing, you can start and stop a stopwatch, and you can
// find out the elapsed time the stopwatch has been running. After you stop
// a stopwatch, it's getElapsedTime() method returns the elapsed time
// between the start and stop.
//
// Stopwatches are used primarily for timing animations.


// You can get the elapsed time while the timer is running, or after it's
// stopped.

var Stopwatch = function () {
   function Stopwatch() {
      _classCallCheck(this, Stopwatch);

      this.startTime = 0;
      this.running = false;
      this.elapsed = undefined;
   }

   _createClass(Stopwatch, [{
      key: "start",
      value: function start() {
         this.startTime = +new Date();
         this.elapsedTime = undefined;
         this.running = true;
      }
   }, {
      key: "stop",
      value: function stop() {
         this.elapsed = +new Date() - this.startTime;
         this.running = false;
      }
   }, {
      key: "getElapsedTime",
      value: function getElapsedTime() {
         if (this.running) {
            return +new Date() - this.startTime;
         } else {
            return this.elapsed;
         }
      }
   }, {
      key: "isRunning",
      value: function isRunning() {
         return this.running;
      }
   }, {
      key: "reset",
      value: function reset() {
         this.elapsed = 0;
      }
   }]);

   return Stopwatch;
}();

exports.default = Stopwatch;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//雪碧图的对象
var SpriteSheetPainter = function () {
    function SpriteSheetPainter() {
        var cells = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var spritesheeturl = arguments[1];
        var mycanvas = arguments[2];

        _classCallCheck(this, SpriteSheetPainter);

        this.cells = cells;
        this.spritesheet = new Image();
        this.spritesheet.src = spritesheeturl;
        this.cellIndex = 0;
        this.mycanvas = mycanvas;
    }
    //雪碧图的轮播


    _createClass(SpriteSheetPainter, [{
        key: "advance",
        value: function advance() {
            if (this.cellIndex == this.cells.length - 1) {
                this.cellIndex = 0;
            } else {
                this.cellIndex++;
            }
        }
        //雪碧图的绘制

    }, {
        key: "paint",
        value: function paint(sprite, context) {
            var cell = this.cells[this.cellIndex];
            context.drawImage(this.spritesheet.cell.left, cell.top, cell.width, cell.heightsprite.left, sprite.top, cell.width, cell.height);
        }
    }]);

    return SpriteSheetPainter;
}();

exports.SpriteSheetPainter = SpriteSheetPainter;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = exports.Sprite = function () {
    function Sprite() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var painter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var behaviors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, Sprite);

        this.name = name;
        this.painter = painter;
        this.behaviors = behaviors;
        this.left = 0;
        this.top = 0;
        this.width = 10;
        this.height = 10;
        this.visible = true;
        this.velocityX = 0;
        this.velocityY = 0;
        this.initialVelocity = 0;
    }

    _createClass(Sprite, [{
        key: 'paint',
        value: function paint(context) {
            if (this.painter !== undefined && this.visible) {
                this.painter.paint(this, context);
            }
        }
    }, {
        key: 'update',
        value: function update(context, time) {
            for (var i = this.behaviors.length; i > 0; --i) {
                this.behaviors[i - 1].execute(this, context, time);
            }
        }
    }]);

    return Sprite;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.behaviorList = undefined;

var _public = __webpack_require__(1);

var _gameProgress = __webpack_require__(3);

//所有行为
//游戏所有元素的动作对象

var behaviorList = {
    //背景图片用的这个行为
    moveLeftToRight: function moveLeftToRight() {
        this.behaviorName = 'moveLeftToRight';
        this.lastMove = 0;
        this.fpsNum = 60;
        this.execute = function (sprite, context, time, fpsNum) {
            this.fpsNum = fpsNum == 0 ? 0 : fpsNum || this.fpsNum;
            sprite.left += sprite.velocityX / this.fpsNum;
            this.lastMove = time;
        };
    },
    //其他物体的横向运动，都是根据sprite.positionmile与progressObj.createSpriteMileNum的相对位置计算出来的
    SpriteLeftToRight: function SpriteLeftToRight() {
        this.behaviorName = 'moveLeftToRight';
        this.lastMove = 0;
        this.fpsNum = 60;
        this.execute = function (sprite, context, time, fpsNum) {
            var translateLeft = sprite.translateLeft || 0;
            //  console.log('translateLeft'+progressObj.createSpriteMileNum);

            sprite.left = sprite.positionmile - _gameProgress.progressObj.createSpriteMileNum - translateLeft;
        };
    },

    //小人跑动动画
    runInPlace: function runInPlace(setting) {
        var defaultSetting = {
            lastAdvance: 0,
            PAGEFLIP_INTERVAL: 30,
            behaviorName: 'runInPlace'
        };
        _public.lib.jQueryExtend(defaultSetting, setting);
        this.lastAdvance = defaultSetting.lastAdvance;
        this.PAGEFLIP_INTERVAL = defaultSetting.PAGEFLIP_INTERVAL;
        this.behaviorName = defaultSetting.behaviorName;
        this.execute = function (sprite, context, time) {
            if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
                sprite.painter.advance(sprite);
                this.lastAdvance = time;
            }
        };
    },
    //坏花
    upInPlace: function upInPlace(setting) {
        var defaultSetting = {
            lastAdvance: 0,
            PAGEFLIP_INTERVAL: 30,
            behaviorName: 'runInPlace'
        };
        _public.lib.jQueryExtend(defaultSetting, setting);
        this.lastAdvance = defaultSetting.lastAdvance;
        this.PAGEFLIP_INTERVAL = defaultSetting.PAGEFLIP_INTERVAL;
        this.behaviorName = defaultSetting.behaviorName;
        this.execute = function (sprite, context, time) {
            if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {

                sprite.painter.advance(sprite);
                this.lastAdvance = time;
            }
        };
    },
    //小人跳动
    jump: function jump(setting) {
        var defaultSetting = {
            lastAdvance: 0,
            isJump: false,
            behaviorName: 'jump',
            jumpOverCallback: function jumpOverCallback() {},
            status: 0 //0是不跳，1是小跳，2是大跳。
        };
        _public.lib.jQueryExtend(defaultSetting, setting);
        this.lastAdvance = defaultSetting.lastAdvance;
        this.behaviorName = defaultSetting.behaviorName;
        this.fpsNum = 60;
        this.status = defaultSetting.status;
        this.jumpOverCallback = defaultSetting.jumpOverCallback;
        this.execute = function (sprite, context, time, fpsNum) {
            if (this.lastAdvance !== 0) {
                if (sprite.velocityY < sprite.startVelocityY) {
                    this.fpsNum = fpsNum == 0 ? 0 : fpsNum || this.fpsNum;
                    sprite.velocityY = sprite.velocityY + sprite.GRAVITY_FORCE / this.fpsNum;
                    sprite.top += sprite.velocityY / this.fpsNum;
                    if (sprite.top < sprite.initialTop) {
                        sprite.isJump = true;
                    } else {
                        sprite.top = sprite.initialTop;
                        sprite.isJump = false;
                        this.jumpOverCallback();
                    }
                } else {
                    sprite.isJump = false;
                }
            }
            this.lastAdvance = time;
        };
    }
};
exports.behaviorList = behaviorList;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/x-icon;base64,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"

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/82ff78e19a99ff14fa5b48e90f72030c.png";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/ad0a18018e70566ac9715895dd212fd3.png";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/2f361bb356419a03f14ede5ae9e66642.png";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAMAAADNlS1EAAAAxlBMVEUAAACiflxmSzKceFfW2M5nSSxBLxSuelOqa0RydU9dRSlpSzVwWTtsUDRjRi5eSi1cPyRQOyOXgV1iQyxAIQ85IxC3l3GoiGW/iGOfc0+dWzW0mXeAgGNcPCw+LxqkqIticUinrJpDWTuMdVHN1s3Y5NaQW0GRV0BvSDFnQizfoYXWlXfJhmWzeWCjfV6melyYc1bFcU+Zb0/Nc06va06hak6CcU2TaUmJZEiMVTuiWTRcWTSuUTKKRi+bSy1mOyhbOSRzPhx8FXBEAAAAJnRSTlMAtv62EPf0trZF/PX09PT09PTh4NnMtra2trahmpeSTEtGPzcbF/ZX+aIAAABnSURBVBjTYxgFgwqwSHNwSIiJMwIBMzMzO7uUpDIDg5CVobG2lompmpq6pbqtro6NnaMMg7ysCBMrN5OmhoamvQOTsACXqBwnyAQVFkUzI3MDPX0LawUWVbjBnKy8gmz8PHxsSmAuABLjCTjBANsGAAAAAElFTkSuQmCC"

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/ed09549b0c569a8ad88f20c7787828b3.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/02d41daa293da46e55915edb3445c35c.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/2c6b72768f0f5bd4cd20d59721ffa409.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/91c44f2258ab35627757243c181338c5.png";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAjCAMAAAA+JdOiAAABqlBMVEUAAAAlJSUgICA0NDQjIyMfHx8dHR0yMjJQUFAxMTFWVlYgICBZWVlISEgjIyNJSUlNTU08PDwpKSkqKipXV1clJSU8PDwdHR0wMDBMTExAQEAkJCQ2NjZSUlItLS0mJiZBQUFSUlJTU1NISEh3d3dWVlZMTExHR0cODg5WVlZaWlo2NjZfX18/Pz9ZWVksLCxZWVlCQkJNTU1YWFglJSUrKysdHR1VVVUZGRk3NzdUVFQkJCROTk5QUFAwMDA4ODg2Njb///9XV1ciIiIZGRkeHh4lJSUgICBZWVlSUlI4ODgbGxtPT09NTU1HR0dEREQ8PDwFBQVUVFRKSkpBQUEnJycSEhL19fXv7+9ISEgwMDArKysWFhYAAADQ0NCrq6s1NTXy8vLs7Ozm5ubi4uLd3d26urqjo6OcnJyPj49vb280NDQtLS3a2trW1tbS0tLJycm0tLSZmZl4eHg+Pj4yMjIPDw/6+vr4+PjNzc3IyMimpqagoKCfn5+Tk5OFhYV+fn57e3t0dHRqampnZ2cLCwvCwsLBwcG8vLytra2KioqDg4NgYGBbW1v8xOeWAAAAQXRSTlMA8vMN8vLyHfWVfG1jKxcIAv376eTQzsS7n3d2cm1lRiUc/fr39/Pz8u3o6OHZ2MjCwb+hoJqRioV7cmlbRj40FDMVafcAAAJXSURBVDjLjdTnUttAFAVgByehQwgQIPT03nu/K61Wkm3Jwrj3hgum26Z3SM87Z1eKZ3AMls9PzTfn6M5oZLmrvbFaGsodzPMD7Y3gizzLq+HmBiXm3I9Hmk2kzZBCMBC7crXZTNp0OStTO3GmvFDpLAgkKM/KPUOT9SQOhYI25RCl97b3Zelj3U4n4b9BEuKQkKb3Hnw4VWI+xGs7S+E8GNnE8xF/X0etbMLY5iHeVGgGjKTzPsi70JPTJPa4fRBJGNDrXQXvoUsU73XUSBu2absAy8sMJo6iAFEFiTSPJms6yXE4AivhfYBIkb7FnOz6o1P0rkoSus6vJGDjd24NUt8XvbD2Y0oSddkyWiXp+E+oTlZF1CEk2Z91npQenAbfXEX51gEiLsQyJdkdylNmDUnKhTgs4RmAxaUkePNSHBaYFJEkOVzKtHPEkOcJCZE0bIexb51wCLJYSbLjkT5uZ1IeHLMyyRGs5WAOhzcz5YLjK3JnAQ78lXG/SmWp0PtynHUSD56HHS2mlpxOZ+AIYFlBVXI2EHT3UskR7pibB1XDsYAfBRchV5wS/5ODY110naM0rELGkeE9mdQuzMh2HSKJna5O99xv/cQuOkcdtVpudSH+K+sDSDoUZIxfa2m5dVt9aL1EGZMCx6LZ4V82ZIm5vrbXo93dVqu1m6KTsuyoyGhRuik+b6v5QKkUCKP4YCEVXdnaunF9qK3TQgfPkgLnEWLuy61vJwxVRwpuTih91h+ZSVr4xdKI7G9n/w9z2fRi3MQZcqC9y2Ieof+9zswzbGkwfwF1KNdVsfGeGQAAAABJRU5ErkJggg=="

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/9b2812d3431d9bf5ac81609bf7c88dfd.png";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/7cfba89cc261799f16d9abe42a007485.png";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/img/c17deedbf318cb5d8dd52751b971d92c.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/mp3/dd81fd3d6a4cea2d7cf51a0aeb5a3a5f.mp3";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/mp3/aecdd18fd27a049056707b3aecfb17bc.mp3";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/mp3/ab0fa792ca7dcfa6f4d8881ccdbeb72a.mp3";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/mp3/5ba15799c216289348bb2774bf227856.mp3";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/mp3/2f59549d06b68f80ddf82bb0c02f7e32.mp3";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/mp3/a611340b8929f0408d5f998b24ab489a.mp3";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/mp3/4edb511474baa4165f4ec72568cc413a.mp3";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../static/mp3/1c0338c28c073f6c4304a8edaf4e61a8.mp3";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//画笔对象
var ImagePainter = function () {
    function ImagePainter(imageUrl) {
        _classCallCheck(this, ImagePainter);

        if (!!imageUrl) {
            this.image = new Image();
            this.image.src = imageUrl;
        }
    }

    _createClass(ImagePainter, [{
        key: "paint",
        value: function paint(sprite, context) {
            if (!!this.image) {
                context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
            }
        }
    }]);

    return ImagePainter;
}();

exports.ImagePainter = ImagePainter;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MairoSpriteAnimator = exports.MoveSpriteAnimator = exports.BrikeSpriteAnimator = exports.RiseSpriteAnimator = exports.BulletJumpSpriteAnimator = exports.DownSpriteAnimator = exports.UpSpriteAnimator = exports.CharacterSpriteAnimator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteAnimator = __webpack_require__(61);

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
/* 61 */
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

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clipObj = undefined;

var _config = __webpack_require__(0);

var clipObj = exports.clipObj = {
    canvas: null,
    radius: 0,
    start: false,
    maxRadius: 0,
    flag: true, //true为减小，false为增大。
    init: function init(overcallback, resetcallback) {
        this.canvas = _config.element.mycanvas;
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
}; //绘制进度条

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _judgeMobile = __webpack_require__(6);

var _public = __webpack_require__(1);

var _control = __webpack_require__(7);

var isMobile = (0, _judgeMobile.judgeMobile)();
if (isMobile) {
    window.onresize = r;
    setTimeout(function () {
        r(0);
    }, 100);
}
var addMobile = true;
//window.onresize = r;

function r(resizeNum) {
    //核心适配代码
    var winW = window.innerWidth;
    document.getElementsByTagName("html")[0].style.fontSize = winW * 0.15625 + "px";
    //核心适配代码
    if (winW > window.screen.width && resizeNum <= 10) {
        setTimeout(function () {
            r(++resizeNum);
        }, 100);
    } else {
        if (addMobile) {
            init();
        }
        //setRotate();
        //  draw();
        // controler.init();
        document.getElementsByTagName("body")[0].style.opacity = 1;
    }
}

function setRotate() {
    var width_doc = document.documentElement.clientWidth;
    var height_doc = document.documentElement.clientHeight; //文档流的高度
    var main = document.querySelector('.main');
    main.style.height = width_doc + 'px';
    main.style.width = height_doc + 'px';
    main.style.transform = 'rotate(90deg) translate(' + (height_doc - width_doc) / 2 + 'px,' + (height_doc - width_doc) / 2 + 'px)';
    requestFullScreen(main);
}

function requestFullScreen(element) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function renderDiv() {
    _public.lib.removeElement(document.querySelector('.butList'));
    _public.lib.removeElement(document.querySelector('.tip'));
    var resultDiv = document.createElement("DIV");
    resultDiv.className = 'result';

    var controlCanvas = document.createElement("canvas");
    controlCanvas.setAttribute("id", "controlCanvas");
    controlCanvas.setAttribute("width", "666");
    controlCanvas.setAttribute("height", "364");
    document.querySelector('.main').appendChild(resultDiv);
    document.querySelector('.main').appendChild(controlCanvas);
    _control.controler.init();
}

function init() {

    renderDiv();
    setRotate();
    addMobile = false;
}
function renderHeader() {
    var isMobile = (0, _judgeMobile.judgeMobile)();
    if (!isMobile) {
        var title = document.createElement('title');
        title.innerHTML = '超级马里奥';
        document.getElementsByTagName("head")[0].appendChild(title);
        document.getElementsByTagName("body")[0].style.opacity = 1;
    } else {
        var gamecss = document.getElementsByTagName('head')[0].innerHTML;
        var str = '<meta charset="UTF-8">\n    <meta content="telephone=no,email=no" name="format-detection">\n    <meta name="applicable-device" content="mobile">\n    <meta name="x5-orientation" content="portrait">\n    <meta name="browsermode" content="application">\n    <meta name="full-screen" content="yes">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />\n       <title>\u8D85\u7EA7\u9A6C\u91CC\u5965</title>\n        <link rel="icon" href="./images/ico/favicon.ico" type="image/x-icon">\n    <link rel="shortcut icon" href="./images/ico/favicon.ico" type="image/x-icon">' + gamecss;
        document.getElementsByTagName('head')[0].innerHTML = str;
    }
}
renderHeader();

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);