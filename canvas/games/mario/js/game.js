var sourceLoadObj={
 sourceNum:0,
 currentNum:0,
 progressbar:new COREHTML5.Progressbar(element.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250),
 loadedCallback:function(){
  var percent = this.currentNum / this.sourceNum * 100;
  this.progressbar.draw(percent);
  if(this.currentNum==this.sourceNum){   
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
            //背景音乐响起
            gameSourceObj.audioList.BGM.loop = true;
            gameSourceObj.audioList.BGM.volume = 0.2;
            gameSourceObj.audioList.BGM.play();
          }
        }


//gameSourceUrl来自gameSourceUrl.js
var gameSourceObj= lib.convertToObject(gameSourceUrl,sourceLoadObj);

var game = {
  lastKeyListenerTime: 0, 
  init: function() {
    var self = this;
    this.bindEvent();
  },
  bindEvent: function() {
      // Key Listeners..............................................
      gameControl.addKeyListener({
        key: 'p',
        listener: (function() {
            var flag = true; //按下抬起算一次。
            return function(status) {
              // alert(key);
              if (status == 1 && flag) {
                if (game.audioObjList.bgm.paused) {
                  game.audioObjList.bgm.play();
                } else {
                  game.audioObjList.bgm.pause();
                }
                gameControl.togglePaused();
                flag = false;
              } else if (status == 0) {
                flag = true;
              }
            }
          })(),
        });
      gameControl.addKeyListener({
        key: 'space',
        listener: function(status) {
          if (status == 1) {
            gameControl.mapKey[32] = true;
            if (!spriteList.peopleSprite.behaviorStatus.jump && !gameControl.paused) {
              game.audioObjList.bigJump.currentTime = 0.7;
              game.audioObjList.bigJump.play();
            }
          } else {
            gameControl.mapKey[32] = false;
          }
        }
      });
      gameControl.addKeyListener({
        key: 'right arrow',
        listener: function(status) {
          if (status == 1) {
            gameControl.mapKey[39] = true;
          } else {
            gameControl.mapKey[39] = false;
          }
        }
      });

      gameControl.addKeyListener({
        key: 'left arrow',
        listener: function(status) {
          if (status == 1) {
            gameControl.mapKey[37] = true;
          } else {
            gameControl.mapKey[37] = false;
          }
        }
      });
    },
    activeEventCallback: function(mapKeyArr) {
      var now = +new Date();
      if (((mapKeyArr[37] && !mapKeyArr[39] && !mapKeyArr[32]) || (!mapKeyArr[37] && mapKeyArr[39] && !mapKeyArr[32])) && (now - game.lastKeyListenerTime > 200)) {
        if ((mapKeyArr[37] && !mapKeyArr[39] && !mapKeyArr[32])) {
          game.setDirection(-1);
          spriteList.peopleSprite.isReverse = false;
          // console.log("按左键");    
        } else {
          // console.log("按右键");
          spriteList.peopleSprite.isReverse = true;
          game.setDirection(1);
        }
        game.lastKeyListenerTime = now;
        if (spriteList.peopleSprite.behaviorStatus.jump.isJump) {
          spriteList.peopleSprite.painter = peoplePainter.jump;
        } else {
          spriteList.peopleSprite.painter = peoplePainter.run;
        }
        spriteList.peopleSprite.behaviors = spriteList.peopleSprite.behaviorStatus.jump.isJump ? [spriteList.peopleSprite.behaviorStatus.jump] : [spriteList.peopleSprite.behaviorStatus.runInPlace];
      }
      // console.log("按右键和空格键或按左键和空格键或按只空格键");       
      if (mapKeyArr[32]) {
        if (!spriteList.peopleSprite.behaviorStatus.jump.isJump) { // throttle
          spriteList.peopleSprite.behaviorStatus.jump.velocityY = -200;
        }
        spriteList.peopleSprite.painter = peoplePainter.jump;
        spriteList.peopleSprite.behaviors = [spriteList.peopleSprite.behaviorStatus.jump];

      }
      if ((!mapKeyArr[37] && !mapKeyArr[39]) || (mapKeyArr[37] && mapKeyArr[39])) {
        // console.log('不按键或左右都按');
        game.setDirection(0);h
        //  spriteList.peopleSprite.painter = peoplePainter.stand;
        if (spriteList.peopleSprite.behaviorStatus.jump.isJump) {
          spriteList.peopleSprite.painter = peoplePainter.jump;
        } else {
          spriteList.peopleSprite.painter = peoplePainter.stand;
        }
        spriteList.peopleSprite.behaviors = [spriteList.peopleSprite.behaviorStatus.jump];
      }
    },
    setDirection: function(status) {
      switch (status) {
        case 0:
        {
            // spriteList.treeList.smallTree.velocityX = 0;
            spriteList.skySprite.velocityX = 0;
            // spriteList.treeList.twotrunksTree.velocityX = 0;
            // spriteList.grassList.GRASS_VELOCITX = 0;
          }
          break;
          case 1:
          {

            // spriteList.treeList.smallTree.velocityX = -spriteList.treeList.smallTree.initialVelocitX;
            spriteList.skySprite.velocityX = -spriteList.skySprite.initialVelocitX;
            // spriteList.treeList.twotrunksTree.velocityX = -spriteList.treeList.twotrunksTree.initialVelocitX;
            // spriteList.grassList.GRASS_VELOCITX = -spriteList.grassList.initialGRASS_VELOCITX;
          }
          break;
          case -1:
          {
            // spriteList.treeList.smallTree.velocityX = spriteList.treeList.smallTree.initialVelocitX;
            spriteList.skySprite.velocityX = spriteList.skySprite.initialVelocitX;
            // spriteList.treeList.twotrunksTree.velocityX = spriteList.treeList.twotrunksTree.initialVelocitX;
            // spriteList.grassList.GRASS_VELOCITX = spriteList.grassList.initialGRASS_VELOCITX;
          }
          break;
        }
      }
    };

    var gameControl = new Game('game', 'mycanvas');
    gameControl.speed = 2;
    gameControl.startAnimate = function(time) {
      game.activeEventCallback(gameControl.mapKey);
      animateList.drawSkySingle(time);    
      animateList.drawPeople(gameControl.context, time);
      animateList.countDown(time);
    }





    var peoplePainter = {
      run: new PeopleRunSpriteSheetPainter(mario.config, './images/mario/smallmario/marioR/spritesrun.png', element.mycanvas, mario.config.totalCount),
      jump: new CharacterImagePainter('./images/mario/smallmario/marioR/jump.png'),
      stand: new CharacterImagePainter('./images/mario/smallmario/marioR/stand.png'),
    }
  //var peopleRunSpriteSheetPainter = new PeopleRunSpriteSheetPainter(mario.config, './images/mario/smallmario/marioR/spritesrun.png', element.mycanvas, mario.config.totalCount);

  var spriteList = {
    skySprite: new SceneSprite('sky2', new ImagePainter('./images/background.png'), [new behaviorList.moveLeftToRight()]),
  
  peopleSprite: new Character('mario', peoplePainter.stand, [], true, element.mycanvas),
  spriteInit: function() {
    this.skySprite.width = element.mycanvas.width;
    this.skySprite.height = element.mycanvas.height + element.mycanvas.height * 0.02;
    this.skySprite.initialVelocitX = 8 * gameControl.speed;
    this.skySprite.top = 0;
    this.skySprite.left = 0;   

    //people 
    this.peopleSprite.velocityX = 50;
    //this.peopleSprite.velocityY = 50;
    this.peopleSprite.width = 33;
    this.peopleSprite.height = 68;
    this.peopleSprite.top = element.mycanvas.height - this.peopleSprite.height * 1.2;
    this.peopleSprite.left = element.mycanvas.width / 2 - this.peopleSprite.width / 2;
    this.peopleSprite.behaviorStatus = {
      runInPlace: new behaviorList.runInPlace(),
      jump: new behaviorList.jump({
        initialTop: this.peopleSprite.top,
        GRAVITY_FORCE:publicConfig.GRAVITY_FORCE
      }),
    }    
      spriteList.peopleSprite.painter = peoplePainter.stand;
    }
  };


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
    cans.fillText(strTime[0], 110, 20);
    cans.fillText(strTime[1], 200, 20);
  },
  drawSkySingle: function(time) {
    var self = this;
    spriteList.skySprite.update(self.ctx, time,gameControl.fps.num);
    var left = spriteList.skySprite.left;
    if (spriteList.skySprite.velocityX > 0) {
      left = left < element.mycanvas.width ? left + spriteList.skySprite.velocityX / gameControl.fps.num : 0;
    } else {
      left = left > -element.mycanvas.width ? left + spriteList.skySprite.velocityX / gameControl.fps.num : 0;
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
    spriteList.peopleSprite.update(ctx, time,gameControl.fps.num);
    spriteList.peopleSprite.paint(ctx);
  },
}
game.init();

