var canvasID = 'mycanvas';
var canvas = document.getElementById(canvasID),
	ctx = canvas.getContext('2d'),
	w,
	h,
	maxCloudVelocity = 1,
	FRAMESPEED = 4;
var cloneCanvas;
var cloneCanvasHide = true;
var TOTALFRAME = 276;
var TOTALTIME = FRAMESPEED * TOTALFRAME;
var DELAYFRAME = 50;
var STARANDBALLOON = FRAMESPEED * DELAYFRAME;
var totalProgress = 0;

var planetframeStart = 0;
var planetframeEnd = 55;
var planetframeDuringTime = (planetframeEnd - planetframeStart) * FRAMESPEED;
var imgageObjList = [];
var balloonList = [];
var planetSprite;
var cloudSprite1;

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
		imgx: 5,
		imgy: 5,
		x: 0,
		y: 0
	},
	balloon2: {
		width: 141,
		height: 254,
		imgx: 149,
		imgy: 5,
		x: 0,
		y: 0
	},
	balloon3: {
		width: 186,
		height: 344,
		imgx: 300,
		imgy: 5,
		x: 0,
		y: 0
	},
	balloon4: {
		width: 117,
		height: 224,
		imgx: 496,
		imgy: 5,
		x: 0,
		y: 0
	},
	balloon5: {
		width: 45,
		height: 112,
		imgx: 496,
		imgy: 229,
		x: 0,
		y: 0
	},
	star: {
		width: 81,
		height: 86,
		imgx: 5,
		imgy: 351,
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
	left: 659,
	top: 1037,
	scale: 0.7,
	startframe: 55,
	endframe: 127,
}];
var ImageUrlList = {
	planet: "./total/planet.png",
	spritesheetBalloons: "./total/spritesheetBalloons.png",
	totalcloud: "./total/yanwu.png"
};
var balloonSpriteOption = [{
	balloon: spriteOption.balloon1,
	top: h,
	left: 220,
	endLeft: 220,
	scale: 1,
	startframe: 0,
	endframe: 102,
}, {
	balloon: spriteOption.balloon5,
	top: h,
	left: -5,
	endLeft: -25,
	scale: 1,
	startframe: 8,
	endframe: 110,
}, {
	balloon: spriteOption.balloon4,
	top: h,
	left: 326,
	endLeft: 326,
	scale: 1,
	startframe: 13,
	endframe: 102,
}, {
	balloon: spriteOption.balloon1,
	top: h,
	left: 308,
	endLeft: 489,
	scale: 1.3,
	startframe: 27,
	endframe: 120,
}, {
	balloon: spriteOption.balloon2,
	top: h,
	left: -40,
	endLeft: 114,
	scale: 0.9,
	startframe: 45,
	endframe: 147,
}, {
	balloon: spriteOption.balloon4,
	top: h,
	left: 126,
	endLeft: 640,
	scale: 0.9,
	startframe: 48,
	endframe: 154,
}, {
	balloon: spriteOption.balloon2,
	top: h,
	left: 358,
	endLeft: -30,
	scale: 1,
	startframe: 53,
	endframe: 140,
}, {
	balloon: spriteOption.balloon4,
	top: h,
	left: 306,
	endLeft: -560,
	scale: 1,
	startframe: 59,
	endframe: 120,
}, {
	balloon: spriteOption.balloon3,
	top: h,
	left: 161,
	endLeft: 278,
	scale: 0.8,
	startframe: 38,
	endframe: 158,
}]

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
			sprite.alpha = Math.abs(curveFunction.sineEaseOut(currentTime - this.startTime, 0, 1, this.duringTime / flashCount));
			context.globalAlpha = sprite.alpha;
			this.progress--;
		} else {
			sprite.visible = false;
		}
	}
}

var cloudSpriteList = [];

//星星的闪烁
var starSpriteList = [];
//气球
var balloonSpriteList = [];
var startTime = Date.now();
var endTime;

