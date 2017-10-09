const preloadImage = function(path) {
    return new Promise(function(resolve, reject) {
        var image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
};
var g = function* () {
  try {
    var foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};
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
        var promiseArr = [];
        var promises = this.imgUrlArr.map(function(item) {
            return preloadImage(item);
        });
Promise.all(promises).then(function (posts) {
  self.progressOverCallback();
},null,function (num){
    console.log(num);
}).catch(function(reason){
  // ...
});

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
var option = {
    imgUrlArr: ['../img/1.jpg', '../img/2.jpg', '../img/3.jpg', '../img/4.jpg', '../img/5.jpg', '../img/6.jpg'],
    progressCallback: function(progress) {
        var barSelector = document.querySelector('.progress-bar');
        barSelector.style.width = (progress * 100) + '%';
    },
    progressOverCallback: function() {
       // console.log(preLoadObj.imgObjList['http://www.muyake.site/web/pubuliu/1.jpg'].src);
        console.log('完成加载');
    },
}
preLoadObj.init(option);
