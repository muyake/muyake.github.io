/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
function ajax(opt) {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function() {};
    var xmlHttp = null;
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    var params = [];
    for (var key in opt.data) {
        params.push(key + '=' + opt.data[key]);
    }
    var postData = params.join('&');
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
    } else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            opt.success(xmlHttp.responseText);
        }
    };
}

function toastfun(text, delay) {
    var selector = document.querySelector(".toast");
    if (selector) {
        selector.parentNode.removeChild(selector);
    }
    var domdiv = document.createElement('div');
    domdiv.className = 'toast';
    domdiv.innerText = text;
    document.getElementsByTagName("body")[0].appendChild(domdiv);
    clearTimeout(toastTime);
    var toastTime = setTimeout(function() {
        var selector = document.querySelector(".toast");
        selector.parentNode.removeChild(selector);
    }, delay || 1000);
};
document.querySelector('.box').addEventListener('click', function(e) {
    if (e.target.className == "exchangeBtn") {
        var btn = e.target;
        var giftid = btn.getAttribute('data-giftid');
        var giftname = btn.getAttribute('data-giftName');
        var couponCount = btn.getAttribute('data-cOuponcount');
        var userinfostr = document.querySelector('.userinfo span').innerHTML;
        var reg = /\d+/g;
        var matchresult = userinfostr.match(reg);

        if (matchresult == null) {
            //没有匹配上，则根据接口判断，这个发生概率低，除非页面不吐数据。
            document.querySelector('.okBtn').setAttribute("data-giftid", giftid);
            document.querySelector('.tip span').innerHTML = giftname;
            document.querySelector('.popup').style.display = 'block';
            document.querySelector('.exchagePopup').style.display = 'block';
        } else {
            //获取我的兑换券总数。
            var myCouponCount = 0;
            myCouponCount = parseInt(matchresult[0]);
            couponCount = parseInt(couponCount);
            if (myCouponCount < couponCount) {
                toastfun("兑换券不足，赶快去开宝箱啦~", 2000);
                return;
            } else {
                document.querySelector('.okBtn').setAttribute("data-giftid", giftid);
                document.querySelector('.tip span').innerHTML = giftname;
                document.querySelector('.popup').style.display = 'block';
                document.querySelector('.exchagePopup').style.display = 'block';
            }
        }
    }
}, false);
document.querySelector('.cancelBtn').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.exchagePopup').style.display = 'none';
    document.querySelector('.okBtn').setAttribute('data-disable', 0); //设置兑换按钮可用,这时不会连续发请求。
}, false);
document.querySelector('.okBtn').addEventListener('click', function() {
    toastfun("活动已经结束~");
    return;

    var disable = this.getAttribute('data-disable');
    display = parseInt(disable);
    if (disable != 0) {
        return;
    }
    this.setAttribute('data-disable', 1);
    var giftid = this.getAttribute('data-giftid');
    ajax({
        method: 'POST',
        url: 'http://huodong.renren.com/common/activity/coupon/exchange',
        data: {
            giftId: giftid
        },
        success: function(response) {
            console.log(response);
            var data = JSON.parse(response);
            document.querySelector('.okBtn').setAttribute('data-disable', 0); //设置兑换按钮可用,这时不会连续发请求。
            if (data.code == 0) {
                document.querySelector('.successPopup .giftImg').style.backgroundImage = "url(" + data.giftInfo.giftUrl + ")";
                document.querySelector('.successPopup .labelBox .gitcount').innerHTML = 'x' + data.giftInfo.ticketCount;

                ajax({
                    method: 'GET',
                    url: 'http://huodong.renren.com/common/activity/coupon/getCouponCount',
                    success: function(res) {
                        var getCouponCountRes = JSON.parse(res);
                        if (getCouponCountRes.code == 0) {
                            document.querySelector('.userinfo span').innerHTML = "我的兑换券:" + getCouponCountRes.couponCount + "张";
                        }
                    }
                });
                var firstIcon = document.querySelector('.firstIcon');
                if (data.giftInfo.giftId == 33 && !!firstIcon) {
                    firstIcon.style.display = 'none';
                    document.querySelector('.galaxy').innerHTML = '12张兑换券';
                }
                document.querySelector('.successPopup').style.display = 'block';
                setTimeout(function() {
                    document.querySelector('.successPopup').style.opacity = 1;
                }, 0);
                document.querySelector('.exchagePopup').style.display = 'none';
            } else {
                toastfun(data.msg);
            }

        }
    });
}, false);

document.querySelector('.closeBtn').addEventListener('click', function() {
    document.querySelector('.successPopup').style.display = 'none';
    document.querySelector('.successPopup').style.opacity = 0;
    document.querySelector('.popup').style.display = 'none';
}, false);