var sourceLoadObj = {
  sourceNum: 0,
  currentNum: 0,
  progressbar: new COREHTML5.Progressbar(element.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250),
  loadedCallback: function() {
    var percent = this.currentNum / this.sourceNum * 100;
    this.progressbar.draw(percent);
    if (this.currentNum == this.sourceNum) {
      this.progressOver();
    }
  },
  progressOver: function() {
    element.mycanvas.style.display = 'block';
    element.progressDiv.style.display = 'none';
    element.tipDiv.style.display = 'block';
    //加载图片完成后执行。
    game.init();
    spriteList.spriteInit();
    gameControl.start();
    progressObj.countDownStart();
    //背景音乐响起     
    audioControl.BGMPlay(gameSourceObj.audioList.BGM);
    gameSourceObj.audioList.jumpAll.addEventListener('timeupdate', function() {
      if (this.currentTime > this.endTime) {
        this.pause();
      }
    }, false);

  }
}

//gameSourceUrl来自gameSourceUrl.js
var gameSourceObj = lib.convertToObject(gameSourceUrl, sourceLoadObj);



var game = {
  lastKeyListenerTime: 0,
  init: function() {
    var self = this;
    this.bindEvent();
  },
  mapKey: {
    "left": false, //left
    "right": false, //right
    "s": false,
    "w": false,
    "space": false
  },
  bindEvent: function() {
    var self = this;
    document.querySelector('#smallBtn').addEventListener('click', function() {
      if (!spriteList.peopleSprite.isJump) { // throttle      
        spriteList.peopleSprite.jump(2);
      }
    }, false);

    document.querySelector('#bigBtn').addEventListener('click', function() {
      audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.bigJump);
    }, false);


    // Key Listeners..............................................
    gameControl.addKeyListener({
      key: 'p',
      listener: (function() {
        var flag = true; //按下抬起算一次。
        return function(status) {
          // alert(key);
          if (status == 1 && flag) {
            if (gameSourceObj.audioList.BGM.paused) {
              audioControl.BGMPlay(gameSourceObj.audioList.BGM);
            } else {
              audioControl.BGMPause(gameSourceObj.audioList.BGM);
            }
            gameControl.togglePaused();
            if (progressObj.countDownWatch.isRunning()) {
              progressObj.countDownPause();
            } else {
              progressObj.countDownStart();
            }

            flag = false;
          } else if (status == 0) {
            flag = true;
          }
        }
      })(),
    });
    gameControl.addKeyListener({
      key: 's',
      listener: function(status) {
        if (status == 1) {
          self.mapKey['s'] = true;
          if (!spriteList.peopleSprite.isJump && !gameControl.paused) {
            audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.smallJump);
            if (!spriteList.peopleSprite.isJump) { // throttle      
              spriteList.peopleSprite.jump(1);
            }
          }
        } else {
          self.mapKey['s'] = false;
        }
        game.activeEventCallback();
      }
    });
    gameControl.addKeyListener({
      key: 'w',
      listener: function(status) {
        if (status == 1) {
          self.mapKey['w'] = true;
          if (!spriteList.peopleSprite.isJump && !gameControl.paused) {
            if (!spriteList.peopleSprite.isJump) { // throttle      
              spriteList.peopleSprite.jump(2);
            }
          }
        } else {
          self.mapKey['w'] = false;
        }
        game.activeEventCallback();
      }
    });
    gameControl.addKeyListener({
      key: 'right',
      listener: function(status) {
        if (status == 1) {
          self.mapKey['right'] = true;
        } else {
          self.mapKey['right'] = false;
        }
        game.activeEventCallback();
      }
    });
    gameControl.addKeyListener({
      key: 'left',
      listener: function(status) {
        if (status == 1) {
          self.mapKey['left'] = true;
        } else {
          self.mapKey['left'] = false;
        }
        game.activeEventCallback();
      }
    });
  },
  activeEventCallback: function(time) {
    //  var now = +new Date();
    var jumpKey = this.mapKey["s"] || this.mapKey["w"];
    if (((this.mapKey["left"] && !this.mapKey["right"]) || (!this.mapKey["left"] && this.mapKey["right"]))) {
      if ((this.mapKey["left"] && !this.mapKey["right"])) {
        game.setDirection(-1);
        spriteList.peopleSprite.isReverse = false;
        // console.log("按左键");    
      } else {
        // console.log("按右键");
        spriteList.peopleSprite.isReverse = true;
        game.setDirection(1);
      }
      // game.lastKeyListenerTime = now;
      if (spriteList.peopleSprite.isJump) {
        spriteList.peopleSprite.behaviors = [];
      } else {
        spriteList.peopleSprite.painter = peoplePainter.run;
        spriteList.peopleSprite.behaviors = [spriteList.peopleSprite.behaviorStatus.runInPlace];
      }
    }
    if (jumpKey && !spriteList.peopleSprite.isJump) {
      var status = this.mapKey["s"] ? 1 : 2;
      spriteList.peopleSprite.jump(status);
    } else {
      if ((game.mapKey["left"] && !game.mapKey["right"]) || (!game.mapKey["left"] && game.mapKey["right"])) {
        spriteList.peopleSprite.painter = peoplePainter.run;
      } else {
        spriteList.peopleSprite.painter = peoplePainter.stand;
      }
    }



    // console.log("按右键和空格键或按左键和空格键或按只空格键");       
    if ((!this.mapKey["left"] && !this.mapKey["right"]) || (this.mapKey["left"] && this.mapKey["right"])) {
      // console.log('不按键或左右都按');
      game.setDirection(0);

      if (spriteList.peopleSprite.isJump) {
        spriteList.peopleSprite.painter = peoplePainter.jump;
      } else {
        spriteList.peopleSprite.painter = peoplePainter.stand;

      }
      spriteList.peopleSprite.behaviors = [];
    }
  },
  setDirection: function(status) {
    switch (status) {
      case 0:
        {
          spriteList.skySprite.velocityX = 0;
          spriteList.normalwall.velocityX = 0;
          progressObj.velocityX = 0;
        }
        break;
      case 1:
        {
          spriteList.skySprite.velocityX = -spriteList.skySprite.initialVelocitX;
          spriteList.normalwall.velocityX = -spriteList.normalwall.initialVelocitX;
          progressObj.velocityX = -progressObj.initialVelocitX;
        }
        break;
      case -1:
        {
          spriteList.skySprite.velocityX = spriteList.skySprite.initialVelocitX;
          spriteList.normalwall.velocityX = spriteList.normalwall.initialVelocitX;
          progressObj.velocityX = progressObj.initialVelocitX;
        }
        break;
    }
  }
};

