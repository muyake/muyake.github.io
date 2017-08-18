var progressObj = {
    mileageNum: 0, //马里奥走的里程
    totaltime: 300, //游戏倒计时
    velocityX: 0,
    currentTime: 300,
    fpsNum: 60,
    countDownWatch: new Stopwatch(),
    createSpriteMileNum: 0,
    mileageNumUpdate: function(fpsNum) {
        this.fpsNum = (fpsNum == 0) ? 1 : (fpsNum || this.fpsNum);
       // console.log(this.velocityX );
        this.mileageNum += this.velocityX / this.fpsNum;

        this.createSpriteMileNum = this.mileageNum*gameConfig.objectSpeedRate;      
    },
    countDownNumUpdate: function() {        
        this.currentTime = this.totaltime - this.countDownWatch.getElapsedTime() / 1000;
    },
    countDownStart: function() {
        this.countDownWatch.start();
    },
    countDownPause: function() {
        this.countDownWatch.stop();
        this.totaltime = this.currentTime;
    },
};

var PJNum={
    wall1:300,
    
    money1:700,
    pipe1:600,
    hole1:700,
    badflower1:500,
    final1:800,
}

var totalProgressSprite = {
    wall: [
    {
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile:PJNum.wall1+100, //left=progressObj.mileageNum-positionmile   
        physicaltop: 100,
        contain: 0, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, 
    {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile:PJNum.wall1+ 135,
        physicaltop: 100,
        contain: 2, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile:PJNum.wall1+ 170,
        physicaltop: 100,
        contain: 0, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall1+205,
        physicaltop: 100,
        contain: 2, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile: PJNum.wall1+240,
        physicaltop: 100,
        contain: 3, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile:PJNum.wall1+ 275,
        physicaltop: 100,
        contain: 1, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile:PJNum.wall1+ 310,
        physicaltop: 100,
        contain: 0, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile:PJNum.wall1+ 345,
        physicaltop: 100,
        contain: 2, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, 
    {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile: PJNum.wall1+380,
        physicaltop: 100,
        contain: 2, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。

    }
    ],
    money: [
    {
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 100,
        positionmile:PJNum.money1+ 500,
    }, {
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 100,
        positionmile:PJNum.money1+ 600,
    }
    ],
    pipe: [    
     {

        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 0,
        positionmile:PJNum.pipe1+ 440
    },
    {
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 0,
        positionmile:PJNum.pipe1+ 860
    },
    ],
    final: [    
     {

        isVisible: true,
        id: lib.newGuid(),
        physicaltop: -10,
        positionmile: PJNum.final1+940
    }
    ],
    flag:[
    {
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 162,
        positionmile: PJNum.final1+960
    }],
    fire: [],
    badflower: [
    {
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 0,
        positionmile:PJNum.badflower1+800
    },
    ],    
    monster: [ 
    {
        isDie:false,
         isAdd:false,//判断是否加入过数组
        isMonster:true,
        isVisible: true,
        id: lib.newGuid(),       
        positionmile: 690,
       }
       ],
    //mushroom: [],
    tortoise: [
    {
         isAdd:false,//判断是否加入过数组
        isMonster:true,
        isVisible: true,
        id: lib.newGuid(),       
        positionmile: 580,
       }
       ],
    star: [],
    tower: [
    { isReverse:false,
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 0,
        positionmile: -6,
    },
     {
        isReverse:true,
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 0,
        positionmile:PJNum.final1+ 1154,
    }
    ],
    hole: [
    {
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: -33,
        positionmile:PJNum.hole1+ 430
    }
    ],
};

var createFactory = {
    arrayTotalProgress: [],
    //创造升起的金币
    createUpMoney: function(positionmile, physicaltop) {
        var createUpMoneyObj = new Money({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),
            jumpEndCallback: SpriteAnimatorEndCallbackList.moneyupend
        });
        createUpMoneyObj.up(200);
        drawSpriteList.createSpriteList.push(createUpMoneyObj);
    },

    createUpFlower: function(positionmile, physicaltop) {
        var createUpFlowerObj = new Flower({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),
        });
        createUpFlowerObj.up(100);
        drawSpriteList.createSpriteList.push(createUpFlowerObj);
    },
    //创造蘑菇
    createUpMushroom: function(positionmile, physicaltop) {
        var createUpMushroomObj = new Mushroom({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),
        });
        createUpMushroomObj.up(200);
        drawSpriteList.createAnimationSpriteList.push(createUpMushroomObj);
    },
      //创造坏花
    createBadflower: function(setting) {     
         return new BadFlower({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
    //创造star
    createStar: function(positionmile, physicaltop) {
        var createUpStarObj = new Star({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),
            jumpEndCallback: function(sprite) {
                sprite.up(150);
            },
        });
        createUpStarObj.up(200);
        createUpStarObj.move(-70);
        drawSpriteList.createAnimationSpriteList.push(createUpStarObj);
    },

    //创造子弹
    createBullet: function(positionmile, physicaltop, isreverse) {
        var createBulletObj = new Bullet({
            top: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),
        });
        if (isreverse) {
            createBulletObj.jump(-bulletConfig.VX);
        } else {
            createBulletObj.jump(bulletConfig.VX);
        }
        audioControl.audioPlay(gameSourceObj.audioList.jumpAll, gameAudio.fire);

        drawSpriteList.createBulletSpriteList.push(createBulletObj);
    },
    //创造墙
    createWall: function(setting) {
        setting.status = setting.status || 0;
        var wall;
        wall = new Wall({
            id: setting.id,
            contain: setting.contain,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            status: setting.status,
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
        return wall;
    },
    //创造管道
    createPipe: function(setting) {
        return new Pipe({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
    //创造旗杆
    createFinal: function(setting) {
        return new Final({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
      //创造旗帜
    createFlag: function(setting) {
        return new Flag({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            callback:function(){
               drawSpriteList.success();
            },
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
    //创造固定金币
    createMoney: function(setting) {
        return new Money({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,

        });
    },   
    
    //创造砖块
    createBrick: function(positionmile, physicaltop) {
        var arr = ["leftup", "leftdown", "rightup", "rightdown"];
        arr.forEach(function(item) {
            var createUpBrickObj = new Brick({
                id: lib.newGuid(),
                physicaltop: physicaltop,
                positionmile: positionmile,
                status: item,
                jumpEndCallback: SpriteAnimatorEndCallbackList.brickupend,

            });
            createUpBrickObj.up();
            drawSpriteList.createBrickSpriteList.push(createUpBrickObj);
        })

    },
    // //创造坏花
    // createBadflower: function(setting) {

    // },
    //创造花
    createFlower: function(setting) {
        return new Flower({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
    //创造怪兽
    createMonster: function(setting) {
        if(setting.isAdd||setting.isDie){
            return;
        }

        setting.isAdd=true;
        var monster=  new Monster({
                id: setting.id,
               // physicaltop: setting.physicaltop,
                positionmile: setting.positionmile,
                left: setting.positionmile - progressObj.createSpriteMileNum,
            });
         drawSpriteList.createAnimationSpriteList.push(monster); 
    },
    //创造乌龟
    createTortoise: function(setting) {
        if(setting.isAdd||setting.isDie){
            return;
        }
  
        setting.isAdd=true;
        var tortoise=  new Tortoise({
                id: setting.id,               
                positionmile: setting.positionmile,
                left: setting.positionmile - progressObj.createSpriteMileNum,
            });
         drawSpriteList.createAnimationSpriteList.push(tortoise); 
    },


    //创造城堡
    createTower: function(setting) {
return new Tower({
            isReverse:setting.isReverse,
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
    //创造洞
    createHole: function(setting) {
        return new Hole({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
    nameToCreateFun: {
        'wall': 'createWall',
        'money': 'createMoney',
        'pipe': 'createPipe',

        'badflower': 'createBadflower',

        'monster': 'createMonster',
        'tortoise': 'createTortoise',
        'star': 'createStar',
        'tower': 'createTower',
        'final':'createFinal',
        'hole': 'createHole',
        'flag':'createFlag',
    },
    hasId: function(id, spriteList) {
        return spriteList.some(function(item) {
            return item.id == id;
        });
    },
    //从总的数组队列中选择满足条件的对象进行显示。
    insertDrawSpriteList: function(mileageNum, drawSpriteList) {
        drawSpriteList.forEach(function(removeItem) {
            if (!removeItem.visible || (removeItem.positionmile - progressObj.createSpriteMileNum) < -removeItem.width || (removeItem.positionmile - progressObj.createSpriteMileNum) > element.mycanvasWidth) {
                var id = removeItem.id;
                lib.removeByValue(drawSpriteList, 'id', id);
            }
        });
        var self = this;
        var totalProgressArray = this.arrayTotalProgress;
        totalProgressArray.forEach(function(item) {
            if (item.isVisible && (item.positionmile - progressObj.createSpriteMileNum) >= -WH[item.name].width && (item.positionmile - progressObj.createSpriteMileNum) <= element.mycanvasWidth) {
                var id = item.id;
                if (!self.hasId(id, drawSpriteList)) {
                  if(item.isMonster){
                    self[self.nameToCreateFun[item.name]](item);
                  }else{
                     drawSpriteList.push(self[self.nameToCreateFun[item.name]](item));
                 }                   
                }
            }
        });
    },

    init: function() {
        //将所有对象填入到数组中，并进行排列。
        for (var key in totalProgressSprite) {
            totalProgressSprite[key].forEach(function(item) {
                item.name = key;
            })
            this.arrayTotalProgress = this.arrayTotalProgress.concat(totalProgressSprite[key]);
        }
        lib.sort(this.arrayTotalProgress, 'positionmile', 0);
    }
}