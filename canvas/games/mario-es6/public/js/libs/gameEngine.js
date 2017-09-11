let getTimeNow = function() {
	return +new Date();
};
let Game = function(gameName, canvasId) {
	let canvas = document.getElementById(canvasId),
		self = this; // Used by key event handlers below
		this.speed=1;
	// General

	this.context = canvas.getContext('2d');
	this.gameName = gameName;
	this.sprites = [];
	this.keyListeners = [];
	this.gamePause=false;

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


	window.onkeypress=function(e){
		self.activeEvent(e,1)
	};
	window.onkeydown=function(e){
		self.activeEvent(e,1)
	};
	window.onkeyup=function(e){ 
		self.activeEvent(e,0)
	};
	return this;
}
Game.prototype = {
	start: function() {
		let self = this;
		this.startTime = getTimeNow();
		window.requestNextAnimationFrame(function(time) {
			self.animate.call(self, time);
		});
	},
	animate: function(time) {
		let self = this;
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
		let listener=undefined;
		for(let i=0;i<this.keyListeners.length;i++){
			let keyAndListener=this.keyListeners[i];
			let currentKey=keyAndListener.key;
			if(currentKey===key){
				listener=keyAndListener.listener;
			}			
		}
		return listener;
	},


	activeEvent:function(e,status){
		// if(this.gamePause==true){
		// 	return;
		// }
		let listener=undefined;
		let key=undefined;
		switch(e.keyCode){
			case 32:key='space';break;
			case 68:key='d';break;
			case 87:key='w';break;

			//case 68:key='d';break;
			//case 87:key='w';break;

			case 75:key='k';break;
			case 83:key='s';break;
			case 80:key='p';break;
			case 37:key='left';break;
			case 39:key='right';break;
			case 38:key='up';break;
			case 40:key='down';break;
		}
		listener=this.findKeyListener(key);
		if(listener){
			listener(status);
		}		
	},
	togglePaused: function() {
		let now = getTimeNow();
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