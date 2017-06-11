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
        spriteList.spriteInit();
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
            if (!spriteList.marioSprite.isJump) { // throttle      
                spriteList.marioSprite.jump(marioGameConfig.smallJumpV);
            }
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
                    if (!spriteList.marioSprite.isJump && !gameControl.paused) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
                        if (!spriteList.marioSprite.isJump) { // throttle      
                         
                            spriteList.marioSprite.jump(marioGameConfig.smallJumpV);
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
                    if (!spriteList.marioSprite.isJump && !gameControl.paused) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
                        if (!spriteList.marioSprite.isJump) { // throttle      
                         
                            spriteList.marioSprite.jump(marioGameConfig.bigJumpV);
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

                if (!spriteList.marioSprite.isReverse) {
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
                if (spriteList.marioSprite.isReverse) {
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
                spriteList.marioSprite.isReverse = false;
                // console.log("按左键");    
            } else {
                // console.log("按右键");
                spriteList.marioSprite.isReverse = true;
                game.setDirection(1);
            }
            // game.lastKeyListenerTime = now;
            if (spriteList.marioSprite.isJump) {
                spriteList.marioSprite.behaviors = [];
            } else {
                spriteList.marioSprite.painter = marioPainter.run;
                spriteList.marioSprite.behaviors = [spriteList.marioSprite.behaviorStatus.runInPlace];
            }
        }
        if (jumpKey && !spriteList.marioSprite.isJump) {
            var status = this.mapKey["s"] ? marioGameConfig.smallJumpV : marioGameConfig.bigJumpV;
            spriteList.marioSprite.jump(status);
        } else {
            if ((game.mapKey["left"] && !game.mapKey["right"]) || (!game.mapKey["left"] && game.mapKey["right"])) {
                spriteList.marioSprite.painter = marioPainter.run;
            } else {
                spriteList.marioSprite.painter = marioPainter.stand;
            }
        }



        // console.log("按右键和空格键或按左键和空格键或按只空格键");       
        if ((!this.mapKey["left"] && !this.mapKey["right"]) || (this.mapKey["left"] && this.mapKey["right"])) {
            // console.log('不按键或左右都按');
            game.setDirection(0);

            if (spriteList.marioSprite.isJump) {
                spriteList.marioSprite.painter = marioPainter.jump;
            } else {
                spriteList.marioSprite.painter = marioPainter.stand;

            }
            spriteList.marioSprite.behaviors = [];
        }
    },
    setDirection: function(status) {
        switch (status) {
            case 0:
                {
                    spriteList.skySprite.velocityX = 0;
                    spriteList.normalwall.velocityX = 0;
                    spriteList.money.velocityX = 0;
                    progressObj.velocityX = 0;
                }
                break;
            case 1:
                {
                    spriteList.skySprite.velocityX = -gameConfig.skySpeed;
                    spriteList.normalwall.velocityX = -gameConfig.objectSpeed;
                    progressObj.velocityX = -gameConfig.progressObjSpeed;
                    spriteList.money.velocityX = -gameConfig.objectSpeed;
                }
                break;
            case -1:
                {
                    spriteList.skySprite.velocityX = gameConfig.skySpeed;
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
    //game.activeEventCallback(time);
    animateList.drawSkySingle(time);
    animateList.drawWall(time);
    animateList.drawMoney(time);
    SpriteAnimatorList.marioSpriteAnimatorJump.execute();
    animateList.drawPeople(gameControl.context, time);
    animateList.countDown(time);
}

var marioPainter = {
    run: new MarioRunSpriteSheetPainter(mario.config, gameSourceUrl.imageList.mario.run, element.mycanvas, mario.config.totalCount),
    jump: new CharacterImagePainter(gameSourceUrl.imageList.mario.jump),
    stand: new CharacterImagePainter(gameSourceUrl.imageList.mario.stand),
};



var spriteList = {
    skySprite: new SceneSprite('sky2', new ImagePainter(gameSourceUrl.imageList.BG), [new behaviorList.moveLeftToRight()]),
    normalwall: new SceneSprite('wall', new ImagePainter(gameSourceUrl.imageList.wall.normalwall), [new behaviorList.moveLeftToRight()]),
    money: new SceneSprite('money', new ImagePainter(gameSourceUrl.imageList.money), [new behaviorList.moveLeftToRight()]),
    marioSprite: new Character('mario', marioPainter.stand, [], true, element.mycanvas),
    spriteInit: function() {
        this.skySprite.width = element.mycanvas.width;
        this.skySprite.height = element.mycanvas.height + element.mycanvas.height * 0.02;

        this.skySprite.top = 0;
        this.skySprite.left = 0;

        //people 
        this.marioSprite.velocityX = 50;
        //this.marioSprite.velocityY = 50;
        this.marioSprite.width = 33;
        this.marioSprite.height = 68;
        this.marioSprite.top = element.mycanvas.height - this.marioSprite.height - gameConfig.roadHeight;
        this.marioSprite.left = element.mycanvas.width / 3 - this.marioSprite.width / 2;
        this.marioSprite.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
        this.marioSprite.isJump = false;
        this.marioSprite.startVelocityY = 0;

        this.marioSprite.upColliding = null;

        this.marioSprite.initialTop = this.marioSprite.top;
        this.marioSprite.behaviorStatus = {
            runInPlace: new behaviorList.runInPlace(),
        };
        spriteList.marioSprite.painter = marioPainter.stand;

        this.marioSprite.jump = function(VY) { //status为2时，为大蹦，1时为小蹦
                this.startVelocityY = VY;
                this.velocityY =  -this.startVelocityY;
                this.behaviors = [];              
                SpriteAnimatorList.marioSpriteAnimatorJump.start(spriteList.marioSprite);
            }
            //wall
        this.normalwall.width = 35;
        this.normalwall.height = 35;
        this.normalwall.top = element.mycanvas.height - this.normalwall.height - gameConfig.roadHeight;
        this.normalwall.left = 500;

        this.money.width = 35;
        this.money.height = 35;
        this.money.top = element.mycanvas.height - this.money.height - gameConfig.roadHeight;
        this.money.left = 300;
    }
};

var SpriteAnimatorList = {
    marioSpriteAnimatorJump: new marioSpriteAnimator(function(sprite) {
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
    })
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
        // cans.fillText(strTime[0], 110, 20);
        // cans.fillText(strTime[1], 200, 20);
        progressObj.mileageNumUpdate(gameControl.fps.num);
        progressObj.countDownNumUpdate();
        cans.fillText("行程:" + (progressObj.mileageNum >> 0) + "m", 400, 20);
        cans.fillText("倒计时:" + (progressObj.currentTime >> 0) + "s", 500, 20);
    },
    drawSkySingle: function(time) {
        var self = this;
        spriteList.skySprite.update(self.ctx, time, gameControl.fps.num);
        var left = spriteList.skySprite.left;
        if (spriteList.skySprite.velocityX > 0) {
            left = left < element.mycanvas.width ? left : 0;
        } else {
            left = left > -element.mycanvas.width ? left : 0;
        }

        spriteList.skySprite.left = left;
        spriteList.skySprite.paint(self.ctx);
        spriteList.skySprite.left = left - spriteList.skySprite.width;
        spriteList.skySprite.paint(self.ctx);
        spriteList.skySprite.left = left + spriteList.skySprite.width;
        spriteList.skySprite.paint(self.ctx);
        spriteList.skySprite.left = left;
    },
    drawPeople: function(ctx, time) {
        spriteList.marioSprite.fpsNum = gameControl.fps.num; //给marioSpriteAnimator传递fpsnum
        spriteList.marioSprite.update(ctx, time, gameControl.fps.num);
        spriteList.marioSprite.paint(ctx);
        CD.judgeMM(spriteList.marioSprite, spriteList.money, function() {
            spriteList.money.visible = false;
            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
        });
        CD.judgeMNormalWall(spriteList.marioSprite, spriteList.normalwall, function() {
            // spriteList.normalwall.visible=false;     
            // audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
        });
    },
    drawWall: function(time) {
        var self = this;
        spriteList.normalwall.update(self.ctx, time, gameControl.fps.num);
        spriteList.normalwall.paint(self.ctx);
    },
    drawMoney: function(time) {
        var self = this;
        spriteList.money.update(self.ctx, time, gameControl.fps.num);
        spriteList.money.paint(self.ctx);
    },
}
