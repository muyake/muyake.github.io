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
    //context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
}
CharacterRunSpriteSheetPainter.prototype.advance = function(sprite, context) {
    if (this.cellIndex == this.imgcount) {
        this.cellIndex = 0;
    } else {
        this.cellIndex++;
    }
}

var CharacterSpriteAnimator = function(elapsedCallback, sprite) {
    if (elapsedCallback) {
        this.elapsedCallback = elapsedCallback;
    }
    this.sprite = sprite;
    this.isRunning = false;

}
CharacterSpriteAnimator.prototype = Object.create(SpriteAnimator.prototype);
CharacterSpriteAnimator.prototype.end = function(sprite) {
    sprite.animating = false;
    if (this.elapsedCallback) {
        this.elapsedCallback(sprite);
    }
};
CharacterSpriteAnimator.prototype.start = function() {
    this.isRunning = true;
};

CharacterSpriteAnimator.prototype.execute = function() {
    var animator = this;
    if (animator.isRunning) {
        this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
        if (this.sprite.top < this.sprite.initialTop) {
            this.sprite.isJump = true;
            this.sprite.painter = this.sprite.jumpPainter;

        } else {

            this.sprite.top = this.sprite.initialTop;
            this.sprite.isJump = false;
            animator.isRunning = false;
            animator.end(this.sprite); //一定要放到isRunning = false;下面
        }
    }
}

var UpSpriteAnimator=function(elapsedCallback, sprite){
    CharacterSpriteAnimator.call(this,elapsedCallback, sprite);
}
UpSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
UpSpriteAnimator.prototype.constructor = UpSpriteAnimator;
UpSpriteAnimator.prototype.execute=function(){
     var animator = this;
    if (animator.isRunning) {
      //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.top -= this.sprite.velocityY / this.sprite.fpsNum;
        if (this.sprite.top > this.sprite.initialTop) {
            this.sprite.isJump = true;
            this.sprite.painter = this.sprite.jumpPainter;

        } else {
            this.sprite.upover=true;
            this.sprite.top = this.sprite.initialTop;
            this.sprite.isJump = false;
            animator.isRunning = false;
            animator.end(this.sprite); //一定要放到isRunning = false;下面
        }
    }
}

var MoveSpriteAnimator=function(elapsedCallback, sprite){
    CharacterSpriteAnimator.call(this,elapsedCallback, sprite);
}
MoveSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
MoveSpriteAnimator.prototype.constructor = MoveSpriteAnimator;
MoveSpriteAnimator.prototype.execute=function(){
     var animator = this;
    if (animator.isRunning) {
      //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.left -= this.sprite.velocityX / this.sprite.fpsNum; 
        console.log(this.sprite.left);       
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
    this.velocityX = setting.velocityX;
    this.width = setting.width || WH.mario.width;
    this.roleType = 'mairo';
    this.height = setting.height || WH.mario.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - this.physicaltop;
    this.left = this.mycanvas.width / 3 - this.width / 2;
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.isJump = false;
    this.startVelocityY = 0;
    this.jumpPainter = this.painters.jump;
    this.upColliding = null;
    this.initialTop = this.top;
    this.behaviorStatus = {
        runInPlace: new behaviorList.runInPlace(),
    };
    this.painter = this.painters.stand;
    this.marioSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);
};
Mario.prototype = Object.create(Sprite.prototype);
Mario.prototype.constructor = Mario;
Mario.prototype.painters = {
    run: new CharacterRunSpriteSheetPainter(marioConfig.config, gameSourceUrl.imageList.mario.run, element.mycanvas, marioConfig.config.totalCount),
    jump: new CharacterImagePainter(gameSourceUrl.imageList.mario.jump),
    stand: new CharacterImagePainter(gameSourceUrl.imageList.mario.stand),
}
Mario.prototype.jump = function(VY) {
    this.startVelocityY = VY;
    this.velocityY = -this.startVelocityY;
    this.behaviors = [];
    this.marioSpriteAnimatorJump.start();
};
Mario.prototype.run = function() {

};
Mario.prototype.draw = function(ctx, time, fpsNum) {
    this.fpsNum = fpsNum; //给marioSpriteAnimator传递fpsnum
    this.marioSpriteAnimatorJump.execute();
    // //碰撞的向后顺序是先撞墙，再吃金币  l
    this.update(ctx, time, fpsNum);
    this.paint(ctx);
};

