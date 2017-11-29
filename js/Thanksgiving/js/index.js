function $(n) {
    return document.querySelector(n);
}
var bindLongTap = function(option) {
    option = option || {};
    if (typeof option.selector === 'undefined') {
        return;
    }
    this.selector = option.selector;
    this.timeInterval = option.interval || 20;
    this.callback = option.callback || function() {

    };
    this.touchBoundary = option.touchBoundary || 10;
    this.init();
};
bindLongTap.prototype = {
    constructor: this,
    touchHasMoved: function(event) {
        var touch = event.changedTouches[0],
            boundary = this.touchBoundary;
        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
            return true;
        }
        return false;
    },
    init: function() {
        var self = this;
        var addInterval;
        var pageX = 0;
        var pageY = 0;
        this.selector.addEventListener('touchstart', function(event) {
            var touch;
            //多个点击时间
            if (event.targetTouches.length > 1) {
                return true;
            }
            self.callback();
            touch = event.targetTouches[0];
            pageX = touch.pageX;
            pageY = touch.pageY;
            addInterval = setInterval(function() {
                self.callback();
            }, self.timeInterval);
        });
        this.selector.addEventListener('touchmove', function(event) {
            var touch = event.changedTouches[0],
                boundary = self.touchBoundary;
            if (Math.abs(touch.pageX - pageX) > boundary || Math.abs(touch.pageY - pageY) > boundary) {
                clearInterval(addInterval);
            }
        });
        this.selector.addEventListener('touchend', function() {
            clearInterval(addInterval);
        });
    },
}
var mainObj = {
    minusTicket: function() {
        var tickets = parseInt($('.sendText').value);
        if (tickets > 1) {
            $('.sendText').value = tickets - 1;
        }
    },
    onlyNum: function(event) {
        //delete 46,backspace 8,left arrow 37,right arrow 39
        if (!(event.keyCode == 46) && !(event.keyCode == 8) && !(event.keyCode == 37) && !(event.keyCode == 39))
        //键盘上的0-9和数字键盘的0-9
            if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)))
            event.returnValue = false;
    },
    checkMaxNum: function(selector) {
        if (selector.value > playerRestVote) {
            selector.value = playerRestVote;
        }
    },
    checkNum: function(selector) {
        if (selector.value.length == 1) {
            selector.value = selector.value.replace(/[^1-9]/g, '')
        } else {
            selector.value = selector.value.replace(/\D/g, '')
        }
    },
    setLong: function(selector, num) {
        var length = ('' + num).length;
        selector.setAttribute('maxlength', length);
    },
    checkRate: function(select) {　
        var re = /^[1-9]+[0-9]*]*$/ //判断正整数             　　
        var nubmer = select.value;　　
        if (!re.test(nubmer)) {　　　　
            alert("请输入正整数");　　　　
            select.value = "";　　　　
            return false;　　
        }
        return true;
    },
    //投票
    sendTicket: function(count) {
        alert(count);
    },

    bindEvent: function() {
        var self = this;
        window.ontouchstart = function(e) {
            if (e.target.className.indexOf('add') >= 0 || e.target.className.indexOf('minus') >= 0) {
                e.preventDefault();
            }
        };
        var b = new bindLongTap({
            selector: $('.add'),
            interval: 200,
            callback: function() {
                var tickets = parseInt($('.sendText').value);
                if (tickets < playerRestVote) {
                    $('.sendText').value = tickets + 1;
                }
            }
        });
        var b2 = new bindLongTap({
            selector: $('.minus'),
            interval: 200,
            callback: function() {
                var tickets = parseInt($('.sendText').value);
                if (tickets > 1) {
                    $('.sendText').value = tickets - 1;
                }
            }
        });
        //设置最大长度
        self.setLong($('.sendText'), playerRestVote);
        //限制只能输入数字，和删除键，退格键等
        $('.sendText').addEventListener('keydown', function(event) {
            self.onlyNum(event);
        });
        $('.sendText').addEventListener('keyup', function() {
            self.checkNum(this);
            self.checkMaxNum(this);
        });
        //uc浏览器控制不了
        $('.sendText').addEventListener('paste', function() {
            var textself = this;
            setTimeout(function() {
                self.checkNum(textself);
                self.checkMaxNum(textself);
            });
        });
        $('.sendText').addEventListener('blur', function() {
            self.checkNum(this);
            self.checkMaxNum(this);
        });
        $('.sendBtn').addEventListener('click', function(e) {
            var numvalue = $('.sendText').value;
            if (numvalue.length == 0) {
                alert('请输入票数');
                return;
            }
            if (!self.checkRate($('.sendText'))) {
                return;
            };
            if ($('.sendText').value > playerRestVote) {
                alert('输入票数不能大于剩余票数');
            }

            var count = parseInt($('.sendText').value);
            self.sendTicket(count);
        });


    },
    init: function() {
        this.bindEvent();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    mainObj.init();
})