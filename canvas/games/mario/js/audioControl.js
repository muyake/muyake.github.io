var gameAudio={
    smallJump:{
        startTime:0.5,
        endTime:2,
    },
    bigJump:{
        startTime:3.2,
        endTime:4,
    },
    eatMoney:{
        startTime:7,
        endTime:7.5,
    }
}

//audioControl
var audioControl={
    audioPlay:function(audioObj,videoConfig){
        audioObj.currentTime = videoConfig.startTime;
        audioObj.endTime = videoConfig.endTime;
        audioObj.play();
    },
    BGMPlay:function(audioObj){
        audioObj.loop = true;
        audioObj.volume = 0.2;
        audioObj.play();
    },
    BGMPause:function(audioObj){
        audioObj.pause();
    },
    timeupdateAddEventListener:function(audioObj){
    audioObj.addEventListener('timeupdate', function() {
      if (this.currentTime > this.endTime) {
        this.pause();
      }
    }, false);
    }
}