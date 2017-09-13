	//按钮区域位置
	var contronposition = {
		radius: 45,
		right: {
			x: 565,
			y: 250,
		},
		left: {
			x: 55,
			y: 230,
		},
	};
	var controler = {
		thrustersCanvas: document.getElementById('controlCanvas'),
		context: document.getElementById('controlCanvas').getContext('2d'),
		result: document.querySelector('.result'),
		RIGHT: 1,
		LEFT: 2,
		ARROW_MARGIN: 15,
		BALL_RADIUS: 1.5,
		LEDGE_LEFT: 15,
		LEDGE_TOP: 9,
		LEDGE_WIDTH: 4.4,
		LEDGE_HEIGHT: 1.2,
		ANIMATION_DURATION: 20,
		THRUSTER_FILL_STYLE: 'rgba(100,140,230,0.8)',
		THRUSTER_FIRING_FILL_STYLE: 'rgba(255,255,0,0.8)',
		arrowWidth: 120,
		arrowHeight: 65,
		lastTime: 0,
		canvasWidht: document.getElementById('controlCanvas').width,
		arrowRadius: 25,
		canvasHeight: document.getElementById('controlCanvas').height,
		//右侧按钮两种状态
		press: {
			down: {
				backgroundColor: 'rgba(220, 75, 63, 0.5)',
				textColor: 'rgba(247, 20, 20, 0.78)',
			},
			up: {
				backgroundColor: 'rgba(100, 140, 230, 0.5)',
				textColor: 'rgba(0, 182, 255, 0.78)',
			}

		},

		//绘制右侧按钮的位置
		btnArr: {
			"Y": {
				position: {
					x: contronposition.right.x,
					y: contronposition.right.y - contronposition.radius,
				},
			},
			"A": {
				position: {
					x: contronposition.right.x,
					y: contronposition.right.y + contronposition.radius,
				},
			},
			"X": {
				position: {
					x: contronposition.right.x - contronposition.radius,
					y: contronposition.right.y,
				},
			},
			"B": {
				position: {
					x: contronposition.right.x + contronposition.radius,
					y: contronposition.right.y,
				},
			}
		},
		//判断按钮是否被按下
		arrowArr: {
			"left": {
				isPress: false,
				position: {
					x: 102,
					y: 90,
				},
			},
			"right": {
				isPress: false,
				position: {
					x: 102,
					y: 155,
				},
			},
			"X": {
				isPress: false,
				position: {
					x: 112,
					y: 522,
				},
			},
			"Y": {
				isPress: false,
				position: {
					x: 158,
					y: 566,
				},
			},
			"B": {
				isPress: false,
				position: {
					x: 112,
					y: 612,
				},
			},
			"A": {
				isPress: false,
				position: {
					x: 68,
					y: 566,
				},
			},
		},
		//判断按钮是否被按住
		juadegeP: function(loc1, loc2, r) {
			if ((Math.pow(loc1.x - loc2.x, 2) + Math.pow(loc1.y - loc2.y, 2)) < Math.pow(r, 2)) {
				return true;
			} else {
				return false;
			}
		},
		//绘制所有按钮
		draw: function() {
			this.context.clearRect(0, 0, this.canvasWidht, this.canvasHeight);
			this.context.save();
			this.context.shadowColor = 'rgba(0, 0, 0, 0.8)';
			this.context.shadowOffsetX = 2;
			this.context.shadowOffsetY = 2;
			this.context.shadowBlur = 2;
			this.drawTwoArcs();
			this.context.beginPath();
			this.context.arc(this.arrowArr.left.position.y, this.canvasHeight - this.arrowArr.left.position.x, this.arrowRadius, 0, 2 * Math.PI, false);
			this.context.stroke();
			this.context.beginPath();
			this.context.arc(this.arrowArr.right.position.y, this.canvasHeight - this.arrowArr.right.position.x, this.arrowRadius, 0, 2 * Math.PI, false);
			this.context.stroke();
			this.paintThrusters();
			this.context.restore();
		},
		//判断箭头状态
		paintThrusters: function() {
			var self = this;
			self.context.save();
			var arr = ['left', 'right'];
			arr.forEach(function(item) {
				self.context.save();
				self.context.fillStyle = self.arrowArr[item].isPress ? self.THRUSTER_FIRING_FILL_STYLE : self.THRUSTER_FILL_STYLE;
				if (item == 'left') {
					self.paintLeftArrow(self.context);
				}
				if (item == 'right') {
					self.paintRightArrow(self.context);
				}
				self.context.restore();
			})
		},
		//绘制左箭头
		paintLeftArrow: function(context) {
			var self = this;
			self.context.save();
			self.context.translate(contronposition.left.x, contronposition.left.y);
			self.paintArrow(self.context);
			self.context.restore();
		},
		//绘制右箭头
		paintRightArrow: function(context) {
			var self = this;
			self.context.save();
			self.context.translate(contronposition.left.x, contronposition.left.y);
			self.context.translate(self.arrowWidth + self.ARROW_MARGIN, 0);
			self.context.scale(-1, 1);
			self.paintArrow(self.context);
			self.context.restore();
		},
		//绘制箭头
		paintArrow: function(context) {
			this.context.beginPath();
			var arrowWidth = this.arrowWidth;
			var ARROW_MARGIN = this.ARROW_MARGIN;
			var arrowHeight = this.arrowHeight;
			this.context.moveTo(arrowWidth / 2 - ARROW_MARGIN / 2,
				ARROW_MARGIN / 2);

			this.context.lineTo(arrowWidth / 2 - ARROW_MARGIN / 2,
				arrowHeight - ARROW_MARGIN);

			this.context.quadraticCurveTo(arrowWidth / 2 - ARROW_MARGIN / 2,
				arrowHeight - ARROW_MARGIN / 2,
				arrowWidth / 2 - ARROW_MARGIN,
				arrowHeight - ARROW_MARGIN / 2);

			this.context.lineTo(ARROW_MARGIN,
				arrowHeight / 2 + ARROW_MARGIN / 2);

			this.context.quadraticCurveTo(ARROW_MARGIN - 3,
				arrowHeight / 2,
				ARROW_MARGIN, arrowHeight / 2 - ARROW_MARGIN / 2);

			this.context.lineTo(arrowWidth / 2 - ARROW_MARGIN,
				ARROW_MARGIN / 2);

			this.context.quadraticCurveTo(arrowWidth / 2 - ARROW_MARGIN,
				ARROW_MARGIN / 2, arrowWidth / 2 - ARROW_MARGIN / 2,
				ARROW_MARGIN / 2);
			this.context.fill();
			this.context.stroke();
		},
		//绘制右侧按钮
		drawTwoArcs: function() {
			var self = this;
			var keys = Object.keys(self.btnArr);
			// console.log(keys);
			self.context.font = '30px Lucida Sans';
			self.context.textAlign = 'center';
			keys.forEach(function(item) {
				var btn = self.btnArr[item];
				var isPress = self.arrowArr[item];
				var drawStatus = isPress.isPress ? self.press.down : self.press.up;
				self.context.save();
				self.context.fillStyle = drawStatus.backgroundColor;
				self.context.strokeStyle = self.context.fillStyle;
				self.context.beginPath();
				self.context.arc(btn.position.x, btn.position.y, self.arrowRadius, 0, Math.PI * 2, false); // outer: CW
				self.context.fill();
				self.context.stroke();
				self.context.restore();
				self.context.save();
				self.context.fillStyle = drawStatus.textColor;
				self.context.shadowColor = undefined;
				self.context.shadowOffsetX = 0;
				self.context.shadowOffsetY = 0;
				self.context.fillText(item, btn.position.x, btn.position.y + 10);
				self.context.restore();
			})
		},
		//鼠标按下触发的事件
		drawPressDown: function(pressarr) {
			var self = this;
			var arr = Object.keys(self.arrowArr);
			arr.forEach(function(item) {
				self.arrowArr[item].isPress = false;
			})
			var length = pressarr.length;
			for (var i = 0; i < length; i++) {
				var item2 = pressarr[i];
				var loc = self.windowToCanvas(item2.pageX, item2.pageY);
				var x0 = self.arrowRadius + self.arrowArr.left.position.y;
				var y0 = this.canvasHeight - self.arrowRadius - self.arrowArr.left.position.x;
				arr.forEach(function(item) {
					if (self.juadegeP(loc, self.arrowArr[item].position, self.arrowRadius)) {
						self.arrowArr[item].isPress = true;
					}
				})
			}
		},
		//屏幕坐标转化为canvas坐标
		windowToCanvas: function(x, y) {
			var bbox = this.thrustersCanvas.getBoundingClientRect();
			var self = this;
			return {
				y: (y - bbox.left) * (self.canvasWidht / bbox.height),
				x: (x - bbox.top) * (self.canvasHeight / bbox.width)
			};
		},
		bindEvent: function() {
			var self = this;
			this.thrustersCanvas.addEventListener('touchstart', function(e) {
				self.result.innerHTML = e.targetTouches.length;
				e.preventDefault(); // prevent cursor change  
				self.drawPressDown(e.targetTouches);
				self.draw();
				self.dragging = true;
			});
			this.thrustersCanvas.addEventListener('touchend', function(e) {
				self.result.innerHTML = e.targetTouches.length;
				e.preventDefault();
				self.drawPressDown(e.targetTouches);
				self.draw();
			});
			this.thrustersCanvas.addEventListener('touchmove', function(e) {
				e.preventDefault();
				setTimeout(function() {
					self.result.innerHTML = e.targetTouches.length;
					self.drawPressDown(e.targetTouches);
					self.draw();
				}, 100);
			});

		},
		init: function() {
			var self = this;
			self.bindEvent();
			self.draw();
		}
	}