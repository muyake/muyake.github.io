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
                if (mover.isDie == false) {

                    mover.initialTop = element.mycanvas.height - mover.height - gameConfig.roadHeight;
                    // console.log('玛丽熬'+mover.initialTop);
                }

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
            if ((!mario.upColliding || flog) && !mario.isDie) {
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
                            { //如果是长大了，就会出花，如果是小人状态，则出蘑菇。
                                audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.flowerup);

                                if (mario.status == 1 || (mario.status == 4 && mario.originalStatus == 1)) {
                                    createFactory.createUpMushroom(wall.positionmile, wall.physicaltop);
                                } else {
                                    createFactory.createUpFlower(wall.positionmile, wall.physicaltop);
                                }
                            }
                            break;
                        case 4:
                            //弹小星星
                            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.flowerup);
                            createFactory.createStar(wall.positionmile, wall.physicaltop);
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
                        //大个马里奥将砖顶碎                     
                        wall.visible = false;
                        var id = wall.id;
                        var wallList = totalProgressSprite.wall;
                        wallList.forEach(function(item) {
                            if (item.id == id) {
                                item.isVisible = false;
                            }
                        });
                        console.log(wall.positionmile);
                        createFactory.createBrick(wall.positionmile, wall.physicaltop);
                        audioControl.audioPlay(gameSourceObj.audioList.music, gameAudio.wallbreak);
                    }
                }
            }
        },
        MoverleftBarrier: function(mover, barrier) {
            mover.left = barrier.left - mover.width;
            mover.velocityX = -mover.velocityX;
            mover.initvelocityX = -mover.initvelocityX;
            mover.isReverse = !mover.isReverse;
        },
        MoverrightBarrier: function(mover, barrier) {
            mover.left = barrier.left + mover.width;
            mover.velocityX = -mover.velocityX;
            mover.isReverse = !mover.isReverse;
            mover.initvelocityX = -mover.initvelocityX;
        },
        //马里奥在墙上侧
        MoverupBarrier: function(mover, barrier) {
            mover.initialTop = barrier.top - mover.height;
            mover.upColliding = barrier;
        },
        BulletleftBarrier: function(bullet, barrier) {
            lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', bullet.id);
            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.hitwall);
            bullet = null;
        },
        BulletrightBarrier: function(bullet, barrier) {
            lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', bullet.id);
            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.hitwall);
            bullet = null;
        },
        MairoCollisionMonster: function(mario, monster) {
            console.log('碰撞死亡');
            mario.collision = monster;
            if (mario.status == 1 && mario.height == WH.mario.smallstatus.height) {
                console.log('碰撞死亡222');
                mario.collisiondie();
            } else {
                console.log('碰撞死亡111');
                if (mario.status == 4) {
                    monster.shootDie();
                } else {
                    drawSpriteList.mario.rise(WH.mario.smallstatus.height, 1);
                }

            }

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
                    //console.log(B.name + "下侧1");

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
        //var funCallback = callback || function() {};
        if (money.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < money.left || (money.left + money.width) < mario.left || (mario.top + mario.height) < money.top || (money.top + money.height) < mario.top) {
            return true
        } else {
            callback(money);
            //碰到金币后消失
            money.visible = false;
            var id = money.id;
            var moneyList = totalProgressSprite.money;
            moneyList.forEach(function(item) {
                if (item.id == id) {
                    item.isVisible = false;
                }
            });
            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.eatMoney);
        }
    },
    judgeMH: function(mario, barrier, callback) {
        if (barrier.visible == false) {
            return;
        }
        var self = this;
        if ((mario.left + mario.width) < barrier.left || (barrier.left + barrier.width) < mario.left || (mario.top + mario.height) < barrier.top || (barrier.top + barrier.height) < mario.top) {
            // this.CDFunc.MoverOutCarrying(mario, barrier);
        } else {
            if ((mario.left - 15) > barrier.left && (barrier.left + barrier.width - 15) > (mario.left + mario.width)) {
                // console.log('掉小区');

                mario.die()
                mario.isJump = true;
                mario.upColliding = barrier;
            }
        }

    },
    judgeMoverHole: function(mover, hole, callback) {
        if (hole.visible == false) {
            return;
        }
        //如果蘑菇掉井里了，就消失。
        if (mover.top >= element.mycanvas.height + 200) {
            lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', mover.id);
            mover = null;
            return;
        }
        var self = this;
        if ((mover.left + mover.width) < hole.left || (hole.left + hole.width) < mover.left || (mover.top + mover.height) < hole.top || (hole.top + hole.height) < mover.top) {
            // this.CDFunc.MoverOutCarrying(mover, hole);
        } else {
            if ((mover.left - 15) > hole.left && (hole.left + hole.width - 15) > (mover.left + mover.width)) {
                // console.log('掉小区');

                if (!mover.isDie) {
                    mover.isDie = true;
                    mover.initialTop = element.mycanvas.height + 200;
                    if (!mover.isJump) {
                        mover.die(0);
                        console.log('luo')
                    }
                }
                mover.isJump = true;
                mover.upColliding = hole;

            }
        }
    },
    judgeBulletHole: function(mover, hole, callback) {
        if (hole.visible == false) {
            return;
        }
        //如果蘑菇掉井里了，就消失。
        if (mover.top + mover.width / 3 >= element.mycanvas.height) {
            lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', mover.id);
            mover = null;
            return;
        }
        var self = this;
        if ((mover.left + mover.width) < hole.left || (hole.left + hole.width) < mover.left || (mover.top + mover.height) < hole.top || (hole.top + hole.height) < mover.top) {
            // this.CDFunc.MoverOutCarrying(mover, hole);
        } else {
            if ((mover.left - 15) > hole.left && (hole.left + hole.width - 15) > (mover.left + mover.width)) {
                // console.log('掉小区');

                if (!mover.isDie) {
                    mover.isDie = true;
                    mover.initialTop = element.mycanvas.height + 200;
                    if (!mover.isJump) {
                        mover.die(0);
                        console.log('luo')
                    }
                }
                mover.isJump = true;
                mover.upColliding = hole;

            }
        }
    },
    judgeMMonster: function(mario, monster, callback) {
        if (mario.visible == false && mario.isDie == true) {
            return;
        }
        if (monster.isDie == true) {
            return;
        }
        var self = this;
        //console.log(monster.initialTop);
        // 两个矩形检测
        if ((monster.left + monster.width) < mario.left || (mario.left + mario.width) < monster.left || (monster.top + monster.height) < mario.top || (mario.top + mario.height) < monster.top) {
            // this.CDFunc.MoverOutCarrying(monster, mario);
            if (mario.collision == monster) {
                console.log("取消collision")
                mario.collision = null;
            }

        } else {
            //如果马里奥的已经被碰到了
            if (mario.collision == monster) {
                return;
            }
            var leftfun = function() {
                console.log('leftfun');
                // drawSpriteList.mario.rise(WH.mario.smallstatus.height,1);
                self.CDFunc.MairoCollisionMonster(mario, monster);
            };
            var rightfun = function() {
                console.log('rightfun');
                // drawSpriteList.mario.rise(WH.mario.smallstatus.height,1);
                self.CDFunc.MairoCollisionMonster(mario, monster);
            };
            var upfun = function() {
                console.log('upfun');
                // drawSpriteList.mario.rise(WH.mario.smallstatus.height,1);
                //console.log('踩死');
                self.CDFunc.MairoCollisionMonster(mario, monster);
            };
            var downfun = function() {
                // debugger;

                //  console.log('踩死1');
                if (monster.name == 'monster') {
                    monster.collisionDie();
                }
                if (monster.name == 'tortoise') {
                    console.log('猜到乌龟了');
                    monster.visible = false;
                    monster.isDie = true;
                    var shell = new Shell({ left: monster.left });

                    mario.initialTop = shell.top - mario.height;
                    console.log('设置' + mario.initialTop);
                    mario.upColliding = monster;
                    drawSpriteList.createAnimationSpriteList.push(shell);
                    SpriteAnimatorEndCallbackList.monsterJumpend(monster);

                }
                if (monster.name == 'shell') {
                    console.log('猜到乌龟壳了');
                }

                // self.CDFunc.MairoCollisionMonster(mario,monster);
            };
            if (!mario.isDie && !monster.isDie) {
                self.CDFunc.Colliding(monster, mario, leftfun, rightfun, downfun, upfun);
            }

        }
    },

    judgeMShell: function(mario, shell, callback) {
        if (mario.visible == false && mario.isDie == true) {
            return;
        }

        var self = this;

        // 两个矩形检测
        if ((shell.left + shell.width) < mario.left || (mario.left + mario.width) < shell.left || (shell.top + shell.height) < mario.top || (mario.top + mario.height) < shell.top) {
            this.CDFunc.MOutCarrying(mario, shell);
            mario.collision = null;

        } else {
            //如果马里奥的已经被碰到了
            if (mario.collision == shell) {
                return;
            }
            var leftfun = function() {
                console.log('马里奥从壳的右侧碰撞');
                if (shell.status == 0) {
                    mario.left = shell.left + shell.width;
                    shell.shoot(gameConfig.shellSpeed);
                } else {
                    self.CDFunc.MairoCollisionMonster(mario, shell);
                }
            };
            var rightfun = function() {
                console.log('马里奥从壳的左侧碰撞');
                if (shell.status == 0) {


                    mario.left = shell.left - mario.width;
                    shell.shoot(-gameConfig.shellSpeed);
                } else {
                    self.CDFunc.MairoCollisionMonster(mario, shell);
                }
            };
            var upfun = function() {
                console.log('upfun');


                self.CDFunc.MairoCollisionMonster(mario, shell);
            };
            var downfun = function() {

                console.log('downfun');

                shell.pause();
                mario.upColliding = shell;
                mario.initialTop = shell.top - mario.height;
                //  mario.upColliding=shell;

            };
            if (!mario.isDie && !shell.isDie) {
                self.CDFunc.Colliding(shell, mario, leftfun, rightfun, downfun, upfun);
            }

        }
    },
    judgeShellMover: function(shell, mover) {
        if(mover.isDie||shell.isDie){
            return;
        }
        var self=this;
        if ((shell.left + shell.width) < mover.left || (mover.left + mover.width) < shell.left || (shell.top + shell.height) < mover.top || (mover.top + mover.height) < shell.top) {
            this.CDFunc.MoverOutCarrying(shell, mover);
        } else {
            var leftfun = function() {
               mover.shootDie();
            };
            var rightfun = function() {
                 mover.shootDie();
            };
            var upfun = function() {
                 mover.shootDie();
            };
            var downfun = function() {
                mover.shootDie();
            };
            self.CDFunc.Colliding(shell, mover, leftfun, rightfun, downfun, upfun);
        }
    },
    judgeBBarrier: function(bullet, barrier, callback) {
        if (barrier.visible == false) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if ((bullet.left + bullet.width) < barrier.left || (barrier.left + barrier.width) < bullet.left || (bullet.top + bullet.height) < barrier.top || (barrier.top + barrier.height) < bullet.top) {
            this.CDFunc.MoverOutCarrying(bullet, barrier);
        } else {
            var leftfun = function() {
                self.CDFunc.BulletleftBarrier(bullet, barrier)
            };
            var rightfun = function() {
                self.CDFunc.BulletrightBarrier(bullet, barrier)
            };
            var upfun = function() {
                self.CDFunc.MoverupBarrier(bullet, barrier)
            };
            var downfun = function() {};
            self.CDFunc.Colliding(bullet, barrier, leftfun, rightfun, downfun, upfun);
        }
    },
    judgeBMonster: function(bullet, monster, callback) {
        if (monster.visible == false) {
            return;
        }
        var self = this;
        // 两个矩形检测
        if ((bullet.left + bullet.width) < monster.left || (monster.left + monster.width) < bullet.left || (bullet.top + bullet.height) < monster.top || (monster.top + monster.height) < bullet.top) {
            //this.CDFunc.MoverOutCarrying(bullet, monster);
        } else {
            var leftfun = function() {
                self.CDFunc.BulletleftBarrier(bullet, monster);
                monster.shootDie();
            };
            var rightfun = function() {
                self.CDFunc.BulletrightBarrier(bullet, monster);
                monster.shootDie();
            };
            var upfun = function() {
                self.CDFunc.BulletrightBarrier(bullet, monster);
                monster.shootDie();
            };
            var downfun = function() {
                self.CDFunc.BulletrightBarrier(bullet, monster);
                monster.shootDie();
            };
            self.CDFunc.Colliding(bullet, monster, leftfun, rightfun, downfun, upfun);
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
            //mario.status = 3;

            lib.removeByValue(drawSpriteList.createSpriteList, 'id', flower.id);
            audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.growup);
            drawSpriteList.mario.rise(WH.mario.bigstatus.height, 3);
            flower = null;
            //callback(flower);
        }
    },
    judgeMS: function(mario, star, callback) {
        if (star.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < star.left || (star.left + star.width) < mario.left || (mario.top + mario.height) < star.top || (star.top + star.height) < mario.top) {
            return true
        } else {
            // callback(star);
            lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', star.id);
            drawSpriteList.mario.rise(drawSpriteList.mario.height, 4);
            star = null;
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
            // callback(mushroom);
            lib.removeByValue(drawSpriteList.createAnimationSpriteList, 'id', mushroom.id);
            drawSpriteList.mario.rise(WH.mario.bigstatus.height, 2);
            mushroom = null;
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

    judgeMTower: function(mario, pipe, callback) {
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
    judgeMoverBarrier: function(mover, barrier) {
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
