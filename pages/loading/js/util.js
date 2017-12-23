function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }

    var newClass = el.className.split(" ")
    newClass.push(className)
    el.className = newClass.join(' ')
}

function hasClass(el, className) {
    // 匹配 "className" 或者 " className "
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

// Object.prototype.show=function(){
//     this.style.display = "block"
// }

var preLoadObj = {
    imgUrlArr: [],
    //这里可以改正map对象http://www.cnblogs.com/sker/p/5520392.html
    imgObjList: {},
    progressCallback: function() {},
    progressOverCallback: function() {},
    setProgress: function() {
        var length = this.imgUrlArr.length;
        var count = 0;
        var self = this;
        this.imgUrlArr.forEach(function(item) {
            var img = new Image();
            img.src = item;
            img.onload = function() {
                count++;
                self.imgObjList[item] = img;
                var progress = count / length;
                self.progressCallback(progress);
                if (count == length) {
                    self.progressOverCallback();
                }
            };
            //图片加载失败
            img.onerror = function() {
                count++;
                self.imgObjList[item] = img;
                var progress = count / length;
                self.progressCallback(progress);
                if (count == length) {
                    self.progressOverCallback();
                }
            };
        })
    },
    init: function(option) {
        if (typeof option.imgUrlArr != 'undefined') {
            this.imgUrlArr = option.imgUrlArr;
        }
        if (typeof option.progressCallback != 'undefined') {
            this.progressCallback = option.progressCallback;
        }
        if (typeof option.progressOverCallback != 'undefined') {
            this.progressOverCallback = option.progressOverCallback;
        }
        this.setProgress();
    },
}

function lazyLoad(src) {
    return new Promise((resolve, reject) => {
        var img = new Image;
        img.onload = () => {
            addProgress();
            resolve();
        }
        img.onerror = () => {
            reject();
        }
        img.src = src;
    });
}