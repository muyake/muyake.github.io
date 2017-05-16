var canvas = document.getElementById('mycanvas'),
	ctx = canvas.getContext('2d'),
	w = canvas.width,
	h = canvas.height,
	ANIMATION_DURATION = 20000,
	pushTimer = new AnimationTimer(ANIMATION_DURATION);
var NUM_EXPLOSION_PAINTERS = 9,
<<<<<<< HEAD
	NUM_FUSE_PAINTERS = 9;
=======
	NUM_FUSE_PAINTERS = 9,
	GRAVITY_FORCE = 9.81;
var jumbFlag = false;
>>>>>>> gh-pages
var imgUrlList = {
	ye1: '../img/ye1.png',
	ye2: '../img/ye2.png',
	ye3: '../img/ye3.png',
	ye4: '../img/ye4.png',
	ye5: '../img/ye5.png',
	ye6: '../img/ye6.png',
	clode: '../img/sky.png',
	tree: '../img/tree.png',
	photo01: '../img/photo01.jpg',
	runpeople: '../img/runpeople.png'
};

for (var i = 0; i < NUM_FUSE_PAINTERS; ++i) {
	imgUrlList['fuse-0' + i] = '../img/imgBoom/fuse-0' + i + '.png';
}

for (var i = 0; i < NUM_EXPLOSION_PAINTERS; ++i) {
	imgUrlList['explosion-0' + i] = '../img/imgBoom/explosion-0' + i + '.png';
}


var imgList = {};
runnerCells = [{
	left: 0,
	top: 0,
	width: 47,
	height: 64
}, {
	left: 55,
	top: 0,
	width: 44,
	height: 64
}, {
	left: 107,
	top: 0,
	width: 39,
	height: 64
}, {
	left: 150,
	top: 0,
	width: 46,
	height: 64
}, {
	left: 208,
	top: 0,
	width: 49,
	height: 64
}, {
	left: 265,
	top: 0,
	width: 46,
	height: 64
}, {
	left: 320,
	top: 0,
	width: 42,
	height: 64
}, {
	left: 380,
	top: 0,
	width: 35,
	height: 64
}, {
	left: 425,
	top: 0,
	width: 35,
	height: 64
}];


var runInPlace = {
	lastAdvance: 0,
	PAGEFLIP_INTERVAL: 100,
	execute: function(sprite, context, time) {
		if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
			sprite.painter.advance();
			this.lastAdvance = time;
		}
	}
};

var moveLetfToRight = function() {
	this.lastMove = 0;
	this.firstSetp = 0;
	this.execute = function(sprite, context, time) {
		if (this.lastMove !== 0 && this.firstSetp !== 0) {
			sprite.left += sprite.velocityX * ((time - this.lastMove) / 300);
			if (sprite.left > w) {
				sprite.left = -sprite.width;
			}
		}
		this.firstSetp = time;
		//this.escape = 0;
		this.lastMove = time;
	}
}

var moveRightToLeft = function() {
	this.lastMove = 0;
	this.firstSetp = 0;
	this.execute = function(sprite, context, time) {
		if (this.lastMove !== 0 && this.firstSetp !== 0) {
			sprite.left -= sprite.velocityX * ((time - this.lastMove) / 300);
			if (sprite.left < 0) {
				sprite.left = w;
			}
		}
		this.firstSetp = time;
		//this.escape = 0;
		this.lastMove = time;
	}
}

<<<<<<< HEAD
=======
function applyGravity(sprite, elapsed) {
	sprite.velocityY = (GRAVITY_FORCE * elapsed) - 9.8;
},

