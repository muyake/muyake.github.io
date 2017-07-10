var lib = {
	/* 封装ajax函数
	 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
	 * @param {string}opt.url 发送请求的url
	 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
	 * @param {object}opt.data 发送的参数，格式为对象类型
	 * @param {function}opt.success ajax发送并接收成功调用的回调函数
	 */

	ajax: function() {
		var ajaxData = {
			type: arguments[0].type || "GET",
			url: arguments[0].url || "",
			async: arguments[0].async || "true",
			data: arguments[0].data || null,
			dataType: arguments[0].dataType || "text",
			contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
			beforeSend: arguments[0].beforeSend || function() {},
			success: arguments[0].success || function() {},
			error: arguments[0].error || function() {}
		}
		ajaxData.beforeSend()
		var xhr = this.createxmlHttpRequest();
		xhr.responseType = ajaxData.dataType;
		xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
		xhr.setRequestHeader("Content-Type", ajaxData.contentType);
		xhr.send(this.convertData(ajaxData.data));
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					ajaxData.success(xhr.response)
				} else {
					ajaxData.error()
				}
			}
		}
	},

	createxmlHttpRequest: function() {
		if (window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		}
	},

	convertData: function(data) {
		if (typeof data === 'object') {
			var convertResult = "";
			for (var c in data) {
				convertResult += c + "=" + data[c] + "&";
			}
			convertResult = convertResult.substring(0, convertResult.length - 1)
			return convertResult;
		} else {
			return data;
		}
	},
	hasClass: function(obj, cls) {
		return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	},

	addClass: function(obj, cls) {
		if (!this.hasClass(obj, cls)) obj.className += " " + cls;
	},
	removeClass: function(obj, cls) {
		if (this.hasClass(obj, cls)) {
			var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
			obj.className = obj.className.replace(reg, ' ');
		}
	},
	toastfun: function(text, delay) {
		var selector = document.querySelector(".toast");
		if (selector) {
			selector.parentNode.removeChild(selector);
		}
		var domdiv = document.createElement('div');
		domdiv.className = 'toast';
		domdiv.innerText = text;
		document.getElementsByTagName("body")[0].appendChild(domdiv);
		clearTimeout(toastTime);
		var toastTime = setTimeout(function() {
			var selector = document.querySelector(".toast");
			if (selector) {
				selector.parentNode.removeChild(selector);
			}
		}, delay || 1000);
	},
}


window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
})();

function setActive(div) {
	div.className = 'border-box active';
}

function removeActive(div) {
	div.className = 'border-box';
}


function compare(div1, div2) {
	var value1 = parseInt(div1.getAttribute('data-id'));
	var value2 = parseInt(div2.getAttribute('data-id'));
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}

var luckDraw = {
	lastAdvance: 0,
	//arr: [1, 2, 3, 4, 12, 5, 11, 6, 10, 9, 8, 7],
	//arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	index: 0,
	arrLength: 0,
	giftList: null,
	PAGEFLIP_INTERVAL: 300,
	isRun: false,
	duration: 0,
	decelerationFlag: false,
	start: function(divcontainer) {
		var giftList = document.querySelectorAll(divcontainer);
		this.giftList = Array.prototype.slice.call(giftList);
		this.giftList.sort(compare); //对数组进行排序
		this.arrLength = this.giftList.length;
		this.isRun = true;
		this.luckNum = -1;
		this.duration = 0;
		this.PAGEFLIP_INTERVAL = 300;
		this.isGetLuckNum = false;
		requestAnimFrame(this.execute.bind(this));
	},
	reset: function() {
		var winItem = document.querySelector('.luckDraw-box .active');
		//var className = winItem.className;
		this.isRun = false;
		config.canIUse = true;
		lib.removeClass(winItem, "active");
		this.index = 0;
		this.decelerationFlag = false;
		this.PAGEFLIP_INTERVAL = 300;
		this.lastAdvance = 0;
	},
	end: function() {},
	isGetLuckNum: false,
	luckNum: -1,
	execute: function() {
		if (this.isRun == false) {
			return;
		}
		var time = Date.now();
		if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
			this.index = this.index < this.arrLength ? this.index : 0;
			if ((this.index - 1) >= 0) {
				removeActive(this.giftList[this.index - 1]);
			} else {
				removeActive(this.giftList[this.arrLength - 1]);
			}
			var luckDiv = this.giftList[this.index];
			setActive(luckDiv);
			this.duration += (this.lastAdvance == 0 ? 0 : time - this.lastAdvance);
			this.lastAdvance = time;
			++this.index;
			//如果返回了数据，且时间已经超过3s
			if (this.isGetLuckNum && this.duration > 3000) {
				if (this.index === this.luckNum) {
					this.decelerationFlag = true;
				}
				if (this.decelerationFlag) {
					//每次减50的由来，正常运转时50，最终是500，500-50=450;450/12=30多。中国会执行13次。从this.index === this.luckNum，到再次this.index === this.luckNum总共会执行13次，
					//如果每次减50，最终的时间间隔为700
					this.PAGEFLIP_INTERVAL = this.PAGEFLIP_INTERVAL * 1.25;
				}
			} else {
				this.PAGEFLIP_INTERVAL = this.PAGEFLIP_INTERVAL > 50 ? (this.PAGEFLIP_INTERVAL - 30) : 50;
			}
			//处于减速中且再次停到减速号码的位置，后面的PAGEFLIP_INTERVAL最终是700
			if (this.decelerationFlag && this.index === this.luckNum && this.PAGEFLIP_INTERVAL >= 500) {
				console.log(this.PAGEFLIP_INTERVAL);
				this.isRun = false;
				this.end();
			}
		}
		if (this.isRun) {
			requestAnimFrame(this.execute.bind(this));
		}
	}
}
var config = {
	canIUse: true,
	toastText: {
		surplusLess: '剩余奖券数不足',
		running: '请等待转盘旋转结束~',
	},
	failtureCount: 0,
};


