var createFactory = {
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

}