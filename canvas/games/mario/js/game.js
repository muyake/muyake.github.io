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
        createFactory.init();
        game.init();

        createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
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
        document.querySelector('#flower').addEventListener('click', function() {
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
                self.activeEventCallback();
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
                self.activeEventCallback();
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
                self.activeEventCallback();
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
                self.activeEventCallback();
            }
        });
    },
    activeEventCallback: function(time) {
        var jumpKey = this.mapKey["s"] || this.mapKey["w"]; //按蹦跳键
        var runKey = ((this.mapKey["left"] && !this.mapKey["right"]) || (!this.mapKey["left"] && this.mapKey["right"])); //左右键中，只按了左键或只按了右键
        //只按左键或只按右键(大蹦，小蹦不管)
        if (runKey) {
            createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
            //如果是左键
            if ((this.mapKey["left"] && !this.mapKey["right"])) {
                //如果马里奥当前面向右，然后从右转向左，则设置初始化默认速度，以防当前面有墙，被墙挡住，速度为0，掉头后速度设为默认值。
                if (drawSpriteList.mario.isReverse) {
                    gameConfig.setSpeedDefault();
                }
                this.setDirection(-1);
                drawSpriteList.mario.isReverse = false;
                // console.log("按左键");    
            } else {
                if (!drawSpriteList.mario.isReverse) {
                    gameConfig.setSpeedDefault();
                }
                // console.log("按右键");
                drawSpriteList.mario.isReverse = true;
                this.setDirection(1);
            }
        } else { //如果左右键都不按，或同时按，则背景速度为0
            this.setDirection(0);
        }
        //根据按键设置，马里奥的画笔和行为。
        //分为只按左右键，只按蹦跳键，同时按左键（或右键）和蹦跳键，还有其他不合理按键（例如同时按左右键），和都不按键
        //只要按蹦跳键，则马里奥处于蹦跳状态或者如果不处于蹦跳状态则执行蹦跳动作，所以，蹦跳键的行为大于左右键的行为，因为如果同时按右键和蹦跳键，是处于蹦跳状态的。
        if (jumpKey) { //如果按了蹦跳键
            if (!drawSpriteList.mario.isJump) {
                var status = this.mapKey["s"] ? marioGameConfig.smallJumpV : marioGameConfig.bigJumpV;
                drawSpriteList.mario.jump(status);
            } else {
                drawSpriteList.mario.painter = drawSpriteList.mario.painters.jump;
                drawSpriteList.mario.behaviors = [];
            }
        } else { //没有按蹦跳键
            if (runKey) { //只按了左键或只按右键
                if (drawSpriteList.mario.isJump) {
                    drawSpriteList.mario.painter = drawSpriteList.mario.painters.jump;
                    drawSpriteList.mario.behaviors = [];
                } else {
                    drawSpriteList.mario.painter = drawSpriteList.mario.painters.run;
                    drawSpriteList.mario.behaviors = [drawSpriteList.mario.behaviorStatus.runInPlace];
                }
            } else { //同时按了左键和右键，或者两者都没按
                if (drawSpriteList.mario.isJump) {
                    drawSpriteList.mario.painter = drawSpriteList.mario.painters.jump;
                } else {
                    drawSpriteList.mario.painter = drawSpriteList.mario.painters.stand;
                }
                drawSpriteList.mario.behaviors = [];
            }
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
    floserupend: function(sprite) {
        // lib.removeByValue(drawSpriteList.createSpriteList, 'name', sprite.name);
        // sprite = null;
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
    arrayOthersA: [],
    createSpriteList: [],
    goDirection: function(status) {
        this.bg.velocityX = gameConfig.skySpeed * status;
        this.progressObj.velocityX = gameConfig.progressObjSpeed * status;
        this.arrayOthersA.forEach(function(itemDraw) {
            itemDraw.velocityX = gameConfig.objectSpeed * status;
        });
        var createSpriteList = this.createSpriteList;
        createSpriteList.forEach(function(item) {
            item.velocityX = gameConfig.objectSpeed * status;
        });
    },
    drawOthersFunc: function(ctx, time, fpsNum) {
        var arrothers = this.arrayOthersA;
        arrothers.forEach(function(itemDraw) {
            itemDraw.draw(ctx, time, fpsNum);
        });
    },
    judgeCD: {
        config: {
            wall: {
                funcName: 'judgeMWall',
                callback: function(wallSprite) {
                    if (wallSprite.status == 0 || wallSprite.status == 1) {
                        wallSprite.up(60);
                    }
                }
            },
            money: {
                funcName: 'judgeMM',
                callback: function(moneySprite) {
                    moneySprite.visible = false;
                    var id = moneySprite.id;
                    var moneyList = totalProgressSprite.money;
                    moneyList.forEach(function(item) {
                        if (item.id == id) {
                            item.isVisible = false;
                        }
                    })
                    audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
                }
            },
            flower: {
                funcName: 'judgeMF',
                callback: function(flowerSprite) {
                    flowerSprite.visible = false;
                    var id = flowerSprite.id;
                    var moneyList = totalProgressSprite.money;
                    moneyList.forEach(function(item) {
                        if (item.id == id) {
                            item.isVisible = false;
                        }
                    });
                    audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
                }
            },
            pipe: {
                funcName: 'judgeMPipe'
            },
        },
        cdfunc: function() {
            var self = this;
            var arrothers = drawSpriteList.arrayOthersA;
            gameConfig.setSpeedDefault();
            drawSpriteList.arrayOthersA.forEach(function(itemDraw) {
                var callback = self.config[itemDraw.name].callback || function() {};
                CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback)
            })


            // for (var item in arrothers) {
            //     arrothers[item].forEach(function(itemDraw) {
            //         var callback = self.config[item].callback || function() {};
            //         CD[self.config[item].funcName](drawSpriteList.mario, itemDraw, callback)
            //     })
            // }
        },
    },
};
var gameControl = new Game('game', 'mycanvas');
gameControl.speed = 1;
gameControl.startAnimate = function(time) {
    drawSpriteList.bg.draw(gameControl.context, time, gameControl.fps.num);
    animateList.countDown(time);
    var length = drawSpriteList.createSpriteList.length;
    var createSpriteList = drawSpriteList.createSpriteList;
    for (var i = length; i > 0; i--) {
        createSpriteList[i - 1].draw(gameControl.context, time, gameControl.fps.num);
    }
    //createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthers);
    //绘制其他的场景，例如墙，金币等。
    drawSpriteList.drawOthersFunc(gameControl.context, time, gameControl.fps.num);
    //碰撞检测
    drawSpriteList.judgeCD.cdfunc();
    drawSpriteList.mario.draw(gameControl.context, time, gameControl.fps.num);

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