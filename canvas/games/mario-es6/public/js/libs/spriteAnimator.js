
//这是过程动画，在本游戏中没有用到
class SpriteAnimator {
    constructor(painters=[], elapsedCallback) {
        this.painters = painters;
        if (elapsedCallback) {
            this.elapsedCallback = elapsedCallback;
        }
       // this.painters = [];
        this.duration = 1000;
        this.startTime = 0;
        this.index = 0;
        this.elapsedCallback = undefined;
    }
    
    end(sprite, originalPainter) {
        sprite.animating = false;
        if (this.elapsedCallback) {
            this.elapsedCallback(sprite);
        } else {
            sprite.painter = originalPainter;
        }
    }
    start(sprite, duration) {
        let endTime = +new Date() + duration;
        let periond = duration / (this.painters.length);
        let interval = undefined;
        let animator = this;
        let originalPainter = sprite.painters;
        this.index = 0;
        sprite.animating = true;
        sprite.painter = this.painters[this.index];
        interval = setInterval(function() {
            if (+new Date() < endTime) {
                sprite.painter = animator.painters[++animator.index];

            } else {
                animator.end(sprite, originalPainter);
                clearInterval(interval);
            }
        }, period);
    }
}
export {SpriteAnimator};