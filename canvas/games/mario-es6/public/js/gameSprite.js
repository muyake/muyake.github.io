//游戏所有元素的sprite
let CharacterImagePainter = function(imageUrl) {
    ImagePainter.call(this, imageUrl);
}
CharacterImagePainter.prototype.constructor = CharacterImagePainter;
//角色画笔必须有isReverse属性。
CharacterImagePainter.prototype.paint = function(characterSprite, context, mycanvas) {
    //isReverse代表正。
    if (characterSprite.isReverse) {
        context.drawImage(this.image, characterSprite.left, characterSprite.top, characterSprite.width, characterSprite.height);
    } else {
        //图片的反转。
        let canvas = characterSprite.mycanvas;
        context.translate(canvas.width, 0);
        context.scale(-1, 1)
        context.drawImage(this.image, canvas.width - characterSprite.width - characterSprite.left, characterSprite.top, characterSprite.width, characterSprite.height);
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
    }
};
CharacterRunSpriteSheetPainter = function(cells, spritesheeturl, mycanvas, imgcount) {
    SpriteSheetPainter.call(this, cells, spritesheeturl, mycanvas);
    this.imgcount = imgcount;
}
CharacterRunSpriteSheetPainter.prototype = Object.create(SpriteSheetPainter.prototype);
CharacterRunSpriteSheetPainter.prototype.constructor = CharacterRunSpriteSheetPainter;
CharacterRunSpriteSheetPainter.prototype.paint = function(sprite, context) {
    let cell = this.cells['sprite_' + this.cellIndex];
    if (sprite.isReverse) {
        context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
    } else {
        let canvas = this.mycanvas;
        context.translate(canvas.width, 0);
        context.scale(-1, 1)
        context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, canvas.width - sprite.width - sprite.left, sprite.top, sprite.width, sprite.height);
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
    }
}
CharacterRunSpriteSheetPainter.prototype.advance = function(sprite, context) {
    this.cellIndex++;
    if (this.cellIndex == this.imgcount) {
        this.cellIndex = 0;
    }
}


CharacterRiseSpriteSheetPainter = function(cells, spritesheeturl, mycanvas, imgcount) {
    SpriteSheetPainter.call(this, cells, spritesheeturl, mycanvas);
    this.imgcount = imgcount;
}
CharacterRiseSpriteSheetPainter.prototype = Object.create(SpriteSheetPainter.prototype);
CharacterRiseSpriteSheetPainter.prototype.constructor = CharacterRiseSpriteSheetPainter;
CharacterRiseSpriteSheetPainter.prototype.paint = function(sprite, context) {
    let cell = this.cells['sprite_' + this.cellIndex];
    sprite.width = cell.width * 0.5;
    sprite.height = cell.height * 0.5;
    sprite.top = element.mycanvasHeight - sprite.height - gameConfig.roadHeight - sprite.physicaltop;
    if (sprite.isReverse) {
        context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
    } else {
        let canvas = this.mycanvas;
        context.translate(canvas.width, 0);
        context.scale(-1, 1)
        context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, canvas.width - sprite.width - sprite.left, sprite.top, sprite.width, sprite.height);
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
    }
}
CharacterRiseSpriteSheetPainter.prototype.advance = function(sprite, context) {
    this.cellIndex++;
    if (this.cellIndex == this.imgcount) {
        this.cellIndex = 0;
    }
}



//场景Sprite
let SceneSprite = function(name, painter, behaviors) {
    Sprite.call(this, name, painter, behaviors);
}
SceneSprite.prototype = Object.create(Sprite.prototype);
SceneSprite.prototype.constructor = SceneSprite;
SceneSprite.prototype.update = function(context, time, fpsNum) {
    for (let i = this.behaviors.length; i > 0; --i) {
        this.behaviors[i - 1].execute(this, context, time, fpsNum);
    }
}
let SceneImagePainter = function(imageUrl) {
    ImagePainter.call(this, imageUrl);
}
SceneImagePainter.prototype = {
    paint: function(sprite, context) {
        if (!!this.image) {
            if (sprite.imgwidth) {
                context.drawImage(this.image, sprite.imgleft, sprite.imgtop, sprite.imgwidth, sprite.imgheight, sprite.left, sprite.top,
                    sprite.width, sprite.height);
            } else {
                context.drawImage(this.image, sprite.left, sprite.top,
                    sprite.width, sprite.height);
            }
        }
    }
}


