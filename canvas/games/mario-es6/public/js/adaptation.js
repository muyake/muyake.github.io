import {
    judgeMobile
} from './judgeMobile';

var isMobile = judgeMobile();
if (isMobile) {
    window.onresize = r;
    setTimeout(function() {
        r(0)
    }, 100);
}
var addMobile = true;
//window.onresize = r;

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
        if (addMobile) {
            init();
        }
        //setRotate();
        //  draw();
        // controler.init();
        document.getElementsByTagName("body")[0].style.opacity = 1;
    }
}


function setRotate() {
    var width_doc = document.documentElement.clientWidth;
    var height_doc = document.documentElement.clientHeight; //文档流的高度
    var main = document.querySelector('.main');
    main.style.height = width_doc + 'px';
    main.style.width = height_doc + 'px';
    main.style.transform = 'rotate(90deg) translate(' + (height_doc - width_doc) / 2 + 'px,' + (height_doc - width_doc) / 2 + 'px)';
    requestFullScreen(main);
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

function renderDiv() {
    var mobileHTML = `<canvas id="mycanvas" width="666" height="364"></canvas>
        <div class="loadDiv">
            <div id="load" class="load">
            </div>
        </div>
        <div class="result">asdfasf</div>
        <canvas id='controlCanvas' width="666" height="364">
            Canvas not supported
        </canvas>`;
    document.querySelector('.main').innerHTML = mobileHTML;
}

function init() {
    addMeta();
    renderDiv();
    setRotate();
    addMobile = false;
}

function addMeta {
    var divIframe = document.createDocumentFragment;
    divIframe.innerHTML = `<meta charset="UTF-8">
    <meta content="telephone=no,email=no" name="format-detection">
    <meta name="applicable-device" content="mobile">
    <meta name="x5-orientation" content="portrait">
    <meta name="browsermode" content="application">
    <meta name="full-screen" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="../css/mobile.css">`;
    document.getElementsByTagName('head')[0].appendChild(divIframe);
}