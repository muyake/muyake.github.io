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
exports.createFactory = exports.totalProgressSprite = exports.PJNum = exports.progressObj = undefined;

var _stopwatch = __webpack_require__(6);

var _stopwatch2 = _interopRequireDefault(_stopwatch);

var _config = __webpack_require__(0);

var _gameSprite = __webpack_require__(7);

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
    badflower: [
    // {
    //         isVisible: true,
    //         id: lib.newGuid(),
    //         physicaltop: 0,
    //         positionmile: 400,
    //     },

    {
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
        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.fire);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var gameAudio = exports.gameAudio = {
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
var audioControl = exports.audioControl = {
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//所有游戏需要加载的外部资源
var gameSourceUrl = {
    imageList: {
        //背景
        BG: './images/background2.png',
        // ground: './images/ground.png',
        wall: './images/wall/wall.png',
        flower: './images/flower/4.png',
        badflower: './images/badflower/img.png',
        mushroom: './images/mushroom/4.png',
        pipe: './images/pipe.png',
        money: './images/money.png',
        star: './images/star.png',
        bullet: './images/fire/fireL/0.png',
        hole: './images/hole.png',
        tower: './images/tower.png',
        monster: './images/monster/1/img.png',
        monsterDie: './images/monster/1/dead.png',
        tortoise: './images/tortoise/img.png',
        shell: './images/tortoise/roll/img.png',
        life: './images/life/img.png',
        gameOver: './images/over.png',
        gameSuccess: './images/end.png',
        flag: './images/flag.png',
        final: './images/final.png',
        //马里奥
        mario: {
            commonMairo: {
                run: "./images/mario/smallmario/marioR/spritesrun.png",
                jump: "./images/mario/smallmario/marioR/jump.png",
                stand: "./images/mario/smallmario/marioR/stand.png",
                laqi: "./images/winS.png"
            },
            fireMairo: {
                run: "./images/mario/smallmario/marioR/spritesrun2.png",
                jump: "./images/mario/smallmario/marioR/jump2.png",
                laqi: "./images/winS2.png",
                stand: "./images/mario/smallmario/marioR/stand2.png"
            },
            invinciblefireMairo: {
                run: "./images/mario/smallmario/marioR/spritesrun3.png",
                jump: "./images/mario/smallmario/marioR/jump3.png",
                laqi: "./images/winS3.png",
                stand: "./images/mario/smallmario/marioR/stand3.png"
            }
        }
    },
    audioList: {
        GameOver: './sounds/mario/GameOver.mp3',
        BGM: './sounds/mario/bag.mp3',
        gamesuccess: './sounds/mario/gamesuccess.mp3',
        WD: './sounds/mario/wudi.mp3',
        jumpAll: './sounds/mario/jumpAll.mp3', //
        collision: './sounds/mario/mariocollision.mp3', //子弹打在其他物体上
        die: './sounds/mario/die.mp3',
        music: './sounds/mario/music2.mp3' //顶到藤蔓 顶碎砖块 1up 拉旗杆 过关时时间清零
    }
};
exports.default = gameSourceUrl;

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BG = exports.Brick = exports.Hole = exports.Tower = exports.Flag = exports.Final = exports.Pipe = exports.Bullet = exports.Star = exports.Mushroom = exports.BadFlower = exports.Flower = exports.Money = exports.Wall = exports.Over = exports.Life = exports.Shell = exports.Tortoise = exports.Monster = exports.Mario = exports.SceneImagePainter = exports.SceneSprite = exports.CharacterRiseSpriteSheetPainter = exports.CharacterRunSpriteSheetPainter = exports.CharacterImagePainter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spriteSheetPainter = __webpack_require__(11);

var _public = __webpack_require__(1);

var _sprite = __webpack_require__(5);

var _gameProgress = __webpack_require__(2);

var _config = __webpack_require__(0);

var _behaviorList = __webpack_require__(10);

var _audioControl = __webpack_require__(3);

var _gameSource = __webpack_require__(4);

var _gameSource2 = _interopRequireDefault(_gameSource);

var _imagePainter = __webpack_require__(12);

var _spriteAnimator = __webpack_require__(8);

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
            sprite.width = cell.width * 0.5;
            sprite.height = cell.height * 0.5;
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
                            console.log(VY);
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
        console.log('translateLeft' + _this9.translateLeft);
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
        thi.painters = {
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
        _this24.width = _this24.imgwidth * 0.7;
        _this24.height = _this24.imgheight * 0.7; //50变35，即width*0.7;

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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.behaviorList = undefined;

var _public = __webpack_require__(1);

var _gameProgress = __webpack_require__(2);

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
/* 11 */
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
/* 12 */
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

/***/ })
/******/ ]);