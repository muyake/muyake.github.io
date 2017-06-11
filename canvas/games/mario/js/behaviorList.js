//游戏所有元素的动作对象


//所有行为
var behaviorList = {
    moveLeftToRight: function() {
        this.behaviorName = 'moveLeftToRight';
        this.lastMove = 0;
        this.fpsNum = 60;
        this.execute = function(sprite, context, time, fpsNum) {
            this.fpsNum = (fpsNum == 0) ? 0 : (fpsNum || this.fpsNum);
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
            lastAdvance: 0,
            isJump: false,
         
            behaviorName: 'jump',
            
            jumpOverCallback: function() {

            },
            status: 0, //0是不跳，1是小跳，2是大跳。
        };
        lib.jQueryExtend(defaultSetting, setting);
        this.lastAdvance = defaultSetting.lastAdvance;        
        this.behaviorName = defaultSetting.behaviorName;
      
        this.fpsNum = 60;
        this.status = defaultSetting.status;
        this.jumpOverCallback = defaultSetting.jumpOverCallback;
        this.execute = function(sprite, context, time, fpsNum) {
            if (this.lastAdvance !== 0) {
                if (sprite.velocityY < sprite.startVelocityY) {
                    this.fpsNum = (fpsNum == 0) ? 0 : (fpsNum || this.fpsNum);
                    sprite.velocityY = sprite.velocityY + sprite.GRAVITY_FORCE / this.fpsNum;
                    sprite.top += sprite.velocityY / this.fpsNum;
                    if (sprite.top < sprite.initialTop) {
                        sprite.isJump = true;
                    } else {
                        sprite.top = sprite.initialTop;
                        sprite.isJump = false;
                        this.jumpOverCallback();
                    }
                } else {
                    sprite.isJump = false;
                }
            }
            this.lastAdvance = time;
        }
    },
    

}