function animation() {
	if (totalProgress < TOTALTIME) {
		totalProgress++;
		ctx.clearRect(0, 0, w, h);
		if (planetframeDuringTime >= totalProgress) {
			planetSprite.update(ctx, totalProgress);
			planetSprite.paint(ctx);
		} else if (cloneCanvasHide) {
			var cloneCtx = cloneCanvas.getContext('2d');
			planetSprite.update(cloneCtx, totalProgress);
			planetSprite.paint(cloneCtx);
			cloneCanvas.style.display = 'block';
			//canvas.style.display = 'none';
			cloneCanvasHide = false;
		}

		if (totalProgress > STARANDBALLOON) {
			ctx.save();
			starSpriteList.forEach(function(item, index) {
				item.update(ctx, totalProgress);
				item.paint(ctx, totalProgress);
			});
			ctx.restore();
			balloonSpriteList.forEach(function(item, index) {
				item.update(ctx, totalProgress);
				item.paint(ctx, totalProgress);
			});
		}
		cloudSprite1.update(ctx, totalProgress);
		cloudSprite1.paint(ctx);
		requestAnimFrame(animation);
	} else {
		//endTime = Date.now();
		//alert((endTime - startTime) / 1000)
		ctx.clearRect(0, 0, w, h);
	}
}

function init() {
	var canvasParentWidth = canvas.parentNode.clientWidth;
	var canvasParentHeight = canvas.parentNode.clientHeight;
	canvas.width = 750;
	canvas.height = 750 * canvasParentHeight / canvasParentWidth;
	w = 750;
	h = canvas.height;
	cloneCanvas();



	planetSprite = new Sprite('星球', new ImagePainter(imgageObjList.planet, spriteOption.planet.imgx, spriteOption.planet.imgy, spriteOption.planet.width, spriteOption.planet.height), [new moveBottomToTop(planetframeDuringTime, 0)]);
	planetSprite.init = function() {
		planetSprite.width = spriteOption.planet.width;
		planetSprite.height = spriteOption.planet.height;
		planetSprite.top = (h + 100);
		planetSprite.left = 0;
		planetSprite.velocityY = (planetSprite.height + 95) / planetframeDuringTime;
	}
	planetSprite.init();
	var cloudframeDuringTime = (40 - 0) * FRAMESPEED;
	cloudSprite1 = new Sprite('yun1', new ImagePainter(imgageObjList.totalcloud, spriteOption.totalcloud.imgx, spriteOption.totalcloud.imgy, spriteOption.totalcloud.width, spriteOption.totalcloud.height), [new moveBottomToTop(cloudframeDuringTime, 0), new totalLeftToRight(4540, 0)]);
	cloudSprite1.init = function() {
		cloudSprite1.width = spriteOption.totalcloud.width * 5.5;
		cloudSprite1.height = spriteOption.totalcloud.height * 2;
		cloudSprite1.top = h + 50;
		cloudSprite1.left = -spriteOption.totalcloud.width * 2.5;
		cloudSprite1.velocityX = 0.5;
		cloudSprite1.velocityY = cloudSprite1.height / 2 / cloudframeDuringTime;
	}
	cloudSprite1.init();
	starSpriteOption.forEach(function(item, index) {
		var startTime = FRAMESPEED * (item.startframe + 50);
		var flashCount = item.flashCount || 6;
		var duringTime = FRAMESPEED * ((item.endframe + 50) - item.startframe);
		var sprite = new Sprite('星星' + index, new ImagePainter(imgageObjList.spritesheetBalloons, spriteOption.star.imgx, spriteOption.star.imgy, spriteOption.star.width, spriteOption.star.height), [new flash(duringTime, startTime, flashCount)]);
		sprite.top = item.top;
		sprite.left = item.left;
		sprite.width = spriteOption.star.width * item.scale;
		sprite.height = spriteOption.star.height * item.scale;
		starSpriteList.push(sprite);
	});
	balloonSpriteOption.forEach(function(item, index) {
		var startTime = FRAMESPEED * (item.startframe + 50);
		var duringTime = FRAMESPEED * ((item.endframe + 30 + 50) - item.startframe);
		var sprite = new Sprite('气球' + index, new ImagePainter(imgageObjList.spritesheetBalloons, item.balloon.imgx, item.balloon.imgy, item.balloon.width, item.balloon.height), [new balloonMoveBottomToTop(duringTime, startTime)]);
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

function cloneCanvas() {
	cloneCanvas = canvas.cloneNode();
	cloneCanvas.id = 'cloneCanvas';
	cloneCanvas.innerHTML = 'cloneCanvas';
	cloneCanvas.style.position = 'absolute';
	cloneCanvas.style.left = canvas.offsetLeft + 'px';
	cloneCanvas.style.top = canvas.offsetTop + 'px';
	cloneCanvas.style.zIndex = -1;
	cloneCanvas.style.display = "none";
	var parentCanvas = canvas.parentNode;
	parentCanvas.insertBefore(cloneCanvas, canvas);
}