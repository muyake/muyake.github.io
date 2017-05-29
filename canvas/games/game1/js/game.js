var config={
 runnerCells: [{
    left: 0,
    top: 0,
    width: 47,
    height: 64
}, {
    left: 55,
    top: 0,
    width: 44,
    height: 64
}, {
    left: 107,
    top: 0,
    width: 39,
    height: 64
}, {
    left: 150,
    top: 0,
    width: 46,
    height: 64
}, {
    left: 208,
    top: 0,
    width: 49,
    height: 64
}, {
    left: 265,
    top: 0,
    width: 46,
    height: 64
}, {
    left: 320,
    top: 0,
    width: 42,
    height: 64
}, {
    left: 380,
    top: 0,
    width: 35,
    height: 64
}, {
    left: 425,
    top: 0,
    width: 35,
    height: 64
}],
//重力加速度
GRAVITY_FORCE : 9.81*2,
}

var behaviorList = {
    moveLeftToRight: function() {
        this.behaviorName='moveLeftToRight';
        this.lastMove = 0;
        this.execute = function(sprite, context, time) {
            sprite.left += sprite.velocityX / gameControl.fps.num;
            this.lastMove = time;
        }
    },
    //小人跑动动画
    runInPlace : {
        lastAdvance: 0,
        PAGEFLIP_INTERVAL: 80,
        behaviorName:'runInPlace',
        execute: function(sprite, context, time) {
            if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
                sprite.painter.advance();
                this.lastAdvance = time;
            }
        }
    },
    //小人跳动
    jump:{
        velocityY:0,
        lastAdvance: 0,
        isJump:false,
        initialTop:0,
        behaviorName:'jump',
        execute: function(sprite, context, time) {
            if(this.lastAdvance!==0){
                if(this.velocityY<200){
                  this.velocityY=this.velocityY+config.GRAVITY_FORCE/ gameControl.fps.num*18;
                  sprite.top+= this.velocityY / gameControl.fps.num;
                  sprite.top=sprite.top<this.initialTop?sprite.top:this.initialTop;
                  this.isJump=true;
              }else{
                this.isJump=false;
             //   console.log("蹦跳结束");
         }
     }
     this.lastAdvance=time;
 }
}

}

var game = {
    lastKeyListenerTime :0, 
    blog:0,//0代表停止，1代表左移，-1代表右移
    imageList: [
    './image/grass/grass.png',
    './image/grass/grass2.png',
    './image/runpeople.png',
    './image/sky.png',
    './image/tree/smalltree.png',
    './image/tree/tree.png',
    './image/tree/tree-twotrunks.png',
    './image/imgBoom/bomb.png',
    './image/imgBoom/bomb-no-fuse.png',
    ],
    mycanvas: document.getElementById('mycanvas'),
    progressDiv: document.getElementById('load'),
    progressCallback: function(num) {
        this.progressbar.draw(num);
    },
    progressOver: function() {
        this.mycanvas.style.display = 'block';
        this.progressDiv.style.display = 'none';
        //加载图片完成后执行。
        spriteList.spriteInit();
        gameControl.start();
    },
    loadImg:undefined,
    init: function() {
        this.progressbar = new COREHTML5.Progressbar(this.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250);
        this.loadImg = new Loading(this.progressCallback.bind(this), this.progressOver.bind(this));
        for (var i = 0; i < 9; i++) {
            this.imageList.push("./image/imgBoom/explosion-0" + i + ".png");
            this.imageList.push("./image/imgBoom/fuse-0" + i + ".png");
        };
        var self=this;
        this.imageList.forEach(function(item, index, arr) {
            self.loadImg.queueImage(item);
        });
        this.loadImg.loadImages();
        this.bindEvent();
    },
    bindEvent: function() {
        document.querySelector('#startBtn').addEventListener('click', function() {
            if (gameControl.paused) {
                this.value = '暂停';
            } else {
                this.value = '开始';
            }
            gameControl.togglePaused();
        }, true);
        document.querySelector('#revertBtn').addEventListener('click', function() {
           spriteList.skySpriteList[0].velocityX =-spriteList.skySpriteList[0].velocityX;
           spriteList.skySpriteList[1].velocityX =-spriteList.skySpriteList[1].velocityX;
           spriteList.treeList.smallTree.velocityX =-spriteList.treeList.smallTree.velocityX;
           spriteList.treeList.twotrunksTree.velocityX =-spriteList.treeList.twotrunksTree.velocityX;
           spriteList.grassList.GRASS_VELOCITX =-spriteList.grassList.GRASS_VELOCITX;
       }, true);
    },
    activeEventCallback:function(mapKeyArr){
       var now = +new Date();
       if(((mapKeyArr[37]&&!mapKeyArr[39]&&!mapKeyArr[32])||(!mapKeyArr[37]&&mapKeyArr[39]&&!mapKeyArr[32]))&&(now - game.lastKeyListenerTime > 200)){   

        if((mapKeyArr[37]&&!mapKeyArr[39]&&!mapKeyArr[32])){
             game.setDirection(-1);
             peopleSpriteSheetPainter.isReverse=true;
         // console.log("按左键");    
        }else{
        // console.log("按右键");
            peopleSpriteSheetPainter.isReverse=false;
            game.setDirection(1);  
     }                  
    game.lastKeyListenerTime = now;
    spriteList.peopleSprite.behaviors =behaviorList.jump.isJump?[behaviorList.jump]:[behaviorList.runInPlace];
}
       // console.log("按右键和空格键或按左键和空格键或按只空格键");       
       if(mapKeyArr[32]){
        if (!behaviorList.jump.isJump) { // throttle
            behaviorList.jump.velocityY=-200;
        }         
        spriteList.peopleSprite.behaviors = [behaviorList.jump];

    }    
    if((!mapKeyArr[37]&&!mapKeyArr[39])||(mapKeyArr[37]&&mapKeyArr[39])){
       // console.log('不按键或左右都按');
       game.setDirection(0); 
       spriteList.peopleSprite.behaviors = [behaviorList.jump];     
   }
},

setDirection:function(status){
    switch(status){
        case 0:{
           spriteList.treeList.smallTree.velocityX =0;
           spriteList.treeList.twotrunksTree.velocityX =0;
           spriteList.grassList.GRASS_VELOCITX =0;
       }
       break;
       case 1:{

           spriteList.treeList.smallTree.velocityX =-spriteList.treeList.smallTree.initialVelocitX;
           spriteList.treeList.twotrunksTree.velocityX =-spriteList.treeList.twotrunksTree.initialVelocitX;
           spriteList.grassList.GRASS_VELOCITX =-spriteList.grassList.initialGRASS_VELOCITX;
       }
       break;
       case -1:{
           spriteList.treeList.smallTree.velocityX =spriteList.treeList.smallTree.initialVelocitX;
           spriteList.treeList.twotrunksTree.velocityX =spriteList.treeList.twotrunksTree.initialVelocitX;
           spriteList.grassList.GRASS_VELOCITX =spriteList.grassList.initialGRASS_VELOCITX;
       }
       break;
   }
}
};