function getRandom() {
	return 1 + Math.floor(Math.random() * 12);
}

function getDrawLucy(status) {
	if (status == 1) {
		luckDraw.giftList = document.querySelectorAll(".luckDraw-box-common .border-box");
		luckDraw.start(".luckDraw-box-common .border-box");
	} else {
		luckDraw.giftList = document.querySelectorAll(".luckDraw-box-senior .border-box");
		luckDraw.start(".luckDraw-box-senior .border-box");
	}
	setTimeout(function() {
		luckDraw.isGetLuckNum = true;
		luckDraw.luckNum = getRandom();
	}, 2000);
}


var btnLists = {
	commonBtn: document.querySelector('.commonBtn-box'),
	seniorBtn: document.querySelector('.seniorBtn-box'),
	exchangeBtn: document.querySelector('.exchangeBtn'),
	commonStartBtn: document.querySelector('.luckDraw-box-common .btn-box'),
	rechargeBtn: document.querySelector('.rechargeBtn'),
	exchangeSuccessCloseBtn: document.querySelector('.exchangeSuccess .closeBtn'),
	lotterySuccessCloseBtn: document.querySelector('.lotterySuccess .closeBtn'),
	seniorStartBtn: document.querySelector('.luckDraw-box-senior .btn-box'),
	bindEvent: function() {
		var self = this;
		luckDraw.end = function(data) {
			self.setWinItem(data);
		};
		//普通抽奖
		btnLists.commonBtn.addEventListener('touchstart', function() {
			if (lib.hasClass(this, "notactive") && !config.canIUse) {
				lib.toastfun(config.toastText.running);
				return;
			}
			lib.removeClass(this, 'notactive');
			lib.addClass(this, 'active');
			lib.addClass(btnLists.seniorBtn, 'notactive');
			lib.removeClass(btnLists.seniorBtn, 'active');
			document.querySelector('.luckDraw-box-common').style.display = 'block';
			document.querySelector('.luckDraw-box-senior').style.display = 'none';
		}, false);
		//高级抽奖
		btnLists.seniorBtn.addEventListener('touchstart', function() {
			if (lib.hasClass(this, "notactive") && !config.canIUse) {
				lib.toastfun(config.toastText.running);
				return;
			}
			lib.removeClass(this, 'notactive');
			lib.addClass(this, 'active');
			lib.addClass(btnLists.commonBtn, 'notactive');
			lib.removeClass(btnLists.commonBtn, 'active');
			document.querySelector('.luckDraw-box-senior').style.display = 'block';
			document.querySelector('.luckDraw-box-common').style.display = 'none';
		}, false);

		//关闭抽奖成功弹框。
		btnLists.lotterySuccessCloseBtn.addEventListener('click', function() {
			config.canIUse = true;
			luckDraw.reset();
			document.querySelector('.popupBox').style.display = 'none';
			document.querySelector('.lotterySuccess .successImg').innerHTML = '';
			document.querySelector('.lotterySuccess').style.display = 'none';
		}, false);

		btnLists.commonStartBtn.addEventListener('click', function() {
			if (!config.canIUse) {
				//lib.toastfun(config.toastText.running);
				return;
			}
			//console.log(111);
			var cost = document.querySelector('.luckDraw-box-common .cost span');
			cost = parseInt(cost.innerHTML);
			if (cost > surplusNum) {
				lib.toastfun(config.toastText.surplusLess);
				return;
			}
			config.canIUse = false;
			config.failtureCount = 0;
			getDrawLucy(1);
		}, false);
		btnLists.seniorStartBtn.addEventListener('click', function() {
			if (!config.canIUse) {
				return;
			}
			var cost = document.querySelector('.luckDraw-box-senior .cost span');
			cost = parseInt(cost.innerHTML);
			if (cost > surplusNum) {
				lib.toastfun(config.toastText.surplusLess);
				return;
			}
			//console.log(111);
			config.canIUse = false;
			config.failtureCount = 0;
			getDrawLucy(2);
		}, false);
	},
	setWinItem: function() {
		document.querySelector('.luckDraw-box-common .surplus span').innerHTML = surplusNum;
		document.querySelector('.luckDraw-box-senior .surplus span').innerHTML = surplusNum;
		var winItem = document.querySelector('.luckItem .active').parentNode;
		var outHTMLStr = winItem.outerHTML;
		outHTMLStr = outHTMLStr.replace("active", "");
		document.querySelector('.lotterySuccess .successImg').innerHTML = outHTMLStr;
		setTimeout(function() {
			document.querySelector('.popupBox').style.display = 'block';
			document.querySelector('.lotterySuccess').style.display = 'block'
		}, 1000);
	},
	init: function() {
		//alert(window.devicePixelRatio);
		this.bindEvent();
	}
};

btnLists.init();
window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);