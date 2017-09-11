
let CharacterSpriteAnimator = function(elapsedCallback, sprite) {
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
    let animator = this;
    if (animator.isRunning) {
      // console.log(this.sprite.initialTop);
        this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;    
      // console.log(this.sprite.top);
        if (this.sprite.top < this.sprite.initialTop) {
            this.sprite.isJump = true;
            //this.sprite.painter = this.sprite.jumpPainter;
        } else {
            this.sprite.top = this.sprite.initialTop;
            this.sprite.isJump = false;
            animator.isRunning = false;
            animator.end(this.sprite); //一定要放到isRunning = false;下面
        }
    }
}

let UpSpriteAnimator = function(elapsedCallback, sprite) {
    CharacterSpriteAnimator.call(this, elapsedCallback, sprite);
}
UpSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
UpSpriteAnimator.prototype.constructor = UpSpriteAnimator;
UpSpriteAnimator.prototype.execute = function() {
    let animator = this;
    if (animator.isRunning) {
        //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.top -= this.sprite.velocityY / this.sprite.fpsNum;       
        if (this.sprite.top > this.sprite.initialTop) {
            this.sprite.isJump = true;
           // this.sprite.painter = this.sprite.jumpPainter;

        } else {
            this.sprite.upover = true;
            this.sprite.top = this.sprite.initialTop;
            this.sprite.isJump = false;
            animator.isRunning = false;
            animator.end(this.sprite); //一定要放到isRunning = false;下面
        }
    }
}

let DownSpriteAnimator = function(elapsedCallback, sprite) {
    CharacterSpriteAnimator.call(this, elapsedCallback, sprite);
}
DownSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
DownSpriteAnimator.prototype.constructor = UpSpriteAnimator;
DownSpriteAnimator.prototype.execute = function() {
    let animator = this;
    if (animator.isRunning) {
        //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;  
      //  console.log(this.sprite.top)     
        if (this.sprite.top < this.sprite.initialTop) {
            this.sprite.isJump = true;
           // this.sprite.painter = this.sprite.jumpPainter;

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
let BulletJumpSpriteAnimator = function(elapsedCallback, sprite) {
    CharacterSpriteAnimator.call(this, elapsedCallback, sprite);
}
BulletJumpSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
BulletJumpSpriteAnimator.prototype.constructor = BulletJumpSpriteAnimator;
BulletJumpSpriteAnimator.prototype.execute = function() {
    let animator = this;
    if (animator.isRunning) {
      if(this.sprite.left+this.sprite.width<0||this.sprite.left>this.sprite.mycanvas.width){
         lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', this.sprite.id);                 
              
      }
       this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE*2 / this.sprite.fpsNum;
        this.sprite.translateLeft+=this.sprite.velocityX / this.sprite.fpsNum;
        this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
        if (this.sprite.top <this.sprite.initialTop) {
            this.sprite.isJump = true;
           // this.sprite.painter = this.sprite.jumpPainter;
            
        } else {
            this.sprite.top =this.sprite.initialTop;
            //console.log( this.sprite.velocityY);
            this.sprite.velocityY=-200;//如果设置为-this.sprite.velocityY不能保证每次速度是一样的，因为this.sprite.fpsNum在变换。
           // this.sprite.velocityY=-this.sprite.velocityY- this.sprite.GRAVITY_FORCE*2 / this.sprite.fpsNum;           
        }  
    }
}

let RiseSpriteAnimator = function(elapsedCallback, sprite) {
    CharacterSpriteAnimator.call(this, elapsedCallback, sprite);
}
RiseSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
RiseSpriteAnimator.prototype.constructor = RiseSpriteAnimator;
//马里奥长大
RiseSpriteAnimator.prototype.execute = function() {
    let animator = this;
    if (animator.isRunning) {
        //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
        this.sprite.height += this.sprite.risespeed / this.sprite.fpsNum;
        let whRate=WH.mario.bigstatus.width / WH.mario.bigstatus.height;
        this.sprite.width += this.sprite.risespeed *whRate / this.sprite.fpsNum;
        this.sprite.top -= this.sprite.risespeed / this.sprite.fpsNum;
        this.sprite.left -= this.sprite.risespeed *whRate/ this.sprite.fpsNum/2;
        if ((this.sprite.risespeed > 0 && this.sprite.height < this.sprite.initialHeight) || (this.sprite.risespeed < 0 && this.sprite.height > this.sprite.initialHeight)) {
            this.sprite.isRising = true;

        } else {
            // this.sprite.upover=true;
            this.sprite.height = this.sprite.initialHeight;
            let whrate=WH.mario.bigstatus.width / WH.mario.bigstatus.height;
            this.sprite.width = this.sprite.initialHeight *whrate ;
            this.sprite.isRising = false;
            animator.isRunning = false;
            animator.end(this.sprite); //一定要放到isRunning = false;下面
        }
    }
}

//砖的四散。
let BrikeSpriteAnimator=function(elapsedCallback, sprite){
    CharacterSpriteAnimator.call(this,elapsedCallback, sprite);
}
BrikeSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
BrikeSpriteAnimator.prototype.constructor = BrikeSpriteAnimator;
BrikeSpriteAnimator.prototype.execute=function(){
     let animator = this;
    if (animator.isRunning) {
        this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE*2 / this.sprite.fpsNum;
        this.sprite.translateLeft+=this.sprite.velocityX / this.sprite.fpsNum;
        this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
        if (this.sprite.top <this.sprite.initialTop) {
            this.sprite.isJump = true;
            //this.sprite.painter = this.sprite.jumpPainter;

        } else {
            this.sprite.upover = true;
            this.sprite.top = this.sprite.initialTop;
            this.sprite.isJump = false;
            animator.isRunning = false;
            animator.end(this.sprite); //一定要放到isRunning = false;下面
        }       
    }
}
//只有横向移动
let MoveSpriteAnimator=function(elapsedCallback, sprite){
    CharacterSpriteAnimator.call(this,elapsedCallback, sprite);
}
MoveSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
MoveSpriteAnimator.prototype.constructor = MoveSpriteAnimator;
MoveSpriteAnimator.prototype.execute=function(){
     let animator = this;
    if (animator.isRunning) {   
       // console.log(this.sprite.translateLeft);
        this.sprite.translateLeft+=this.sprite.initvelocityX / this.sprite.fpsNum;
    }
}
//只有横向移动
let MairoSpriteAnimator=function(elapsedCallback, sprite){
    CharacterSpriteAnimator.call(this,elapsedCallback, sprite);
}
MairoSpriteAnimator.prototype = Object.create(CharacterSpriteAnimator.prototype);
MairoSpriteAnimator.prototype.constructor = MairoSpriteAnimator;
MairoSpriteAnimator.prototype.execute=function(){
     let animator = this;
    if (animator.isRunning) {   
       if( -this.sprite.translateLeft<element.mycanvasWidth-100){
         this.sprite.translateLeft+=this.sprite.initvelocityX / this.sprite.fpsNum;

     }else{
        animator.isRunning=false;
         this.sprite.painter = undefined;                
         this.sprite.behaviors = [];
        this.elapsedCallback();
     }
       
    }
}
