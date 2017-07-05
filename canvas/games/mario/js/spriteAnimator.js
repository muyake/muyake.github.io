
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

var UpSpriteAnimator = function(elapsedCallback, sprite) {
    CharacterSpriteAnimator.call(this, elapsedCallback, sprite);
}
UpSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
UpSpriteAnimator.prototype.constructor = UpSpriteAnimator;
UpSpriteAnimator.prototype.execute = function() {
    var animator = this;
    if (animator.isRunning) {
        //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.top -= this.sprite.velocityY / this.sprite.fpsNum;
        if (this.sprite.top > this.sprite.initialTop) {
            this.sprite.isJump = true;
            this.sprite.painter = this.sprite.jumpPainter;

        } else {
            this.sprite.upover = true;
            this.sprite.top = this.sprite.initialTop;
            this.sprite.isJump = false;
            animator.isRunning = false;
            animator.end(this.sprite); //一定要放到isRunning = false;下面
        }
    }
}

//子弹跳
var BulletJumpSpriteAnimator = function(elapsedCallback, sprite) {
    CharacterSpriteAnimator.call(this, elapsedCallback, sprite);
}
BulletJumpSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
BulletJumpSpriteAnimator.prototype.constructor = BulletJumpSpriteAnimator;
BulletJumpSpriteAnimator.prototype.execute = function() {
    var animator = this;
    if (animator.isRunning) {
      if(this.sprite.left+this.sprite.width<0||this.sprite.left>this.sprite.mycanvas.width){
         lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', this.sprite.id);                 
              
      }
       this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE*2 / this.sprite.fpsNum;
        this.sprite.translateLeft+=this.sprite.velocityX / this.sprite.fpsNum;
        this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
        if (this.sprite.top <this.sprite.initialTop) {
            this.sprite.isJump = true;
            this.sprite.painter = this.sprite.jumpPainter;
            
        } else {
            this.sprite.top =this.sprite.initialTop;
            //console.log( this.sprite.velocityY);
            this.sprite.velocityY=-200;//如果设置为-this.sprite.velocityY不能保证每次速度是一样的，因为this.sprite.fpsNum在变换。
           // this.sprite.velocityY=-this.sprite.velocityY- this.sprite.GRAVITY_FORCE*2 / this.sprite.fpsNum;           
        }  
    }
}

var RiseSpriteAnimator = function(elapsedCallback, sprite) {
    CharacterSpriteAnimator.call(this, elapsedCallback, sprite);
}
RiseSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
RiseSpriteAnimator.prototype.constructor = RiseSpriteAnimator;
RiseSpriteAnimator.prototype.execute = function() {
    var animator = this;
    if (animator.isRunning) {
        //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.height += this.sprite.risespeed / this.sprite.fpsNum;
        var whRate=WH.mario.bigstatus.width / WH.mario.bigstatus.height;
        this.sprite.width += this.sprite.risespeed *whRate / this.sprite.fpsNum;
        this.sprite.top -= this.sprite.risespeed / this.sprite.fpsNum;
        if ((this.sprite.risespeed > 0 && this.sprite.height < this.sprite.initialHeight) || (this.sprite.risespeed < 0 && this.sprite.height > this.sprite.initialHeight)) {
            this.sprite.isRising = true;

        } else {
            // this.sprite.upover=true;
            this.sprite.height = this.sprite.initialHeight;
            var whrate=WH.mario.bigstatus.width / WH.mario.bigstatus.height;
            this.sprite.width = this.sprite.initialHeight *whrate ;
            this.sprite.isRising = false;
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
        this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE*2 / this.sprite.fpsNum;
        this.sprite.translateLeft+=this.sprite.velocityX / this.sprite.fpsNum;
        this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
        if (this.sprite.top <this.sprite.initialTop) {
            this.sprite.isJump = true;
            this.sprite.painter = this.sprite.jumpPainter;

        } else {
            this.sprite.upover = true;
            this.sprite.top = this.sprite.initialTop;
            this.sprite.isJump = false;
            animator.isRunning = false;
            animator.end(this.sprite); //一定要放到isRunning = false;下面
        }       
    }
}

var MoveSpriteAnimator2=function(elapsedCallback, sprite){
    CharacterSpriteAnimator.call(this,elapsedCallback, sprite);
}
MoveSpriteAnimator2.prototype = Object.create(CharacterSpriteAnimator.prototype);
MoveSpriteAnimator2.prototype.constructor = MoveSpriteAnimator2;
MoveSpriteAnimator2.prototype.execute=function(){
     var animator = this;
    if (animator.isRunning) {     
        this.sprite.translateLeft+=this.sprite.initvelocityX / this.sprite.fpsNum;
    }
}