>>>>>>> gh-pages
var moveTopToBottom = function() {
	this.lastMove = 0;
	this.execute = function(sprite, context, time) {
		if (this.lastMove !== 0) {
			sprite.top += sprite.velocityY * ((time - this.lastMove) / 1000);
			if (sprite.top > h) {
				removeByValue(dropbombList, sprite.name)
			}
		}
		this.lastMove = time;
	}
}
var moveBottomToTop = function() {
	this.lastMove = 0;
	this.execute = function(sprite, context, time) {
		if (this.lastMove !== 0) {
			sprite.top -= sprite.velocityY * ((time - this.lastMove) / 1000);
			// if (sprite.top > h) {
			// 	removeByValue(dropbombList, sprite.name)
			// }
		}
		this.lastMove = time;
	}
}
var yePainter = function() {
	this.lastMove = 0;
	this.execute = function(sprite, context, time) {
		var timerElapsed = pushTimer.getElapsedTime();
		//pushTimer.isRunning() 
		if (this.lastMove !== 0) {
			sprite.speed = (time - this.lastMove) / 500;
			sprite.left = sprite.left + sprite.velocityX * sprite.speed;
<<<<<<< HEAD
=======

>>>>>>> gh-pages
			sprite.top = sprite.top + sprite.velocityY * sprite.speed;
			if ((pushTimer.isOver())) {
				pushTimer.stop();
			}

			if (((sprite.left < -sprite.width || sprite.left > w) || (sprite.top > h))) {
				var random = Math.random();
				if (random > 0.5) {
					sprite.top = -sprite.height;
					sprite.left = (w - sprite.width) * Math.random();
				} else {
					sprite.left = w;
					sprite.top = (h - sprite.height) * Math.random();
				}
				sprite.speed = 0.5 * Math.random() + 0.7;
				sprite.velocityX = (-1 + Math.random()) * 20;
				sprite.velocityY = (0.5 * Math.random() + 0.7) * 20;
			}
		}
		this.lastMove = time;
	}
};
var bombPainter = new ImagePainter('../img/imgBoom/bomb.png');
var bombNoFusePainter = new ImagePainter('../img/imgBoom/bomb-no-fuse.png');
var bomb = new Sprite('bomb', bombPainter, [new moveLetfToRight()]);
var fallBomb;
var fuseBurningPainters = [];
var explosionPainters = [];
var peopleFace;


function bombbaoza(bomb) {
	bomb.painter = bombNoFusePainter;
	setTimeout(function() {
		explosionAnimator.start(bomb, 1000);
		setTimeout(function() {
			bomb.painter = undefined;
			bomb = null;
		}, 1000);
	}, 1000);
}

function bombover(bomb) {
	bomb.painter = bombNoFusePainter;
};
var explosionAnimator = new SpriteAnimator(
	explosionPainters,
	bombover.bind(bomb));
var fuseBurningAnimator = new SpriteAnimator(
	fuseBurningPainters,
	bombbaoza.bind(bomb)
);

var spritePeople;



var yeSpriteList = [];

function originalYe() {
	var imgListNames = Object.keys(imgList);
	imgListNames = imgListNames.filter(function(item, index) {
		return item.indexOf('ye') >= 0;
	})
	var imagesCount = imgListNames.length;
	for (var i = 0; i < 20; i++) {
		var imgIndex = Math.floor((imagesCount * Math.random()));
		var positionX = (w * Math.random()) + 1;
		var positionY = (h * Math.random()) + 1;
		var img = imgList[imgListNames[imgIndex]];
		var vx = (-1 + Math.random()) * 20;
		var vy = (0.5 * Math.random() + 0.7) * 20;
		var imgname = imgListNames[imgIndex];
		var ye1 = new Sprite(imgname, new ImagePainter(imgUrlList[imgname]), [new yePainter()]);
		ye1.left = positionX;
		ye1.top = positionY;
		ye1.width = imgList.ye1.width;
		ye1.height = imgList.ye1.height;
		ye1.velocityX = vx;
		ye1.velocityY = vy;
		yeSpriteList.push(ye1);
	}
}

var manRunLeftToRight = new moveLetfToRight();
var manRunRightToLeft = new moveRightToLeft();
var manJump = new moveBottomToTop();
var fromleftRun
var fromrightRun;

function init() {
	originalYe();
	pushTimer.start();
	yeSpriteList.forEach(function(item, index) {
		item.paint(ctx);
	});
	fromleftRun = new SpriteSheetPainter(runnerCells, imgList['runpeople'], true);
	fromrightRun = new SpriteSheetPainter(runnerCells, imgList['runpeople'], false);
	peopleFace = fromleftRun;
	spritePeople = new Sprite('runner', fromleftRun);
	spritePeople.velocityX = 50;
	spritePeople.velocityY = 50;
	spritePeople.width = 35;
	spritePeople.top = 500;
	spritePeople.height = 64;
	bomb.left = 200;
	bomb.top = 300;
	bomb.width = 180;
	bomb.height = 130;
	bomb.velocityX = 50;
	BoomFunc(bomb);
<<<<<<< HEAD
	// setInterval(function() {
	// 	fuseBurningAnimator.start(bomb, 2000);
	// }, 10000);

=======
>>>>>>> gh-pages
	window.requestNextAnimationFrame(animate);
}

