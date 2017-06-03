
//游戏所有元素的动作对象


//所有行为
var behaviorList = {
  moveLeftToRight: function() {
    this.behaviorName = 'moveLeftToRight';
    this.lastMove = 0;
    this.fpsNum=60;
    this.execute = function(sprite, context, time,fpsNum) {
     this.fpsNum=(fpsNum==0)?0:(fpsNum||this.fpsNum);
      sprite.left += sprite.velocityX / this.fpsNum;
      this.lastMove = time;
    }
  },
  //小人跑动动画
  runInPlace: function(setting) {
    var defaultSetting = {
      lastAdvance: 0,
      PAGEFLIP_INTERVAL: 30,
      behaviorNam: 'runInPlace',
    };
    lib.jQueryExtend(defaultSetting, setting);
    this.lastAdvance = defaultSetting.lastAdvance;
    this.PAGEFLIP_INTERVAL = defaultSetting.PAGEFLIP_INTERVAL;
    this.behaviorNam = defaultSetting.behaviorNam;
    this.execute = function(sprite, context, time) {
      if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
        sprite.painter.advance(sprite);
        this.lastAdvance = time;
      }
    }
  },
  //小人跳动
  jump: function(setting) {
    var defaultSetting = {
      velocityY: 0,
      lastAdvance: 0,
      isJump: false,
      initialTop: 0,
      behaviorName: 'jump',
      GRAVITY_FORCE:9.8,
    };
    lib.jQueryExtend(defaultSetting, setting);
    this.lastAdvance = defaultSetting.lastAdvance;
    this.velocityY = defaultSetting.velocityY;
    this.isJump = defaultSetting.isJump;
    this.initialTop = defaultSetting.initialTop;
    this.behaviorName = defaultSetting.behaviorName;
    this.GRAVITY_FORCE=defaultSetting.GRAVITY_FORCE;
    this.fpsNum=60;
    this.execute = function(sprite, context, time,fpsNum) {
      if (this.lastAdvance !== 0) {
        if (this.velocityY < 200) {
            this.fpsNum=(fpsNum==0)?0:(fpsNum||this.fpsNum);
          this.velocityY = this.velocityY + this.GRAVITY_FORCE / gameControl.fps.num;
          sprite.top += this.velocityY / this.fpsNum;          
          if (sprite.top < this.initialTop) {
            this.isJump = true;
          } else {
            sprite.top = this.initialTop;
          }
        } else {
          this.isJump = false;        
        }
      }
      this.lastAdvance = time;
    }
  },

}