//马里奥对象
let Mario = function(setting) {
    Sprite.call(this, setting.name);
    this.isDie = false;
    this.isReverse = setting.isReverse;
    this.mycanvas = element.mycanvas;
    //this.velocityX = setting.velocityX;
    this.width = setting.width || WH.mario.smallstatus.width;
    // this.roleType = 'mairo';
    this.height = setting.height || WH.mario.smallstatus.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - this.physicaltop;
    this.left = this.mycanvas.width / 3 - this.width / 2;
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE; //重力
    this.isJump = false; //是否在跳中

    this.jumpPainter = this.painters.jump;
    this.upColliding = null; //下面的墙或管道等
    this.risespeed = 0; //长大的速度
    this.initialTop = this.top;
    this.behaviorStatus = {
        runInPlace: new behaviorList.runInPlace(),
    };
    this.lifeNum = 3;
    this.status = 1; //1为小人，2为吃蘑菇长大，3为吃花吐子弹,4为无敌状态。
    this.painter = this.painters.stand;
    this.marioSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);
    this.marioSpriteAnimatorRising = new RiseSpriteAnimator(null, this);
    this.marioSpriteAnimatorMove = new MairoSpriteAnimator(setting.success, this);
    this.initvelocityX = -gameConfig.monsterSpeed;
};
Mario.prototype = Object.create(Sprite.prototype);
Mario.prototype.constructor = Mario;
Mario.prototype.painters = {
    run: new CharacterRunSpriteSheetPainter(marioConfig.config, gameSourceUrl.imageList.mario.commonMairo.run, element.mycanvas, marioConfig.config.totalCount),
    jump: new CharacterImagePainter(gameSourceUrl.imageList.mario.commonMairo.jump),
    stand: new CharacterImagePainter(gameSourceUrl.imageList.mario.commonMairo.stand),
    laqi: new CharacterImagePainter(gameSourceUrl.imageList.mario.commonMairo.laqi),
};
Mario.prototype.setClothes = function(marioStatus) {
    this.painters.run.spritesheet.src = gameSourceUrl.imageList.mario[marioStatus].run;
    this.painters.jump.image.src = gameSourceUrl.imageList.mario[marioStatus].jump;
    this.painters.stand.image.src = gameSourceUrl.imageList.mario[marioStatus].stand;
    this.painters.laqi.image.src = gameSourceUrl.imageList.mario[marioStatus].laqi;
};
Mario.prototype.laqi = function() {
    this.painter = this.painters.laqi;
    this.velocityY = 0;
    this.behaviors = [];
    this.translateLeft = -this.left;
}
Mario.prototype.reset = function() {
    this.isDie = false;
    this.painter = this.painters.stand;
    this.status = 1;
    this.setClothes("commonMairo");
    this.height = WH.mario.smallstatus.height;
    this.width = WH.mario.smallstatus.width;
    //this.painter = this.painters.stand;
    this.initialTop = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - this.physicaltop;
    this.left = this.mycanvas.width / 3 - this.width / 2;
};
Mario.prototype.jump = function(VY) {
    //this.startVelocityY = VY;
    //跳跃声音的产生。
    if (!this.isDie) {
        switch (VY) {
            case marioGameConfig.smallJumpV:
                {
                    console.log(VY);
                    audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
                }
                break;
            case marioGameConfig.bigJumpV:
                {
                    audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
                }
                break;
        }
    }

    //console.log('蹦');
    this.velocityY = -VY;
    this.behaviors = [];
    this.painter = this.jumpPainter;
    this.marioSpriteAnimatorJump.start();
};

Mario.prototype.rise = function(endHeight, status) {
    let self = this;
    if (endHeight > this.height) {
        this.risespeed = 30;

    } else if (endHeight < this.height) {

        this.risespeed = -30;
    } else {
        this.risespeed = 0;
    }
    if (this.status != 4) {
        switch (status) {
            case 1:
            case 2:
                {
                    this.setClothes('commonMairo');
                }
                break;
            case 3:
                {
                    this.setClothes('fireMairo');
                }
                break;
            case 4:
                {
                    this.setClothes('invinciblefireMairo');
                    audioControl.BGMPause(gameSourceObj.audioList.BGM);
                    audioControl.audioPlay(gameSourceObj.audioList.WD, gameAudio.WD);
                    gameSourceObj.audioList.WD.volume = 0.4;
                }
                break;
        }
        this.originalStatus = this.status;
        this.status = status;
    } else {
        //如果是状态4，则只设原始状态为status
        this.originalStatus = status;
    }
    this.status4DuringTime = progressObj.currentTime - 20;
    if (endHeight < this.height) {
        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.changeSmall);
    } else {
        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.growup);
    }

    this.initialHeight = endHeight;
    this.marioSpriteAnimatorRising.start();
};
Mario.prototype.die = function() {
    if (!this.isDie) {
        this.isDie = true;
        this.lifeNum--;
        console.log('die');

        this.initialTop = element.mycanvasHeight + 200;
        if (!this.isJump) {
            this.jump(0);
        }
    }
    audioControl.audioPlay(gameSourceObj.audioList.die, gameAudio.die);
};

