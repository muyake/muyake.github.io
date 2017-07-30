var gameAudio = {
    //gameSourceObj.audioList.jumpAll
    smallJump: {
        startTime: 0.5,
        endTime: 2,
    },
    bigJump: {
        startTime: 3.2,
        endTime: 4,
    },
    eatMushroom: {
        startTime: 5,
        endTime: 7,
    },
    intoPipe: {
        startTime: 8,
        endTime: 9,
        startTime: 10,
    },
    monsterDie: {
        endTime: 11,
    },

    //gameSourceObj.audioList.collision
    eatMoney: {
        startTime: 7,
        endTime: 7.5,
    },
    flowerup: {
        startTime: 9.8,
        endTime: 11.5,
    },
    fire: {
        startTime: 11.3,
        endTime: 11.6,
    },

    //长大
    growup: {
        startTime: 5.5,
        endTime: 7,
    },
    //变小
    changeSmall: {
        startTime: 8.5,
        endTime: 9.5,
    },
    hitwall: {
        startTime: 4.9,
        endTime: 5,
    },
    wallbreak: {
        startTime: 3.4,
        endTime: 3.9,
    },
    WD: {
        startTime: 0,
        endTime: 20,
    },
    die: {
        startTime: 0.5,
        endTime: 4,
    },
    monsterdie: {
        startTime: 0.5,
        endTime: 1,
    },
}

//audioControl
var audioControl = {
    //如果isplay不传，则总是播放，如果传了则只播放一次，例如人物死亡
    audioPlay: function(audioObj, videoConfig) {       
         audioObj.currentTime = videoConfig.startTime;
                audioObj.endTime = videoConfig.endTime;
                audioObj.play();
    },
    BGMPlay: function(audioObj) {
        audioObj.loop = true;
        audioObj.volume = 0.2;
        audioObj.play();
    },
    BGMPause: function(audioObj) {
        audioObj.pause();
    },
    timeupdateAddEventListener: function(audioObj) {
        audioObj.addEventListener('timeupdate', function() {
            if (this.currentTime > this.endTime) {
                this.pause();
            }
        }, false);
    }
}
