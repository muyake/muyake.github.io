var Promise = require('es6-promise').Promise;

var preLoadObj = {
    imgUrlArr: [],
    //这里可以改正map对象http://www.cnblogs.com/sker/p/5520392.html
    imgObjList: {},
    //图片加载进行中
    progressCallback: function() {},
    //图片加载完成
    progressOverCallback: function() {},
    preloadImage: function(src) {
        var self = this;
        return new Promise((resolve, reject) => {
            var img = new Image();
            self.imgObjList[src] = img;
            img.onload = () => {
                self.addProgress();
                resolve();
            };
            img.onerror = () => {
                // console.log(22);
                reject();
            };
            img.src = src;
        })
    },
    //进度条
    addProgress: function() {},
    setProgress: function() {
        var length = this.imgUrlArr.length;
        var count = 0;
        var self = this;
        var promiseArr = [];
        var promises = this.imgUrlArr.map(function(item) {
            return self.preloadImage(item);
        });
        Promise.all(promises).then(function(posts) {
            self.progressOverCallback();
        }).catch(function(reason) {
            console.log('图片加载错误');
        });
    },
    init: function(option) {
        var self = this;
        if (typeof option.imgUrlArr != 'undefined') {
            this.imgUrlArr = option.imgUrlArr;
        }
        if (typeof option.progressCallback != 'undefined') {
            this.progressCallback = option.progressCallback;
        }
        if (typeof option.progressOverCallback != 'undefined') {
            this.progressOverCallback = option.progressOverCallback;
        }
        this.addProgress = (function() {
            var i = 0,
                l = self.imgUrlArr.length;
            return function() {
                ++i;
                self.progressCallback(i / l);
            }
        })();
        this.setProgress();
    },
}
var option = {
    imgUrlArr: ['http://www.muyake.site/web/pubuliu/1.jpg', 'http://www.muyake.site/web/pubuliu/2.jpg', 'http://www.muyake.site/web/pubuliu/3.jpg', 'http://www.muyake.site/web/pubuliu/4.jpg', 'http://www.muyake.site/web/pubuliu/5.jpg', 'http://www.muyake.site/web/pubuliu/6.jpg'],
    progressCallback: function(progress) {
        var barSelector = document.querySelector('.progress-bar');
        barSelector.style.width = (progress * 100) + '%';
    },
    progressOverCallback: function() {
        console.log(preLoadObj.imgObjList['http://www.muyake.site/web/pubuliu/1.jpg'].src);
        console.log('完成加载');
    },
}
preLoadObj.init(option);