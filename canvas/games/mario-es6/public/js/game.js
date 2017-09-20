require('../css/mobile.css');
require('../css/pc.css');
import {
    Game
} from './libs/gameEngine';
import './libs/requestNextAnimationFrame';
import './exc';
//绘制进度条
import {
    COREHTML5
} from './progressbar';
//绘制进度条
import {
    CD
} from './collisionDetection';
//绘制进度条
import {
    publicConfig,
    monsterConfig,
    tortoiseConfig,
    shellConfig,
    lifeConfig,
    badFlowerConfig,
    marioConfig,
    bulletConfig,
    WH,
    wallConfig,
    marioGameConfig,
    element,
    gameConfig
} from './config';
import {
    progressObj,
    PJNum,
    totalProgressSprite,
    createFactory
}
from './gameProgress';
import {
    lib
} from './public.js';
import {
    gameAudio,
    audioControl
}
from './audioControl';
import {
    clipObj
}
from './clip';

import
gameSourceUrl
from './gameSource';

import {
    CharacterImagePainter,
    CharacterRunSpriteSheetPainter,
    CharacterRiseSpriteSheetPainter,
    SceneSprite,
    SceneImagePainter,
    Mario,
    Monster,
    Tortoise,
    Shell,
    Life,
    Over,
    Wall,
    Money,
    Flower,
    BadFlower,
    Mushroom,
    Star,
    Bullet,
    Pipe,
    Final,
    Flag,
    Tower,
    Hole,
    Brick,
    BG
} from './gameSprite';
import {
    judgeMobile
} from './judgeMobile';

import './adaptation';
import {
    controler
} from './control.js';
window.gameControl = new Game('game', element.mycanvas);
gameControl.speed = 1;
//根据不同客户端，区分手机还是pc样式。



