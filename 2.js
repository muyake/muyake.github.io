var canvas = document.getElementById('mycanvas'),
	ctx = canvas.getContext('2d'),
	w,
	h,
	maxCloudVelocity = 1,
	FRAMESPEED = 4;
var TOTALFRAME = 276;
var TOTALTIME = FRAMESPEED * TOTALFRAME;
var totalProgress = 0;
var spriteOption = {
	planet: {
		width: 750,
		height: 456,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 483
	},
	balloon1: {
		width: 134,
		height: 274,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 0
	},
	balloon2: {
		width: 141,
		height: 254,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 0
	},
	balloon3: {
		width: 186,
		height: 344,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 0
	},
	balloon4: {
		width: 117,
		height: 224,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 0
	},
	balloon5: {
		width: 45,
		height: 112,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 0
	},
	star: {
		width: 81,
		height: 86,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 0
	},
	cloud: {
		width: 313,
		height: 302,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 0
	},
	totalcloud: {
		width: 750,
		height: 604,
		imgx: 0,
		imgy: 0,
		x: 0,
		y: 0
	}
};
var starSpriteOption = [{
	left: 558,
	top: 569,
	scale: 1,
	startframe: 0,
	endframe: 72,
	flashCount: 6,
}, {
	left: 113,
	top: 708,
	scale: 0.4,
	startframe: 7,
	endframe: 79,
}, {
	left: 270,
	top: 755,
	scale: 0.6,
	startframe: 12,
	endframe: 84,
}, {
	left: 397,
	top: 427,
	scale: 0.4,
	startframe: 15,
	endframe: 87,
}, {
	left: 568,
	top: 827,
	scale: 0.4,
	startframe: 85,
	endframe: 157,
}, {
	left: 141,
	top: 254,
	scale: 0.8,
	startframe: 65,
	endframe: 197,
	flashCount: 14,
}, {
	left: 642,
	top: 427,
	scale: 0.8,
	flashCount: 10,
	startframe: 35,
	endframe: 190,
}, {
	left: 430,
	top: 226,
	scale: 0.8,
	startframe: 75,
	endframe: 147,
}, {
	left: 139,
	top: 939,
	scale: 0.6,
	startframe: 48,
	endframe: 185,
	flashCount: 10,
}, {
	left: 659,
	top: 1037,
	scale: 0.7,
	startframe: 55,
	endframe: 127,
}];
var ImageUrlList = {
	planet: "planet.png",
	balloon1: "balloon1.png",
	balloon2: "balloon2.png",
	balloon3: "balloon3.png",
	balloon4: "balloon4.png",
	balloon5: "balloon5.png",
	star: "star.png",
	cloud: "cloud.png",
	//totalcloud: "./img/cloud.png",
	totalcloud: "./img/yanwu.png",
};
var balloonSpriteOption = [{
		url: "balloon1.png",
		balloon: spriteOption.balloon1,
		top: h,
		left: 220,
		endLeft: 220,
		scale: 1,
		startframe: 0,
		endframe: 72,
	}, {
		url: "balloon5.png",
		balloon: spriteOption.balloon5,
		top: h,
		left: -5,
		endLeft: -25,
		scale: 1,
		startframe: 8,
		endframe: 66,
	}, {
		url: "balloon4.png",
		balloon: spriteOption.balloon4,
		top: h,
		left: 326,
		endLeft: 326,
		scale: 1,
		startframe: 13,
		endframe: 158,
	}, {
		url: "balloon1.png",
		balloon: spriteOption.balloon1,
		top: h,
		left: 308,
		endLeft: 489,
		scale: 1.3,
		startframe: 27,
		endframe: 90,
	}, {
		url: "balloon3.png",
		balloon: spriteOption.balloon3,
		top: h,
		left: 161,
		endLeft: 278,
		scale: 0.8,
		startframe: 38,
		endframe: 128,
	},
	//{
	// 	url: "balloon3.png",
	// 	balloon: spriteOption.balloon3,
	// 	top: h,
	// 	left: 220,
	// 	endLeft: 440,
	// 	scale: 1,
	// 	startframe: 38,
	// 	endframe: 104,
	// },
	// {
	// 	url: "balloon2.png",
	// 	balloon: spriteOption.balloon2,
	// 	top: h,
	// 	left: -40,
	// 	endLeft: 114,
	// 	scale: 0.9,
	// 	startframe: 45,
	// 	endframe: 117,
	// },
	{
		url: "balloon2.png",
		balloon: spriteOption.balloon2,
		top: h,
		left: -40,
		endLeft: 114,
		scale: 0.9,
		startframe: 45,
		endframe: 117,
	}, {
		url: "balloon4.png",
		balloon: spriteOption.balloon4,
		top: h,
		left: 126,
		endLeft: 640,
		scale: 0.9,
		startframe: 48,
		endframe: 154,
	},
	//  {
	// 	url: "balloon2.png",
	// 	balloon: spriteOption.balloon2,
	// 	top: h,
	// 	left: 476,
	// 	endLeft: 350,
	// 	scale: 0.8,
	// 	startframe: 53,
	// 	endframe: 122,
	// },
	{
		url: "balloon2.png",
		balloon: spriteOption.balloon2,
		top: h,
		left: 358,
		endLeft: -30,
		scale: 1,
		startframe: 53,
		endframe: 140,
	}, {
		url: "balloon4.png",
		balloon: spriteOption.balloon4,
		top: h,
		left: 306,
		endLeft: -560,
		scale: 1,
		startframe: 59,
		endframe: 120,
	}, {
		url: "balloon4.png",
		balloon: spriteOption.balloon4,
		top: h,
		left: 311,
		endLeft: 176,
		scale: 1.2,
		startframe: 59,
		endframe: 150,
	}, {
		url: "balloon2.png",
		balloon: spriteOption.balloon2,
		top: h,
		left: 427,
		endLeft: 176,
		scale: 1.2,
		startframe: 79,
		endframe: 166,
	}
	// , {
	// 	url: "balloon1.png",
	// 	balloon: spriteOption.balloon1,
	// 	top: h,
	// 	left: -spriteOption.balloon1.width * 1 + 50,
	// 	endLeft: -spriteOption.balloon1.width * 1 + 100,
	// 	scale: 1,
	// 	startframe: 116,
	// 	endframe: 160,
	// }
	// , {
	// 	url: "balloon2.png",
	// 	balloon: spriteOption.balloon2,
	// 	top: h,
	// 	left: -40,
	// 	endLeft: 70,
	// 	scale: 1.2,
	// 	startframe: 88,
	// 	endframe: 150,
	// }
	// , 
	// {
	// 	url: "balloon3.png",
	// 	balloon: spriteOption.balloon3,
	// 	top: 381,
	// 	left: -spriteOption.balloon3.width,
	// 	endLeft: 66,
	// 	scale: 1,
	// 	startframe: 116,
	// 	endframe: 160,
	// }
]
var imgageObjList = [];
var balloonList = [];
var planetSprite;
var cloudSprite1;
var cloudSprite2;
var moveBottomToTop = function(progress, startTime) {
	this.progress = progress;
	this.startTime = startTime;
	this.execute = function(sprite, context, currentTime) {
		if (currentTime > this.startTime && this.progress >= 0) {
			sprite.top -= sprite.velocityY;
		}
		this.progress--;
	}
}
var balloonMoveBottomToTop = function(progress, startTime) {
		this.progress = progress;
		this.startTime = startTime;
		this.execute = function(sprite, context, currentTime) {
			if (currentTime > this.startTime && sprite.top > -sprite.height) {
				sprite.visible = true;
				sprite.top -= sprite.velocityY;
				sprite.left += sprite.velocityX;
			} else {
				sprite.visible = false;
			}
		}
	}
	//云彩的运动
