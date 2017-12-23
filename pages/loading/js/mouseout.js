//解决嵌套DIV多次触发mouseout的问题
(function(w) {
    var dqMouse = function(obj) {
        // 函数体
        return new dqMouse.fn.init(obj);
    }
    dqMouse.fn = dqMouse.prototype = {
        // 扩展原型对象
        obj: null,
        dqMouse: "1.0.0",
        init: function(obj) {
            this.obj = obj;
            return this;
        },
        contains: function(a, b) {
            return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16);
        },
        getRelated: function(e) {
            var related;
            var type = e.type.toLowerCase(); //这里获取事件名字
            if (type == 'mouseover') {
                related = e.relatedTarget || e.fromElement
            } else if (type = 'mouseout') {
                related = e.relatedTarget || e.toElement
            }
            return related;
        },
        over: function(fn) {
            var obj = this.obj;
            var _self = this;
            obj.onmouseover = function(e) {
                var related = _self.getRelated(e);
                if (this != related && !_self.contains(this, related)) {
                    fn(e);
                }
            }
            return _self;
        },
        out: function(fn) {
            var obj = this.obj;
            var _self = this;
            obj.onmouseout = function(e) {
                var related = _self.getRelated(e);
                if (obj != related && !_self.contains(obj, related)) {
                    fn(e);
                }
            }
            return _self;
        }
    }
    dqMouse.fn.init.prototype = dqMouse.fn;
    window.dqMouse = window.$$ = dqMouse;
})(window);