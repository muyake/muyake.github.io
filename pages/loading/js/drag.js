var lib = {
    hasClass: function(elements, cName) {
        return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    },
    addClass: function(elements, cName) {
        if (!this.hasClass(elements, cName)) {
            elements.className += " " + cName;
        };
    },
    removeClass: function(elements, cName) {
        if (this.hasClass(elements, cName)) {
            elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
        };
    }
}

function Drag(selector) {
    this.disX = 0;
    this.startX = 0;
    var _this = this;
    this.flag = false;
    this.isToleft = -1; //0代表向左，1代表向右,-1代表初始状态
    this.screenWidht = 0;
    this.selector = selector;
    selector.addEventListener('mousedown', function(evt) {
        _this.stopDefaultEvent(evt);
        if (_this.flag == false) {
            _this.flag = true;
            _this.screenWidht = parseInt(window.getComputedStyle(selector).width);
            _this.mainImg = _this.selector.querySelector('.mainImg');
            _this.otherImg = _this.selector.querySelector('.otherImg');
            _this.getStartX(evt);
            // _this.setPosition(evt);
        }

    });
    selector.addEventListener('mousemove', function(evt) {
        _this.stopDefaultEvent(evt);
        // console.log(_this.flag);
        // console.log("2mousemove" + evt.clientX);
        if (_this.flag) {
            // console.log("mousemove" + evt.clientX);
            _this.setPosition(evt);
            var num = evt.clientX - _this.startX;
            var abs = Math.abs(num);
            if (abs > _this.screenWidht / 2) {
                if (((_this.isToleft == 1 || _this.isToleft == -1) && sharePageObj.scanIndex == 0) || ((_this.isToleft == 0 || _this.isToleft == -1) && sharePageObj.scanIndex == sharePageObj.scanImg.length - 1)) {
                    _this.finishT("", "");
                    _this.initStart(evt);
                }
            }
        }
    });
    selector.addEventListener('mouseup', function(evt) {
        _this.stopDefaultEvent(evt);
        if (_this.flag) {
            _this.setPosition(evt);
            // console.log(evt);
            var num = evt.clientX - _this.startX;
            var abs = Math.abs(num);
            if (abs > _this.screenWidht / 5) {
                lib.addClass(_this.mainImg, 'transitionP');
                lib.addClass(_this.otherImg, 'transitionP');
                if (((_this.isToleft == 1 || _this.isToleft == -1) && sharePageObj.scanIndex == 0) || ((_this.isToleft == 0 || _this.isToleft == -1) && sharePageObj.scanIndex == sharePageObj.scanImg.length - 1)) {
                    _this.finishT("", "");
                } else {
                    if (num > 0) {
                        _this.finishT("right", 'change');
                    } else {
                        _this.finishT("left", 'change');
                    }
                }
            }
            _this.initStart(evt);
        }
    });

    selector.addEventListener('mouseout', function(evt) {
        _this.stopDefaultEvent(evt.traget);
        // console.log(evt.clientX);

        if (_this.flag) {
            _this.setPosition(evt);
            var left = _this.selector.offsetLeft;
            var right = left + _this.screenWidht;
            var x = evt.clientX;
            if (left <= x && right >= x) {
                var toElement = evt.toElement;
                if (toElement && toElement.className) {
                    if (toElement.className.indexOf("rightArrow") >= 0 || toElement.className.indexOf("leftArrow") >= 0) {
                        return;
                    }
                }
            }

            var x = event.clientX;
            var y = event.clientY;
            var divx1 = this.offsetLeft;
            var divy1 = this.offsetTop;
            var divx2 = this.offsetLeft + this.offsetWidth;
            var divy2 = this.offsetTop + this.offsetHeight;
            if (x <= divx1 || x >= divx2 || y <= divy1 || y >= divy2) {
                var num = evt.clientX - _this.startX;
                var abs = Math.abs(num);
                if (abs > _this.screenWidht / 5) {
                    lib.addClass(_this.mainImg, 'transitionP');
                    lib.addClass(_this.otherImg, 'transitionP');
                    if (((_this.isToleft == 1 || _this.isToleft == -1) && sharePageObj.scanIndex == 0) || ((_this.isToleft == 0 || _this.isToleft == -1) && sharePageObj.scanIndex == sharePageObj.scanImg.length - 1)) {
                        console.log('回复1');
                        _this.finishT("", "");
                    } else {
                        // console.log('回复2');
                        if (num > 0) {
                            _this.finishT("right", 'change');
                        } else {
                            _this.finishT("left", 'change');
                        }
                    }
                }
                _this.initStart(evt);
            }
        }
    });
}
Drag.prototype.stopDefaultEvent = function(evt) {
    if (evt && evt.preventDefault)
    //阻止默认浏览器动作(W3C) 
        evt.preventDefault();
    else
    //IE中阻止函数器默认动作的方式 
        window.event.returnValue = false;
}
Drag.prototype.setTransform = function(element, value, key) {
    key = key || "Transform";
    try {
        ["moz", "o", "ms", "webkit", ""].forEach(function(prefix) {
            // console.log(prefix + key);
            element.style[prefix + key] = value;
        });

    } catch (e) {
        console.log(e);
    }
    return element;
}
Drag.prototype.getStartX = function(evt) {
    this.startX = evt.clientX;
    // console.log("startX" + this.startX);
}
Drag.prototype.setPosition = function(evt) {
    // console.log('setPosition');
    var num = evt.clientX - this.startX;
    // console.log(num);
    if (num < 0 && this.isToleft != 0) {
        // console.log('left');
        this.isToleft = 0;
        if (sharePageObj.scanIndex < sharePageObj.scanImg.length - 1) {
            var dataItem = sharePageObj.scanImg[sharePageObj.scanIndex + 1];
            sharePageObj.renderOther(dataItem, "right", 'drag');
        } else {
            //设置otherli为optacity=0;
            sharePageObj.renderOther(null, '', 'drag');
        }
    }
    if (num > 0 && this.isToleft != 1) {
        // console.log('right');
        this.isToleft = 1;
        // var dataItem = sharePageObj.scanImg[sharePageObj.scanIndex - 1];;
        // sharePageObj.renderOther(dataItem, "left", 'drag');
        if (sharePageObj.scanIndex > 0) {
            var dataItem = sharePageObj.scanImg[sharePageObj.scanIndex - 1];
            sharePageObj.renderOther(dataItem, "left", 'drag');
        } else {
            //设置otherli为optacity=0;
            sharePageObj.renderOther(null, '', 'drag');
        }
    }
    lib.removeClass(this.mainImg, 'transitionP');
    lib.removeClass(this.otherImg, 'transitionP');
    this.setTransform(this.mainImg, "translate3d(" + num + "px, 0, 0)", "transform");
    this.otherImg.style.opacity = 1;
    if (lib.hasClass(this.otherImg, 'rightLi')) {
        this.setTransform(this.otherImg, "translate3d(" + (this.screenWidht + num) + "px, 0, 0)", "transform");
    } else {
        this.setTransform(this.otherImg, "translate3d(-" + (this.screenWidht - num) + "px, 0, 0)", "transform");
    }
}
Drag.prototype.finishT = function(status, isChange) {
    if (isChange == 'change') {
        this.setTransform(this.mainImg, "", "transform");
        this.setTransform(this.otherImg, "", "transform");
        if (status == 'left') {
            // lib.removeClass(this.mainImg, 'mainImg');
            // lib.removeClass(this.mainImg, 'middleLi');
            // lib.removeClass(this.otherImg, 'otherImg');
            // lib.removeClass(this.otherImg, 'rightLi');
            // lib.addClass(this.mainImg, 'leftLi');
            // lib.addClass(this.mainImg, 'otherImg');
            // lib.addClass(this.otherImg, 'middleLi');
            // lib.addClass(this.otherImg, 'mainImg');
            this.mainImg.className = "transitionP leftLi otherImg";
            this.otherImg.className = "transitionP middleLi mainImg";
            // console.log("改回other" + this.mainImg.className);
            // console.log("改回main" + this.otherImg.className);
            // console.log(1);
            if (sharePageObj.scanIndex < sharePageObj.scanImg.length - 1) {
                sharePageObj.scanIndex++;
            }
            sharePageObj.setShow(sharePageObj.scanIndex);
        } else if (status == 'right') {
            // console.log(2);
            // lib.removeClass(this.mainImg, 'mainImg');
            // lib.removeClass(this.mainImg, 'middleLi');

            // lib.removeClass(this.otherImg, 'otherImg');
            // console.log("leftLi");
            // lib.removeClass(this.otherImg, 'leftLi');
            // lib.addClass(this.mainImg, 'rightLi');
            // lib.addClass(this.mainImg, 'otherImg');
            // lib.addClass(this.otherImg, 'middleLi');
            // lib.addClass(this.otherImg, 'mainImg');
            this.mainImg.className = "transitionP rightLi otherImg";
            this.otherImg.className = "transitionP middleLi mainImg";
            if (sharePageObj.scanIndex > 0) {
                sharePageObj.scanIndex--;
            }
            sharePageObj.setShow(sharePageObj.scanIndex);
        }
        this.otherImg.setAttribute('data-index', sharePageObj.scanIndex);
    }

    sharePageObj.serNavCurrent();
    sharePageObj.setArrow();
    this.flag = false;
    this.isToleft = -1;
};
Drag.prototype.initStart = function(evt) {
    this.flag = false;
    this.startX = 0;
    this.isToleft = -1;
    lib.addClass(this.mainImg, 'transitionP');
    lib.addClass(this.otherImg, 'transitionP');
    this.otherImg.style.opacity = '';
    this.setTransform(this.mainImg, "", "transform");
    this.setTransform(this.otherImg, "", "transform");
}