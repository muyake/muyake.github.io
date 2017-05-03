var canvas = document.getElementById('mycanvas'),
	context = canvas.getContext('2d');
var mousedown = {};

canvas.addEventListener('touchstart', touchstartfunc, false);
canvas.addEventListener('touchmove', touchmovefunc, false);
canvas.addEventListener('touchend', touchfunc, false);

function windowTocanvas(canvas, x, y) {
	var canvasRectangle = canvas.getBoundingClientRect();
	return {
		x: x - canvasRectangle.left,
		y: y - canvasRectangle.top
	};
}


function touchstartfunc(e) {
	var touch = e.touches[0]; //获取第一个触点
	var x = Number(touch.pageX); //页面触点X坐标
	var y = Number(touch.pageY); //页面触点Y坐标
	var loc = windowTocanvas(canvas, e.clientX, e.clinetY);
	e.preventDefault();
	rubberbandStart(loc.x, loc.y);
}

function touchmovefunc(e) {
	e.preventDefault();
}

function touchfunc(e) {
	e.preventDefault();
}