var moveLeftToRight = function(progress, startTime) {
	this.progress = progress;
	this.startTime = startTime;
	this.execute = function(sprite, context, currentTime) {

		if (currentTime > this.startTime && this.progress >= 0) {
			// 如果到了右边缘
			if (sprite.left >= w) {
				sprite.velocityX = -sprite.velocityX;
				sprite.left = w;
			}
			// 检测是否到了左边缘
			else if (sprite.left <= 0) {
				sprite.velocityX = -sprite.velocityX;
				sprite.left = 0;
			}
			// 底边缘
			if (sprite.top >= h) {
				sprite.velocityY = -sprite.velocityY;
				sprite.top = h;
			}

			// 是否上边缘
			else if (sprite.top <= h - sprite.height) {
				sprite.velocityY = -sprite.velocityY;
				sprite.top = h - sprite.height;
			}
			sprite.alpha = (h - sprite.top) / sprite.height;
			sprite.left -= sprite.velocityX;
			sprite.top -= sprite.velocityY;
		}
		sprite.progress--;
	}
}
var totalLeftToRight = function(progress, startTime) {
	this.progress = progress;
	this.startTime = startTime;
	this.execute = function(sprite, context, currentTime) {

		if (currentTime > this.startTime && this.progress >= 0) {
			// 如果到了右边缘			
			sprite.left -= sprite.velocityX;
			sprite.width += 0.1;
			sprite.height += 0.1;
			//sprite.top -= sprite.velocityY;
		}
		this.progress--;
	}
}
var flash = function(progress, startTime, flashCount) {
	this.progress = progress;
	this.duringTime = progress;
	this.startTime = startTime;
	this.index = 0;
	this.execute = function(sprite, context, currentTime) {
		if (currentTime > this.startTime && this.progress >= 0) {
			sprite.visible = true;
			sprite.alpha = getalpha(currentTime, this.startTime, this.duringTime, flashCount);

			//sprite.alpha = Math.abs(curveFunction.sineEaseOut(currentTime - this.startTime, 0, 1, this.duringTime / flashCount));
			this.progress--;
		} else {
			sprite.visible = false;
		}
	}
}