Mario.prototype.collisiondie = function() {
    // this.jump(0);
    if (!this.isDie) {
        this.isDie = true;
        this.lifeNum--;
        this.initialTop = element.mycanvasHeight + 200;
        if (!this.isJump) {
            this.jump(marioGameConfig.smallJumpV / 2);
        }
        audioControl.audioPlay(gameSourceObj.audioList.die, gameAudio.die);
    }

};
Mario.prototype.intoTower = function() {
    // this.jump(0);
    this.positionmile = progressObj.createSpriteMileNum;
    this.marioSpriteAnimatorMove.start();
    this.painter = this.painters.run;
    this.behaviors = [this.behaviorStatus.runInPlace, new behaviorList.SpriteLeftToRight()];
    audioControl.BGMPause(gameSourceObj.audioList.BGM);
    audioControl.audioPlay(gameSourceObj.audioList.gamesuccess, gameAudio.gameSuccess);
    //audioControl.audioPlay(gameSourceObj.audioList.die, gameAudio.die);
};
Mario.prototype.draw = function(ctx, time, fpsNum) {
    this.fpsNum = fpsNum; //给marioSpriteAnimator传递fpsnum
    this.marioSpriteAnimatorJump.execute();
    this.marioSpriteAnimatorRising.execute();
    this.marioSpriteAnimatorMove.execute();
    if (this.status == 4 && this.status4DuringTime > progressObj.currentTime) {
        this.status = this.originalStatus;
        console.log("恢复");
        audioControl.BGMPlay(gameSourceObj.audioList.BGM);
        switch (this.status) {
            case 1:
            case 2:
                {
                    this.setClothes('commonMairo');
                }
                break;
            case 3:
                {
                    this.setClothes('fireMairo');
                }
                break;
            case 4:
                {
                    this.setClothes('invinciblefireMairo');
                }
                break;
        }
    }

    // //碰撞的向后顺序是先撞墙，再吃金币  l
    //if (!gameControl.gamePause&&gamesprite) {
    this.update(ctx, time, fpsNum);
    //}


    this.paint(ctx);
};



//怪兽对象
let Monster = function(setting) {
    Sprite.call(this, setting.name);
    this.isDie = false;
    this.isReverse = false;
    this.mycanvas = element.mycanvas;
    this.name = 'monster';
    this.translateLeft = 0;
    this.id = lib.newGuid(),
        //this.velocityX = setting.velocityX;
        this.width = setting.width || WH.monster.width;
    // this.roleType = 'mairo';
    this.height = setting.height || WH.monster.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - this.physicaltop;
    // this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - 100 - WH.wall.height;
    this.left = setting.left || this.mycanvas.width - this.width / 2;
    this.positionmile = setting.positionmile;
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE; //重力
    this.isJump = false; //是否在跳中
    // this.initvelocityX = 70;
    this.initvelocityX = gameConfig.monsterSpeed;
    //this.jumpPainter = this.painters.jump;
    this.upColliding = null; //下面的墙或管道等 
    this.initialTop = this.top;
    this.behaviorStatus = {
        runInPlace: new behaviorList.runInPlace({
            PAGEFLIP_INTERVAL: 100
        }),
    };
    this.behaviors = [this.behaviorStatus.runInPlace, new behaviorList.SpriteLeftToRight()];
    this.status = 1;
    this.painter = this.painters.run;
    this.monsterSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.monsterJumpend, this);
    this.monsterSpriteAnimatorMove = new MoveSpriteAnimator(null, this);
    this.monsterSpriteAnimatorMove.start();
};
Monster.prototype = Object.create(Sprite.prototype);
Monster.prototype.constructor = Monster;
Monster.prototype.painters = {
    run: new CharacterRunSpriteSheetPainter(monsterConfig.config, gameSourceUrl.imageList.monster, element.mycanvas, monsterConfig.config.totalCount),
    collisiondie: new CharacterImagePainter(gameSourceUrl.imageList.monsterDie),
};

Monster.prototype.jump = function(VY) {
    this.velocityY = -VY;
    this.monsterSpriteAnimatorJump.start();
};
Monster.prototype.collisionDie = function() {
    this.initvelocityX = 0;
    this.behaviors = [new behaviorList.SpriteLeftToRight()];
    this.isDie = true;
    audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.monsterdie);
    this.painter = this.painters.collisiondie;
};
Monster.prototype.die = function() {
    this.jump(0);
    this.isDie = true;
};

Monster.prototype.shootDie = function() {
    // this.jump(0);
    if (!this.isDie) {
        this.isDie = true;
        this.behaviors = [this.behaviorStatus.runInPlace];
        this.initialTop = element.mycanvasHeight + 200;
        if (!this.isJump) {
            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.monsterShootDie);
            this.jump(marioGameConfig.smallJumpV / 2);
        }
    }
};
Monster.prototype.draw = function(ctx, time, fpsNum) {
    this.fpsNum = fpsNum; //给monsterSpriteAnimator传递fpsnumbehaviors
    if (!gameControl.gamePause) {
        this.monsterSpriteAnimatorMove.execute();
        this.monsterSpriteAnimatorJump.execute();
        this.update(ctx, time, fpsNum);
    }

    this.paint(ctx);
};

Monster.prototype.fall = function(VY) {
    this.velocityY = -VY;
    console.log('fall');
    this.initialTop = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    this.monsterSpriteAnimatorJump.start();
};



