var sourceLoadObj = {
    sourceNum: 0,
    currentNum: 0,
    progressbar: new COREHTML5.Progressbar(element.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250),
    loadedCallback: function() {
        var percent = this.currentNum / this.sourceNum * 100;
        this.progressbar.draw(percent);
        if (this.currentNum == this.sourceNum) {
            this.progressOver();
        }
    },
    progressOver: function() {
        element.mycanvas.style.display = 'block';
        element.progressDiv.style.display = 'none';
        element.tipDiv.style.display = 'block';
        //加载图片完成后执行。
        game.init();
        gameControl.start();
        progressObj.countDownStart();
        //背景音乐响起     
        //audioControl.BGMPlay(gameSourceObj.audioList.BGM);
        audioControl.timeupdateAddEventListener(gameSourceObj.audioList.jumpAll);
        audioControl.timeupdateAddEventListener(gameSourceObj.audioList.collision);
    }
}

//gameSourceUrl来自gameSourceUrl.js
var gameSourceObj = lib.convertToObject(gameSourceUrl, sourceLoadObj);
var game = {
    lastKeyListenerTime: 0,
    init: function() {
        var self = this;
        this.bindEvent();
    },
    mapKey: {
        "left": false, //left
        "right": false, //right
        "s": false,
        "w": false,
        "space": false
    },
    bindEvent: function() {
        var self = this;
        document.querySelector('#smallBtn').addEventListener('click', function() {
            createFactory.createUpMoney(100, 100);
        }, false);

        document.querySelector('#bigBtn').addEventListener('click', function() {
            audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
        }, false);
        // Key Listeners..............................................
        gameControl.addKeyListener({
            key: 'p',
            listener: (function() {
                var flag = true; //按下抬起算一次。
                return function(status) {
                    // alert(key);
                    if (status == 1 && flag) {
                        if (gameSourceObj.audioList.BGM.paused) {
                            audioControl.BGMPlay(gameSourceObj.audioList.BGM);
                        } else {
                            audioControl.BGMPause(gameSourceObj.audioList.BGM);
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
                }
            })(),
        });
        gameControl.addKeyListener({
            key: 's',
            listener: function(status) {
                if (gameControl.paused) {
                    return;
                }
                if (status == 1) {
                    self.mapKey['s'] = true;
                    if (!drawSpriteList.mario.isJump && !gameControl.paused) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
                        if (!drawSpriteList.mario.isJump) { // throttle      

                            drawSpriteList.mario.jump(marioGameConfig.smallJumpV);
                        }
                    }
                } else {
                    self.mapKey['s'] = false;
                }
                game.activeEventCallback();
            }
        });
        gameControl.addKeyListener({
            key: 'w',
            listener: function(status) {
                if (gameControl.paused) {
                    return;
                }
                if (status == 1) {
                    self.mapKey['w'] = true;
                    if (!drawSpriteList.mario.isJump && !gameControl.paused) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
                        if (!drawSpriteList.mario.isJump) { // throttle 
                            drawSpriteList.mario.jump(marioGameConfig.bigJumpV);
                        }
                    }
                } else {
                    self.mapKey['w'] = false;
                }
                game.activeEventCallback();
            }
        });
        gameControl.addKeyListener({
            key: 'right',
            listener: function(status) {
                if (status == 1) {
                    self.mapKey['right'] = true;
                } else {
                    self.mapKey['right'] = false;
                }
                game.activeEventCallback();
            }
        });
        gameControl.addKeyListener({
            key: 'left',
            listener: function(status) {
                if (status == 1) {
                    self.mapKey['left'] = true;
                } else {
                    self.mapKey['left'] = false;
                }
                game.activeEventCallback();
            }
        });
    },
    activeEventCallback: function(time) {
        //  var now = +new Date();
        //  
        var jumpKey = this.mapKey["s"] || this.mapKey["w"];
        if (((this.mapKey["left"] && !this.mapKey["right"]) || (!this.mapKey["left"] && this.mapKey["right"]))) {
            if ((this.mapKey["left"] && !this.mapKey["right"])) {
                if (drawSpriteList.mario.isReverse) {
                    gameConfig.setSpeedDefault();
                }
                game.setDirection(-1);
                drawSpriteList.mario.isReverse = false;
                // console.log("按左键");    
            } else {
                if (!drawSpriteList.mario.isReverse) {
                    gameConfig.setSpeedDefault();
                }
                // console.log("按右键");
                drawSpriteList.mario.isReverse = true;
                game.setDirection(1);
            }
            // game.lastKeyListenerTime = now;
            if (drawSpriteList.mario.isJump) {
                drawSpriteList.mario.behaviors = [];
            } else {
                drawSpriteList.mario.painter = drawSpriteList.mario.painters.run;
                drawSpriteList.mario.behaviors = [drawSpriteList.mario.behaviorStatus.runInPlace];
            }
        }
        if (jumpKey && !drawSpriteList.mario.isJump) {
            var status = this.mapKey["s"] ? marioGameConfig.smallJumpV : marioGameConfig.bigJumpV;
            drawSpriteList.mario.jump(status);
        } else {
            if ((game.mapKey["left"] && !game.mapKey["right"]) || (!game.mapKey["left"] && game.mapKey["right"])) {
                drawSpriteList.mario.painter = drawSpriteList.mario.painters.run;
            } else {
                drawSpriteList.mario.painter = drawSpriteList.mario.painters.stand;
            }
        }



        // console.log("按右键和空格键或按左键和空格键或按只空格键");       
        if ((!this.mapKey["left"] && !this.mapKey["right"]) || (this.mapKey["left"] && this.mapKey["right"])) {
            // console.log('不按键或左右都按');
            game.setDirection(0);

            if (drawSpriteList.mario.isJump) {
                drawSpriteList.mario.painter = drawSpriteList.mario.painters.jump;
            } else {
                drawSpriteList.mario.painter = drawSpriteList.mario.painters.stand;

            }
            drawSpriteList.mario.behaviors = [];
        }
    },
    setDirection: function(status) {
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
                break;
        }
    }
};

