var publicConfig = {
  GRAVITY_FORCE: 353 //9.8 * 2 * 18,
    //pixelsPerMeter : element.width / ARENA_LENGTH_IN_METERS,
};
//马里奥动画配置参数
var marioConfig = {
 
  config: {
    totalCount: 21,
    sprite_0: {
      width: 50,
      height: 62,
      left: 5,
      top: 5,
    },

    sprite_1: {
      width: 53,
      height: 68,
      left: 65,
      top: 5,
    },

    sprite_10: {
      width: 50,
      height: 64,
      left: 128,
      top: 5,
    },

    sprite_11: {
      width: 50,
      height: 67,
      left: 188,
      top: 5,
    },

    sprite_12: {
      width: 39,
      height: 68,
      left: 248,
      top: 5,
    },

    sprite_13: {
      width: 35,
      height: 68,
      left: 5,
      top: 83,
    },

    sprite_14: {
      width: 32,
      height: 68,
      left: 50,
      top: 83,
    },

    sprite_15: {
      width: 33,
      height: 68,
      left: 92,
      top: 83,
    },

    sprite_16: {
      width: 32,
      height: 68,
      left: 135,
      top: 83,
    },

    sprite_17: {
      width: 35,
      height: 72,
      left: 177,
      top: 83,
    },

    sprite_18: {
      width: 36,
      height: 73,
      left: 222,
      top: 83,
    },

    sprite_19: {
      width: 44,
      height: 69,
      left: 5,
      top: 166,
    },

    sprite_2: {
      width: 48,
      height: 68,
      left: 59,
      top: 166,
    },

    sprite_20: {
      width: 48,
      height: 65,
      left: 117,
      top: 166,
    },

    sprite_21: {
      width: 49,
      height: 63,
      left: 175,
      top: 166,
    },

    sprite_3: {
      width: 48,
      height: 69,
      left: 234,
      top: 166,
    },

    sprite_4: {
      width: 44,
      height: 68,
      left: 297,
      top: 5,
    },

    sprite_5: {
      width: 39,
      height: 72,
      left: 268,
      top: 83,
    },

    sprite_6: {
      width: 40,
      height: 71,
      left: 292,
      top: 165,
    },

    sprite_7: {
      width: 44,
      height: 68,
      left: 5,
      top: 246,
    },

    sprite_8: {
      width: 50,
      height: 63,
      left: 59,
      top: 246,
    },
    sprite_9: {
      width: 53,
      height: 63,
      left: 119,
      top: 246,
    }
  }
};

var bulletConfig={
  RV:980,//旋转角速度
  VX:240,
};
var WH = {
  wall: {
    width: 35,
    height: 35
  },

   bullet: {
    width: 24,
    height: 24
  },
  MAX: {
    width: 45
  },
  flower: {
    width: 35,
    height: 35
  },
   star: {
    width: 35,
    height: 35
  },
  mushroom: {
    width: 35,
    height: 35
  },
  money: {
    width: 35,
    height: 35
  },
  mario: {
    bigstatus:{
       width: 33,
     height: 68
    },
    smallstatus:{
        width: 33*0.5,
     height: 68*0.5
   }  
  },
  pipe: {
    width: 45,
    height: 94
  },
}
var wallConfig = {
  normalSprite: {
    width: 50,
    height: 50,
    left: 215,
    top: 0
  },
  abnormalwall: {
    height: 50,
    width: 50,
    left: 115,
    top: 0
  },

  afterabnormalSprite: {
    height: 50,
    width: 50,
    left: 165,
    top: 0
  },
  leftupSprite: {
    height: 23,
    width: 23,
    left: 0,
    top: 0
  },
  leftdownSprite: {
    height: 30,
    width: 30,
    left: 51,
    top: 0
  },
  rightupSprite: {
    height: 33,
    width: 35,
    left: 80,
    top: 0
  },
  rightdownSprite: {
    height: 30,
    width: 28,
    left: 23,
    top: 0
  },
}

var marioGameConfig = {
  bigJumpV: 320,
  smallJumpV: 220,
}
var element = {
  mycanvas: document.getElementById('mycanvas'),
  progressDiv: document.getElementById('load'),
  tipDiv: document.querySelector('.tip'),
};
var gameConfig = {
  // wallSpeed: 90,  // moneySpeed:90,

  objectSpeed: 90*1.5,
  progressObjSpeed: -2,
  skySpeed: 32,
  setSpeedDefault: function() {
    this.objectSpeed = 90;
    this.progressObjSpeed = -2;
    this.skySpeed = 32;
  },
  setSpeedZero: function() {
    this.objectSpeed = 0;
    this.progressObjSpeed = 0;
    this.skySpeed = 0;
  },

  roadHeight: 10,

}