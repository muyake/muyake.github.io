//游戏所有元素的sprite
var CharacterImagePainter = function(imageUrl) {
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
        var canvas = characterSprite.mycanvas;
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
    var cell = this.cells['sprite_' + this.cellIndex];
    if (sprite.isReverse) {
        context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
    } else {
        var canvas = this.mycanvas;
        context.translate(canvas.width, 0);
        context.scale(-1, 1)
        context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, canvas.width - sprite.width - sprite.left, sprite.top, sprite.width, sprite.height);
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
    }
}
CharacterRunSpriteSheetPainter.prototype.advance = function(sprite, context) {
    if (this.cellIndex == this.imgcount) {
        this.cellIndex = 0;
    } else {
        this.cellIndex++;
    }
}

//场景Sprite
var SceneSprite = function(name, painter, behaviors) {
    Sprite.call(this, name, painter, behaviors);
}
SceneSprite.prototype = Object.create(Sprite.prototype);
SceneSprite.prototype.constructor = SceneSprite;
SceneSprite.prototype.update = function(context, time, fpsNum) {
    for (var i = this.behaviors.length; i > 0; --i) {
        this.behaviors[i - 1].execute(this, context, time, fpsNum);
    }
}
var SceneImagePainter = function(imageUrl) {
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
var Mario = function(setting) {
    Sprite.call(this, setting.name);
    this.isReverse = setting.isReverse;
    this.mycanvas = element.mycanvas;
    //this.velocityX = setting.velocityX;
    this.width = setting.width || WH.mario.smallstatus.width;
    // this.roleType = 'mairo';
    this.height = setting.height || WH.mario.smallstatus.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - this.physicaltop;
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
    this.status = 1; //1为小人，2为吃蘑菇长大，3为吃花吐子弹,4为无敌状态。
    this.painter = this.painters.stand;
    this.marioSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);
    this.marioSpriteAnimatorRising = new RiseSpriteAnimator(null, this);

};
Mario.prototype = Object.create(Sprite.prototype);
Mario.prototype.constructor = Mario;
Mario.prototype.painters = {
    run: new CharacterRunSpriteSheetPainter(marioConfig.config, gameSourceUrl.imageList.mario.commonMairo.run, element.mycanvas, marioConfig.config.totalCount),
    jump: new CharacterImagePainter(gameSourceUrl.imageList.mario.commonMairo.jump),
    stand: new CharacterImagePainter(gameSourceUrl.imageList.mario.commonMairo.stand),
};
Mario.prototype.setClothes = function(marioStatus) {
    this.painters.run.spritesheet.src = gameSourceUrl.imageList.mario[marioStatus].run;
    this.painters.jump.image.src = gameSourceUrl.imageList.mario[marioStatus].jump;
    this.painters.stand.image.src = gameSourceUrl.imageList.mario[marioStatus].stand;
};
Mario.prototype.jump = function(VY) {
    //this.startVelocityY = VY;
    //跳跃声音的产生。
    switch (VY) {
        case marioGameConfig.smallJumpV:
            {
                audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
            }
            break;
        case marioGameConfig.bigJumpV:
            {
                audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
            }
            break;
    }

    this.velocityY = -VY;
    this.behaviors = [];
    this.painter = this.jumpPainter;
    this.marioSpriteAnimatorJump.start();
};

Mario.prototype.rise = function(endHeight, status) {
    if (endHeight > this.height) {
        this.risespeed = 30;

    } else if (endHeight < this.height) {

        this.risespeed = -30;
    } else {
        this.risespeed = 0;
    }
    this.status = status;
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
    if (endHeight < this.height) {
        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.changeSmall);
    } else {
        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.growup);
    }
    // switch (endHeight) {
    //     case WH.mario.smallstatus.height:
    //         {
    //             audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.changeSmall);
    //         }
    //         break;
    //     case WH.mario.bigstatus.height:
    //         {
    //             audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.growup);
    //         }
    //         break;
    // }
    this.initialHeight = endHeight;
    this.marioSpriteAnimatorRising.start();
};
Mario.prototype.draw = function(ctx, time, fpsNum) {
    this.fpsNum = fpsNum; //给marioSpriteAnimator传递fpsnum
    this.marioSpriteAnimatorJump.execute();
    this.marioSpriteAnimatorRising.execute();
    // //碰撞的向后顺序是先撞墙，再吃金币  l
    this.update(ctx, time, fpsNum);
    this.paint(ctx);
};

