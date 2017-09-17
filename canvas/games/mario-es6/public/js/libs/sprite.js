export class Sprite {
    constructor(name = '', painter = null, behaviors = []) {
        this.name = name;
        this.painter = painter
        this.behaviors = behaviors;
        this.left = 0;
        this.top = 0;
        this.width = 10;
        this.height = 10;
        this.visible = true;
        this.velocityX = 0;
        this.velocityY = 0;
        this.initialVelocity = 0;
    }
    paint(context) {
        if (this.painter !== undefined && this.visible) {
            this.painter.paint(this, context);
        }
    }
    update(context, time) {
        for (let i = this.behaviors.length; i > 0; --i) {
            this.behaviors[i - 1].execute(this, context, time);
        }
    }
}
 