function BoomFunc(bomb) {
	for (var i = 0; i < NUM_FUSE_PAINTERS; ++i) {
		fuseBurningPainters.push(new ImagePainter('../img/imgBoom/fuse-0' + i + '.png'));
	}
	for (var i = 0; i < NUM_EXPLOSION_PAINTERS; ++i) {
		explosionPainters.push(new ImagePainter('../img/imgBoom/explosion-0' + i + '.png'));
	}
	fuseBurningAnimator.start(bomb, 2000);
}


function animate(time) {
	ctx.clearRect(0, 0, w, h);
	spritePeople.update(ctx, time);
	spritePeople.paint(ctx);
	yeSpriteList.forEach(function(item, index) {
		item.update(ctx, time);
		item.paint(ctx);
		//ctx.restore();
	});

	dropbombList.forEach(function(item, index) {
		item.update(ctx, time);
		item.paint(ctx);
	});
	window.requestNextAnimationFrame(animate);
}
var dropbombList = [];
loadImg(imgUrlList, init, imgList);

document.querySelector('#mycanvas').addEventListener('click', function(e) {
	var position = getCanvasPos(this, e);
	var dropbomb = new Sprite(Date.now(), bombPainter, [new moveTopToBottom()]);
	dropbomb.width = 180;
	dropbomb.height = 130;
	dropbomb.top = position.y - dropbomb.width / 2;
	dropbomb.left = position.x - dropbomb.height / 2;
	dropbomb.velocityY = 50;
	var explosionAnimatoritem = new SpriteAnimator(
		explosionPainters,
		bombover.bind(dropbomb));
	var fuseBurningAnimatoritem = new SpriteAnimator(
		fuseBurningPainters,
		bombbaoza.bind(dropbomb)
	);
	fuseBurningAnimatoritem.start(dropbomb, 2000);
	dropbombList.push(dropbomb);
});


function getCanvasPos(canvas, e) { //获取鼠标在canvas上的坐标  
	var rect = canvas.getBoundingClientRect();
	return {
		x: (e.clientX - rect.left) * (canvas.width / rect.width),
		y: (e.clientY - rect.top) * (canvas.height / rect.height)
	};
}

function removeByValue(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].name == val) {
			arr.splice(i, 1);
			break;
		}
	}
}
var leftFlag = false;

window.document.onkeydown = leftDownFun;
window.document.onkeyup = leftUpFun;


var map = {
	38: false,
	40: false,
	37: false,
<<<<<<< HEAD
	39: false
=======
	39: false,
	32: false //空格
>>>>>>> gh-pages
};
window.document.onkeydown = leftDownFun;
window.document.onkeyup = leftUpFun;
var div1 = document.querySelector('.div1');

