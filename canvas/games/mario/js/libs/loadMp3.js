 function mp3Loading(progressCallback, finishCallback) {
     this.musicLoadingProgressCallback = progressCallback ? progressCallback : function() {

     };
     this.musicLoadingFinishCallback = finishCallback ? finishCallback : function() {

     };
     this.musics = {};
     this.musicUrls = [];
     this.musicsLoaded = 0;
     this.musicsFailedToLoad = 0;
     this.musicsIndex = 0;
 }
 mp3Loading.prototype = {
     // 根据url获取music对象

     getMusic: function(audioUrl) {
         return this.musics[audioUrl];
     },

     //音频加载成功的回调函数
     musicLoadedCallback: function(e) {
         this.musicsLoaded++;
         this.musicProgress();
     },
     musicProgress: function() {
        // var percentage = (this.musicsLoaded + this.musicsFailedToLoad) /
             this.musicUrls.length * 100;
         this.musicLoadingProgressCallback();
        
     },

     //音频加载错误的回调函数
     musicLoadErrorCallback: function(e) {
         this.musicsFailedToLoad++;
         this.musicProgress();
     },

     //加载单独音频错误

     loadmusic: function(musicUrl) {
         var music = new Audio(),
             self = this;

         music.src = musicUrl;

         music.addEventListener('loadedmetadata',
             function(e) {
                 self.musicLoadedCallback(e);
             }); 
         this.musics[musicUrl] = music;
     },

     //音频数组加载

     loadMusics: function() {
         var self = this;
         this.musicUrls.forEach(function(item, index, arr) {
             self.loadmusic(arr[index]);
         });
     },
     //插入音频
     queueMusic: function(musicUrl) {
         this.musicUrls.push(musicUrl);
     }
 }