//乌龟对象
let Tortoise = function(setting) {
    Sprite.call(this, setting.name);
    this.isDie = false;
    this.isReverse = true;
    this.id = lib.newGuid(),
        this.mycanvas = element.mycanvas;
    this.name = 'tortoise';
    this.translateLeft = 0;
    //this.velocityX = setting.velocityX;
    this.width = setting.width || WH.tortoise.width;
    // this.roleType = 'mairo';
    this.height = setting.height || WH.tortoise.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    //this.top=element.mycanvasHeight - this.height - gameConfig.roadHeight - 100-WH.wall.height;
    this.left = setting.left || this.mycanvas.width / 2 - this.width / 2;
    this.positionmile = setting.positionmile;
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE; //重力
    this.isJump = false; //是否在跳中
    this.initvelocityX = gameConfig.monsterSpeed;

    this.upColliding = null; //下面的墙或管道等 
    this.initialTop = this.top;
    this.behaviorStatus = {
        runInPlace: new behaviorList.runInPlace({
            PAGEFLIP_INTERVAL: 40
        }),
    };
    this.behaviors = [this.behaviorStatus.runInPlace, new behaviorList.SpriteLeftToRight()];
    // this.status = 1; 
    this.painter = this.painters.run;
    this.tortoiseSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.tortoiseJumpend, this);
    this.tortoiseSpriteAnimatorMove = new MoveSpriteAnimator(null, this);
    this.tortoiseSpriteAnimatorMove.start();
};
Tortoise.prototype = Object.create(Sprite.prototype);
Tortoise.prototype.constructor = Tortoise;
Tortoise.prototype.painters = {
    run: new CharacterRunSpriteSheetPainter(tortoiseConfig.config, gameSourceUrl.imageList.tortoise, element.mycanvas, tortoiseConfig.config.totalCount),
};

Tortoise.prototype.jump = function(VY) {
    this.velocityY = -VY;
    this.tortoiseSpriteAnimatorJump.start();
};

Tortoise.prototype.die = function() {
    this.jump(0);
};
Tortoise.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.fpsNum = fpsNum; //给tortoiseSpriteAnimator传递fpsnumbehaviors
        this.tortoiseSpriteAnimatorMove.execute();
        this.tortoiseSpriteAnimatorJump.execute();
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
};

Tortoise.prototype.fall = function(VY) {
    this.velocityY = -VY;
    this.initialTop = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    this.tortoiseSpriteAnimatorJump.start();
};
Tortoise.prototype.collisionDie = function() {
    this.initvelocityX = 0;
    this.behaviors = [new behaviorList.SpriteLeftToRight()];
    this.isDie = true;
    audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.monsterdie);
    this.painter = this.painters.collisiondie;
};
Tortoise.prototype.shootDie = function() {
    // this.jump(0);
    if (!this.isDie) {
        this.isDie = true;
        this.behaviors = [this.behaviorStatus.runInPlace];
        this.initialTop = element.mycanvasHeight + 200;
        if (!this.isJump) {
            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.monsterShootDie);
            this.jump(marioGameConfig.smallJumpV / 2);
        }
    }
};
//怪兽对象
let Shell = function(setting) {
    Sprite.call(this, setting.name);
    this.isDie = false;
    this.isReverse = true;
    this.id = lib.newGuid(),
        this.mycanvas = element.mycanvas;
    this.name = 'shell';
    this.translateLeft = 0;
    //this.velocityX = setting.velocityX;
    this.width = setting.width || WH.shell.width;
    // this.roleType = 'mairo';
    this.height = setting.height || WH.shell.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    //this.top=element.mycanvasHeight - this.height - gameConfig.roadHeight - 100-WH.wall.height;
    this.left = setting.left;
    this.initvelocityX = 0;
    this.positionmile = this.left + progressObj.createSpriteMileNum;
    this.translateLeft = 0;
    console.log('translateLeft' + this.translateLeft);
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE; //重力
    this.isJump = false; //是否在跳中
    // this.initvelocityX = 70;
    //this.jumpPainter = this.painters.jump;
    this.upColliding = null; //下面的墙或管道等 
    this.initialTop = this.top;
    this.status = 0; //0表示静止状态，1表示欲动状态。
    this.behaviorStatus = {
        runInPlace: new behaviorList.runInPlace({
            PAGEFLIP_INTERVAL: 80
        }),
    };
    //this.behaviors = [this.behaviorStatus.runInPlace, new behaviorList.SpriteLeftToRight()];
    this.behaviors = [new behaviorList.SpriteLeftToRight()];
    //this.status = 1; //1为小人，2为吃蘑菇长大，3为吃花吐子弹,4为无敌状态。
    this.painter = this.painters.run;
    this.shellSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.shellJumpend, this);
    this.shellSpriteAnimatorMove = new MoveSpriteAnimator(null, this);
    this.shellSpriteAnimatorMove.start();
};
Shell.prototype = Object.create(Sprite.prototype);
Shell.prototype.constructor = Shell;
Shell.prototype.painters = {
    run: new CharacterRunSpriteSheetPainter(shellConfig.config, gameSourceUrl.imageList.shell, element.mycanvas, shellConfig.config.totalCount),
};

