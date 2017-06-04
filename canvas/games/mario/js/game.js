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
        //背景音乐响起     
        // audioControl.BGMPlay(gameSourceObj.audioList.BGM);

        gameSourceObj.audioList.jumpAll.addEventListener('timeupdate', function() {
            if (this.currentTime > this.endTime) {
                this.pause();
            }
        }, false);

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
        document.querySelector('#smallBtn').addEventListener('click', function() {

        }, false);

        document.querySelector('#bigBtn').addEventListener('click', function() {
            audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
        }, false);

        var self = this;
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
                if (status == 1) {
                    self.mapKey['s'] = true;
                    if (!spriteList.peopleSprite.behaviorStatus.jump.isJump && !gameControl.paused) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
                    }
                } else {
                    self.mapKey['s'] = false;
                }
            }
        });
        gameControl.addKeyListener({
            key: 'w',
            listener: function(status) {
                if (status == 1) {
                    self.mapKey['w'] = true;
                    if (!spriteList.peopleSprite.behaviorStatus.jump.isJump && !gameControl.paused) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
                    }
                } else {
                    self.mapKey['w'] = false;
                }
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
            }
        });
    },
    activeEventCallback: function() {
        var now = +new Date();
        var jumpKey = this.mapKey["s"] || this.mapKey["w"];
        if (((this.mapKey["left"] && !this.mapKey["right"]) || (!this.mapKey["left"] && this.mapKey["right"])) && (now - game.lastKeyListenerTime > 200)) {
            if ((this.mapKey["left"] && !this.mapKey["right"])) {
                game.setDirection(-1);
                spriteList.peopleSprite.isReverse = false;
                // console.log("按左键");    
            } else {
                // console.log("按右键");
                spriteList.peopleSprite.isReverse = true;
                game.setDirection(1);
            }
            game.lastKeyListenerTime = now;
            if (spriteList.peopleSprite.behaviorStatus.jump.isJump) {
                spriteList.peopleSprite.painter = peoplePainter.jump;
            } else {
                spriteList.peopleSprite.painter = peoplePainter.run;
            }
            spriteList.peopleSprite.behaviors = spriteList.peopleSprite.behaviorStatus.jump.isJump ? [spriteList.peopleSprite.behaviorStatus.jump] : [spriteList.peopleSprite.behaviorStatus.runInPlace];
        }
        // console.log("按右键和空格键或按左键和空格键或按只空格键");       
        if (jumpKey) {
            if (!spriteList.peopleSprite.behaviorStatus.jump.isJump) { // throttle

                spriteList.peopleSprite.behaviorStatus.jump.startVelocityY = this.mapKey["s"] ? 200 : 250;
                spriteList.peopleSprite.behaviorStatus.jump.velocityY = this.mapKey["s"] ? -200 : -250;
            }

            spriteList.peopleSprite.painter = peoplePainter.jump;
            spriteList.peopleSprite.behaviors = [spriteList.peopleSprite.behaviorStatus.jump];

        }
        if ((!this.mapKey["left"] && !this.mapKey["right"]) || (this.mapKey["left"] && this.mapKey["right"])) {
            // console.log('不按键或左右都按');
            game.setDirection(0);
            //  spriteList.peopleSprite.painter = peoplePainter.stand;
            if (spriteList.peopleSprite.behaviorStatus.jump.isJump) {
                spriteList.peopleSprite.painter = peoplePainter.jump;
            } else {
                spriteList.peopleSprite.painter = peoplePainter.stand;
            }
            spriteList.peopleSprite.behaviors = [spriteList.peopleSprite.behaviorStatus.jump];
        }
    },
    setDirection: function(status) {
        switch (status) {
            case 0:
                {
                    // spriteList.treeList.smallTree.velocityX = 0;
                    spriteList.skySprite.velocityX = 0;
                    // spriteList.treeList.twotrunksTree.velocityX = 0;
                    // spriteList.grassList.GRASS_VELOCITX = 0;
                }
                break;
            case 1:
                {

                    // spriteList.treeList.smallTree.velocityX = -spriteList.treeList.smallTree.initialVelocitX;
                    spriteList.skySprite.velocityX = -spriteList.skySprite.initialVelocitX;
                    // spriteList.treeList.twotrunksTree.velocityX = -spriteList.treeList.twotrunksTree.initialVelocitX;
                    // spriteList.grassList.GRASS_VELOCITX = -spriteList.grassList.initialGRASS_VELOCITX;
                }
                break;
            case -1:
                {
                    // spriteList.treeList.smallTree.velocityX = spriteList.treeList.smallTree.initialVelocitX;
                    spriteList.skySprite.velocityX = spriteList.skySprite.initialVelocitX;
                    // spriteList.treeList.twotrunksTree.velocityX = spriteList.treeList.twotrunksTree.initialVelocitX;
                    // spriteList.grassList.GRASS_VELOCITX = spriteList.grassList.initialGRASS_VELOCITX;
                }
                break;
        }
    }
};

