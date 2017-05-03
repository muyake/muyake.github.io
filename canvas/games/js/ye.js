var canvas = document.getElementById('mycanvas'),
	ctx = canvas.getContext('2d');
var img = new Image();
var w = canvas.width;
var h = canvas.height;
var lastTime = 0; //计算帧速
var pause = false; //开始暂停

var lastTime = 0; //字幕相差时间
var lastFpsUpdateTime = 0; //字幕相差时间

var skyOffset = 0;
var SKY_VELOCITY = 30; // 30 pixels/second
var fps = 0;
var totalprogress = 0;
var currentWordIndex = 0;
var photoBorder = 10;
var imgUrlList = {
	ye1: 'ye1.png',
	ye2: 'ye2.png',
	ye3: 'ye3.png',
	ye4: 'ye4.png',
	ye5: 'ye5.png',
	ye6: 'ye6.png',
	clode: 'sky.png',
	tree: 'tree.png',
	photo01: 'photo01.jpg'
};
var yeList = [];
var wordList = [
	'曾经，有一份真挚的爱情摆在我面前',
	'我没有珍惜',
	'等到我失去的时候才后悔莫及',
	'人世间最痛苦的事莫过于此......',
	'如果上天能够给我一个再来一次的机会',
	'我会对那个女孩子说三个字',
	'我爱你',
	'如果非要在这份爱上加一个期限',
	'我希望是.....一万年！'
];
var imgList = {};

function loadImg(e, callback, images) {
	var loadedImages = 0;
	var numImages = 0;
	for (var src in e) {
		numImages++;
	}
	for (var src in e) {
		images[src] = new Image();
		images[src].onload = function() {
			if (++loadedImages >= numImages) {
				callback(images);
			}
		};
		images[src].src = e[src];
	}
}
loadImg(imgUrlList, init, imgList);

function createYe(x, y, img, speed, Vx, Vy) {
	this.x = x;
	this.y = y;
	this.img = img;
	this.speed = speed;
	this.Vx = Vx;
	this.Vy = Vy;
	this.changFlag = true;
}

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
		var speed = 0.5 * Math.random() + 0.7;
		var vx = -1 + Math.random();
		var vy = 0.5 * Math.random() + 0.7;
		yeList.push(new createYe(positionX, positionY, img, speed, vx, vy));
	}
}

function drawTree() {
	var tree = imgList['tree'];
	ctx.drawImage(tree, 220, 0, 420, 540);
}

function drawYe() {
	yeList.forEach(function(item, index) {
		item.x = item.x + item.Vx * item.speed;
		item.y = item.y + item.Vy * item.speed;
		if (((item.x < -20 || item.x > w + 20) || (item.Y > h)) && item.changFlag) {
			var random = Math.random();
			if (random > 0.5) {
				item.y = -20;
				item.x = w * Math.random();
			} else {
				item.x = w;
				item.y = h * Math.random();
			}
			item.speed = 0.5 * Math.random() + 0.7;
			item.Vx = -1 + Math.random();
			item.Vy = 0.5 * Math.random() + 0.7;
			item.changFlag = false;
		} else {
			item.changFlag = true;
		}
		ctx.drawImage(item.img, item.x, item.y);
	});
}

function drawClode() {
	ctx.save();
	var sky = imgList['clode'];
	var imgwidth = h / sky.height * sky.width;
	if (skyOffset < imgwidth) {
		skyOffset = skyOffset + SKY_VELOCITY / fps;
	} else {
		skyOffset = 0;
	}
	ctx.translate(-skyOffset, 0);
	ctx.drawImage(sky, 0, 0, imgwidth, h);
	ctx.drawImage(sky, imgwidth - 10, 0, imgwidth, h);
	ctx.restore();
}

function drawPhoto() {
	ctx.save();
	ctx.translate(w / 2, h / 2);
	var photo = imgList['photo01'];
	var photoWidth = 534;
	var photoHeigth = 960;
	ctx.globalAlpha = 0.5;
	ctx.drawImage(photo, -photoWidth / 2, -photoHeigth / 2, photoWidth, photoHeigth);
	ctx.strokeStyle = "#70BA9D"; /*设置边框*/
	ctx.lineWidth = photoBorder; /*边框的宽度*/
	ctx.strokeRect(-photoWidth / 2, -photoHeigth / 2, photoWidth, photoHeigth);
	ctx.restore();
}

function drawBigPhoto() {

}

function init() {
	originalYe();
	draw();
}

function draw() {
	var now = +new Date;
	if (!pause) {
		ctx.clearRect(0, 0, w, h);
		ctx.save();
		fps = calculateFps(now);
		drawClode();
		drawTree();
		drawPhoto();
		drawYe();
		//ctx.fillText(fps.toFixed() + ' fps', 120, 60);
		ctx.fillStyle = '#C41A16';
		ctx.font = "0.50rem Arial";
		if (now - lastFpsUpdateTime > 2000) {
			currentWordIndex = currentWordIndex > 6 ? 0 : (currentWordIndex + 1);
			lastFpsUpdateTime = now;
		}
		ctx.textAlign = 'center';
		ctx.textBaseline = 'bottom';
		ctx.fillText(wordList[currentWordIndex], 320, 1250);
		ctx.restore();
	}
	requestAnimFrame(draw);
}

function drawRect() {

}

function calculateFps(now) {
	//	var now = (+new Date);
	var fps = 1000 / (now - lastTime);
	lastTime = now;

	return fps;
}
document.getElementById("startBtn").onclick = function() {
	pause = pause ? false : true;
	if (!pause) {
		this.value = '暂停';
	} else {
		this.value = '开始';
	}
}
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
})();