Shell.prototype.jump = function(VY) {
    this.velocityY = -VY;
    this.shellSpriteAnimatorJump.start();
};
Shell.prototype.shoot = function(vy) {
    this.behaviors = [this.behaviorStatus.runInPlace, new behaviorList.SpriteLeftToRight()];
    this.initvelocityX = vy;
    this.status = 1;
}
Shell.prototype.pause = function() {
    this.behaviors = [new behaviorList.SpriteLeftToRight()];
    this.initvelocityX = 0;
    this.status = 0;
}
Shell.prototype.die = function() {
    this.jump(0);
};
Shell.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        //console.log('draw1'+this.left);
        this.fpsNum = fpsNum; //给shellSpriteAnimator传递fpsnumbehaviors
        this.shellSpriteAnimatorMove.execute();
        this.shellSpriteAnimatorJump.execute();
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
};
Shell.prototype.fall = function(VY) {
    this.velocityY = -VY;
    this.initialTop = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    this.shellSpriteAnimatorJump.start();
};
Shell.prototype.shootDie = function() {
    // this.jump(0);
    if (!this.isDie) {
        this.isDie = true;
        this.behaviors = [this.behaviorStatus.runInPlace];
        this.initialTop = element.mycanvasHeight + 200;
        if (!this.isJump) {
            audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.monsterShootDie);
            this.jump(marioGameConfig.smallJumpV / 2);
        }
    }
};
let Life = function(setting) {
    this.imgwidth = lifeConfig.config.sprite_5.width;
    this.imgheight = lifeConfig.config.sprite_5.height;
    this.imgleft = lifeConfig.config.sprite_5.left;
    this.imgtop = lifeConfig.config.sprite_5.top;
    this.width = WH.life.width;
    this.height = WH.life.height;
    this.top = 5;
    this.left = 580;
    this.status = 5;
    SceneSprite.call(this, setting.name || 'life', new SceneImagePainter(gameSourceUrl.imageList.life));
}
Life.prototype = Object.create(Sprite.prototype);
Life.prototype.minuteLife = function(num) {
    if (num <= 0) {
        num = 1;
    }
    this.imgwidth = lifeConfig.config['sprite_' + num].width;
    this.imgheight = lifeConfig.config['sprite_' + num].height;
    this.imgleft = lifeConfig.config['sprite_' + num].left;
    this.imgtop = lifeConfig.config['sprite_' + num].top;
}

Life.prototype.draw = function(ctx, time, fpsNum) {
    this.paint(ctx);
};

let Over = function(setting) {
    this.width = element.mycanvasWidth;
    this.height = element.mycanvasHeight;
    this.top = 0;
    this.left = 0;
    SceneSprite.call(this, setting.name || 'over', new SceneImagePainter(gameSourceUrl.imageList.gameOver));
}
Over.prototype = Object.create(Sprite.prototype);
Over.prototype.draw = function(ctx, time, fpsNum) {
    this.paint(ctx);
};


let Wall = function(setting) {
    let self = this;
    let status = setting.status || 0;
    //setting.name = setting.name || 'wall';
    SceneSprite.call(this, setting.name || 'wall', new SceneImagePainter(gameSourceUrl.imageList.wall), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.wall.width;
    this.id = setting.id || 0;
    this.positionmile = setting.positionmile || 0;
    this.moneyCount = setting.moneyCount || 0;
    this.height = setting.height || WH.wall.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - this.physicaltop;
    this.left = setting.left || 0;
    // this.roleType = 'wall';
    this.contain = setting.contain || 0; //0代表没有东西,1代表金币，2,3代表蘑菇代表花(先蘑菇后花)，4代表星星
    this.status = status; //0是普通墙，1是问号墙，2是问号被撞后的墙。
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isJump = false; //判断是否为处于上下波动中
    this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.wall);
    switch (status) {
        case 0:
            {
                this.imgwidth = wallConfig.normalSprite.width;
                this.imgheight = wallConfig.normalSprite.height;
                this.imgleft = wallConfig.normalSprite.left;
                this.imgtop = wallConfig.normalSprite.top;
            }
            break;
        case 1:
            {
                this.imgwidth = wallConfig.abnormalwall.width;
                this.imgheight = wallConfig.abnormalwall.height;
                this.imgleft = wallConfig.abnormalwall.left;
                this.imgtop = wallConfig.abnormalwall.top;
                this.mycanvas = element.mycanvas;
            }
            break;
        case 2:
            {
                this.imgwidth = wallConfig.afterabnormalSprite.width;
                this.imgheight = wallConfig.afterabnormalSprite.height;
                this.imgleft = wallConfig.afterabnormalSprite.left;
                this.imgtop = wallConfig.afterabnormalSprite.top;
            }
            break;
    }
    this.mycanvas = element.mycanvas;

    this.wallSpriteAnimatorUp = new CharacterSpriteAnimator(self.jumpend.bind(self), this);
};
Wall.prototype = Object.create(SceneSprite.prototype);
Wall.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.wallSpriteAnimatorUp.execute();
        this.fpsNum = fpsNum;
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
};
Wall.prototype.up = function(VY) { //status为2时，为大蹦，1时为小蹦

    this.velocityY = -VY;
    this.wallSpriteAnimatorUp.start();
};
Wall.prototype.changeToAA = function() {
    this.imgwidth = wallConfig.afterabnormalSprite.width;
    this.imgheight = wallConfig.afterabnormalSprite.height;
    this.imgleft = wallConfig.afterabnormalSprite.left;
    this.imgtop = wallConfig.afterabnormalSprite.top;
    this.status = 2;
    //将墙的状态改为2
    let id = this.id;
    let wallList = totalProgressSprite.wall;
    wallList.forEach(function(item) {
        if (item.id == id) {
            item.status = 2;
        }
    });
};
//墙上下颠簸一下
Wall.prototype.jumpend = function() {
    this.isJump = false;
    this.velocityY = 0;
}