var gameControl = new Game('game', 'mycanvas');
gameControl.speed = 2;
gameControl.startAnimate = function(time) {
    game.activeEventCallback();
    animateList.drawSkySingle(time);
    animateList.drawWall(time);
    animateList.drawPeople(gameControl.context, time);
    animateList.countDown(time);
}

var peoplePainter = {
    run: new PeopleRunSpriteSheetPainter(mario.config, gameSourceUrl.imageList.mario.run, element.mycanvas, mario.config.totalCount),
    jump: new CharacterImagePainter(gameSourceUrl.imageList.mario.jump),
    stand: new CharacterImagePainter(gameSourceUrl.imageList.mario.stand),
};



var spriteList = {
    skySprite: new SceneSprite('sky2', new ImagePainter(gameSourceUrl.imageList.BG), [new behaviorList.moveLeftToRight()]),
    normalwall: new SceneSprite('wall', new ImagePainter(gameSourceUrl.imageList.wall.normalwall), [new behaviorList.moveLeftToRight()]),
    peopleSprite: new Character('mario', peoplePainter.stand, [], true, element.mycanvas),
    spriteInit: function() {
        this.skySprite.width = element.mycanvas.width;
        this.skySprite.height = element.mycanvas.height + element.mycanvas.height * 0.02;
        this.skySprite.initialVelocitX = 8 * gameControl.speed;
        this.skySprite.top = 0;
        this.skySprite.left = 0;

        //people 
        this.peopleSprite.velocityX = 50;
        //this.peopleSprite.velocityY = 50;
        this.peopleSprite.width = 33;
        this.peopleSprite.height = 68;
        this.peopleSprite.top = element.mycanvas.height - this.peopleSprite.height * 1.2;
        this.peopleSprite.left = element.mycanvas.width / 3 - this.peopleSprite.width / 2;
        this.peopleSprite.behaviorStatus = {
            runInPlace: new behaviorList.runInPlace(),
            jump: new behaviorList.jump({
                initialTop: this.peopleSprite.top,
                GRAVITY_FORCE: publicConfig.GRAVITY_FORCE,
                jumpOverCallback: function() {
                    //console.log('蹦跳结束');           
                    if (game.mapKey["s"]) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
                    } else if (game.mapKey["w"]) {
                        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
                    }

                }
            }),
        }
        spriteList.peopleSprite.painter = peoplePainter.stand;


        //wall
        this.normalwall.width = 50;
        this.normalwall.height = 50;
        this.normalwall.top = 100;
        this.normalwall.left = 100;
    }
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
        cans.fillText(strTime[0], 110, 20);
        cans.fillText(strTime[1], 200, 20);
    },
    drawSkySingle: function(time) {
        var self = this;
        spriteList.skySprite.update(self.ctx, time, gameControl.fps.num);
        var left = spriteList.skySprite.left;
        if (spriteList.skySprite.velocityX > 0) {
            left = left < element.mycanvas.width ? left + spriteList.skySprite.velocityX / gameControl.fps.num : 0;
        } else {
            left = left > -element.mycanvas.width ? left + spriteList.skySprite.velocityX / gameControl.fps.num : 0;
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
        spriteList.peopleSprite.update(ctx, time, gameControl.fps.num);
        spriteList.peopleSprite.paint(ctx);
    },
    drawWall: function(time) {
        var self = this;
        spriteList.normalwall.update(self.ctx);
        spriteList.normalwall.paint(self.ctx);
    },
}
