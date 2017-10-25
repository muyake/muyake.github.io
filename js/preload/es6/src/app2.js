    var imgUrlArr = [];
    for (var i = 1; i < 50; i++) {
        imgUrlArr.push('http://www.muyake.site/web/pubuliu/' + i + '.jpg');
    }

    function loadImage(uri, callback) {
        return new Promise((resolve, reject) => {
            if (typeof callback != 'function') {
                callback = function(uri) {
                    console.log(uri);
                }
            }
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            //xhr.timeout = 1000;
            xhr.onload = function() {
                callback(window.URL.createObjectURL(xhr.response));
                //console.log(window.URL.createObjectURL(xhr.response));
            }
            xhr.onprogress = function(event) {　
                if (event.lengthComputable) {
                    console.log('z');
                    arrObj[uri] = event.loaded;
                    addProgress();
                    resolve(event.total);　　　
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
                reject();
            };
            xhr.onloadend = function() {
                //console.log('传输结束。');
            };
            xhr.ontimeout = function(event) {
                console.log('请求超时！');　　
                reject();
            };
            xhr.open('GET', uri, true);
            xhr.send();
        });
    }
    var addProgress = (function() {
        var i = 0,
            l = imgUrlArr.length,
            barSelector = document.querySelector('.progress-bar');
        return function() {
            if (flag == false) {
                return;
            }
            var percent = 0;
            for (var item in arrObj) {
                percent += arrObj[item];
            }
            console.log(percent / totalSize);
            barSelector.style.width = (percent / totalSize * 100) + '%';
        }
    })();
    var arr = [];
    var arrObj = {};
    for (var i = 0, l = imgUrlArr.length; i < l; i++) {
        arr.push(loadImage(imgUrlArr[i], function() {}));
        arrObj[imgUrlArr[i]] = 0;
    }
    var totalSize = 0;
    var flag = false;

    Promise.all(arr).then(function(data) {
        flag = true;
        console.log('ok');
        data.forEach(function(item) {
            totalSize += item;
        })

    }).catch(function() {
        alert('fail');
    });