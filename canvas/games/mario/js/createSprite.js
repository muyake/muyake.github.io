var createFactory={
    createSpriteList:[],
    createMoney:function(left,top){
          var createMoney = new Money({ name: "money"+Date.now(), width: 35, height: 35, top: top, left: left, jumpEndCallback: SpriteAnimatorEndCallbackList.moneyupend });
            createMoney.velocityX = 0;
            createMoney.up(200);
            this.createSpriteList.push(createMoney);
    }
}