function getalpha(currentTime, startTime, duringTime, flashCount) {
	var x = currentTime - startTime;
	var everyDuringTime = duringTime / (flashCount / 2);
	var m = x % everyDuringTime;
	var result = 0;
	var n = everyDuringTime / 2;
	if (m > n) {
		result = curveFunction.linear((m - n), 1, -1, n);
	} else {
		result = curveFunction.linear(m, 0, 1, n);
	}
	return result;
}
var cloudSpriteList = [];

//星星的闪烁
var starSpriteList = [];
//气球
var balloonSpriteList = [];

// loadImg(ImageUrlList, init, imgageObjList);

function animation() {
	if (totalProgress < TOTALTIME) {
		totalProgress++;
		ctx.globalCompositeOperation = "source-over";
		ctx.clearRect(0, 0, w, h);
		ctx.save();


		planetSprite.update(ctx, totalProgress);
		planetSprite.paint(ctx);
		starSpriteList.forEach(function(item, index) {
			item.update(ctx, totalProgress);
			item.paint(ctx, totalProgress);
		});
		balloonSpriteList.forEach(function(item, index) {
			item.update(ctx, totalProgress);
			item.paint(ctx, totalProgress);
		});
		cloudSprite1.update(ctx, totalProgress);
		cloudSprite1.paint(ctx);
		ctx.restore();
		requestAnimFrame(animation);
	} else {
		ctx.clearRect(0, 0, w, h);
		entTime = Date.now();
		alert((entTime - startTime) / 1000);
		console.log("动画结束");
	}
}
var startTime = Date.now();
var entTime;

