var progressObj = {
    mileageNum: 0, //马里奥走的里程
    totaltime: 300, //游戏倒计时
    velocityX: 0,
    currentTime: 300,
    fpsNum: 60,
    countDownWatch: new Stopwatch(),
    createSpriteMileNum: 0,
    mileageNumUpdate: function(fpsNum) {
        this.fpsNum = (fpsNum == 0) ? 0 : (fpsNum || this.fpsNum);
        this.mileageNum += this.velocityX / this.fpsNum;
        var temp = gameConfig.objectSpeed * lib.getSign(this.velocityX) / this.fpsNum;
        if (isNaN(temp)) {
            var i = 33;
        } else {
            this.createSpriteMileNum += temp;
        }

    },
    countDownNumUpdate: function() {
        //this.fpsNum = (fpsNum == 0) ? 0 : (fpsNum || this.fpsNum);
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

var totalProgressSprite = {
    wall: [{
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile: 100, //left=progressObj.mileageNum-positionmile   
        physicaltop: 100,
        contain: 0, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile: 135,
        physicaltop: 100,
        contain: 2, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile: 170,
        physicaltop: 100,
        contain: 0, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile: 205,
        physicaltop: 100,
        contain: 2, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile: 240,
        physicaltop: 100,
        contain: 3, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile: 275,
        physicaltop: 100,
        contain: 1, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    },{
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile: 310,
        physicaltop: 100,
        contain: 0, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    },{
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile: 345,
        physicaltop: 100,
        contain: 4, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    },{
        isVisible: true,
        id: lib.newGuid(),
        status: 0,
        positionmile: 380,
        physicaltop: 100,
        contain: 0, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }],
    money: [{
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 100,
        positionmile: 500
    }, {
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 100,
        positionmile: 1000
    }],
    pipe: [{
        isVisible: true,
        id: lib.newGuid(),
        physicaltop: 0,
        positionmile: 600
    }],
    
    badflower: [],   
    monster: [],
    //mushroom: [],
    tortoise: [],
    star: [],
    tower: [],
    hole: [],
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
    //创造花朵
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
    //创造star
    createStar: function(positionmile, physicaltop) {
        var createUpStarObj = new Star({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),  
            jumpEndCallback:function(sprite){
                sprite.up(150);                              
            },      
        });
        createUpStarObj.up(200);
        createUpStarObj.move(-70); 
        drawSpriteList.createAnimationSpriteList.push(createUpStarObj);
    },
    //创造子弹
    createBullet: function(positionmile, physicaltop,isreverse) {
        var createBulletObj = new Bullet({
            top: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),          
        });
        if(isreverse){
             createBulletObj.jump(-bulletConfig.VX);
        }else{
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
   //创造坏花
    createBadflower: function(setting) {

    },
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

    },   
    //创造乌龟
    createTortoise: function(setting) {

    },
    
   
    //创造城堡
    createTower: function(setting) {

    },
    //创造洞
    createHole: function(setting) {

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
        'hole': 'createHole'
    },
    hasId: function(id, spriteList) {
        return spriteList.some(function(item) {
            return item.id == id;
        });
    },
    //从总的数组队列中选择满足条件的对象进行显示。
    insertDrawSpriteList: function(mileageNum, drawSpriteList) {
        drawSpriteList.forEach(function(removeItem) {
            if (!removeItem.visible || (removeItem.positionmile - progressObj.createSpriteMileNum) < -removeItem.width || (removeItem.positionmile - progressObj.createSpriteMileNum) > element.mycanvas.width) {
                var id = removeItem.id;
                lib.removeByValue(drawSpriteList, 'id', id);
            }
        });
        var self = this;
        var totalProgressArray = this.arrayTotalProgress;
        totalProgressArray.forEach(function(item) {
            if (item.isVisible && (item.positionmile - progressObj.createSpriteMileNum) >= -WH[item.name].width && (item.positionmile - progressObj.createSpriteMileNum) <= element.mycanvas.width) {
                var id = item.id;
                if (!self.hasId(id, drawSpriteList)) {
                    drawSpriteList.push(self[self.nameToCreateFun[item.name]](item));
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