function leftDownFun(evt) {
	evt = (evt) ? evt : window.event
	map[evt.keyCode] = true;
<<<<<<< HEAD
=======
	var behaviorArray = [];
>>>>>>> gh-pages
	if (map[38] && !map[40] && !map[37] && !map[39]) {
		manJump.lastMove = 0;
		spritePeople.velocityY = 50;
		spritePeople.painter = peopleFace;
<<<<<<< HEAD
		spritePeople.behaviors = [manJump];
=======
		behaviorArray = [manJump];
>>>>>>> gh-pages
	}
	if (!map[38] && map[40] && !map[37] && !map[39]) {
		manJump.lastMove = 0;
		spritePeople.velocityY = -50;
		spritePeople.painter = peopleFace;
<<<<<<< HEAD
		spritePeople.behaviors = [manJump];
=======
		behaviorArray = [manJump];
>>>>>>> gh-pages
	}
	if (!map[38] && !map[40] && map[37] && !map[39]) {
		// div1.innerHTML = '左';
		manRunRightToLeft.lastMove = 0;
		spritePeople.painter = fromleftRun;
		spritePeople.velocityY = 0;
		peopleFace = fromleftRun;
<<<<<<< HEAD
		spritePeople.behaviors = [runInPlace, manRunRightToLeft];
=======
		behaviorArray = [runInPlace, manRunRightToLeft];
>>>>>>> gh-pages
	}
	if (!map[38] && !map[40] && !map[37] && map[39]) {
		spritePeople.velocityY = 0;
		manRunLeftToRight.lastMove = 0;
		spritePeople.painter = fromrightRun;
		peopleFace = fromrightRun;
<<<<<<< HEAD
		spritePeople.behaviors = [runInPlace, manRunLeftToRight];
=======
		behaviorArray = [runInPlace, manRunLeftToRight];
>>>>>>> gh-pages
	}
	if (map[38] && !map[40] && map[37] && !map[39]) {
		spritePeople.velocityY = 50;
		manRunRightToLeft.lastMove = 0;
		manJump.lastMove = 0;
		spritePeople.painter = fromleftRun;
		peopleFace = fromleftRun;
<<<<<<< HEAD
		spritePeople.behaviors = [runInPlace, manRunRightToLeft, manJump];
=======
		behaviorArray = [runInPlace, manRunRightToLeft, manJump];
>>>>>>> gh-pages
	}
	if (map[38] && !map[40] && !map[37] && map[39]) {
		spritePeople.velocityY = 50;
		manRunLeftToRight.lastMove = 0;
		manJump.lastMove = 0;
		spritePeople.painter = fromrightRun;
		peopleFace = fromrightRun;
<<<<<<< HEAD
		spritePeople.behaviors = [runInPlace, manRunLeftToRight, manJump];
=======
		behaviorArray = [runInPlace, manRunLeftToRight, manJump];
>>>>>>> gh-pages
	}
	if (!map[38] && map[40] && map[37] && !map[39]) {
		spritePeople.velocityY = -50;
		manRunRightToLeft.lastMove = 0;
		manJump.lastMove = 0;
		spritePeople.painter = fromleftRun;
		peopleFace = fromleftRun;
<<<<<<< HEAD
		spritePeople.behaviors = [runInPlace, manRunRightToLeft, manJump];
=======
		behaviorArray = [runInPlace, manRunRightToLeft, manJump];
>>>>>>> gh-pages
	}
	if (!map[38] && map[40] && !map[37] && map[39]) {
		spritePeople.velocityY = -50;
		manRunLeftToRight.lastMove = 0;
		manJump.lastMove = 0;
		spritePeople.painter = fromrightRun;
		peopleFace = fromrightRun;
<<<<<<< HEAD
		spritePeople.behaviors = [runInPlace, manRunLeftToRight, manJump];
	}
}



// function leftDownFun(evt) {
//     evt = (evt) ? evt : window.event

//     switch (evt.keyCode) {
//         case 37:
//             {
//                 manRunRightToLeft.lastMove = 0;
//                 spritePeople.painter = fromleftRun;
//                 spritePeople.behaviors = [runInPlace, manRunRightToLeft];
//             }
//             break;
//         case 39:
//             {
//                 manRunLeftToRight.lastMove = 0;
//                 spritePeople.painter = fromrightRun;
//                 spritePeople.behaviors = [runInPlace, manRunLeftToRight];
//             }
//             break;
//     }
// }
=======
		behaviorArray = [runInPlace, manRunLeftToRight, manJump];
	}
	console.log(evt.keyCode);
	if (map[38] && !jumbFlag) {

	}
	spritePeople.behaviors = behaviorArray;
}
// canvas.onmousedown = function(e) {
//   var rect;

//   e.preventDefault();

//   if (!ballInFlight) {
//     ball.velocityX = launchVelocity * Math.cos(launchAngle);
//     ball.velocityY = launchVelocity * Math.sin(launchAngle);
//     ballInFlight = true;
//     threePointer = false;
//     // launchTime = +new Date();
//   }
// };

>>>>>>> gh-pages

function leftUpFun(evt) {
	evt = (evt) ? evt : window.event;
	spritePeople.behaviors = [];
	map[evt.keyCode] = false;
<<<<<<< HEAD
	// switch (evt.keyCode) {
	//     case 37:
	//         {
	//             spritePeople.behaviors = [];
	//         }
	//         break;
	//     case 39:
	//         {
	//             spritePeople.behaviors = [];
	//         }
	//         break;
	// }
=======
>>>>>>> gh-pages
}