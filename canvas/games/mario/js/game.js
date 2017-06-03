var game = {
  lastKeyListenerTime: 0, 
  loadSourceNum: 0,
  audioObjList: {
    bgm: new Audio(gameSourceUrl.audioList.BGM),
    bigJump: new Audio(gameSourceUrl.audioList.bigJump),
  },
  mycanvas: document.getElementById('mycanvas'),
  progressDiv: document.getElementById('load'),
  progressCallback: function() {
    var percent = (++this.loadSourceNum) / this.loadSourceCount * 100;
    this.progressbar.draw(percent);
    if (this.loadSourceNum == this.loadSourceCount) {
      this.progressOver();
    }
  },
  progressOver: function() {
    this.mycanvas.style.display = 'block';
    this.progressDiv.style.display = 'none';
    document.querySelector('.tip').style.display = 'block';
    //加载图片完成后执行。
    spriteList.spriteInit();
    gameControl.start();

    //背景音乐响起
    this.audioObjList.bgm.loop = true;
    this.audioObjList.bgm.volume = 0.2;
    this.audioObjList.bgm.play();
  },
  loadImg: undefined,
  addImgList: function() {
    // for (var i = 0; i < 21; i++) {
    //   this.imageList.push("./images/mario/smallmario/marioR/" + i + ".png");
    // };
    // this.imageList.push("./images/mario/smallmario/marioR/spritesrun.png");
    // this.imageList.push("./images/mario/smallmario/marioR/jump.png");
    // this.imageList.push("./images/mario/smallmario/marioR/stand.png");
  },
  init: function() {
    this.progressbar = new COREHTML5.Progressbar(this.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250);
    this.loadImg = new imageLoading(this.progressCallback.bind(this), this.progressOver.bind(this));
    this.addImgList();
    this.loadSourceCount = this.imageList.length + this.audioList.length;
    var self = this;
    this.imageList.forEach(function(item, index, arr) {
      self.loadImg.queueImage(item);
    });
    this.loadImg.loadImages();

    this.loadMusic = new mp3Loading(this.progressCallback.bind(this), this.progressOver.bind(this));
    this.audioList.forEach(function(item, index, arr) {
      self.loadMusic.queueMusic(item);
    });
    this.loadMusic.loadMusics();
    this.bindEvent();
  },
  bindEvent: function() {

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
      game.setDirection(0);
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
  // animateList.drawTree(time, spriteList.treeList.smallTree, 5);
  // animateList.drawTree(time, spriteList.treeList.twotrunksTree, 4);
  //animateList.drawGrass();
  animateList.drawPeople(gameControl.context, time);
  animateList.countDown(time);
};


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

var peoplePainter = {
    run: new PeopleRunSpriteSheetPainter(mario.config, './images/mario/smallmario/marioR/spritesrun.png', game.mycanvas, mario.config.totalCount),
    jump: new CharacterImagePainter('./images/mario/smallmario/marioR/jump.png'),
    stand: new CharacterImagePainter('./images/mario/smallmario/marioR/stand.png'),
  }
  //var peopleRunSpriteSheetPainter = new PeopleRunSpriteSheetPainter(mario.config, './images/mario/smallmario/marioR/spritesrun.png', game.mycanvas, mario.config.totalCount);

var spriteList = {
  skySprite: new SceneSprite('sky2', new ImagePainter('./images/background.png'), [new behaviorList.moveLeftToRight()]),
  // treeList: {
  //   smallTree: new SceneSprite('sky1', new ImagePainter('./image/tree/smalltree.png'), [new behaviorList.moveLeftToRight()]),
  //   twotrunksTree: new SceneSprite('sky1', new ImagePainter('./image/tree/tree-twotrunks.png'), [new behaviorList.moveLeftToRight()]),
  // },
  // grassList: {
  //   grass: new SceneSprite('grass1', new GrassImagePainter('./image/grass/grass.png'), [new behaviorList.moveLeftToRight()]),
  //   GRASS_VELOCITX: 0,
  //   grassOffset: 0
  // },
  // SpriteSheetPainter:new PeopleRunSpriteSheetPainter(config.runnerCells,'./image/runpeople.png', true),
  peopleSprite: new Character('mario', peoplePainter.stand, [], true, game.mycanvas),
  spriteInit: function() {
    this.skySprite.width = game.mycanvas.width;
    this.skySprite.height = game.mycanvas.height + game.mycanvas.height * 0.02;
    this.skySprite.initialVelocitX = 8 * gameControl.speed;
    this.skySprite.top = 0;
    this.skySprite.left = 0;
    // //treeinit
    // this.treeList.smallTree.width = 137;
    // this.treeList.smallTree.height = 165;
    // this.treeList.smallTree.top = 232;
    // this.treeList.smallTree.left = 0;
    // this.treeList.smallTree.initialVelocitX = 20 * gameControl.speed;

    // //bigtreeinit
    // this.treeList.twotrunksTree.width = 224;
    // this.treeList.twotrunksTree.height = 224;
    // this.treeList.twotrunksTree.top = 185;
    // this.treeList.twotrunksTree.left = 0;
    // this.treeList.twotrunksTree.initialVelocitX = 40 * gameControl.speed;

    // //grass
    // this.grassList.initialGRASS_VELOCITX = -75 * gameControl.speed;
    // this.grassList.grass.width = game.mycanvas.width;
    // this.grassList.grass.height = 52;
    // this.grassList.grass.top = game.mycanvas.height - spriteList.grassList.grass.height;



    //people 
    this.peopleSprite.velocityX = 50;
    //this.peopleSprite.velocityY = 50;
    this.peopleSprite.width = 33;
    this.peopleSprite.height = 68;
    this.peopleSprite.top = game.mycanvas.height - this.peopleSprite.height * 1.2;
    this.peopleSprite.left = game.mycanvas.width / 2 - this.peopleSprite.width / 2;
    this.peopleSprite.behaviorStatus = {
        runInPlace: new behaviorList.runInPlace(),
        jump: new behaviorList.jump({
          initialTop: this.peopleSprite.top,
          GRAVITY_FORCE:publicConfig.GRAVITY_FORCE
        }),
      }
      //spriteList.peopleSprite.behaviors = [spriteList.peopleSprite.behaviorStatus.runInPlace];
    spriteList.peopleSprite.painter = peoplePainter.stand;
  }
};


var animateList = {
  //倒计时
  ctx: gameControl.context,
  countDown: function() {
    var strTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss.S").split(' ');
    var can = game.mycanvas;
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
      left = left < game.mycanvas.width ? left + spriteList.skySprite.velocityX / gameControl.fps.num : 0;
    } else {
      left = left > -game.mycanvas.width ? left + spriteList.skySprite.velocityX / gameControl.fps.num : 0;
    }

    spriteList.skySprite.left = left;
    spriteList.skySprite.paint(self.ctx);
    spriteList.skySprite.left = left - spriteList.skySprite.width;
    spriteList.skySprite.paint(self.ctx);
    spriteList.skySprite.left = left + spriteList.skySprite.width;
    spriteList.skySprite.paint(self.ctx);
    spriteList.skySprite.left = left;
  },

  // drawGrass: function() {
  //   this.ctx.save();
  //   var grassImage = game.loadImg.getImage('./image/grass/grass.png');
  //   var width = spriteList.grassList.grass.width;
  //   var height = spriteList.grassList.grass.height;
  //   if (spriteList.grassList.GRASS_VELOCITX >= 0) {
  //     spriteList.grassList.grassOffset = spriteList.grassList.grassOffset < game.mycanvas.width ? spriteList.grassList.grassOffset + spriteList.grassList.GRASS_VELOCITX / gameControl.fps.num : 0;
  //   } else {
  //     spriteList.grassList.grassOffset = spriteList.grassList.grassOffset > -spriteList.grassList.grass.width ? spriteList.grassList.grassOffset + spriteList.grassList.GRASS_VELOCITX / gameControl.fps.num : 0;
  //   }
  //   this.ctx.translate(-spriteList.grassList.grassOffset, 0);
  //   spriteList.grassList.grass.paint(this.ctx);
  //   this.ctx.restore();
  // },
  // drawTree: function(time, sprite, totalTreeCount) {
  //   sprite.update(this.ctx, time);
  //   // var totalTreeCount = 5;
  //   var leftOffset = sprite.left;
  //   var loop = 0;
  //   var canvasWidth = game.mycanvas.width;
  //   var treeInteval = (canvasWidth + sprite.width) / totalTreeCount;
  //   if (sprite.velocityX > 0) {
  //     for (var i = 0; i < totalTreeCount; i++) {
  //       if ((leftOffset + i * treeInteval) <= canvasWidth) {
  //         sprite.left = leftOffset + treeInteval * i;
  //         loop++;
  //       } else {
  //         sprite.left = leftOffset - treeInteval * (i - loop + 1);
  //       }
  //       sprite.paint(this.ctx);
  //     }
  //     if ((leftOffset) >= canvasWidth) {
  //       sprite.left = -sprite.width;
  //     } else {
  //       sprite.left = leftOffset;
  //     }
  //   } else {
  //     for (var i = 0; i < totalTreeCount; i++) {
  //       if ((leftOffset + sprite.width - i * treeInteval) >= 0) {
  //         sprite.left = leftOffset - treeInteval * i;
  //         loop++;
  //       } else {
  //         sprite.left = leftOffset + treeInteval * (i - loop + 1);
  //       }
  //       sprite.paint(this.ctx);
  //     }
  //     if ((leftOffset + sprite.width) < 0) {
  //       sprite.left = canvasWidth;
  //     } else {
  //       sprite.left = leftOffset;
  //     }
  //   }
  // },
  drawPeople: function(ctx, time) {
    spriteList.peopleSprite.update(ctx, time,gameControl.fps.num);
    spriteList.peopleSprite.paint(ctx);
  },

}



game.init();

//天空的绘制