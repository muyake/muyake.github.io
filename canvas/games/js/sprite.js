//精灵对象
var Sprite = function(name, painter, behaviors) {
  if (name !== undefined) this.name = name;
  if (painter !== undefined) this.painter = painter;
  if (behaviors !== undefined) this.behaviors = behaviors;
  return this;
};

Sprite.prototype = {
  left: 0,
  top: 0,
  width: 10,
  height: 10,
  velocityX: 0,
  velocityY: 0,
  speed: 1,
  visible: true,
  animating: false,
  painter: undefined, // object with paint(sprite, context)
  behaviors: [], // objects with execute(sprite, context, time)

  paint: function(context) {
    if (this.painter !== undefined && this.visible) {
      this.painter.paint(this, context);
    }
  },

  update: function(context, time) {
    for (var i = this.behaviors.length; i > 0; --i) {
      this.behaviors[i - 1].execute(this, context, time);
    }
  }
};

//精灵绘制器
var ImagePainter = function(imageUrl) {
  this.image = new Image;
  this.image.src = imageUrl;
};

ImagePainter.prototype = {
  image: undefined,

  paint: function(sprite, context) {
    if (this.image !== undefined) {
      if (!this.image.complete) {
        this.image.onload = function(e) {
          sprite.width = this.width;
          sprite.height = this.height;
          context.drawImage(this, // this is image
            sprite.left, sprite.top,
            sprite.width, sprite.height);
        };
      } else {
        context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
        //图片翻转
        // context.translate(canvas.width, 0);
        // context.scale(-1, 1)
        // context.drawImage(this.image, w - sprite.width - sprite.left, sprite.top, sprite.width, sprite.height);
        // context.translate(canvas.width, 0);
        // context.scale(-1, 1);
      }
    }
  }
};

SpriteSheetPainter = function(cells, spritesheet, isReverse) {
  this.cells = cells;
  this.spritesheet = spritesheet;
  this.isReverse = isReverse;
};

//小人动画
SpriteSheetPainter.prototype = {
  cells: [],
  cellIndex: 0,
  isReverse: true,
  advance: function() {
    if (this.cellIndex == this.cells.length - 1) {
      this.cellIndex = 0;
    } else {
      this.cellIndex++;
    }
  },
  paint: function(sprite, context) {
    var cell = this.cells[this.cellIndex];
    if (this.isReverse) {
      context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, cell.width * 2, cell.height * 2);

    } else {
      context.translate(canvas.width, 0);
      context.scale(-1, 1)
      context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, canvas.width - sprite.width * 2 - sprite.left, sprite.top, cell.width * 2, cell.height * 2);
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    }

  }
}

// Sprite Animators...........................................................

// Sprite animators have an array of painters that they succesively apply
// to a sprite over a period of time. Animators can be started with 
// start(sprite, durationInMillis, restoreSprite)

var SpriteAnimator = function(painters, elapsedCallback) {
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
    var endTime = +new Date() + duration,
      period = duration / (this.painters.length),
      interval = undefined,
      animator = this, // for setInterval() function
      originalPainter = sprite.painter;

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
  },
};