var gameControl = new Game('game', 'mycanvas');
gameControl.speed=2;
gameControl.startAnimate = function(time) {
    game.activeEventCallback(gameControl.mapKey);
    animateList.drawSkySingle(time);
    animateList.drawTree(time,spriteList.treeList.smallTree,5);
    animateList.drawTree(time,spriteList.treeList.twotrunksTree,4); 
    animateList.drawGrass();  
    animateList.drawPeople(gameControl.context,time);  
    animateList.countDown(time);
};


// Key Listeners..............................................

gameControl.addKeyListener(
{
  key: 'p',
  listener: function () {
     gameControl.togglePaused();
 }
}
);

gameControl.addKeyListener(
{
  key: 'space',
  listener: function (status) {
    if(status==1){        
      gameControl.mapKey[32]=true;
  }else{
     gameControl.mapKey[32]=false;
 }     
}
}
);
gameControl.addKeyListener(
{
  key: 'right arrow',
  listener: function (status) {
    if(status==1){
        gameControl.mapKey[39]=true;
    }else{
        gameControl.mapKey[39]=false;
    }
}
}
);


gameControl.addKeyListener(
{
  key: 'left arrow',
  listener: function (status) {
    if(status==1){
        gameControl.mapKey[37]=true;
    }else{
        gameControl.mapKey[37]=false;
    }
}
}
);


