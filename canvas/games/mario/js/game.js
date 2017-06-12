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
        audioControl.BGMPlay(gameSourceObj.audioList.BGM);
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
            // if (!spriteList.marioSprite.isJump) { // throttle      
            //     spriteList.marioSprite.jump(marioGameConfig.smallJumpV);
            // }
            spriteList.normalwall.up(60);
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
                    if (!spriteList.mario.isJump && !gameControl.paused) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
                        if (!spriteList.mario.isJump) { // throttle      

                            spriteList.mario.jump(marioGameConfig.smallJumpV);
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
                    if (!spriteList.mario.isJump && !gameControl.paused) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
                        if (!spriteList.mario.isJump) { // throttle      

                            spriteList.mario.jump(marioGameConfig.bigJumpV);
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

                if (!spriteList.mario.isReverse) {
                    gameConfig.setSpeedDefault();
                }

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
                //gameConfig.setSpeedDefault();
                if (spriteList.mario.isReverse) {
                    gameConfig.setSpeedDefault();
                }
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
        var jumpKey = this.mapKey["s"] || this.mapKey["w"];
        if (((this.mapKey["left"] && !this.mapKey["right"]) || (!this.mapKey["left"] && this.mapKey["right"]))) {
            if ((this.mapKey["left"] && !this.mapKey["right"])) {
                game.setDirection(-1);
                spriteList.mario.isReverse = false;
                // console.log("按左键");    
            } else {
                // console.log("按右键");
                spriteList.mario.isReverse = true;
                game.setDirection(1);
            }
            // game.lastKeyListenerTime = now;
            if (spriteList.mario.isJump) {
                spriteList.mario.behaviors = [];
            } else {
                spriteList.mario.painter = spriteList.mario.painters.run;
                spriteList.mario.behaviors = [spriteList.mario.behaviorStatus.runInPlace];
            }
        }
        if (jumpKey && !spriteList.mario.isJump) {
            var status = this.mapKey["s"] ? marioGameConfig.smallJumpV : marioGameConfig.bigJumpV;
            spriteList.mario.jump(status);
        } else {
            if ((game.mapKey["left"] && !game.mapKey["right"]) || (!game.mapKey["left"] && game.mapKey["right"])) {
                spriteList.mario.painter = spriteList.mario.painters.run;
            } else {
                spriteList.mario.painter = spriteList.mario.painters.stand;
            }
        }



        // console.log("按右键和空格键或按左键和空格键或按只空格键");       
        if ((!this.mapKey["left"] && !this.mapKey["right"]) || (this.mapKey["left"] && this.mapKey["right"])) {
            // console.log('不按键或左右都按');
            game.setDirection(0);

            if (spriteList.mario.isJump) {
                spriteList.mario.painter = spriteList.mario.painters.jump;
            } else {
                spriteList.mario.painter = spriteList.mario.painters.stand;

            }
            spriteList.mario.behaviors = [];
        }
    },
    setDirection: function(status) {
        switch (status) {
            case 0:
                {
                    spriteList.bg.velocityX = 0;
                    spriteList.normalwall.velocityX = 0;
                    spriteList.money.velocityX = 0;
                    progressObj.velocityX = 0;
                }
                break;
            case 1:
                {
                    spriteList.bg.velocityX = -gameConfig.skySpeed;
                    spriteList.normalwall.velocityX = -gameConfig.objectSpeed;
                    progressObj.velocityX = -gameConfig.progressObjSpeed;
                    spriteList.money.velocityX = -gameConfig.objectSpeed;
                }
                break;
            case -1:
                {
                    spriteList.bg.velocityX = gameConfig.skySpeed;
                    spriteList.normalwall.velocityX = gameConfig.objectSpeed;
                    progressObj.velocityX = gameConfig.progressObjSpeed;
                    spriteList.money.velocityX = gameConfig.objectSpeed;
                }
                break;
        }
    }
};

var gameControl = new Game('game', 'mycanvas');
gameControl.speed = 1;
gameControl.startAnimate = function(time) {  
     spriteList.bg.draw(gameControl.context, time, gameControl.fps.num);
     spriteList.money.draw(gameControl.context, time, gameControl.fps.num);  
    spriteList.normalwall.draw(gameControl.context, time, gameControl.fps.num);  
    spriteList.mario.draw(gameControl.context, time, gameControl.fps.num);
    animateList.countDown(time);
}

var SpriteAnimatorEndCallbackList = {
    marioJumpend:function(sprite) {
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
    wallUpend:function(sprite) {
        sprite.isJump = false;
        sprite.startVelocityY = 0;
        sprite.velocityY = 0;
        sprite.isJump = false;                  
    },
}
var spriteList = {    
    bg:new BG({ name: "BG", width: element.mycanvas.width, height: element.mycanvas.height + element.mycanvas.height * 0.02, top:0,left:0}),
    normalwall: new Normalwall({ name: "normalwall", width: 35,jumpEndCallback:SpriteAnimatorEndCallbackList.wallUpend, height: 35, top:element.mycanvas.height - 35 - gameConfig.roadHeight-100,left:500}),
    money: new Money({ name: "normalwall", width: 35, height: 35, top:element.mycanvas.height - 35 - gameConfig.roadHeight - 100,left:300}),
    mario: new Mario({ name: "mario",jumpEndCallback:SpriteAnimatorEndCallbackList.marioJumpend, velocityX: 50, width: 33, height: 68, canvas: element.mycanvas }),    
};


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
        // cans.fillText(strTime[0], 110, 20);
        // cans.fillText(strTime[1], 200, 20);
        progressObj.mileageNumUpdate(gameControl.fps.num);
        progressObj.countDownNumUpdate();
        cans.fillText("行程:" + (progressObj.mileageNum >> 0) + "m", 400, 20);
        cans.fillText("倒计时:" + (progressObj.currentTime >> 0) + "s", 500, 20);
    },    
}