//金币对象
let Money = function(setting) {
    setting.name = setting.name || 'money';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.money), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.money.width;
    this.height = setting.height || WH.money.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;

    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isJump = false; //判断是否为处于上下波动中
    this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.money);
    this.mycanvas = element.mycanvas;
    this.moneySpriteAnimatorUp = new CharacterSpriteAnimator(setting.jumpEndCallback, this);
};
Money.prototype = Object.create(SceneSprite.prototype);
Money.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.fpsNum = fpsNum;
        this.moneySpriteAnimatorUp.execute();
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
}
Money.prototype.up = function(VY) {
    //this.startVelocityY = VY;
    this.velocityY = -VY;
    this.moneySpriteAnimatorUp.start();
};
//flower
let Flower = function(setting) {
    setting.name = setting.name || 'flower';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.flower), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.flower.width;
    this.height = setting.height || WH.flower.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    //  this.roleType = 'flower';
    //this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isJump = false; //判断是否为处于上下波动中
    // this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.flower);
    this.mycanvas = element.mycanvas;
    this.flowerSpriteAnimatorUp = new UpSpriteAnimator(null, this);
};
Flower.prototype = Object.create(SceneSprite.prototype);
Flower.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.fpsNum = fpsNum;
        this.flowerSpriteAnimatorUp.execute();
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
}
Flower.prototype.up = function(VY) {
    // this.startVelocityY = VY;
    this.initialTop = this.top - WH.wall.height;
    this.velocityY = VY;
    this.flowerSpriteAnimatorUp.start();
};

//flower
let BadFlower = function(setting) {
    setting.name = setting.name || 'badflower';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.badflower), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.badflower.width;
    this.height = setting.height || WH.badflower.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.behaviorStatus = {
        upInPlace: new behaviorList.upInPlace({
            PAGEFLIP_INTERVAL: 80
        }),
    };
    this.painter = new CharacterRiseSpriteSheetPainter(badFlowerConfig.config, gameSourceUrl.imageList.badflower, element.mycanvas, badFlowerConfig.config.totalCount);
    this.behaviors = [this.behaviorStatus.upInPlace, new behaviorList.SpriteLeftToRight()];
    //  this.roleType = 'badflower';
    //this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isDie = false;
    this.isJump = false; //判断是否为处于上下波动中
    // this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.badflower);
    this.mycanvas = element.mycanvas;
    this.badflowerSpriteAnimatorUp = new UpSpriteAnimator(null, this);
};
// BadFlower.prototype.painters = {
//     growup: new CharacterRunSpriteSheetPainter(badFlowerConfig.config, gameSourceUrl.imageList.badflower, element.mycanvas, badFlowerConfig.config.totalCount),
// };
BadFlower.prototype = Object.create(SceneSprite.prototype);
BadFlower.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.fpsNum = fpsNum;
        this.badflowerSpriteAnimatorUp.execute();
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
}
BadFlower.prototype.up = function(VY) {
    // this.startVelocityY = VY;
    this.initialTop = this.top - WH.wall.height;
    this.velocityY = VY;
    this.badflowerSpriteAnimatorUp.start();
};
BadFlower.prototype.shootDie = function() {
    // this.jump(0);
    if (!this.isDie) {
        this.isDie = true;
        lib.removeByValue(drawSpriteList.arrayOthersA, 'id', this.id);
        lib.removeByValue(createFactory.arrayTotalProgress, 'id', this.id);
        audioControl.audioPlay(gameSourceObj.audioList.collision, gameAudio.monsterdie);
        this.visible = false;
    }
};


//蘑菇
let Mushroom = function(setting) {
    let self = this;
    setting.name = setting.name || 'mushroom';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.mushroom), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.mushroom.width;
    this.height = setting.height || WH.mushroom.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.initvelocityX = 0;
    this.positionmile = setting.positionmile || 0;
    //this.roleType = 'mushroom';
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isJump = false; //判断是否为处于上下波动中
    //this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.mushroom);
    this.mycanvas = element.mycanvas;
    this.mushroomSpriteAnimatorUp = new UpSpriteAnimator(self.move.bind(self, -50), this);
    this.mushroomSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);
    this.mushroomSpriteAnimatorMove = new MoveSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);
    this.isDie = false;
    this.upover = false;
    this.translateLeft = 0;

};
Mushroom.prototype = Object.create(SceneSprite.prototype);
Mushroom.prototype.draw = function(ctx, time, fpsNum) {
    this.fpsNum = fpsNum;
    if (!gameControl.gamePause) {

        this.mushroomSpriteAnimatorUp.execute();
        this.mushroomSpriteAnimatorJump.execute();
        this.mushroomSpriteAnimatorMove.execute();
        this.update(ctx, time, fpsNum);
    }
    // console.log(this.left);
    this.paint(ctx);
}
Mushroom.prototype.up = function(VY) {
    // this.startVelocityY = VY;
    this.initialTop = this.top - WH.wall.height;
    this.velocityY = VY;
    this.mushroomSpriteAnimatorUp.start();
};

