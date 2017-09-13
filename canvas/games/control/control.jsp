<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <meta charset="UTF-8">
    <meta content="telephone=no,email=no" name="format-detection">
    <meta name="applicable-device" content="mobile">
    <meta name="x5-orientation" content="portrait">
    <meta name="browsermode" content="application">
    <meta name="full-screen" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    <style>
    * {
        margin: 0;
        padding: 0;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        /*background: darkgreen;*/
    }

    #controlCanvas {
        /*background: url(background2.png) no-repeat center/100% 100%;*/
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0%;
        top: 0%;
    }

    .floatingControls {
        position: absolute;
    }

    .divfontsize {
        position: absolute;
        left: 642px;
        top: 282px;
        color: red;
        font-size: 0.28rem;
    }

    .main {
        width: 100%;
        height: 100%;
        position: relative;
        transform-origin: center;
    }
    </style>
</head>

<body>
    <div class="main">
        asdfasf
        <canvas id='controlCanvas' width="666" height="364">
            Canvas not supported
        </canvas>
        <div class='floatingControls'>
            <input id='directionCheckbox' type='button' value="变红" />
        </div>
    </div>
    <!-- <div class="divfontsize">A</div> -->
    <script type="text/javascript">
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
            draw();
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
    </script>
    <script src='stopwatch.js'></script>
    <script src='animationTimer.js'>
    </script>
    <script src='control.js'>
    </script>
</body>

</html>