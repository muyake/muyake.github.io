var progressObj = {
  mileageNum: 0, //马里奥走的里程
  totaltime: 300, //游戏倒计时
  velocityX: 0,
  currentTime: 300,
  fpsNum: 60,
  countDownWatch: new Stopwatch(),
  mileageNumUpdate: function(fpsNum) {
    this.fpsNum = (fpsNum == 0) ? 0 : (fpsNum || this.fpsNum);
    this.mileageNum += this.velocityX / this.fpsNum;
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

var createFactory = {
  totalProgress: {
    wall: [{
      id: lib.newGuid(),
      status: 0,
      positionmile: 7, //left=progressObj.mileageNum-positionmile   
      physicaltop: 100,
    }, {
      id: lib.newGuid(),
      status: 1,
      positionmile: 400,
      physicaltop: 0,
    }],
    money: [{
      id: lib.newGuid(),
      physicaltop: 100,
      positionmile: 200
    }, {
      id: lib.newGuid(),
      physicaltop: 100,
      positionmile: 1000
    }],
    pipe: [{
      id: lib.newGuid(),
      physicaltop: 0,
      positionmile: 500
    }],
    fire: [],
    badflower: [],
    flower: [],
    monster: [],
    mushroom: [],
    tortoise: [],
    star: [],
    tower: [],
    hole: [],
  },
  //createSpriteList: [],
  createUpMoney: function(left, physicaltop) {
    var createUpMoneyObj = new Money({
      physicaltop: physicaltop,
      left: left,
      jumpEndCallback: SpriteAnimatorEndCallbackList.moneyupend
    });
    createUpMoneyObj.up(200);
    drawSpriteList.createSpriteList.push(createUpMoneyObj);
  },
  createWall: function(setting) {
    setting.status = setting.status || 0;
    var wall;
    switch (setting.status) {
      case 0:
        {
          wall = new Normalwall({
            id: setting.id,
            physicaltop: setting.physicaltop,
            left: -gameConfig.progressObjSpeed * (setting.positionmile - progressObj.mileageNum),
          });
        }
        break;
      case 1:
        {
          wall = new Abnormalwall({
            id: setting.id,
            physicaltop: setting.physicaltop,
            left: -gameConfig.progressObjSpeed * (setting.positionmile - progressObj.mileageNum),
          });
        }
        break;
      case 2:
        {

        }
        break;
    }
    return wall;
  },
  createPipe: function(setting) {
    return new Pipe({
      id: setting.id,
      physicaltop: setting.physicaltop,
      left: -gameConfig.progressObjSpeed * (setting.positionmile - progressObj.mileageNum),
    });
  },
  createMoney: function(setting) {
    return new Money({
      id: setting.id,
      physicaltop: setting.physicaltop,
      left: -gameConfig.progressObjSpeed * (setting.positionmile - progressObj.mileageNum),
    });
  },
  createFire: function(setting) {

  },
  createBadflower: function(setting) {

  },
  createFlower: function(setting) {

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
    // var drawSpriteList = {};
    var self = this;
    var totalProgress = this.totalProgress;
    for (var item in totalProgress) {
      totalProgress[item].forEach(function(itemDraw) {
        if (-gameConfig.progressObjSpeed * (itemDraw.positionmile - progressObj.mileageNum) <= element.mycanvas.width) {
          var id = itemDraw.id;
          if (!self.hasId(id, drawSpriteList[item])) {
            drawSpriteList[item].push(self[self.nameToCreateFun[item]](itemDraw));
          }
        }
      })

    }
  },
}