let sourceLoadObj = {
    sourceNum: 0,
    currentNum: 0,
    progressbar: new COREHTML5.Progressbar(element.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250),
    loadedCallback: function() {
        let percent = this.currentNum / this.sourceNum * 100;
        this.progressbar.draw(percent);
        if (this.currentNum == this.sourceNum) {
            this.progressOver();
        }
    },
    progressOver: function() {
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
}

//gameSourceUrl来自gameSourceUrl.js
window.gameSourceObj = lib.convertToObject(gameSourceUrl, sourceLoadObj);
window.game = {
    lastKeyListenerTime: 0,
    init: function() {
        let self = this;
        clipObj.init(function() {

            console.log('游戏开始');
            gameControl.gamePause = false;
        }, function() {
            if (drawSpriteList.mario.lifeNum > 0) {
                let num = progressObj.mileageNum > 37 * 174 / 100 ? 37 * 174 / 100 : 0;
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
        "p": false,
    },
    over: function() {
        audioControl.audioPlay(gameSourceObj.audioList.GameOver, gameAudio.GameOver);
        audioControl.BGMPause(gameSourceObj.audioList.BGM);
        drawSpriteList.gameOver.push(new Over({
            name: 'Over'
        }));
    },
    success: function() {
        let success = new Over({
            name: 'Over'
        });
        success.painter.image.src = gameSourceUrl.imageList.gameSuccess;
        drawSpriteList.gameOver.push(success);
    },
    reset: function(num) {
        console.log("reset");
        //时间重置。
        progressObj.totaltime = 300;
        progressObj.countDownWatch.reset();
        progressObj.countDownWatch.start();
        progressObj.mileageNum = num;
        progressObj.createSpriteMileNum = num * gameConfig.objectSpeedRate;
        drawSpriteList.arrayOthersA = [];
        createFactory.arrayTotalProgress.forEach(function(item) {
            if (item.isMonster) {
                item.isAdd = false;
            }
        })
        drawSpriteList.createAnimationSpriteList = [];
        createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);

        drawSpriteList.mario.reset();
        drawSpriteList.statusArr.life.minuteLife(drawSpriteList.mario.lifeNum);
    },
    setScreenPress: function(obj1, obj2, obj3) {
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
    bindEvent: function() {
        //createFactory.createBadflower(300, 0);
        this.reset(0);
        let self = this;
        setInterval(function() {
            createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
        }, 1000);

        let isMobile = judgeMobile();
        if (isMobile) {

            var isMove = true;
            var clearTime = null;
            var bindEventInterval = setInterval(function() {
                self.thrustersCanvas = document.getElementById('controlCanvas');
                if (!!self.thrustersCanvas) {
                    clearInterval(bindEventInterval);
                    console.log("绑定手机事件");
                    self.thrustersCanvas.addEventListener('touchstart', function(e) {
                        controler.result.innerHTML = e.targetTouches.length;
                        e.preventDefault(); // prevent cursor change  
                        controler.drawPressDown(e.targetTouches);
                        controler.draw();
                        self.setScreenPress(self.mapKey, controler.arrowArr, controler.pause);
                    });
                    self.thrustersCanvas.addEventListener('touchend', function(e) {
                        controler.result.innerHTML = e.targetTouches.length;
                        e.preventDefault();
                        controler.drawPressDown(e.targetTouches);
                        controler.draw();
                        self.setScreenPress(self.mapKey, controler.arrowArr, controler.pause);
                        isMove = false;
                        if (clearTime) {
                            clearTimeout(clearTime);
                        }
                    });
                    self.thrustersCanvas.addEventListener('touchmove', function(e) {
                        e.preventDefault();
                        if (isMove) {
                            clearTime = setTimeout(function() {
                                self.drawPressDown(e.targetTouches);
                                self.draw();
                                self.setScreenPress(self.mapKey, controler.arrowArr, controler.pause);
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
            listener: (function() {
                let flag = true; //按下抬起算一次。
                return function(status) {
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
            listener: function(status) {
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
    pause: function() {
        if (drawSpriteList.mario.status == 4) {
            //背景是无敌音乐
            if (gameSourceObj.audioList.WD.paused) {
                gameSourceObj.audioList.WD.play();
            } else {
                gameSourceObj.audioList.WD.pause();
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
    },
    activeEventCallback: function() {
        // if(gameControl.gamePause==true){
        //     return;
        // }
        let time = Date.now();
        let jumpKey = this.mapKey["s"] || this.mapKey["w"]; //按蹦跳键
        let runKey = ((this.mapKey["left"] && !this.mapKey["right"]) || (!this.mapKey["left"] && this.mapKey["right"])); //左右键中，只按了左键或只按了右键
        //只按左键或只按右键(大蹦，小蹦不管)
        if (runKey) {
            createFactory.insertDrawSpriteList(0, drawSpriteList.arrayOthersA);
            if (gameControl.gamePause == true) {
                return;
            }
            gameConfig.setSpeedDefault();
            //如果是左键
            if ((this.mapKey["left"] && !this.mapKey["right"])) {
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
        } else { //如果左右键都不按，或同时按，则背景速度为0
            this.setDirection(0);
        }
        //根据按键设置，马里奥的画笔和行为。
        //分为只按左右键，只按蹦跳键，同时按左键（或右键）和蹦跳键，还有其他不合理按键（例如同时按左右键），和都不按键
        //只要按蹦跳键，则马里奥处于蹦跳状态或者如果不处于蹦跳状态则执行蹦跳动作，所以，蹦跳键的行为大于左右键的行为，因为如果同时按右键和蹦跳键，是处于蹦跳状态的。
        if (jumpKey) { //如果按了蹦跳键
            if (gameControl.gamePause == true) {
                return;
            }
            if (!drawSpriteList.mario.isJump) {
                let status = this.mapKey["s"] ? marioGameConfig.smallJumpV : marioGameConfig.bigJumpV;
                drawSpriteList.mario.jump(status);
            } else {
                drawSpriteList.mario.painter = drawSpriteList.mario.painters.jump;
                drawSpriteList.mario.behaviors = [];
            }
        } else { //没有按蹦跳键
            if (runKey) { //只按了左键或只按右键
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
            } else { //同时按了左键和右键，或者两者都没按
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

        if (this.mapKey['d'] && ((drawSpriteList.mario.status == 4 && drawSpriteList.mario.originalStatus == 3) || drawSpriteList.mario.status == 3) && time - this.advance > 300) {
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

window.SpriteAnimatorEndCallbackList = {
    marioJumpend: function(mario) {
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
    moneyupend: function(sprite) {
        lib.removeByValue(drawSpriteList.createSpriteList, 'id', sprite.id);
        sprite = null;
    },
    brickupend: function(sprite) {
        lib.removeByValue(drawSpriteList.createBrickSpriteList, 'id', sprite.id);
        sprite = null;
    },
    monsterJumpend: function(sprite) {
        if (sprite.isDie == true) {
            lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', sprite.id);
            sprite = null;
            // console.log('移除怪兽');
        }
    }
}


window.drawSpriteList = {
    isSuccess: false,
    success: function() {
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
        success: function() {
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
    goDirection: function(status) {
        this.bg.velocityX = gameConfig.skySpeed * status;
        this.progressObj.velocityX = gameConfig.progressObjSpeed * status;
        this.arrayOthersA.forEach(function(itemDraw) {
            itemDraw.velocityX = gameConfig.objectSpeed * status;
        });
        let createSpriteList = this.createSpriteList;
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
            final: {
                funcName: 'judgeMFianl',
                callback: function() {
                    console.log(33);
                    drawSpriteList.isSuccess = true;
                    gameControl.gamePause = true;
                }
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
            tortoise: {
                funcName: 'judgeMMonster',
            },
            shell: {
                funcName: 'judgeMShell',
            },
            flag: {
                funcName: 'judgeMflag',
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
            badflower: {
                funcName: 'judegMBadFlower'
            },
        },
        cdfunc: function() {
            if (drawSpriteList.isSuccess) {
                return;
            }
            let self = this;
            let arrothers = drawSpriteList.arrayOthersA;
            //设置速度默认值，例如，先设置速度正常,当马里奥被管道水平挡住,速度为0，当反向走时，脱离管道碰撞，速度恢复正常。
            if (gameConfig.gamePause == true) {
                gameConfig.setSpeedZero();
            } else {
                gameConfig.setSpeedDefault();
            }


            //马里奥与墙、管道,固定金币等碰撞
            drawSpriteList.arrayOthersA.forEach(function(itemDraw) {
                let callback = self.config[itemDraw.name].callback || function() {};
                CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback)
            });
            //马里奥与花，弹起的金币等碰撞
            drawSpriteList.createSpriteList.forEach(function(itemDraw) {
                let callback = self.config[itemDraw.name].callback || function() {};
                CD[self.config[itemDraw.name].funcName](drawSpriteList.mario, itemDraw, callback)
            });
            //子弹与障碍物碰撞，（包括与管道和墙的左右碰撞，并不完善（尚未完成），与怪兽的碰撞）
            drawSpriteList.createBulletSpriteList.forEach(function(itemDraw) {
                drawSpriteList.arrayOthersA.forEach(function(barrier) {
                    if (barrier.name == 'wall' || barrier.name == 'pipe') {
                        let callback2 = self.config["bullet"].callback || function() {};
                        CD['judgeBBarrier'](itemDraw, barrier, callback2);
                    }
                    if (barrier.name == 'hole') {
                        CD['judgeBulletHole'](itemDraw, barrier);
                    }
                    if (barrier.name == 'badflower') {
                        CD['judgeBulletBadflower'](itemDraw, barrier);
                    }
                });

                drawSpriteList.createAnimationSpriteList.forEach(function(barrier) {
                    if (barrier.name == 'monster' || barrier.name == 'tortoise' || barrier.name == 'shell') {
                        let callback2 = self.config["bullet"].callback || function() {};
                        CD['judgeBMonster'](itemDraw, barrier, callback2);
                    }

                });
            });
            //蘑菇，怪兽等水平的对象与障碍物（马里奥，管道，墙等）的碰撞
            drawSpriteList.createAnimationSpriteList.forEach(function(mover) {
                let callback = self.config[mover.name].callback || function() {};
                CD[self.config[mover.name].funcName](drawSpriteList.mario, mover, callback);


                //如果蘑菇已经上升完毕，则在判断蘑菇与墙，管道的碰撞效果。//可以整理一下 
                if (!mover.upover && (mover.name == 'mushroom' || mover.name == 'star')) {
                    return;
                } else {
                    if (mover.name == 'shell') { //是乌龟壳且运动中。
                        drawSpriteList.createAnimationSpriteList.forEach(function(mover2) {
                            if (mover2.name == 'monster' || mover2.name == 'tortoise' || mover2.name == 'shell') {
                                if (mover2 != mover) {
                                    CD['judgeShellMover'](mover, mover2);
                                }
                            }
                        });
                    }
                    drawSpriteList.arrayOthersA.forEach(function(barrier) {
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
            drawSpriteList.createAnimationSpriteList.forEach(function(mover, index, arr) {
                if (mover.left + mover.width < 0 || mover.left > element.mycanvasWidth) {
                    lib.removeByValue(arr, 'id', mover.id);
                }

            });
        },
    },
};

gameControl.startAnimate = function(time) {
    //层级分法：从下往上依次为1.背景层，作为游戏的整个背景，放在最底部，2，洞为二层，因为洞两侧有多余部分，所以，不能让多余部分遮挡移动的物体（马里奥，蘑菇等）
    //3.蘑菇，移动的金币，小星星等放在第三层，因为从砖里出来，所以在砖的下一层4.砖，管道等，为第四层，5马里奥为第五层。6碎砖块为第六层。
    gameControl.context.save();
    clipObj.draw();
    drawSpriteList.bg.draw(gameControl.context, time, gameControl.fps.num);

    animateList.countDown(time);

    //绘制第二层（洞）等。 
    // console.log('huizhi2');
    drawSpriteList.arrayOthersA.forEach(function(itemDraw) {
        // console.log('huizhi');
        if (itemDraw.name == 'hole') {
            itemDraw.draw(gameControl.context, time, gameControl.fps.num);
        }

    });
    drawSpriteList.createSpriteList.forEach(function(item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    // drawSpriteList.statusArr.forEach(function(item) {
    //     item.draw(gameControl.context, time, gameControl.fps.num);
    // });
    for (let i in drawSpriteList.statusArr) {
        drawSpriteList.statusArr[i].draw(gameControl.context, time, gameControl.fps.num);
    }

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
        if (itemDraw.name != 'hole') {
            itemDraw.draw(gameControl.context, time, gameControl.fps.num);
        }
    });

    drawSpriteList.mario.draw(gameControl.context, time, gameControl.fps.num);
    drawSpriteList.createBrickSpriteList.forEach(function(item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    drawSpriteList.gameOver.forEach(function(item) {
        item.draw(gameControl.context, time, gameControl.fps.num);
    });
    //碰撞检测
    drawSpriteList.judgeCD.cdfunc();
    gameControl.context.restore();
}
let animateList = {
    //倒计时
    ctx: gameControl.context,
    countDown: function() {
        let strTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss.S").split(' ');
        let can = element.mycanvas;
        let cans = can.getContext('2d');
        cans.font = 'bold 14px arial';
        cans.fillStyle = 'red';
        cans.fillText((gameControl.fps.num >> 0) + 'fps', 50, 20);
        progressObj.mileageNumUpdate(gameControl.fps.num);
        progressObj.countDownNumUpdate();

        cans.fillText("行程:" + ((progressObj.mileageNum / 174 * 100) >> 0) + "m", 400, 20);
        cans.fillText("倒计时:" + (progressObj.currentTime >> 0) + "s", 480, 20);
        // if(progressObj.currentTime<=290){       
        //  drawSpriteList.mario.collisiondie();          
        // }
    },
}
