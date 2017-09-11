class Sprite {
    constructor(name, painter, behaviors) {
      
        this.name =name?name:'';
         this.painter = painter||null;
         this.behaviors = behaviors||[];
        return this;
    }
}

let Sprite = function(name, painter, behaviors) {
    if (name !== undefined) {
        this.name = name;
    }
    if (!!painter) {
        this.painter = painter;
    }
    if (!!behaviors) {
        this.behaviors = behaviors;
    } else {
        this.behaviors = [];
    }

    return this;
}
Sprite.prototype = {
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    visible: true,
    velocityX: 0,
    velocityY: 0,
    initialVelocity: 0,
    paint: function(context) {
        if (this.painter !== undefined && this.visible) {
            this.painter.paint(this, context);
        }
    },
    update: function(context, time) {
        for (let i = this.behaviors.length; i > 0; --i) {
            this.behaviors[i - 1].execute(this, context, time);
        }
    }
};


//Character.prototype.
let ImagePainter = function(imageUrl) {
    if (!!imageUrl) {
        this.image = new Image();
        this.image.src = imageUrl;
    }
}
ImagePainter.prototype = {
    paint: function(sprite, context) {
        if (!!this.image) {
            context.drawImage(this.image, sprite.left, sprite.top,
                sprite.width, sprite.height);
        }
    }
}

let GrassImagePainter = function(imageUrl) {
    ImagePainter.call(this, imageUrl);

}

GrassImagePainter.prototype = Object.create(ImagePainter.prototype);


GrassImagePainter.prototype.constructor = GrassImagePainter;
GrassImagePainter.prototype.paint = function(sprite, context) {
    if (!!this.image) {
        context.drawImage(this.image, 0, sprite.top, sprite.width, sprite.height);
        context.drawImage(this.image, sprite.width - 5, sprite.top, sprite.width, sprite.height);
        context.drawImage(this.image, -sprite.width + 5, sprite.top, sprite.width, sprite.height);
    }
};

SpriteSheetPainter = function(cells, spritesheeturl, mycanvas) {
        this.cells = cells || [];
        this.spritesheet = new Image();
        this.spritesheet.src = spritesheeturl;
        this.cellIndex = 0;
        this.mycanvas = mycanvas;
    },

    SpriteSheetPainter.prototype = {
        advance: function() {
            if (this.cellIndex == this.cells.length - 1) {
                this.cellIndex = 0;
            } else {
                this.cellIndex++;
            }
        },
        paint: function(sprite, context) {
            let cell = this.cells[this.cellIndex];
            context.drawImage(this.spritesheet.cell.left, cell.top, cell.width, cell.heightsprite.left, sprite.top, cell.width, cell.height);
        },
    }

let SpriteAnimator = function(painters, elapsedCallback) {
    this.painters = painters;
    if (elapsedCallback) {
        this.elapsedCallback = elapsedCallback;
    }
};
SpriteAnimator.prototype = {
    painters: [],
    duration: 1000,
    startTime: 0,
    index: 0,
    elapsedCallback: undefined,
    end: function(sprite, originalPainter) {
        sprite.animating = false;
        if (this.elapsedCallback) {
            this.elapsedCallback(sprite);
        } else {
            sprite.painter = originalPainter;
        }
    },
    start: function(sprite, duration) {
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



let Behavior = function() {}
Behavior.prototype.execute = function(sprite, context, time) {

}
