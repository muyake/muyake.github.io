//碰撞检测
var CD={
    //马里奥和金币
    judgeMM:function(mario,money,callback){
        if(money.visible==false){
            return;
        }
        // 两个矩形检测
      if ((mario.left + mario.width) < money.left || (money.left + money.width) < mario.left || (mario.top + mario.height) < money.top || (money.top + money.height) < mario.top) {
        return true
      }else{
        callback();
      }

    },
     //马里奥和普通墙
      judgeMNormalWall:function(mario,normalwall,callback){
        if(normalwall.visible==false){
            return;
        }      
        // 两个矩形检测
      if ((mario.left + mario.width) < normalwall.left || (normalwall.left + normalwall.width) < mario.left || (mario.top + mario.height) < normalwall.top || (normalwall.top + normalwall.height) < mario.top) {
        return true
      }else{
        //马里奥在墙的左侧
        if(((mario.left + mario.width) > normalwall.left)&&(mario.left) < normalwall.left){
            mario.left=normalwall.left-mario.width;
            gameConfig.setSpeedZero();
           // normalwall.
        }
         if(((normalwall.left + normalwall.width) > mario.left)&&(mario.left) > normalwall.left){
            mario.left=normalwall.left+normalwall.width;
            gameConfig.setSpeedZero();
           // normalwall.
        }
        callback();
      }

    }
}