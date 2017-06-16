var progressObj = {
  mileageNum: 0, //马里奥走的里程
  totaltime: 300, //游戏倒计时
  velocityX: 0,
  currentTime: 300,
  fpsNum: 60,
  countDownWatch: new Stopwatch(),
  mileageNumUpdate: function(fpsNum) {
    this.fpsNum = (fpsNum == 0) ? 0 : (fpsNum || this.fpsNum);
    this.mileageNum += this.velocityX / this.fpsNum;
  },
  countDownNumUpdate: function() {
    //this.fpsNum = (fpsNum == 0) ? 0 : (fpsNum || this.fpsNum);
    this.currentTime = this.totaltime - this.countDownWatch.getElapsedTime() / 1000;
  },
  countDownStart: function() {
    this.countDownWatch.start();
  },
  countDownPause: function() {
    this.countDownWatch.stop();
    this.totaltime = this.currentTime;
  },
}