
var game = {
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
        spriteList.grassList.GRASS_VELOCITY =-spriteList.grassList.GRASS_VELOCITY;
        

        }, true);
        
    },
};

var gameControl = new Game('game', 'mycanvas');
gameControl.startAnimate = function(time) {
    animateList.drawSky(time);
    animateList.drawTree(time,spriteList.treeList.smallTree,5);
    animateList.drawTree(time,spriteList.treeList.twotrunksTree,4); 
   animateList.drawGrass();  
    animateList.countDown(time);
};


var behaviorList = {
    moveLeftToRight: function() {
        this.lastMove = 0;
        this.execute = function(sprite, context, time) {
            sprite.left += sprite.velocityX / gameControl.fps.num;
            this.lastMove = time;
        }
    },
}

var spriteList = {
    skySpriteList: [new Sprite('sky1', new ImagePainter('./image/sky.png'), [new behaviorList.moveLeftToRight()]),
    new Sprite('sky2', new ImagePainter('./image/sky.png'), [new behaviorList.moveLeftToRight()])
    ],
    treeList: {
        smallTree: new Sprite('sky1', new ImagePainter('./image/tree/smalltree.png'), [new behaviorList.moveLeftToRight()]),
        twotrunksTree: new Sprite('sky1', new ImagePainter('./image/tree/tree-twotrunks.png'), [new behaviorList.moveLeftToRight()]),
    },
    grassList:{
       grass: new Sprite('grass1', new ImagePainter('./image/grass/grass.png'), [new behaviorList.moveLeftToRight()]),

       grassOffset : 0,
       GRASS_VELOCITY:-75
   },
   spriteInit: function() {
    this.skySpriteList[0].width = 1000;
    this.skySpriteList[0].height = 500;
    this.skySpriteList[0].velocityX = 8;
    this.skySpriteList[0].top = 0;
    this.skySpriteList[0].left = 0;
    this.skySpriteList[1].top = 0;
    if (this.skySpriteList[0].velocityX > 0) {
        this.skySpriteList[1].left = -this.skySpriteList[0].width;
    } else {
        this.skySpriteList[1].left = this.skySpriteList[0].width;
    }

    this.skySpriteList[1].velocityX = this.skySpriteList[0].velocityX;
    this.skySpriteList[1].width = this.skySpriteList[0].width;
    this.skySpriteList[1].height = this.skySpriteList[0].height;

        //treeinit
        this.treeList.smallTree.width = 137;
        this.treeList.smallTree.height = 165;
        this.treeList.smallTree.top = 232;
        this.treeList.smallTree.left = 0;
        this.treeList.smallTree.velocityX = 20;

        //bigtreeinit
        this.treeList.twotrunksTree.width = 224;
        this.treeList.twotrunksTree.height = 224;
        this.treeList.twotrunksTree.top = 185;
        this.treeList.twotrunksTree.left = 0;
        this.treeList.twotrunksTree.velocityX = 40;

        //grass
        this.grassList.grass.width = 1005;
        this.grassList.grass.height = 52;
    }
};

var animateList = {
    //倒计时
    ctx: gameControl.context,
    countDown: function() {
        var strTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss.S").split(' ');
        var can = game.mycanvas;
        var cans = can.getContext('2d');
        cans.font = 'bold 100px arial';
        cans.fillStyle = 'red';
        cans.fillText(gameControl.fps.num >> 0, 80, 20);
        cans.font = 'bold 100px consolas';
        cans.textAlign = 'left';
        cans.textBaseline = 'top';
        cans.strokeStyle = '#DF5326';
        cans.strokeText(strTime[0], 80, 100);
        cans.font = 'bold 100px arial';
        cans.fillStyle = 'red';
        cans.fillText(strTime[1], 80, 300);
    },
    drawSky: function(time) {
        var self = this;
        spriteList.skySpriteList.forEach(function(item, index, arr) {
            if (item.velocityX > 0) {
                if (item.left > game.mycanvas.width) {
                    var preSky = (index == 0) ? arr[1] : arr[0];
                    item.left = preSky.left - item.width;
                }
            } else {
                if ((item.left + item.width) < 0) {
                    var preSky = (index == 0) ? arr[1] : arr[0];
                    item.left = preSky.left + preSky.width;
                }
            }
            item.update(self.ctx, time);
            item.paint(self.ctx);
        });
    },
    drawGrass: function() {
     this.ctx.save();
     var grassImage=game.loadImg.getImage('./image/grass/grass.png');
     var width=spriteList.grassList.grass.width;
     var height=spriteList.grassList.grass.height;
     if(spriteList.grassList.GRASS_VELOCITY>0){
          spriteList.grassList.grassOffset = spriteList.grassList.grassOffset < game.mycanvas.width ?spriteList.grassList.grassOffset +  spriteList.grassList.GRASS_VELOCITY/gameControl.fps.num : 0;
     this.ctx.translate(-spriteList.grassList.grassOffset, 0);
     this.ctx.drawImage(grassImage, 0, game.mycanvas.height-spriteList.grassList.grass.height,width,height);
     this.ctx.drawImage(grassImage, spriteList.grassList.grass.width-5,game.mycanvas.height-spriteList.grassList.grass.height,width,height);
     this.ctx.drawImage(grassImage, 0, game.mycanvas.height-spriteList.grassList.grass.height,width,height);
     this.ctx.drawImage(grassImage, spriteList.grassList.grass.width,game.mycanvas.height-spriteList.grassList.grass.height,width,height);
  
      }else{
        spriteList.grassList.grassOffset = spriteList.grassList.grassOffset < game.mycanvas.width ?spriteList.grassList.grassOffset - spriteList.grassList.GRASS_VELOCITY/gameControl.fps.num : 0;
     this.ctx.translate(spriteList.grassList.grassOffset, 0);
     this.ctx.drawImage(grassImage, 0, game.mycanvas.height-spriteList.grassList.grass.height,width,height);
     this.ctx.drawImage(grassImage, -spriteList.grassList.grass.width-5,game.mycanvas.height-spriteList.grassList.grass.height,width,height);
     this.ctx.drawImage(grassImage, 0, game.mycanvas.height-spriteList.grassList.grass.height,width,height);
     this.ctx.drawImage(grassImage, -spriteList.grassList.grass.width,game.mycanvas.height-spriteList.grassList.grass.height,width,height);
  
      }
     
     
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

}


spriteList.spriteInit();
gameControl.start();
game.init();

//天空的绘制