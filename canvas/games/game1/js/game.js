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
    init: function() {
        this.progressbar = new COREHTML5.Progressbar(this.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250);
        var l = new Loading(this.progressCallback.bind(this), this.progressOver.bind(this));
        for (var i = 0; i < 9; i++) {
            this.imageList.push("./image/imgBoom/explosion-0" + i + ".png");
            this.imageList.push("./image/imgBoom/fuse-0" + i + ".png");
        };
        this.imageList.forEach(function(item, index, arr) {
            l.queueImage(item);
        });
        l.loadImages();
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
    },
};

var gameControl = new Game('game', 'mycanvas');
gameControl.startAnimate = function(time) {
    animateList.drawSky(time);
    animateList.drawTree(time);
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
        bigTree: new Sprite('sky1', new ImagePainter('./image/tree/tree.png'), [new behaviorList.moveLeftToRight()]),
        twotrunksTree: new Sprite('sky1', new ImagePainter('./image/tree/tree-twotrunks.png'), [new behaviorList.moveLeftToRight()]),
    },
    spriteInit: function() {
        this.skySpriteList[0].width = 1000;
        this.skySpriteList[0].height = 500;
        this.skySpriteList[0].velocityX = 20;
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
        this.treeList.smallTree.width = 224;
        this.treeList.smallTree.height = 224;
        this.treeList.smallTree.top = 345;
        this.treeList.smallTree.left = 0;
        this.treeList.smallTree.velocityX = -100;
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

    },
    drawTree: function(time) {
        var scaleNum = 0.7;
        this.ctx.save();
        this.ctx.scale(scaleNum, scaleNum);
        spriteList.treeList.smallTree.update(this.ctx, time);
        var totalTreeCount = 7;
        var leftOffset = spriteList.treeList.smallTree.left;
        var loop = 0;
        var canvasWidth = game.mycanvas.width / scaleNum;
        var treeInteval = (canvasWidth + spriteList.treeList.smallTree.width) / totalTreeCount;
        if (spriteList.treeList.smallTree.velocityX > 0) {
            for (var i = 0; i < totalTreeCount; i++) {
                if ((leftOffset + i * treeInteval) <= canvasWidth) {
                    spriteList.treeList.smallTree.left = leftOffset + treeInteval * i;
                    loop++;
                } else {
                    spriteList.treeList.smallTree.left = leftOffset - treeInteval * (i - loop + 1);
                }
                spriteList.treeList.smallTree.paint(this.ctx);
            }
            if ((leftOffset) >= canvasWidth) {
                spriteList.treeList.smallTree.left = -spriteList.treeList.smallTree.width;
            } else {
                spriteList.treeList.smallTree.left = leftOffset;
            }
        } else {

            for (var i = 0; i < totalTreeCount; i++) {
                if ((leftOffset + spriteList.treeList.smallTree.width - i * treeInteval) >= 0) {
                    spriteList.treeList.smallTree.left = leftOffset - treeInteval * i;
                    loop++;
                } else {
                    spriteList.treeList.smallTree.left = leftOffset + treeInteval * (i - loop + 1);
                }
                spriteList.treeList.smallTree.paint(this.ctx);
            }
            if ((leftOffset + spriteList.treeList.smallTree.width) < 0) {
                spriteList.treeList.smallTree.left = canvasWidth;
            } else {
                spriteList.treeList.smallTree.left = leftOffset;
            }
        }
        this.ctx.restore();
    }
}


spriteList.spriteInit();
gameControl.start();
game.init();

//天空的绘制