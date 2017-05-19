var getTimeNow = function() {
	return +new Date();
};
var Game = function(gameName, canvasId) {
	var canvas = document.getElementById(canvasId),
		self = this; // Used by key event handlers below

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
				this.fps.lastTime = time;
			}
		}
	},
	startAnimate: function(time) {

	},
}