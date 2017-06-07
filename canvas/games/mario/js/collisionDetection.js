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

    }
}