var gameControl = new Game('game', 'mycanvas');
gameControl.speed = 1;
gameControl.startAnimate = function(time) {
  //game.activeEventCallback(time);
  animateList.drawSkySingle(time);
  animateList.drawWall(time);
  SpriteAnimatorList.marioSpriteAnimatorJump.execute();
  animateList.drawPeople(gameControl.context, time);
  animateList.countDown(time);
}

var peoplePainter = {
  run: new PeopleRunSpriteSheetPainter(mario.config, gameSourceUrl.imageList.mario.run, element.mycanvas, mario.config.totalCount),
  jump: new CharacterImagePainter(gameSourceUrl.imageList.mario.jump),
  stand: new CharacterImagePainter(gameSourceUrl.imageList.mario.stand),
};



var spriteList = {
  skySprite: new SceneSprite('sky2', new ImagePainter(gameSourceUrl.imageList.BG), [new behaviorList.moveLeftToRight()]),
  normalwall: new SceneSprite('wall', new ImagePainter(gameSourceUrl.imageList.wall.normalwall), [new behaviorList.moveLeftToRight()]),
  peopleSprite: new Character('mario', peoplePainter.stand, [], true, element.mycanvas),
  spriteInit: function() {
    this.skySprite.width = element.mycanvas.width;
    this.skySprite.height = element.mycanvas.height + element.mycanvas.height * 0.02;
    this.skySprite.initialVelocitX = 32 * gameControl.speed;
    this.skySprite.top = 0;
    this.skySprite.left = 0;

    //people 
    this.peopleSprite.velocityX = 50;
    //this.peopleSprite.velocityY = 50;
    this.peopleSprite.width = 33;
    this.peopleSprite.height = 68;
    this.peopleSprite.top = element.mycanvas.height - this.peopleSprite.height * 1.2;
    this.peopleSprite.left = element.mycanvas.width / 3 - this.peopleSprite.width / 2;
    this.peopleSprite.GRAVITY_FORCE = publicConfig.GRAVITY_FORCE;
    this.peopleSprite.isJump = false;
    this.peopleSprite.startVelocityY = 0;
    this.peopleSprite.initialTop = this.peopleSprite.top;
    this.peopleSprite.behaviorStatus = {
      runInPlace: new behaviorList.runInPlace(),
    };
    spriteList.peopleSprite.painter = peoplePainter.stand;

    this.peopleSprite.jump = function(status) { //status为2时，为大蹦，1时为小蹦
        this.startVelocityY = status == 1 ? marioGameConfig.smallJumpV : marioGameConfig.bigJumpV;
        this.velocityY = status == 1 ? -marioGameConfig.smallJumpV : -marioGameConfig.bigJumpV;
        this.behaviors = [];
        SpriteAnimatorList.marioSpriteAnimatorJump.start(spriteList.peopleSprite);
      }
      //wall
    this.normalwall.width = 35;
    this.normalwall.height = 35;
    this.normalwall.top = 220;
    this.normalwall.left = 500;
    this.normalwall.initialVelocitX = 45 * gameControl.speed;
  }
};