Mushroom.prototype.fall = function(VY) {
    this.velocityY = -VY;
    this.initialTop = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    this.mushroomSpriteAnimatorJump.start();
};
Mushroom.prototype.die = function(VY) {
    this.velocityY = -VY;
    // this.initialTop = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    this.mushroomSpriteAnimatorJump.start();
};
Mushroom.prototype.move = function(VX) {
    this.velocityX = VX;
    this.initvelocityX = VX;
    this.velocityY = 0;
    this.mushroomSpriteAnimatorMove.start();
};

//小星星
let Star = function(setting) {
    setting.name = setting.name || 'star';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.star), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.star.width;
    this.height = setting.height || WH.star.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.translateLeft = 0;
    this.upColliding = null; //下面的墙或管道等
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isDie = false;
    // console.log( this.top);
    this.isJump = false; //判断是否为处于上下波动中
    this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.star);
    this.mycanvas = element.mycanvas;
    this.upover = false;
    this.initvelocityX = 0;
    this.starSpriteAnimatorUp = new CharacterSpriteAnimator(setting.jumpEndCallback.bind(null, this), this);
    this.starSpriteAnimatorMove = new MoveSpriteAnimator(null, this);
};
Star.prototype = Object.create(SceneSprite.prototype);
Star.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.fpsNum = 60;
        this.starSpriteAnimatorUp.execute();
        this.starSpriteAnimatorMove.execute();
        if (this.top < this.initialTop - WH.wall.height) {
            this.upover = true;
        }

        this.update(ctx, time, fpsNum);
    }
    //console.log( this.top);
    this.paint(ctx);
}
Star.prototype.up = function(VY) {
    this.velocityY = -VY;
    this.starSpriteAnimatorUp.start();
};
Star.prototype.move = function(VX) {
    this.velocityX = VX;
    this.initvelocityX = VX;
    this.starSpriteAnimatorMove.start();
};
Star.prototype.fall = function(VY) {
    this.initialTop = this.top - WH.wall.height;
};
Star.prototype.die = function(VY) {
    console.log('星星掉洞里了');
};
//子弹
let Bullet = function(setting) {
    setting.name = setting.name || 'bullet';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.bullet), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.bullet.width;
    this.height = setting.height || WH.bullet.height;
    this.top = setting.top || 0;
    this.isDie = false;
    // console.log(this.top);
    // this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.initvelocityX = 0;
    this.translateLeft = 0;
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'bullet';
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isJump = false; //判断是否为处于上下波动中
    //this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.bullet);
    this.mycanvas = element.mycanvas;
    this.bulletSpriteAnimatorJump = new BulletJumpSpriteAnimator(setting.jumpEndCallback, this);
    this.marioSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);
    this.RV = 480; //旋转角速度
    this.rotate = 0; //旋转角度。
};
Bullet.prototype = Object.create(SceneSprite.prototype);
Bullet.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.fpsNum = fpsNum;
        // console.log(this.left);
        this.bulletSpriteAnimatorJump.execute();
        this.marioSpriteAnimatorJump.execute();

        this.update(ctx, time, fpsNum);
        ctx.save();

        ctx.translate(this.left + this.width / 2, this.top + this.height / 2);
        this.rotate += this.RV / fpsNum;

        ctx.rotate(this.rotate * Math.PI / 180);
    }

    ctx.drawImage(this.painter.image, -this.width / 2, -this.height / 2, this.width, this.height);
    if (!gameControl.gamePause) {
        ctx.restore();
    }
}
Bullet.prototype.jump = function(VX) {

    // this.startVelocityY = 0;
    this.initvelocityX = VX;
    this.velocityX = VX;
    this.velocityY = 0;
    if (this.initvelocityX > 0) {
        this.RV = -bulletConfig.RV;
    } else {
        this.RV = bulletConfig.RV;
    }

    this.initialTop = element.mycanvasHeight - this.height - gameConfig.roadHeight;
    //this.top = this.initialTop;
    this.bulletSpriteAnimatorJump.start();
};
Bullet.prototype.die = function(VY) {
    console.log('子弹掉洞里了');
};

//管道对象
let Pipe = function(setting) {
    setting.name = setting.name || 'pipe';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.pipe), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.pipe.width;;
    this.height = setting.height || WH.pipe.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - this.physicaltop;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'pipe';
    this.id = setting.id || 0;
};
Pipe.prototype = Object.create(SceneSprite.prototype);
Pipe.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        //console.log()
        this.update(ctx, time, fpsNum);

    }
    this.paint(ctx);
}


