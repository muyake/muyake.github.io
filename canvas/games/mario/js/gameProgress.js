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
        contain: 1, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile: 205,
        physicaltop: 100,
        contain: 3, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
    }, {
        isVisible: true,
        id: lib.newGuid(),
        status: 1,
        positionmile: 170,
        physicaltop: 100,
        contain: 2, //0代表没有东西,1代表金币，2代表蘑菇，3代表花，4代表星星。
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
        positionmile: 500
    }],
    fire: [],
    badflower: [],
    flower: [
        // {
        //     isVisible: true,
        //     id: lib.newGuid(),
        //     positionmile: 135,
        //     physicaltop: 50,
        // }
    ],
    monster: [],
    mushroom: [],
    tortoise: [],
    star: [],
    tower: [],
    hole: [],
};

var createFactory = {
    arrayTotalProgress: [],

    createUpMoney: function(positionmile, physicaltop) {
        var createUpMoneyObj = new Money({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),
            // left: positionmile-,
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

            jumpEndCallback: SpriteAnimatorEndCallbackList.floserupend
        });
        createUpFlowerObj.up(100);
        drawSpriteList.createSpriteList.push(createUpFlowerObj);
    },
    createUpMushroom: function(positionmile, physicaltop) {
        var createUpMushroomObj = new Mushroom({
            physicaltop: physicaltop,
            positionmile: positionmile,
            id: lib.newGuid(),

            jumpEndCallback: SpriteAnimatorEndCallbackList.mushroomupend
        });
        createUpMushroomObj.up(100);
        drawSpriteList.createAnimationSpriteList.push(createUpMushroomObj);
    },
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
    createPipe: function(setting) {
        return new Pipe({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            //left: setting.positionmile - progressObj.mileageNum*Math.abs(gameConfig.objectSpeed/ gameConfig.progressObjSpeed),
            left: setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
    createMoney: function(setting) {
        return new Money({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,
            // left:setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
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
    createFire: function(setting) {

    },
    createBadflower: function(setting) {

    },
    createFlower: function(setting) {
        return new Flower({
            id: setting.id,
            physicaltop: setting.physicaltop,
            positionmile: setting.positionmile,
            left: setting.positionmile - progressObj.createSpriteMileNum,
            // left:setting.positionmile - progressObj.createSpriteMileNum,
        });
    },
    createMonster: function(setting) {

    },
    createMushroom: function(setting) {

    },
    createTortoise: function(setting) {

    },
    createStar: function(setting) {

    },
    createTower: function(setting) {

    },
    createHole: function(setting) {

    },
    nameToCreateFun: {
        'wall': 'createWall',
        'money': 'createMoney',
        'pipe': 'createPipe',
        'fire': 'createFire',
        'badflower': 'createBadflower',
        'flower': 'createFlower',
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
    setVisible: function(mileageNum, drawSpriteList) {

    },
    init: function() {
        for (var key in totalProgressSprite) {
            totalProgressSprite[key].forEach(function(item) {
                item.name = key;
            })
            this.arrayTotalProgress = this.arrayTotalProgress.concat(totalProgressSprite[key]);
        }
        lib.sort(this.arrayTotalProgress, 'positionmile', 0);
    }
}