var SpriteAnimatorEndCallbackList = {
    marioJumpend: function(sprite) {
        sprite.isJump = false;
        sprite.startVelocityY = 0;
        sprite.velocityY = 0;
        sprite.isJump = false;
        game.activeEventCallback();
        //按左键，或按右键
        if (game.mapKey["s"] || game.mapKey["w"]) {
            if (game.mapKey["s"]) {
                audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
            } else {
                audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
            }
        }
    },
    moneyupend: function(sprite) {
        lib.removeByValue(drawSpriteList.createSpriteList, 'name', sprite.name);
        sprite = null;
    },
    wallUpend: function(sprite) {
        sprite.isJump = false;
        sprite.startVelocityY = 0;
        sprite.velocityY = 0;
        sprite.isJump = false;
    },
}


var drawSpriteList = {
    bg: new BG({
        name: "BG",
        width: element.mycanvas.width,
        height: element.mycanvas.height,
        top: 0,
        left: 0
    }),
    mario: new Mario({
        name: "mario",
    }),
    progressObj: progressObj,
    arrayOthers: {
        wall: [new Abnormalwall({
            physicaltop: 100,
            left: 300
        }), new Normalwall({
            physicaltop: 0,
            left: 400
        }), ],
        money: [new Money({
            physicaltop: 100,
            left: 200
        })],
        pipe: [new Pipe({
            physicaltop: 0,
            left: 500
        })],
        fire: [],
        badflower: [],
        flower: [],
        monster: [],
        mushroom: [],
        tortoise: [],
        star: [],
        tower: [],
        hole: [],
    },
    createSpriteList: [],
    goDirection: function(status) {
        this.bg.velocityX = gameConfig.skySpeed * status;
        this.progressObj.velocityX = gameConfig.progressObjSpeed * status;
        var arr = [this.arrayOthers.wall, this.arrayOthers.money, this.arrayOthers.pipe];
        for (var item in arr) {
            arr[item].forEach(function(itemDraw) {
                itemDraw.velocityX = gameConfig.objectSpeed * status;
            })
        }
        var createSpriteList = this.createSpriteList;
        createSpriteList.forEach(function(item) {
            item.velocityX = gameConfig.objectSpeed * status;
        })

        // for (var item in createSpriteList) {
        //     createSpriteList[item].forEach(function(itemDraw) {
        //         itemDraw.velocityX = gameConfig.objectSpeed * status;
        //     })
        // }
    },
    drawOthersFunc: function(ctx, time, fpsNum) {
        var arrothers = this.arrayOthers;
        for (var item in arrothers) {
            arrothers[item].forEach(function(itemDraw) {
                itemDraw.draw(ctx, time, fpsNum);
            })
        }
    },
    judgeCD: {
        config: {
            wall: {
                funcName: 'judgeMWall'
            },
            money: {
                funcName: 'judgeMM',
                callback: function(moneySprite) {
                    moneySprite.visible = false;
                    audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
                }
            },
            pipe: {
                funcName: 'judgeMPipe'
            },
        },
        cdfunc: function() {
            var self = this;
            var arrothers = drawSpriteList.arrayOthers;
            gameConfig.setSpeedDefault();
            for (var item in arrothers) {
                arrothers[item].forEach(function(itemDraw) {
                    var callback = self.config[item].callback || function() {};
                    CD[self.config[item].funcName](drawSpriteList.mario, itemDraw, callback)
                })
            }
        },
    },
};
var gameControl = new Game('game', 'mycanvas');
gameControl.speed = 1;
gameControl.startAnimate = function(time) {
    drawSpriteList.bg.draw(gameControl.context, time, gameControl.fps.num);
    var length = drawSpriteList.createSpriteList.length;
    var createSpriteList = drawSpriteList.createSpriteList;
    for (var i = length; i > 0; i--) {
        createSpriteList[i - 1].draw(gameControl.context, time, gameControl.fps.num);
    }

    //绘制其他的场景，例如墙，金币等。
    drawSpriteList.drawOthersFunc(gameControl.context, time, gameControl.fps.num);
    //碰撞检测
    drawSpriteList.judgeCD.cdfunc();
    drawSpriteList.mario.draw(gameControl.context, time, gameControl.fps.num);
    animateList.countDown(time);
}

var animateList = {
    //倒计时
    ctx: gameControl.context,
    countDown: function() {
        var strTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss.S").split(' ');
        var can = element.mycanvas;
        var cans = can.getContext('2d');
        cans.font = 'bold 14px arial';
        cans.fillStyle = 'red';
        cans.fillText((gameControl.fps.num >> 0) + 'fps', 50, 20);
        progressObj.mileageNumUpdate(gameControl.fps.num);
        progressObj.countDownNumUpdate();
        cans.fillText("行程:" + (progressObj.mileageNum >> 0) + "m", 400, 20);
        cans.fillText("倒计时:" + (progressObj.currentTime >> 0) + "s", 500, 20);
    },
}