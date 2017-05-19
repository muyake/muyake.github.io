var game = {
    imageList: [
        './image/grass/grass.png',
        './image/runpeople.png',
        './image/sky.png',
        './image/tree/smalltree.png',
        './image/tree/tree.png',
        './image/tree/tree-twotrunks.png',
        './image/imgBoom/bomb.png',
        './image/imgBoom/bomb-no-fuse.png',
    ],
    mycanvas: document.getElementById('mycanvas'),
    progressDiv: document.getElementById('load'),
    progressCallback: function(num) {
        this.progressbar.draw(num);
    },
    progressOver: function() {
        this.mycanvas.style.display = 'block';
        this.progressDiv.style.display = 'none';
    },
    init: function() {
        this.progressbar = new COREHTML5.Progressbar(this.progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250);
        var l = new Loading(this.progressCallback.bind(this), this.progressOver.bind(this));
        for (var i = 0; i < 9; i++) {
            this.imageList.push("./image/imgBoom/explosion-0" + i + ".png");
            this.imageList.push("./image/imgBoom/fuse-0" + i + ".png");
        };
        this.imageList.forEach(function(item, index, arr) {
            l.queueImage(item);
        });
        l.loadImages();
    },

};

var gameControl = new Game('倒计时', 'mycanvas');
gameControl.startAnimate = function(time) {
    var strTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss.S").split(' ');
    var can = game.mycanvas;
    var cans = can.getContext('2d');

    cans.font = 'bold 100px arial';
    cans.fillStyle = 'red';
    cans.fillText(this.fps.num >> 0, 80, 20);

    cans.font = 'bold 100px consolas';
    cans.textAlign = 'left';
    cans.textBaseline = 'top';
    cans.strokeStyle = '#DF5326';
    cans.strokeText(strTime[0], 80, 100);
    cans.font = 'bold 100px arial';
    cans.fillStyle = 'red';
    cans.fillText(strTime[1], 80, 300);
};
gameControl.start();
game.init();
document.querySelector('#startBtn').addEventListener('click', function() {
    if (gameControl.paused) {
        this.value = '暂停';
    } else {
        this.value = '开始';
    }
    gameControl.togglePaused();
}, true);