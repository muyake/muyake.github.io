var dragNav = {
    setTransform: function(element, value, key) {
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
    },
    stopDefaultEvent: function(evt) {
        if (evt && evt.preventDefault)
        //阻止默认浏览器动作(W3C) 
            evt.preventDefault();
        else
        //IE中阻止函数器默认动作的方式 
            window.event.returnValue = false;
    },
    bindEvent: function() {
        var _this = this;
        var translateX = 0;
        var selectorWidth = 0;
        var parentWidth = 0;
        this.selector.addEventListener('mousedown', function(evt) {
            _this.stopDefaultEvent(evt);

            // $('.nav-u').addClass('transitionNavP');
            lib.removeClass(_this.selector, 'transitionNavP');

            selectorWidth = parseInt(window.getComputedStyle(_this.selector, null).width);
            parentWidth = parseInt(window.getComputedStyle(_this.selector.parentNode, null).width);
            if (parentWidth < selectorWidth) {
                _this.flag = true;
                _this.startX = evt.clientX;
                translateX = parseInt(_this.selector.getAttribute("data-translateX"));
            }
        });
        this.selector.addEventListener('mousemove', function(evt) {
            _this.stopDefaultEvent(evt);
            if (_this.flag) {
                var num = evt.clientX - _this.startX;
                var transformNum = (translateX + num);
                if (transformNum < 0 && transformNum > (parentWidth - selectorWidth)) {
                    _this.setTransform(_this.selector, "translate3d(" + transformNum + "px, 0, 0)", "transform");
                    _this.selector.setAttribute("data-translateX", transformNum);
                } else {
                    if (transformNum >= 0) {
                        _this.selector.setAttribute("data-translateX", 0);
                        _this.setTransform(_this.selector, "translate3d(" + 0 + "px, 0, 0)", "transform");
                    } else if (transformNum <= (parentWidth - selectorWidth)) {
                        _this.setTransform(_this.selector, "translate3d(" + (parentWidth - selectorWidth) + "px, 0, 0)", "transform");
                        _this.selector.setAttribute("data-translateX", parentWidth - selectorWidth);
                    }
                }
            }
        });
        this.selector.addEventListener('mouseup', function(evt) {
            _this.stopDefaultEvent(evt);
            _this.flag = false;
        });
        $$(this.selector).out(function(evt) {
            _this.stopDefaultEvent(evt);
            _this.flag = false;
        });
    },
    reset: function() {
        if (this.selector) {
            this.selector.setAttribute("data-translateX", 0);
            this.setTransform(this.selector, "translate3d(" + 0 + "px, 0, 0)", "transform");
        }
    },
    init: function(selector) {
        this.selector = selector;
        this.flag = false;
        this.translateX = 0;
        this.selector.setAttribute("data-translateX", 0);
        this.setTransform(this.selector, "translate3d(" + 0 + "px, 0, 0)", "transform");
        this.bindEvent();
    }
}