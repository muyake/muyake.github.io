function loadImage(el, url, fn, progtessfn) {
    if (typeof fn != 'function') {
        fn = function(url) {
            console.log("===createObjectURL===", url);
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var ourl = window.URL.createObjectURL(xhr.response);
        fn(ourl, el);

    }
    xhr.onprogress = function(event) {
        if (event.lengthComputable && progtessfn) {
            progtessfn(el, event.loaded, event.total);
        }
    }
    xhr.onreadystatechange = function() {}
    xhr.onloadstart = function(e) {
        el.percent = 0.0001;
        el.perimeter = 1069;
    }
    xhr.onabort = function(e) {
        el.percent = null;
        el.perimeter = null;
        console.log("===传输取消===");
    }
    xhr.onerror = function(e) {
        el.percent = null;
        el.perimeter = null;
        console.log("===error===");
    }
    xhr.onloadend = function() {
        console.log("===loadend===");
    }
    xhr.ontimeout = function() {
        el.percent = null;
        el.perimeter = null;
        console.log("===请求超时===");
    }
    xhr.send();
}

function progressfn(el, load, total) {
    el.percent = load / total;
    el.perimeter = Math.PI * 2 * 18;
}

function loadFinish(url, el) {
    var img = new Image();
    var elem;
    img.onload = function() {
        if (el.percent == 1) {
            el.dataset.w = this.width;
            el.dataset.h = this.height;
            el.dataset.isload = 1;
            el.dataset.blobUrl = url;
            el.style.backgroundImage = "url(" + url + ")";
            el.style.opacity = "1";
        }
    }
    img.src = url;
}

function startLoad() {
    var nodes = document.querySelectorAll('[data-echo-background]');
    var length = nodes.length;
    var elem, i, bg;
    for (i = 0; i < length; i++) {
        elem = nodes[i];
        bg = elem.dataset.echoBackground;
        loadImage(elem, bg, loadFinish, progressfn);
    }
}

window.addEventListener("DOMContentLoaded", function() {
    startLoad()
})