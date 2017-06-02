//所有行为
var behaviorList = {
  moveLeftToRight: function() {
    this.behaviorName = 'moveLeftToRight';
    this.lastMove = 0;
    this.execute = function(sprite, context, time) {
      sprite.left += sprite.velocityX / gameControl.fps.num;
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
    };
    lib.jQueryExtend(defaultSetting, setting);
    this.lastAdvance = defaultSetting.lastAdvance;
    this.velocityY = defaultSetting.velocityY;
    this.isJump = defaultSetting.isJump;
    this.initialTop = defaultSetting.initialTop;
    this.behaviorName = defaultSetting.behaviorName;
    this.execute = function(sprite, context, time) {
      if (this.lastAdvance !== 0) {
        if (this.velocityY < 200) {
          this.velocityY = this.velocityY + publicConfig.GRAVITY_FORCE / gameControl.fps.num;
          sprite.top += this.velocityY / gameControl.fps.num;
          sprite.top = sprite.top < this.initialTop ? sprite.top : this.initialTop;
          this.isJump = true;
        } else {
          this.isJump = false;
          //callback();
          //   console.log("蹦跳结束");
        }
      }
      this.lastAdvance = time;
    }
  },

}