var Wall = function(setting) {
    var self = this;
    var status = setting.status || 0;
    //setting.name = setting.name || 'wall';
    SceneSprite.call(this, setting.name || 'wall', new SceneImagePainter(gameSourceUrl.imageList.wall), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.wall.width;
    this.id = setting.id || 0;
    this.positionmile = setting.positionmile || 0;
    this.height = setting.height || WH.wall.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - this.physicaltop;
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
    this.wallSpriteAnimatorUp.execute();
    this.fpsNum = fpsNum;
    this.update(ctx, time, fpsNum);
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
        var id = this.id;
        var wallList = totalProgressSprite.wall;
        wallList.forEach(function(item) {
            if (item.id == id) {
                item.status = 2;
            }
        });
    }
    //墙上下颠簸一下
Wall.prototype.jumpend = function() {
    this.isJump = false;
    this.velocityY = 0;
}

//金币对象
var Money = function(setting) {
    setting.name = setting.name || 'money';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.money), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.money.width;
    this.height = setting.height || WH.money.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - setting.physicaltop;
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
    this.fpsNum = fpsNum;
    this.moneySpriteAnimatorUp.execute();
    this.update(ctx, time, fpsNum);
    this.paint(ctx);
}
Money.prototype.up = function(VY) {
    //this.startVelocityY = VY;
    this.velocityY = -VY;
    this.moneySpriteAnimatorUp.start();
};
//flower
var Flower = function(setting) {
    setting.name = setting.name || 'flower';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.flower), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.flower.width;
    this.height = setting.height || WH.flower.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - setting.physicaltop;
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
    this.fpsNum = fpsNum;
    this.flowerSpriteAnimatorUp.execute();
    this.update(ctx, time, fpsNum);
    //console.log(this.top);
    this.paint(ctx);
}
Flower.prototype.up = function(VY) {
    // this.startVelocityY = VY;
    this.initialTop = this.top - WH.wall.height;
    this.velocityY = VY;
    this.flowerSpriteAnimatorUp.start();
};

//蘑菇
var Mushroom = function(setting) {
    var self = this;
    setting.name = setting.name || 'mushroom';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.mushroom), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.mushroom.width;
    this.height = setting.height || WH.mushroom.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - setting.physicaltop;
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
    this.marioSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);
    this.marioSpriteAnimatorMove = new MoveSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);

    this.upover = false;
    this.translateLeft = 0;

};
Mushroom.prototype = Object.create(SceneSprite.prototype);
Mushroom.prototype.draw = function(ctx, time, fpsNum) {
    this.fpsNum = fpsNum;
    this.mushroomSpriteAnimatorUp.execute();
    this.marioSpriteAnimatorJump.execute();
    this.marioSpriteAnimatorMove.execute();
    this.update(ctx, time, fpsNum);

    // console.log(this.left);
    this.paint(ctx);
}
Mushroom.prototype.up = function(VY) {
    // this.startVelocityY = VY;
    this.initialTop = this.top - WH.wall.height;
    this.velocityY = VY;
    this.mushroomSpriteAnimatorUp.start();
};
Mushroom.prototype.jump = function(VY) {
    //this.startVelocityY = VY;
    this.velocityY = -VY;
    this.initialTop = this.top - WH.wall.height;
    //this.top = this.initialTop;
    this.marioSpriteAnimatorJump.start();
};
Mushroom.prototype.fall = function(VY) {
    //this.startVelocityY = VY;
    this.velocityY = -VY;
    this.initialTop = this.top - WH.wall.height;

    //this.top = this.initialTop;
    this.marioSpriteAnimatorJump.start();
};
Mushroom.prototype.move = function(VX) {
    this.velocityX = VX;
    this.initvelocityX = VX;
    this.velocityY = 0;
    this.marioSpriteAnimatorMove.start();
};

//小星星
// var Star = function(setting) {
//     var self = this;
//     setting.name = setting.name || 'star';
//     SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.star), [new behaviorList.SpriteLeftToRight()]);
//     this.width = setting.width || WH.star.width;
//     this.height = setting.height || WH.star.height;
//     this.physicaltop = setting.physicaltop || 0;
//     this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - setting.physicaltop;
//     this.id = setting.id || 0;
//     this.left = setting.left || 0;
//     this.initvelocityX = 0;
//     this.positionmile = setting.positionmile || 0;
//     this.roleType = 'star';
//     this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
//     this.initialTop = this.top;
//     this.isJump = false; //判断是否为处于上下波动中
//     //this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.star);
//     this.mycanvas = element.mycanvas;
//     //this.starSpriteAnimatorUp = new UpSpriteAnimator(self.move.bind(self, -50), this);
// this.marioSpriteAnimatorJump = new CharacterSpriteAnimator(function(){}, this);
//     //this.marioSpriteAnimatorMove = new MoveSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);

