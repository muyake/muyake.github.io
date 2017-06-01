 function imageLoading(progressCallback, finishCallback) {
     this.imageLoadingProgressCallback = progressCallback ? progressCallback : function() {

     };
     this.imageLoadingFinishCallback = finishCallback ? finishCallback : function() {

     };
     this.images = {};
     this.imageUrls = [];
     this.imagesLoaded = 0;
     this.imagesFailedToLoad = 0;
     this.imagesIndex = 0;
 }
 imageLoading.prototype = {
     // 根据url获取image对象

     getImage: function(imageUrl) {
         return this.images[imageUrl];
     },

     //图片加载成功的回调函数
     imageLoadedCallback: function(e) {
         this.imagesLoaded++;
         this.imageProgress();
     },
     imageProgress: function() {
         //var imagecount = (this.imagesLoaded + this.imagesFailedToLoad) ;
         this.imageLoadingProgressCallback();
         // if ((this.imagesLoaded + this.imagesFailedToLoad) == this.imageUrls.length) {
         //     this.imageLoadingFinishCallback();
         // }
     },

     //图片加载错误的回调函数
     imageLoadErrorCallback: function(e) {
         this.imagesFailedToLoad++;
         this.imageProgress();
     },

     //加载单独图片错误

     loadImage: function(imageUrl) {
         var image = new Image(),
             self = this;

         image.src = imageUrl;

         image.addEventListener('load',
             function(e) {
                 self.imageLoadedCallback(e);
             });

         image.addEventListener('error',
             function(e) {
                 self.imageLoadErrorCallback(e);
             });

         this.images[imageUrl] = image;
     },

     //图片数组加载

     loadImages: function() {
         var self = this;
         this.imageUrls.forEach(function(item, index, arr) {
             self.loadImage(arr[index]);
         });
     },
     //插入图片
     queueImage: function(imageUrl) {
         this.imageUrls.push(imageUrl);
     }
 }