var peopleSpriteSheetPainter=new PeopleSpriteSheetPainter(config.runnerCells,'./image/runpeople.png', game.mycanvas, true);
var spriteList = {   
    skySprite:new Sprite('sky2', new ImagePainter('./image/sky.png'), [new behaviorList.moveLeftToRight()]),
    treeList: {
        smallTree: new Sprite('sky1', new ImagePainter('./image/tree/smalltree.png'), [new behaviorList.moveLeftToRight()]),
        twotrunksTree: new Sprite('sky1', new ImagePainter('./image/tree/tree-twotrunks.png'), [new behaviorList.moveLeftToRight()]),
    },
    grassList:{
       grass: new Sprite('grass1', new GrassImagePainter('./image/grass/grass.png'), [new behaviorList.moveLeftToRight()]),
       GRASS_VELOCITX:0,
       grassOffset : 0
   },
// SpriteSheetPainter:new PeopleSpriteSheetPainter(config.runnerCells,'./image/runpeople.png', true),
peopleSprite:new Sprite('runner',peopleSpriteSheetPainter ),
spriteInit: function() {
    this.skySprite.width = game.mycanvas.width;
    this.skySprite.height = 500;
    this.skySprite.velocityX = 8*gameControl.speed;
    this.skySprite.top = 0;
    this.skySprite.left = 0;
    //treeinit
    this.treeList.smallTree.width = 137;
    this.treeList.smallTree.height = 165;
    this.treeList.smallTree.top = 232;
    this.treeList.smallTree.left = 0;
    this.treeList.smallTree.initialVelocitX = 20*gameControl.speed;

        //bigtreeinit
        this.treeList.twotrunksTree.width = 224;
        this.treeList.twotrunksTree.height = 224;
        this.treeList.twotrunksTree.top = 185;
        this.treeList.twotrunksTree.left = 0;
        this.treeList.twotrunksTree.initialVelocitX = 40*gameControl.speed;

        //grass
        this.grassList.initialGRASS_VELOCITX=-75*gameControl.speed;
        this.grassList.grass.width = game.mycanvas.width;
        this.grassList.grass.height = 52;
        this.grassList.grass.top = game.mycanvas.height-spriteList.grassList.grass.height;

       //people
       var size=2;
       this.peopleSprite.velocityX = 50;
       //this.peopleSprite.velocityY = 50;
       this.peopleSprite.width = 35*size;
       this.peopleSprite.height = 64*size;
       this.peopleSprite.top = game.mycanvas.height- this.peopleSprite.height;
       this.peopleSprite.left = game.mycanvas.width/2- this.peopleSprite.width/2;  
       // this.peopleSprite.behaviors = [behaviorList.jump];
       behaviorList.jump.initialTop=this.peopleSprite.top;
       spriteList.peopleSprite.behaviors = [behaviorList.runInPlace];
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
        cans.fillText(gameControl.fps.num >> 0, 80, 20);    
        cans.fillText(strTime[0], 110, 20);      
        cans.fillText(strTime[1], 200, 20);
    },
    drawSkySingle:function(time){
        var self=this;
        spriteList.skySprite.update(self.ctx, time);
        var left=spriteList.skySprite.left;
        if(spriteList.skySprite.velocityX>0){
           left = left < game.mycanvas.width ?left +  spriteList.skySprite.velocityX/gameControl.fps.num : 0;
       }else{
           left = left >- game.mycanvas.width ?left +  spriteList.skySprite.velocityX/gameControl.fps.num : 0;
       }

       spriteList.skySprite.left=left;
       spriteList.skySprite.paint(self.ctx);      
       spriteList.skySprite.left=left-spriteList.skySprite.width;
       spriteList.skySprite.paint(self.ctx);       
       spriteList.skySprite.left=left+spriteList.skySprite.width;
       spriteList.skySprite.paint(self.ctx);      
       spriteList.skySprite.left=left;
   },

   drawGrass: function() {
     this.ctx.save();
     var grassImage=game.loadImg.getImage('./image/grass/grass.png');
     var width=spriteList.grassList.grass.width;
     var height=spriteList.grassList.grass.height;
     if(spriteList.grassList.GRASS_VELOCITX>=0){
         spriteList.grassList.grassOffset = spriteList.grassList.grassOffset < game.mycanvas.width ?spriteList.grassList.grassOffset +  spriteList.grassList.GRASS_VELOCITX/gameControl.fps.num : 0;
     }else{
        spriteList.grassList.grassOffset = spriteList.grassList.grassOffset  >-spriteList.grassList.grass.width ?spriteList.grassList.grassOffset + spriteList.grassList.GRASS_VELOCITX/gameControl.fps.num : 0;
    }
    this.ctx.translate(-spriteList.grassList.grassOffset, 0);
    spriteList.grassList.grass.paint(this.ctx);
    this.ctx.restore();
},
drawTree: function(time,sprite,totalTreeCount) {        
    sprite.update(this.ctx, time);
           // var totalTreeCount = 5;
           var leftOffset = sprite.left;
           var loop = 0;
           var canvasWidth = game.mycanvas.width;
           var treeInteval = (canvasWidth + sprite.width) / totalTreeCount;
           if (sprite.velocityX > 0) {
            for (var i = 0; i < totalTreeCount; i++) {
                if ((leftOffset + i * treeInteval) <= canvasWidth) {
                    sprite.left = leftOffset + treeInteval * i;
                    loop++;
                } else {
                    sprite.left = leftOffset - treeInteval * (i - loop + 1);
                }
                sprite.paint(this.ctx);
            }
            if ((leftOffset) >= canvasWidth) {
                sprite.left = -sprite.width;
            } else {
                sprite.left = leftOffset;
            }
        } else {
            for (var i = 0; i < totalTreeCount; i++) {
                if ((leftOffset + sprite.width - i * treeInteval) >= 0) {
                    sprite.left = leftOffset - treeInteval * i;
                    loop++;
                } else {
                    sprite.left = leftOffset + treeInteval * (i - loop + 1);
                }
                sprite.paint(this.ctx);
            }
            if ((leftOffset + sprite.width) < 0) {
                sprite.left = canvasWidth;
            } else {
                sprite.left = leftOffset;
            }
        }       
    },
    drawPeople:function(ctx,time){
     spriteList.peopleSprite.update(ctx, time);
     spriteList.peopleSprite.paint(ctx);
 },

}






game.init();

//天空的绘制