//     this.upover = false;
//     this.translateLeft = 0;

// };
// Star.prototype = Object.create(SceneSprite.prototype);
// Star.prototype.draw = function(ctx, time, fpsNum) {
//     this.fpsNum = fpsNum;
// //this.starSpriteAnimatorUp.execute();
//     this.marioSpriteAnimatorJump.execute();
//   //  this.marioSpriteAnimatorMove.execute();
//     this.update(ctx, time, fpsNum);

// //console.log(this.top);
//     this.paint(ctx);
// }
// Star.prototype.up = function(VY) {
//     // this.startVelocityY = VY;
//    // this.initialTop = this.top - WH.wall.height;
//     this.velocityY = -VY;
//     this.starSpriteAnimatorUp.start();
// };
// Star.prototype.jump = function(VY) {
//     //this.startVelocityY = VY;
//     this.velocityY = -VY;
//     //this.initialTop = this.top - WH.wall.height;
//     //this.top = this.initialTop;
//     this.marioSpriteAnimatorJump.start();
// };
// Star.prototype.fall = function(VY) {
//     //this.startVelocityY = VY;
//     this.velocityY = -VY;
//     this.initialTop = this.top - WH.wall.height;

//     //this.top = this.initialTop;
//     this.marioSpriteAnimatorJump.start();
// };
// Star.prototype.move = function(VX) {
//     this.velocityX = VX;
//     this.initvelocityX = VX;
//     this.velocityY = 0;
//     this.marioSpriteAnimatorMove.start();
// };
//金币对象
var Star = function(setting) {
    setting.name = setting.name || 'star';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.star), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.star.width;
    this.height = setting.height || WH.star.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.translateLeft = 0;
    this.upColliding = null; //下面的墙或管道等
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
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
    this.fpsNum = 60;
    this.starSpriteAnimatorUp.execute();
    this.starSpriteAnimatorMove.execute();
    if (this.top < this.initialTop - WH.wall.height) {
        this.upover = true;
    }

    this.update(ctx, time, fpsNum);
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
//子弹
var Bullet = function(setting) {
    setting.name = setting.name || 'bullet';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.bullet), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.bullet.width;
    this.height = setting.height || WH.bullet.height;
    this.top = setting.top || 0;
    // console.log(this.top);
    // this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - setting.physicaltop;
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
    this.fpsNum = fpsNum;
    // console.log(this.left);
    this.bulletSpriteAnimatorJump.execute();
    this.marioSpriteAnimatorJump.execute();

    this.update(ctx, time, fpsNum);
    ctx.save();

    ctx.translate(this.left + this.width / 2, this.top + this.height / 2);
    this.rotate += this.RV / fpsNum;
    // console.log(this.rotate);
    ctx.rotate(this.rotate * Math.PI / 180);
    //this.paint(ctx);
    ctx.drawImage(this.painter.image, -this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
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

    this.initialTop = element.mycanvas.height - this.height - gameConfig.roadHeight;
    //this.top = this.initialTop;
    this.bulletSpriteAnimatorJump.start();
};

//管道对象
var Pipe = function(setting) {
    setting.name = setting.name || 'pipe';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.pipe), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.pipe.width;;
    this.height = setting.height || WH.pipe.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - this.physicaltop;
    this.left = setting.left || 0;
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'pipe';
    this.id = setting.id || 0;
};
Pipe.prototype = Object.create(SceneSprite.prototype);
Pipe.prototype.draw = function(ctx, time, fpsNum) {
    this.update(ctx, time, fpsNum);
    this.paint(ctx);
}





var Brick = function(setting) {
    setting.name = setting.name || 'brick';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.wall), [new behaviorList.SpriteLeftToRight()]);

    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - setting.physicaltop;
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
    this.fpsNum = fpsNum;
    this.BrickSpriteAnimatorUp.execute();
    this.update(ctx, time, fpsNum);
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
var BG = function(setting) {
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.BG), [new behaviorList.moveLeftToRight()]);
    this.width = setting.width;
    this.height = setting.height;
    this.top = setting.top;
    this.left = setting.left || 0;
};
BG.prototype = Object.create(SceneSprite.prototype);
BG.prototype.draw = function(ctx, time, fpsNum) {
    this.update(ctx, time, fpsNum);
    var left = this.left;
    if (this.velocityX > 0) {
        left = left < element.mycanvas.width ? left : 0;
    } else {
        left = left > -element.mycanvas.width ? left : 0;
    }
    this.left = left;
    this.paint(ctx);
    this.left = left - this.width;
    this.paint(ctx);
    this.left = left + this.width;
    this.paint(ctx);
    this.left = left;
}
