var progressDiv = document.getElementById('load');
//progressDiv.appendChild(progressbar.domElement);
var progressbar = new COREHTML5.Progressbar(progressDiv, 'rgba(0,0,0,0.5)', 100, 130, 250);

function progressCallback(num) {
    progressbar.draw(num);
}

function progressOver() {
    console.log('加载完成');
}
var l = new Loading(progressCallback, progressOver);
var imageList = [
    './image/grass/grass.png',
    './image/runpeople.png',
    './image/sky.png',
    './image/tree/smalltree.png',
    './image/tree/tree.png',
    './image/tree/tree-twotrunks.png',
    './image/imgBoom/bomb.png',
    './image/imgBoom/bomb-no-fuse.png',
];
for (var i = 0; i < 9; i++) {
    imageList.push("./image/imgBoom/explosion-0" + i + ".png");
    imageList.push("./image/imgBoom/fuse-0" + i + ".png");
};
imageList.forEach(function(item, index, arr) {
    l.queueImage(item);
})
l.loadImages();