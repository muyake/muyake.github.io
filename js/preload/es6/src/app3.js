    var imgUrlArr = [];
    for (var i = 6; i < 11; i++) {
        imgUrlArr.push('http://www.muyake.site/web/pubuliu/' + i + '.jpg');
    }

    function loadImage(uri, callback) {
        if (typeof callback != 'function') {
            callback = function(uri) {
                console.log(uri);
            }
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', uri, true); //一定放在responseType = 'blob';之前
        xhr.responseType = 'blob';
        xhr.timeout = 1000;
        xhr.onload = function() {
            callback(window.URL.createObjectURL(xhr.response));
        }
        xhr.onprogress = function(event) {　
            if (event.lengthComputable) {
                addProgress(uri, event.loaded, event.total);　　　
            }　　
        };
        xhr.onreadystatechange = function(e) {};
        xhr.onloadstart = function(e) {
            console.log('onloadstart');
        };
        xhr.onabort = function() {
            console.log('传输取消。');
        };
        xhr.onerror = function() {
            console.log('传输错误。');

        };
        xhr.onloadend = function() {
            console.log('传输结束。');
        };
        xhr.ontimeout = function(event) {
            console.log('请求超时！');
        };

        xhr.send();
    }
    var addProgress = function(uri, percent, totalSize) {
        var barSelector = document.querySelector('.progress-bar');
        barSelector.style.width = (percent / totalSize * 100) + '%';
        document.querySelector('.result').innerHTML = uri + (percent / totalSize * 100) + '%';
    }



    var i = 0;

    function loadArr(i) {
        loadImage(imgUrlArr[i], function(url) {
            var img = new Image();
            img.src = url;
            img.style.width = "80px";
            img.style.height = "80px";
            // 插入预览图片
            document.querySelector(".imgcontainer").appendChild(img);
            ++i
            if (i < imgUrlArr.length) {
                loadArr(i);
            }

        })
    }
    loadArr(i);