var SpriteAnimatorList = {
  marioSpriteAnimatorJump: new marioSpriteAnimator(function(sprite) {
    sprite.isJump = false;
    sprite.startVelocityY = 0;
    sprite.velocityY = 0;
    sprite.isJump = false;
    game.activeEventCallback();

    //按左键，或按右键
    // if (game.mapKey["s"] || game.mapKey["w"]) {
    //   var status = game.mapKey["s"] ? 1 : 2;
    //   sprite.jump(status);


    // } else {
    //   if ((game.mapKey["left"] && !game.mapKey["right"]) || (!game.mapKey["left"] && game.mapKey["right"])) {
    //     sprite.painter = peoplePainter.run;

    //   } else {
    //     sprite.painter = peoplePainter.stand;

    //   }
    // }


  })
}

var animateList = {
  //倒计时
  ctx: gameControl.context,
  countDown: function() {
    var strTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss.S").split(' ');
    var can = element.mycanvas;
    var cans = can.getContext('2d');
    cans.font = 'bold 14px arial';
    cans.fillStyle = 'red';
    cans.fillText((gameControl.fps.num >> 0) + 'fps', 50, 20);
    // cans.fillText(strTime[0], 110, 20);
    // cans.fillText(strTime[1], 200, 20);
    progressObj.mileageNumUpdate(gameControl.fps.num);
    progressObj.countDownNumUpdate();
    cans.fillText("行程:" + (progressObj.mileageNum >> 0) + "m", 400, 20);
    cans.fillText("倒计时:" + (progressObj.currentTime >> 0) + "s", 500, 20);
  },
  drawSkySingle: function(time) {
    var self = this;
    spriteList.skySprite.update(self.ctx, time, gameControl.fps.num);
    var left = spriteList.skySprite.left;
    if (spriteList.skySprite.velocityX > 0) {
      left = left < element.mycanvas.width ? left : 0;
    } else {
      left = left > -element.mycanvas.width ? left : 0;
    }

    spriteList.skySprite.left = left;
    spriteList.skySprite.paint(self.ctx);
    spriteList.skySprite.left = left - spriteList.skySprite.width;
    spriteList.skySprite.paint(self.ctx);
    spriteList.skySprite.left = left + spriteList.skySprite.width;
    spriteList.skySprite.paint(self.ctx);
    spriteList.skySprite.left = left;
  },
  drawPeople: function(ctx, time) {
    spriteList.peopleSprite.fpsNum = gameControl.fps.num; //给marioSpriteAnimator传递fpsnum
    spriteList.peopleSprite.update(ctx, time, gameControl.fps.num);
    spriteList.peopleSprite.paint(ctx);
  },
  drawWall: function(time) {
    var self = this;
    spriteList.normalwall.update(self.ctx, time, gameControl.fps.num);
    spriteList.normalwall.paint(self.ctx);
  },
}