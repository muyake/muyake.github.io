import {SpriteAnimator} from './libs/spriteAnimator'
class CharacterSpriteAnimator extends SpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(undefined,elapsedCallback);
        if (elapsedCallback) {
            this.elapsedCallback = elapsedCallback;
        }
        this.sprite = sprite;
        this.isRunning = false;
    }
    end(sprite) {
        sprite.animating = false;
        if (this.elapsedCallback) {
            this.elapsedCallback(sprite);
        }
    }
    start() {
        this.isRunning = true;
    }

    execute() {
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
}

class UpSpriteAnimator extends CharacterSpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(elapsedCallback, sprite);
    }
    execute() {
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
}

class DownSpriteAnimator extends CharacterSpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(elapsedCallback, sprite);
    }
    execute() {
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
}




class BulletJumpSpriteAnimator extends CharacterSpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(elapsedCallback, sprite);
    }
    execute() {
        let animator = this;
        if (animator.isRunning) {
            if (this.sprite.left + this.sprite.width < 0 || this.sprite.left > this.sprite.mycanvas.width) {
                lib.removeByValue(drawSpriteList.createBulletSpriteList, 'id', this.sprite.id);

            }
            this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE * 2 / this.sprite.fpsNum;
            this.sprite.translateLeft += this.sprite.velocityX / this.sprite.fpsNum;
            this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
            if (this.sprite.top < this.sprite.initialTop) {
                this.sprite.isJump = true;
                // this.sprite.painter = this.sprite.jumpPainter;

            } else {
                this.sprite.top = this.sprite.initialTop;
                //console.log( this.sprite.velocityY);
                this.sprite.velocityY = -200; //如果设置为-this.sprite.velocityY不能保证每次速度是一样的，因为this.sprite.fpsNum在变换。
                // this.sprite.velocityY=-this.sprite.velocityY- this.sprite.GRAVITY_FORCE*2 / this.sprite.fpsNum;           
            }
        }
    }
}


class RiseSpriteAnimator extends CharacterSpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(elapsedCallback, sprite);
    }
    execute() {
        let animator = this;
        if (animator.isRunning) {
            //  this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE / this.sprite.fpsNum;
            this.sprite.height += this.sprite.risespeed / this.sprite.fpsNum;
            let whRate = WH.mario.bigstatus.width / WH.mario.bigstatus.height;
            this.sprite.width += this.sprite.risespeed * whRate / this.sprite.fpsNum;
            this.sprite.top -= this.sprite.risespeed / this.sprite.fpsNum;
            this.sprite.left -= this.sprite.risespeed * whRate / this.sprite.fpsNum / 2;
            if ((this.sprite.risespeed > 0 && this.sprite.height < this.sprite.initialHeight) || (this.sprite.risespeed < 0 && this.sprite.height > this.sprite.initialHeight)) {
                this.sprite.isRising = true;

            } else {
                // this.sprite.upover=true;
                this.sprite.height = this.sprite.initialHeight;
                let whrate = WH.mario.bigstatus.width / WH.mario.bigstatus.height;
                this.sprite.width = this.sprite.initialHeight * whrate;
                this.sprite.isRising = false;
                animator.isRunning = false;
                animator.end(this.sprite); //一定要放到isRunning = false;下面
            }
        }
    }
}

class BrikeSpriteAnimator extends CharacterSpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(elapsedCallback, sprite);
    }
    execute() {
        let animator = this;
        if (animator.isRunning) {
            this.sprite.velocityY = this.sprite.velocityY + this.sprite.GRAVITY_FORCE * 2 / this.sprite.fpsNum;
            this.sprite.translateLeft += this.sprite.velocityX / this.sprite.fpsNum;
            this.sprite.top += this.sprite.velocityY / this.sprite.fpsNum;
            if (this.sprite.top < this.sprite.initialTop) {
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
}


class MoveSpriteAnimator extends CharacterSpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(elapsedCallback, sprite);
    }
    execute() {
        let animator = this;
        if (animator.isRunning) {
            // console.log(this.sprite.translateLeft);
            this.sprite.translateLeft += this.sprite.initvelocityX / this.sprite.fpsNum;
        }
    }
}

class MairoSpriteAnimator extends CharacterSpriteAnimator {
    constructor(elapsedCallback, sprite) {
        super(elapsedCallback, sprite);
    }
    execute() {
        let animator = this;
        if (animator.isRunning) {
            if (-this.sprite.translateLeft < element.mycanvasWidth - 100) {
                this.sprite.translateLeft += this.sprite.initvelocityX / this.sprite.fpsNum;

            } else {
                animator.isRunning = false;
                this.sprite.painter = undefined;
                this.sprite.behaviors = [];
                this.elapsedCallback();
            }

        }
    }
}
