var createFactory = {
	createSpriteList: [],
	createUpMoney: function(left, top) {
		var createUpMoneyObj = new Money({
			name: "money" + Date.now(),
			width: 35,
			height: 35,
			top: top,
			left: left,
			jumpEndCallback: SpriteAnimatorEndCallbackList.moneyupend
		});
		createUpMoneyObj.velocityX = 0;
		createUpMoneyObj.up(200);
		this.createSpriteList.push(createUpMoneyObj);
	},

}