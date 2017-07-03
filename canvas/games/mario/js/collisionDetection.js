//碰撞检测
var CD = {
    //碰撞函数结果库
    CDFunc: {
        //移动物不与承载物接触时
        MoverOutCarrying: function(mover, carrying) {
            var upColliding = mover.upColliding;
            //如果马里奥下面没有承载物，或马里奥下面有承载物，且左右脱离承载物。则设置马里奥初始高度。
            //因为要判断马里奥从承载物上走下是有蹦跳效果，所以当脱离承载物的时刻，会出现下面有承载物，且左右脱离承载物，当从承载物上蹦下来时，设置下面承载物为null.
            var flog = mover.upColliding && ((mover.left + mover.width) < upColliding.left || (upColliding.left + upColliding.width) < mover.left);
            if (!mover.upColliding || flog) {
                mover.initialTop = element.mycanvas.height - mover.height - gameConfig.roadHeight;
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
        MOutCarrying: function(mario, carrying) {
            var upColliding = mario.upColliding;
            //如果马里奥下面没有承载物，或马里奥下面有承载物，且左右脱离承载物。则设置马里奥初始高度。
            //因为要判断马里奥从承载物上走下是有蹦跳效果，所以当脱离承载物的时刻，会出现下面有承载物，且左右脱离承载物，当从承载物上蹦下来时，设置下面承载物为null.
            var flog = mario.upColliding && ((mario.left + mario.width) < upColliding.left || (upColliding.left + upColliding.width) < mario.left);
            if (!mario.upColliding || flog) {
                mario.initialTop = element.mycanvas.height - mario.height - gameConfig.roadHeight;
                //  mario.upColliding = null;
            }
            //如果下方有承载物且不是在蹦跳中，则从承载物上走下，否则如果在蹦跳中，则 mario.velocityY =0，蹦不起来。
            if (mario.upColliding == carrying && !mario.isJump) {
                mario.jump(0);
                mario.isJump = true;
                mario.upColliding = null;
            }
        },
        //马里奥在阻挡物左侧
        MleftBarrier: function(mario, barrier) {
            mario.left = barrier.left - mario.width;
            gameConfig.setSpeedZero();
            game.setDirection(0);
            mario.lrColliding = barrier;
        },
        //马里奥在阻挡物右侧
        MrightBarrier: function(mario, barrier) {
            mario.left = barrier.left + barrier.width;
            gameConfig.setSpeedZero();
            game.setDirection(0);
            mario.lrColliding = barrier;
        },
        //马里奥在墙上侧
        MupBarrier: function(mario, barrier) {
            mario.initialTop = barrier.top - mario.height;
            mario.upColliding = barrier;
        },
        MdownWall: function(mario, wall, callback) {
            mario.velocityY = -mario.velocityY;
            mario.top = wall.top + wall.height + 1;
            // callback(wall);
            if (!wall.isJump) {
                //console.log("下侧调2");
                if (wall.status == 1) {
                    wall.up(60);
                    switch (wall.contain) {
                        case 1:
                            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
                            createFactory.createUpMoney(wall.positionmile, wall.physicaltop);
                            break;
                        case 2:
                        case 3:
                            {//如果是长大了，就会出花，如果是小人状态，则出蘑菇。
                                audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.flowerup);
                                if (mario.status == 1) {
                                    createFactory.createUpMushroom(wall.positionmile, wall.physicaltop);
                                } else {

                                    createFactory.createUpFlower(wall.positionmile, wall.physicaltop);
                                }
                            }
                            break;
                        case 4:
                        //弹小星星
                            break;
                    }
                    wall.changeToAA();
                } else if (wall.status == 2) {
                    audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.hitwall);
                } else {
                    if (mario.status == 1) {
                        wall.up(60);
                        audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.hitwall);
                    } else {
                        callback(wall);
                        createFactory.createBrick(wall.physicaltop, wall.positionmile);
                        audioControl.audioPlay(gameSourceObj.audioList.music, gameAudio.wallbreak);
                    }
                }
            }
        },
        MoverleftBarrier: function(mover, barrier) {
            mover.left = barrier.left - mover.width;
            mover.velocityX = -mover.velocityX;
            mover.initvelocityX = -mover.initvelocityX;
        },
        MoverrightBarrier: function(mover, barrier) {
            mover.left = barrier.left + mover.width;
            mover.velocityX = -mover.velocityX;
            mover.initvelocityX = -mover.initvelocityX;
        },
        //马里奥在墙上侧
        MoverupBarrier: function(mover, barrier) {
            mover.initialTop = barrier.top - mover.height;
            mover.upColliding = barrier;
        },
        //碰撞中执行的函数,
        Colliding: function(A, B, leftFun, rightFun, downFun, upFun) {
            var standardChangeX = A.width + B.width;
            var standardChangeY = A.height + B.height;
            var standardChangeSinNum = standardChangeY / Math.sqrt(standardChangeX * standardChangeX + standardChangeY * standardChangeY);
            var changeX = (A.left + A.width / 2) - (B.left + B.width / 2);
            var changeY = (A.top + A.height / 2) - (B.top + B.height / 2);
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
                    console.log(B.name + "下侧1");

                } else {
                    //console.log("上侧1");
                    //this.CDFunc.MupBarrier(A, B);
                    upFun();
                }
            }
        }
    },

    //马里奥和金币
    judgeMM: function(mario, money, callback) {
        if (money.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < money.left || (money.left + money.width) < mario.left || (mario.top + mario.height) < money.top || (money.top + money.height) < mario.top) {
            return true
        } else {
            callback(money);
        }
    },
    judgeBBarrier: function(bullet, barrier, callback) {
        if (barrier.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((bullet.left + bullet.width) < barrier.left || (barrier.left + barrier.width) < bullet.left || (bullet.top + bullet.height) < barrier.top || (barrier.top + barrier.height) < bullet.top) {
            return true
        } else {
            callback(bullet);
        }
    },
    judgeMF: function(mario, flower, callback) {
        if (flower.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < flower.left || (flower.left + flower.width) < mario.left || (mario.top + mario.height) < flower.top || (flower.top + flower.height) < mario.top) {
            return true
        } else {
            mario.status=3;
            callback(flower);
        }
    },
    judgeMMR: function(mario, mushroom, callback) {
        if (mushroom.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < mushroom.left || (mushroom.left + mushroom.width) < mario.left || (mario.top + mario.height) < mushroom.top || (mushroom.top + mushroom.height) < mario.top) {
            return true
        } else {
            callback(mushroom);
        }
    },

    //马里奥和普通墙
    judgeMWall: function(mario, wall, callback) {
        if (wall.visible == false) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if ((mario.left + mario.width) < wall.left || (wall.left + wall.width) < mario.left || (mario.top + mario.height) < wall.top || (wall.top + wall.height) < mario.top) {
            this.CDFunc.MOutCarrying(mario, wall);
        } else {
            var leftfun = function() {
                self.CDFunc.MleftBarrier(mario, wall)
            };
            var rightfun = function() {
                self.CDFunc.MrightBarrier(mario, wall)
            };
            var upfun = function() {
                self.CDFunc.MupBarrier(mario, wall)
            };
            var downfun = function() {
                self.CDFunc.MdownWall(mario, wall, callback)
            };
            self.CDFunc.Colliding(mario, wall, leftfun, rightfun, downfun, upfun);
        }

    },

    judgeMPipe: function(mario, pipe, callback) {
        if (pipe.visible == false) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if ((mario.left + mario.width) < pipe.left || (pipe.left + pipe.width) < mario.left || (mario.top + mario.height) < pipe.top || (pipe.top + pipe.height) < mario.top) {
            this.CDFunc.MOutCarrying(mario, pipe);
        } else {
            var leftfun = function() {
                self.CDFunc.MleftBarrier(mario, pipe)
            };
            var rightfun = function() {
                self.CDFunc.MrightBarrier(mario, pipe)
            };
            var upfun = function() {
                self.CDFunc.MupBarrier(mario, pipe)
            };
            var downfun = function() {};
            self.CDFunc.Colliding(mario, pipe, leftfun, rightfun, downfun, upfun);

        }
    },
    //移动物与障碍物
    judgeMoverBarrier: function(mover, barrier, callback) {
        if (barrier.visible == false) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if ((mover.left + mover.width) < barrier.left || (barrier.left + barrier.width) < mover.left || (mover.top + mover.height) < barrier.top || (barrier.top + barrier.height) < mover.top) {
            this.CDFunc.MoverOutCarrying(mover, barrier);
        } else {
            var leftfun = function() {
                self.CDFunc.MoverleftBarrier(mover, barrier)
            };
            var rightfun = function() {
                self.CDFunc.MoverrightBarrier(mover, barrier)
            };
            var upfun = function() {
                self.CDFunc.MoverupBarrier(mover, barrier)
            };
            var downfun = function() {};
            self.CDFunc.Colliding(mover, barrier, leftfun, rightfun, downfun, upfun);

        }
    },
}
