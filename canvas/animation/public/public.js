var curveFunction = {
  linear: function(time, startValue, changeValue, duration) {
    return changeValue * time / duration + startValue;
  },
  sineEaseOut: function(t, b, c, d) {
    var _HALF_PI = Math.PI / 2;
    return c * Math.sin(t / d * _HALF_PI) + b;
  }
}

function loadImg(e, callback, images) {
  var loadedImages = 0;
  var numImages = 0;
  for (var src in e) {
    numImages++;
  }
  for (var src in e) {
    images[src] = new Image();
    images[src].onload = function() {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = e[src];
  }
}

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
  visible: true,
  animating: false,
  alpha: 1,
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

var ImagePainter = function(imageObj, imgX, imgY, imgW, imgH) {
  this.image = imageObj;
  this.imgX = imgX;
  this.imgY = imgY;
  this.imgW = imgW;
  this.imgH = imgH;
};

ImagePainter.prototype = {
  image: undefined,
  paint: function(sprite, context) {
    context.drawImage(this.image, this.imgX, this.imgY, this.imgW, this.imgH, sprite.left, sprite.top,
      sprite.width, sprite.height);
  }
};
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

// 生成一个min,max大小之间的随机数
function generateRandom(min, max) {
  return Math.random() * (max - min) + min;
}