//旗杆对象
let Final = function(setting) {
    setting.name = setting.name || 'final';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.final), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.final.width;;
    this.height = setting.height || WH.final.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - this.physicaltop;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'final';
    this.id = setting.id || 0;
};
Final.prototype = Object.create(SceneSprite.prototype);
Final.prototype.draw = function(ctx, time, fpsNum) {
        if (!gameControl.gamePause) {
            //console.log()
            this.update(ctx, time, fpsNum);

        }
        this.paint(ctx);
    }
    //旗帜对象
let Flag = function(setting) {
    setting.name = setting.name || 'flag';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.flag), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.flag.width;;
    this.height = setting.height || WH.flag.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - this.physicaltop;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'flag';
    this.id = setting.id || 0;
    this.velocityY = 0;
    this.flowerSpriteAnimatorUp = new DownSpriteAnimator(function() {
        setting.callback()
    }, this);
};
Flag.prototype = Object.create(SceneSprite.prototype);
Flag.prototype.draw = function(ctx, time, fpsNum) {
    //if (!gameControl.gamePause) {
    //console.log()
    this.fpsNum = fpsNum;
    this.flowerSpriteAnimatorUp.execute();
    this.update(ctx, time, fpsNum);
    // }
    this.paint(ctx);
}
Flag.prototype.down = function() {
    // this.startVelocityY = VY;
    this.initialTop = element.mycanvasHeight - 50;
    this.velocityY = 80;
    audioControl.audioPlay(gameSourceObj.audioList.music, gameAudio.downflag);
    this.flowerSpriteAnimatorUp.start();
}

//城堡对象
let Tower = function(setting) {
    setting.name = setting.name || 'tower';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.tower), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.tower.width;;
    this.height = setting.height || WH.tower.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - this.physicaltop;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'tower';
    this.id = setting.id || 0;
    this.isReverse = setting.isReverse;
    this.mycanvas = element.mycanvas;
    this.painter = new CharacterImagePainter(gameSourceUrl.imageList.tower);
};

Tower.prototype = Object.create(SceneSprite.prototype);
Tower.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
}

//洞对象
let Hole = function(setting) {
    setting.name = setting.name || 'hole';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.hole), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.hole.width;;
    this.height = setting.height || WH.hole.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - this.physicaltop;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'hole';
    this.id = setting.id || 0;
};
Hole.prototype = Object.create(SceneSprite.prototype);
Hole.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
}



let Brick = function(setting) {
    setting.name = setting.name || 'brick';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.wall), [new behaviorList.SpriteLeftToRight()]);

    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvasHeight - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'Brick';
    this.status = setting.status || "leftup";
    this.imgwidth = wallConfig[this.status + "Sprite"].width;
    this.imgheight = wallConfig[this.status + "Sprite"].height;
    this.imgleft = wallConfig[this.status + "Sprite"].left;
    this.imgtop = wallConfig[this.status + "Sprite"].top;
    this.width = this.imgwidth * 0.7;
    this.height = this.imgheight * 0.7; //50变35，即width*0.7;

    this.translateLeft = 0;
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isJump = false; //判断是否为处于上下波动中
    //this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.wall);
    this.mycanvas = element.mycanvas;
    this.BrickSpriteAnimatorUp = new BrikeSpriteAnimator(setting.jumpEndCallback, this);
};
Brick.prototype = Object.create(SceneSprite.prototype);
Brick.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.fpsNum = fpsNum;
        this.BrickSpriteAnimatorUp.execute();
        this.update(ctx, time, fpsNum);
    }
    this.paint(ctx);
}
Brick.prototype.up = function() {
    this.initialTop = this.mycanvas.height;
    switch (this.status) {
        case "leftup":
            {
                this.velocityY = -350;
                this.velocityX = 70;
            }
            break;
        case "leftdown":
            {
                this.velocityY = -200;
                this.velocityX = 70;
            }
            break;
        case "rightup":
            {
                this.velocityY = -350;
                this.velocityX = -70;
            }
            break;
        case "rightdown":
            {
                this.velocityY = -200;
                this.velocityX = -70;
            }
            break;
    }

    this.BrickSpriteAnimatorUp.start();
};



//背景
let BG = function(setting) {
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.BG), [new behaviorList.moveLeftToRight()]);
    this.width = setting.width;
    this.height = setting.height;
    this.top = setting.top;
    this.left = setting.left || 0;
};
BG.prototype = Object.create(SceneSprite.prototype);
BG.prototype.draw = function(ctx, time, fpsNum) {
    if (!gameControl.gamePause) {
        this.update(ctx, time, fpsNum);
    }
    let left = this.left;
    if (this.velocityX > 0) {
        left = left < element.mycanvasWidth ? left : 0;
    } else {
        left = left > -element.mycanvasWidth ? left : 0;
    }
    this.left = left;
    this.paint(ctx);
    this.left = left - this.width;
    this.paint(ctx);
    this.left = left + this.width;
    this.paint(ctx);
    this.left = left;
}