var Wall = function(setting) {
    var status = setting.status || 0;
    setting.name = setting.name || 'wall';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.wall), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.wall.width;
    this.id = setting.id || 0;
    this.positionmile = setting.positionmile || 0;
    this.height = setting.height || WH.wall.width;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - this.physicaltop;
    this.left = setting.left || 0;
    this.roleType = 'wall';
    this.contain = setting.contain || 0;
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
    this.wallSpriteAnimatorUp = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.wallUpend, this);
};
Wall.prototype = Object.create(SceneSprite.prototype);
Wall.prototype.draw = function(ctx, time, fpsNum) {
    this.wallSpriteAnimatorUp.execute();
    this.fpsNum = fpsNum;
    this.update(ctx, time, fpsNum);
    this.paint(ctx);
};
Wall.prototype.up = function(VY) { //status为2时，为大蹦，1时为小蹦
    this.startVelocityY = VY;
    this.velocityY = -this.startVelocityY;
    this.wallSpriteAnimatorUp.start();
};
Wall.prototype.changeToAA = function() {
    this.imgwidth = wallConfig.afterabnormalSprite.width;
    this.imgheight = wallConfig.afterabnormalSprite.height;
    this.imgleft = wallConfig.afterabnormalSprite.left;
    this.imgtop = wallConfig.afterabnormalSprite.top;
    this.status = 2;
    var id = this.id;
    var wallList = totalProgressSprite.wall;
    wallList.forEach(function(item) {
        if (item.id == id) {
            item.status = 2;
        }
    })
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
    this.roleType = 'money';
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
    this.startVelocityY = VY;
    this.velocityY = -this.startVelocityY;
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
    this.roleType = 'flower';
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isJump = false; //判断是否为处于上下波动中
    this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.flower);
    this.mycanvas = element.mycanvas;
    this.flowerSpriteAnimatorUp = new UpSpriteAnimator(setting.jumpEndCallback, this);
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
    this.startVelocityY = VY;
    this.initialTop=this.top-WH.wall.height;
    this.velocityY = this.startVelocityY;
    this.flowerSpriteAnimatorUp.start();
};

//flower
var Mushroom = function(setting) {
    setting.name = setting.name || 'mushroom';
    SceneSprite.call(this, setting.name, new SceneImagePainter(gameSourceUrl.imageList.mushroom), [new behaviorList.SpriteLeftToRight()]);
    this.width = setting.width || WH.mushroom.width;
    this.height = setting.height || WH.mushroom.height;
    this.physicaltop = setting.physicaltop || 0;
    this.top = element.mycanvas.height - this.height - gameConfig.roadHeight - setting.physicaltop;
    this.id = setting.id || 0;
    this.left = setting.left || 0;
    this.initvelocityX=0;
   
    this.positionmile = setting.positionmile || 0;
    this.roleType = 'mushroom';
    this.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.initialTop = this.top;
    this.isJump = false; //判断是否为处于上下波动中
    this.jumpPainter = new SceneImagePainter(gameSourceUrl.imageList.mushroom);
    this.mycanvas = element.mycanvas;
    this.mushroomSpriteAnimatorUp = new UpSpriteAnimator(setting.jumpEndCallback, this);
     this.marioSpriteAnimatorJump = new CharacterSpriteAnimator(SpriteAnimatorEndCallbackList.marioJumpend, this);
    this.upover=false;
   
};
Mushroom.prototype = Object.create(SceneSprite.prototype);
Mushroom.prototype.draw = function(ctx, time, fpsNum) {
    this.fpsNum = fpsNum;
    this.mushroomSpriteAnimatorUp.execute();
   this.marioSpriteAnimatorJump.execute();
    this.update(ctx, time, fpsNum);

   // console.log(this.left);
    this.paint(ctx);
}
Mushroom.prototype.up = function(VY) {
    this.startVelocityY = VY;
    this.initialTop=this.top-WH.wall.height;
    this.velocityY = this.startVelocityY;
    this.mushroomSpriteAnimatorUp.start();
};
Mushroom.prototype.jump = function(VY) {
    this.startVelocityY = VY;
    this.velocityY = -this.startVelocityY;
    this.initialTop=this.top-WH.wall.height;   
   //this.top = this.initialTop;
   this.mushroomSpriteAnimatorUp.start();
};
Mushroom.prototype.fall = function(VY) {
    this.startVelocityY = VY;
    this.velocityY = -this.startVelocityY;
  this.initialTop=this.top-WH.wall.height;   
   //this.top = this.initialTop;
   this.marioSpriteAnimatorJump.start();
};
Mushroom.prototype.move = function(VX) {
      this.velocityX=VX;
    this.initvelocityX=VX;
    
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