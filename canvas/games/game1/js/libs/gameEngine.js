var getTimeNow = function() {
	return +new Date();
};
var Game = function(gameName, canvasId) {
	var canvas = document.getElementById(canvasId),
		self = this; // Used by key event handlers below
	this.speed=1;
	// General

	this.context = canvas.getContext('2d');
	this.gameName = gameName;
	this.sprites = [];
	this.keyListeners = [];


	// Time

	this.startTime = 0;
	this.lastTime = 0;
	this.gameTime = 0;
	this.fps = {
		num: 0,
		interval: 1000,
		lastTime: 0
	};
	this.STARTING_FPS = 60;

	this.paused = false;
	this.startedPauseAt = 0;
	this.PAUSE_TIMEOUT = 100;


	window.onkeypress=function(e){ self.activeEvent(e,1)};
window.onkeydown=function(e){ self.activeEvent(e,1)};
	window.onkeyup=function(e){ self.activeEvent(e,0)};
 return this;
}
Game.prototype = {
	start: function() {
		var self = this;
		this.startTime = getTimeNow();
		window.requestNextAnimationFrame(function(time) {
			self.animate.call(self, time);
		});
	},
	animate: function(time) {
		var self = this;
		//this.updateFrameRate(time);
		if (this.paused) {
			//每隔100ms，看看是否还处于暂停状态，不需要太频繁。
			setTimeout(function() {
				window.requestNextAnimationFrame(function(time) {
					self.animate.call(self, time);
				});
			}, this.PAUSE_TIMEOUT);
		} else {
			this.tick(time);
			this.clearScreen();
			this.startAnimate(time);
			this.lastTime = time;
			window.requestNextAnimationFrame(function(time) {
				self.animate.call(self, time);
			});
		}
	},
	clearScreen: function() {
		this.context.clearRect(0, 0,
			this.context.canvas.width, this.context.canvas.height);
	},
	tick: function(time) {
		this.updateFrameRate(time);
		this.gameTime = (getTimeNow()) - this.startTime;
	},
	updateFrameRate: function(time) {
		if (this.lastTime === 0) {
			this.fps.num = this.STARTING_FPS;
		} else {
			if ((time - this.fps.lastTime) > this.fps.interval) {
				this.fps.num = 1000 / (time - this.lastTime);
				this.fps.lastTime = time;;
			}

		}
	},
	paintUnderSprites: function(time) {

	},

	//监听事件
	addKeyListener:function(keyAndListener){
		this.keyListeners.push(keyAndListener);
	},
	findKeyListener:function(key){
		var listener=undefined;
		for(var i=0;i<this.keyListeners.length;i++){
			var keyAndListener=this.keyListeners[i];
			var currentKey=keyAndListener.key;
			if(currentKey===key){
				listener=keyAndListener.listener;
			}			
		}
		return listener;
	},
	activeEvent:function(e,status){
		var listener=undefined;
		var key=undefined;
		switch(e.keyCode){
			case 32:key='space';break;
			case 68:key='d';break;
			case 75:key='k';break;
			case 83:key='s';break;
			case 80:key='p';break;
			case 37:key='left arrow';break;
			case 39:key='right arrow';break;
			case 38:key='up arrow';break;
			case 40:key='down arrow';break;
		}
		listener=this.findKeyListener(key);
		if(listener){
			listener(status);
		}
	},
	togglePaused: function() {
		var now = getTimeNow();
		this.paused = !this.paused;
		if (this.paused) {
			this.startedPauseAt = now;
			this.fps.lastTime = now;;
		} else {
			this.startTime = this.startTime + now - this.startedPauseAt;
			this.lastTime = now;
		}
	},
	startAnimate: function(time) {},
}