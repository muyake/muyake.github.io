var canvas = document.getElementById('mycanvas'),
	ctx = canvas.getContext('2d'),
	w = canvas.width,
	h = canvas.height,
	ANIMATION_DURATION = 20000,
	pushTimer = new AnimationTimer(ANIMATION_DURATION);
var NUM_EXPLOSION_PAINTERS = 9,
	NUM_FUSE_PAINTERS = 9;
var GRAVITY_FORCDE = 9.81;
var pixelsPerMeter = 15;
var imgUrlList = {

};
var imgList = {};
for (var i = 0; i < NUM_FUSE_PAINTERS; ++i) {
	imgUrlList['fuse-0' + i] = '../img/imgBoom/fuse-0' + i + '.png';
}

for (var i = 0; i < NUM_EXPLOSION_PAINTERS; ++i) {
	imgUrlList['explosion-0' + i] = '../img/imgBoom/explosion-0' + i + '.png';
}
var moveTopToBottom = function() {
	this.execute = function(sprite, context, time) {
		if (sprite.faillingAnimationTime.isRunning()) {
			sprite.top += sprite.velocityY / fps;
			sprite.velocityY = GRAVITY_FORCDE * (sprite.faillingAnimationTime.getElapsedTime() / 1000) * pixelsPerMeter;
			if (sprite.top > h) {
				stopFalling(sprite);
			}
		}
	}
}

function stopFalling(sprite) {
	sprite.faillingAnimationTime.stop();
	sprite = null;
}

var bombPainter = new ImagePainter('../img/imgBoom/bomb.png');
var bombNoFusePainter = new ImagePainter('../img/imgBoom/bomb-no-fuse.png');

var fallBomb;
var fuseBurningPainters = [];
var explosionPainters = [];
var fps, lastTime = 0;


function bombbaoza(bomb, explosionAnimatoritem) {
	bomb.painter = bombNoFusePainter;
	var a = explosionAnimatoritem;
	setTimeout(function() {
		a.start(bomb, 1000);
		setTimeout(function() {
			bomb.painter = undefined;
			bomb = null;
		}, 1000);
	}, 1000);
}

function bombover(bomb) {
	bomb.painter = bombNoFusePainter;
};

function init() {
	BoomFunc()
	window.requestNextAnimationFrame(animate);
}

function BoomFunc(bomb) {
	for (var i = 0; i < NUM_FUSE_PAINTERS; ++i) {
		fuseBurningPainters.push(new ImagePainter('../img/imgBoom/fuse-0' + i + '.png'));
	}
	for (var i = 0; i < NUM_EXPLOSION_PAINTERS; ++i) {
		explosionPainters.push(new ImagePainter('../img/imgBoom/explosion-0' + i + '.png'));
	}
}


function animate(time) {
	fps = calculateFps(time);
	ctx.clearRect(0, 0, w, h);
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
	dropbomb.faillingAnimationTime = new AnimationTimer();
	var explosionAnimatoritem = new SpriteAnimator(
		explosionPainters,
		bombover.bind(dropbomb));
	var fuseBurningAnimatoritem = new SpriteAnimator(
		fuseBurningPainters,
		bombbaoza.bind({}, dropbomb, explosionAnimatoritem)
	);
	dropbomb.faillingAnimationTime.start();
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

function calculateFps(time) {
	var fps = 1000 / (time - lastTime);
	lastTime = time;
	return fps;
}