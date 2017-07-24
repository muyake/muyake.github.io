console.log('分支');
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
          audioControl.BGMPlay(gameSourceObj.audioList.BGM);
        audioControl.timeupdateAddEventListener(gameSourceObj.audioList.jumpAll);
        audioControl.timeupdateAddEventListener(gameSourceObj.audioList.collision);
        audioControl.timeupdateAddEventListener(gameSourceObj.audioList.music);
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
        "d": false,
        "space": false,

    },
    over: function() {

    },
    reset: function(num) {
       
        progressObj.mileageNum = num;
        progressObj.createSpriteMileNum=num*gameConfig.objectSpeedRate; 
       drawSpriteList.arrayOthersA=[];
       createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
       drawSpriteList.mario.reset();
       
    },
    bindEvent: function() {
        var self = this;
        document.querySelector('#smallBtn').addEventListener('click', function() {
            createFactory.createBrick(100, 100);
        }, false);
        document.querySelector('#flower').addEventListener('click', function() {
            drawSpriteList.mario.rise(WH.mario.bigstatus.height, 3);
            //createFactory.createUpMoney(100, 100);
        }, false);
        document.querySelector('#flower1').addEventListener('click', function() {
            drawSpriteList.mario.rise(WH.mario.smallstatus.height, 3);
            createFactory.createBullet(100, 100);
        }, false);
        document.querySelector('#createStar').addEventListener('click', function() {
            // drawSpriteList.mario.rise(WH.mario.smallstatus.height,1);
            createFactory.createStar(100, 100);
        }, false);
        document.querySelector('#bigBtn').addEventListener('click', function() {
            audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
        }, false);
        document.querySelector('#fire').addEventListener('click', function() {
            // drawSpriteList.mario.rise(WH.mario.height * 0.5);
            //  createFactory.createBullet(100, 30);
            createFactory.createBullet(progressObj.createSpriteMileNum + drawSpriteList.mario.left + drawSpriteList.mario.width, 30);
        }, false);

         document.querySelector('#monster').addEventListener('click', function() {
             drawSpriteList.createAnimationSpriteList.push(new Monster('monster'));
        }, false);
        // Key Listeners..............................................
        gameControl.addKeyListener({
            key: 'p',
            listener: (function() {
                var flag = true; //按下抬起算一次。
                return function(status) {
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
                } else {
                    self.mapKey['w'] = false;
                }
                self.activeEventCallback();
            }
        });
        gameControl.addKeyListener({
            key: 'd',
            listener: function(status) {
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
    activeEventCallback: function() {
        var time = Date.now();
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

        if (this.mapKey['d'] && (drawSpriteList.mario.originalStatus == 4 || drawSpriteList.mario.originalStatus == 3 || drawSpriteList.mario.status == 3) & time - this.advance > 300) {
            if (drawSpriteList.mario.isReverse) {
                createFactory.createBullet(progressObj.createSpriteMileNum + drawSpriteList.mario.left + drawSpriteList.mario.width, drawSpriteList.mario.top + drawSpriteList.mario.height / 3, drawSpriteList.mario.isReverse);

            } else {
                createFactory.createBullet(progressObj.createSpriteMileNum + drawSpriteList.mario.left, drawSpriteList.mario.top + drawSpriteList.mario.height / 3, drawSpriteList.mario.isReverse);
            }
            this.advance = time;
        }

    },
    advance: 0,
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
                break;;

        }
    }
};

var SpriteAnimatorEndCallbackList = {
    marioJumpend: function(mario) {
        if (mario.isDie) {
            if (mario.lifeNum > 0) {
                game.reset(3);
            } else {
                game.over();
            }
        }

        mario.isJump = false;
        mario.startVelocityY = 0;
        mario.velocityY = 0;
        mario.isJump = false;
        game.activeEventCallback();
    },
    moneyupend: function(sprite) {
        lib.removeByValue(drawSpriteList.createSpriteList, 'id', sprite.id);
        sprite = null;
    },
    brickupend: function(sprite) {
        lib.removeByValue(drawSpriteList.createBrickSpriteList, 'id', sprite.id);
        sprite = null;
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
    //马里奥
    mario: new Mario({
        name: "mario",
    }),
   
    //总体进度
    progressObj: progressObj,
    //墙，管道，固定金币等可以为第一层
    arrayOthersA: [],
    //洞
   // arrayOthersB: [],
    //花，弹出的金币
    createSpriteList: [],//可以为第一层
    //其他移动物体，例如蘑菇，怪兽等可以水平移动的物体
    createAnimationSpriteList: [],
    //砖碎片列表
    createBrickSpriteList: [],
    //子弹列表
    createBulletSpriteList: [],
    //通过按键来控制这些对象的速度状态。
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
        this.createAnimationSpriteList.forEach(function(item) {
            item.velocityX = item.initvelocityX + gameConfig.objectSpeed * status;

        });
        this.createBulletSpriteList.forEach(function(item) {
            item.velocityX = item.initvelocityX + gameConfig.objectSpeed * status;

        });
    },
    //事物间的碰撞
    judgeCD: {
        config: {
            wall: {
                funcName: 'judgeMWall',
            },
            money: {
                funcName: 'judgeMM',
            },
            flower: {
                funcName: 'judgeMF',
            },
            star: {
                funcName: 'judgeMS',
            },
            bullet: {
                funcName: 'judgeBBarrier',
            },
            mushroom: {
                funcName: 'judgeMMR',
            },
            hole: {
                funcName: 'judgeMH',
            },
             monster: {
                funcName: 'judgeMMonster',
            },
            moverBarrier: {
                callback: function(mushroomSprite) {
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
        },
        cdfunc: function() {
            var self = this;
            var arrothers = drawSpriteList.arrayOthersA;
            //设置速度默认值，例如，先设置速度正常,当马里奥被管道水平挡住,速度为0，当反向走时，脱离管道碰撞，速度恢复正常。
            gameConfig.setSpeedDefault();
            //马里奥与墙、管道,固定金币等碰撞
            drawSpriteList.arrayOthersA.forEach(function(itemDraw) {
                var callback = self.config[itemDraw.name].callback || function() {};
                CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback)
            });
            //马里奥与花，弹起的金币等碰撞
            drawSpriteList.createSpriteList.forEach(function(itemDraw) {
                var callback = self.config[itemDraw.name].callback || function() {};
                CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback)
            });
            //子弹与障碍物碰撞，（包括与管道和墙的左右碰撞，并不完善（尚未完成），与怪兽的碰撞）
            drawSpriteList.createBulletSpriteList.forEach(function(itemDraw) {
                drawSpriteList.arrayOthersA.forEach(function(barrier) {
                    if (barrier.name == 'wall' || barrier.name == 'pipe') {
                        var callback2 = self.config["bullet"].callback || function() {};
                        CD['judgeBBarrier'](itemDraw, barrier, callback2);
                    }
                    if (barrier.name == 'hole') {
                              CD['judgeBulletHole'](itemDraw, barrier);
                            // var callback2 = self.config["moverBarrier"].callback || function() {};
                            // CD['judgeMoverBarrier'](mover, barrier, callback2);
                        }
                });
            });
            //蘑菇，怪兽等水平的对象与障碍物（马里奥，管道，墙等）的碰撞
            drawSpriteList.createAnimationSpriteList.forEach(function(mover) {
                var callback = self.config[mover.name].callback || function() {};
                CD[self.config[mover.name].funcName](drawSpriteList.mario, mover, callback);
                //如果蘑菇已经上升完毕，则在判断蘑菇与墙，管道的碰撞效果。//可以整理一下            
                // if (mover.name == 'mushroom' || mover.name == 'star') {
                //     if (mover.upover) {
                //         drawSpriteList.arrayOthersA.forEach(function(barrier) {
                //             if (barrier.name == 'wall' || barrier.name == 'pipe') {
                //                 var callback2 = self.config["moverBarrier"].callback || function() {};
                //                 CD['judgeMoverBarrier'](mover, barrier, callback2);
                //             }
                //         });
                //     }
                // } else {
                //     drawSpriteList.arrayOthersA.forEach(function(barrier) {
                //         if (barrier.name == 'wall' || barrier.name == 'pipe') {
                //             var callback2 = self.config["moverBarrier"].callback || function() {};
                //             CD['judgeMoverBarrier'](mover, barrier, callback2);
                //         }

                //     });
                // }


                if (!mover.upover && (mover.name == 'mushroom' || mover.name == 'star')) {
                    return;
                } else {
                    drawSpriteList.arrayOthersA.forEach(function(barrier) {
                        if (barrier.name == 'wall' || barrier.name == 'pipe') {
                           // var callback2 = self.config["moverBarrier"].callback || function() {};
                            CD['judgeMoverBarrier'](mover, barrier);
                        }
                        if (barrier.name == 'hole') {
                              CD['judgeMoverHole'](mover, barrier);
                            // var callback2 = self.config["moverBarrier"].callback || function() {};
                            // CD['judgeMoverBarrier'](mover, barrier, callback2);
                        }
                    });
                }

            });
        },
    },
};
var gameControl = new Game('game', 'mycanvas');
gameControl.speed = 1;
gameControl.startAnimate = function(time) {
     //层级分法：从下往上依次为1.背景层，作为游戏的整个背景，放在最底部，2，洞为二层，因为洞两侧有多余部分，所以，不能让多余部分遮挡移动的物体（马里奥，蘑菇等）
    //3.蘑菇，移动的金币，小星星等放在第三层，因为从砖里出来，所以在砖的下一层4.砖，管道等，为第四层，5马里奥为第五层。6碎砖块为第六层。

    drawSpriteList.bg.draw(gameControl.context, time, gameControl.fps.num);
    animateList.countDown(time);
  //绘制第二层（洞）等。 
   // console.log('huizhi2');
    drawSpriteList.arrayOthersA.forEach(function(itemDraw) {
       // console.log('huizhi');
       if(itemDraw.name=='hole'){
         itemDraw.draw(gameControl.context, time, gameControl.fps.num);
       }
       
    });
    drawSpriteList.createSpriteList.forEach(function(item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });

    drawSpriteList.createAnimationSpriteList.forEach(function(item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    drawSpriteList.createBulletSpriteList.forEach(function(item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    
    //createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthers);
    //绘制其他的场景，例如墙，金币等。 
   // console.log('huizhi2');
    drawSpriteList.arrayOthersA.forEach(function(itemDraw) {
       // console.log('huizhi');
       if(itemDraw.name!='hole'){
         itemDraw.draw(gameControl.context, time, gameControl.fps.num);
       }       
    });
    //碰撞检测
    drawSpriteList.judgeCD.cdfunc();
    drawSpriteList.mario.draw(gameControl.context, time, gameControl.fps.num);
    drawSpriteList.createBrickSpriteList.forEach(function(item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
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
