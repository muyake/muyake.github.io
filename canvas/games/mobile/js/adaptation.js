window.onresize = r;

function r(resizeNum) {
    //核心适配代码
    var winW = window.innerWidth;
    document.getElementsByTagName("html")[0].style.fontSize = winW * 0.15625 + "px";
    //核心适配代码
    if (winW > window.screen.width && resizeNum <= 10) {
        setTimeout(function() {
            r(++resizeNum)
        }, 100);
    } else {
        setRotate();
        //  draw();

        document.getElementsByTagName("body")[0].style.opacity = 1;
    }
}
setTimeout(function() {
    r(0)
}, 100);

function setRotate() {
    var width_doc = document.documentElement.clientWidth;
    var height_doc = document.documentElement.clientHeight; //文档流的高度
    var main = document.querySelector('.main');
    main.style.height = width_doc + 'px';
    main.style.width = height_doc + 'px';
    main.style.transform = 'rotate(90deg) translate(' + (height_doc - width_doc) / 2 + 'px,' + (height_doc - width_doc) / 2 + 'px)';
    //requestFullScreen(main);
}

function requestFullScreen(element) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}