function init() {
	var canvasParentWidth = canvas.parentNode.clientWidth;
	var canvasParentHeight = canvas.parentNode.clientHeight;
	canvas.width = 750;
	canvas.height = 750 * canvasParentHeight / canvasParentWidth;
	w = 750;
	h = canvas.height;
	var planetframeStart = 5;
	var planetframeEnd = 60;
	var planetframeDuringTime = (planetframeEnd - planetframeStart) * FRAMESPEED;
	planetSprite = new Sprite('星球', new ImagePainter(ImageUrlList.planet, spriteOption.planet.imgx, spriteOption.planet.imgy, spriteOption.planet.width, spriteOption.planet.height), [new moveBottomToTop(planetframeDuringTime, 0)]);
	planetSprite.init = function() {
		planetSprite.width = spriteOption.planet.width;
		planetSprite.height = spriteOption.planet.height;
		planetSprite.top = (h + 100);
		planetSprite.left = 0;
		planetSprite.velocityY = (planetSprite.height + 100) / planetframeDuringTime;
	}
	planetSprite.init();


	var cloudframeDuringTime = (40 - 0) * FRAMESPEED;
	cloudSprite1 = new Sprite('yun1', new ImagePainter(ImageUrlList.totalcloud, spriteOption.totalcloud.imgx, spriteOption.totalcloud.imgy, spriteOption.totalcloud.width, spriteOption.totalcloud.height), [new moveBottomToTop(cloudframeDuringTime, 0), new totalLeftToRight(4540, 0)]);
	cloudSprite1.init = function() {
		cloudSprite1.width = spriteOption.totalcloud.width * 5.5;
		cloudSprite1.height = spriteOption.totalcloud.height * 2;
		cloudSprite1.top = h + 50;
		cloudSprite1.left = -spriteOption.totalcloud.width * 2.5;
		cloudSprite1.velocityX = 0.5;
		cloudSprite1.velocityY = cloudSprite1.height / 2 / cloudframeDuringTime;
	}
	cloudSprite1.init();


	for (var i = 0; i < 10; i++) {
		var cloudSprite = new Sprite('cloud' + i, new ImagePainter(ImageUrlList.cloud, spriteOption.cloud.imgx, spriteOption.cloud.imgy, spriteOption.cloud.width, spriteOption.cloud.height), [new moveLeftToRight(4540, 0)]);
		cloudSprite.init = function() {
			this.width = spriteOption.cloud.width * generateRandom(0.5, 1);
			this.height = spriteOption.cloud.height * generateRandom(0.5, 1);
			this.left = generateRandom(0, w);
			this.velocityX = generateRandom(0.5, 1);
			this.velocityY = generateRandom(0.5, 1);
			this.top = h + this.height * generateRandom(0.5, 1);
		}
		cloudSpriteList.push(cloudSprite);
	}
	cloudSpriteList.forEach(function(item, index) {
		item.init();
	});

	starSpriteOption.forEach(function(item, index) {
		var startTime = FRAMESPEED * (item.startframe + 50);
		var flashCount = item.flashCount || 6;
		var duringTime = FRAMESPEED * ((item.endframe + 50) - item.startframe);
		var sprite = new Sprite('星星' + index, new ImagePainter(ImageUrlList.star, spriteOption.star.imgx, spriteOption.star.imgy, spriteOption.star.width, spriteOption.star.height), [new flash(duringTime, startTime, flashCount)]);
		sprite.top = item.top;
		sprite.left = item.left;
		sprite.width = spriteOption.star.width * item.scale;
		sprite.height = spriteOption.star.height * item.scale;
		starSpriteList.push(sprite);
	});
	balloonSpriteOption.forEach(function(item, index) {
		var startTime = FRAMESPEED * (item.startframe + 60);
		var duringTime = FRAMESPEED * ((item.endframe + 60) - item.startframe);
		var sprite = new Sprite('气球' + index, new ImagePainter(item.url, item.balloon.imgx, item.balloon.imgy, item.balloon.width, item.balloon.height), [new balloonMoveBottomToTop(duringTime, startTime)]);
		item.top = h;
		sprite.top = item.top;
		sprite.left = item.left;
		sprite.width = item.balloon.width * item.scale;
		sprite.height = item.balloon.height * item.scale;
		sprite.velocityY = (item.top + sprite.height) / duringTime;
		sprite.velocityX = (item.endLeft - item.left) / duringTime;
		balloonSpriteList.push(sprite);
	})
	animation();
}