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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
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

/***/ })

/******/ });