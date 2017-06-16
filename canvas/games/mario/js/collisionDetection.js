//碰撞检测
var CD = {
    //碰撞函数结果库
    CDFunc: {
        //马里奥不与墙接触时
        MOutW: function(mario, wall) {
            //设置速度正常，因为如果横向遇到墙会设置速度为0,当脱离墙后，设置速度正常。
            if (mario.lrColliding == wall) {
                gameConfig.setSpeedDefault();
                mario.lrColliding = null;
            }
            var upColliding = mario.upColliding;
            //如果马里奥下面没有墙，或马里奥下面有墙，且左右脱离墙。则设置马里奥初始高度。
            //因为要判断马里奥从墙上走下是有蹦跳效果，所以当脱离墙的时刻，会出现下面有墙，且左右脱离墙，当从墙上蹦下来时，设置下面墙为null.
            var flog = mario.upColliding && ((mario.left + mario.width) < upColliding.left || (upColliding.left + upColliding.width) < mario.left);
            if (!mario.upColliding || flog) {
                mario.initialTop = element.mycanvas.height - mario.height - gameConfig.roadHeight;
                //  mario.upColliding = null;
            }
            //如果下方有墙且不是在蹦跳中，则从墙上走下，否则如果在蹦跳中，则 mario.velocityY =0，蹦不起来。
            if (mario.upColliding == wall && !mario.isJump) {
                mario.jump(0);
                mario.isJump = true;
                mario.upColliding = null;
            }
        },
        //马里奥在墙左侧
        MleftW: function(mario, wall) {
            mario.left = wall.left - mario.width;
            gameConfig.setSpeedZero();
            mario.lrColliding = wall;
        },
        //马里奥在墙右侧
        MrightW: function(mario, wall) {
            mario.left = wall.left + wall.width;
            gameConfig.setSpeedZero();
            mario.lrColliding = wall;
        },
        //马里奥在墙上侧
        MupW: function(mario, wall) {
            mario.initialTop = wall.top - mario.height;
            mario.upColliding = wall;
        },
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
            callback();
        }
    },
    //马里奥和普通墙
    judgeMWall: function(mario, wall, callback) {
        if (wall.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < wall.left || (wall.left + wall.width) < mario.left || (mario.top + mario.height) < wall.top || (wall.top + wall.height) < mario.top) {
            this.CDFunc.MOutW(mario, wall);
        } else {
            var standardChangeX = mario.width + wall.width;
            var standardChangeY = mario.height + wall.height;
            var standardChangeSinNum = standardChangeY / Math.sqrt(standardChangeX * standardChangeX + standardChangeY * standardChangeY);
            var changeX = (mario.left + mario.width / 2) - (wall.left + wall.width / 2);
            var changeY = (mario.top + mario.height / 2) - (wall.top + wall.height / 2);
            var sinNum = changeY / Math.sqrt(changeX * changeX + changeY * changeY);
            if (changeX > 0) {
                if (Math.abs(sinNum) < standardChangeSinNum) {
                    // console.log("右侧2");
                    this.CDFunc.MrightW(mario, wall);

                } else if (sinNum > 0) {
                    // console.log("mario在墙的下侧");                   
                    // console.log(wall.name + "下侧2");
                    mario.velocityY = -mario.velocityY;
                    mario.top = wall.top + wall.height + 1;
                    callback();
                    if (!wall.isJump) {
                        //console.log("下侧调2");
                        if (wall.status == 1) {
                            wall.up(60);
                            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
                            createFactory.createMoney(wall.left, wall.top);
                            wall.changeToAA();
                        } else {
                            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.hitwall);
                        }
                    }
                } else {
                    // console.log("上侧2");
                    this.CDFunc.MupW(mario, wall);

                }

            } else {
                if (Math.abs(sinNum) < standardChangeSinNum) {
                    // console.log("左侧1");
                    this.CDFunc.MleftW(mario, wall);

                } else if (sinNum > 0) {
                    //console.log(wall.name + "下侧1");
                    if (!wall.isJump) {
                        //console.log("下侧调1");
                        if (wall.status == 1) {
                            wall.up(60);
                            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
                            createFactory.createMoney(wall.left, wall.top);
                            wall.changeToAA();
                        } else {
                            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.hitwall);
                        }
                    }
                    callback();
                    mario.top = wall.top + wall.height + 1;
                    mario.velocityY = -mario.velocityY;
                } else {
                    //console.log("上侧1");
                    this.CDFunc.MupW(mario, wall);
                }

            }

        }

    },
    judgeMPipe: function(mario, pipe, callback) {
        if (pipe.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < pipe.left || (pipe.left + pipe.width) < mario.left || (mario.top + mario.height) < pipe.top || (pipe.top + pipe.height) < mario.top) {
            gameConfig.setSpeedDefault();
            var upColliding = mario.upColliding;
            var flog = mario.upColliding && ((mario.left + mario.width) < upColliding.left || (upColliding.left + upColliding.width) < mario.left);
            if (!mario.upColliding || flog) {
                mario.initialTop = element.mycanvas.height - mario.height - gameConfig.roadHeight;
                //  mario.upColliding = null;
            }

            //如果下方有墙且不是在蹦跳中，则从墙上走下，否则如果在蹦跳中，则 mario.velocityY =0，蹦不起来。
            if (mario.upColliding == pipe && !mario.isJump) {
                mario.jump(0);
                mario.isJump = true;
                mario.upColliding = null;
            }
            return true
        } else {
            var standardChangeX = mario.width + pipe.width;
            var standardChangeY = mario.height + pipe.height;
            var standardChangeSinNum = standardChangeY / Math.sqrt(standardChangeX * standardChangeX + standardChangeY * standardChangeY);

            var changeX = (mario.left + mario.width / 2) - (pipe.left + pipe.width / 2);
            var changeY = (mario.top + mario.height / 2) - (pipe.top + pipe.height / 2);
            var sinNum = changeY / Math.sqrt(changeX * changeX + changeY * changeY);

            if (changeX > 0) {
                if (Math.abs(sinNum) < standardChangeSinNum) {
                    mario.left = pipe.left + pipe.width;
                    gameConfig.setSpeedZero();
                } else if (sinNum > 0) {
                    // console.log("mario在墙的下侧");
                    // pipe.visible=false;
                    mario.velocityY = -mario.velocityY;
                    if (!pipe.isJump) {
                        pipe.up(60);
                    }
                } else {
                    mario.initialTop = pipe.top - mario.height;
                    mario.upColliding = pipe;
                }

            } else {
                if (Math.abs(sinNum) < standardChangeSinNum) {

                    mario.left = pipe.left - mario.width;
                    gameConfig.setSpeedZero();

                } else if (sinNum > 0) {
                    // console.log("mario在墙的下侧");
                    // pipe.visible=false;
                    if (!pipe.isJump) {
                        pipe.up(60);
                    }
                    mario.velocityY = -mario.velocityY;
                } else {

                    mario.initialTop = pipe.top - mario.height;
                    mario.upColliding = pipe;
                }

            }

        }
    },
}