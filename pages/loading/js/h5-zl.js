var oMaskBox = document.querySelector(".mask-box");
var oImgNums = document.querySelector(".img-nums");
var oImgsBox = document.querySelector(".my-img-com");
var oOtherImgsBoxs = document.querySelector(".other-img-com");
var oSliderBox = document.querySelector(".slider-box");
var oBack = document.querySelector(".i-back");
var navBox = document.querySelector(".img-nav-box");
var oBody = document.body;

var slider = {
    scroll: null,
    imgArr: [],
    mySliderNum: function() {
        var tmp = Number(getQueryString("m"));
        if (tmp > 9) {
            return 9;
        } else {
            return tmp;
        }
    },
    othSliderNum: function() {
        var tmp = Number(getQueryString("o"));
        if (tmp > 9) {
            return 9;
        } else {
            return tmp;
        }
    },
    newImgWaH: function(cw, ch, imgw, imgh) {
        var rate1 = 0;
        var rate2 = 0;
        if (ch > 0) {
            rate1 = cw / ch;
        }
        if (imgh > 0) {
            rate2 = imgw / imgh
        }
        if (rate1 > rate2) {
            return { width: ch * rate2, height: ch }
        } else {
            return { width: cw, height: cw / rate2 }
        }
    },
    setprogress: function(originItem, item, index, circle, percent, perimeter, boxW, boxH) {
        var self = this;
        var raf;
        if (!!percent) {
            if (percent != 1 && !originItem.dataset.blobUrl) {
                circle.setAttribute("stroke-dasharray", perimeter * percent + " " + perimeter * (1 - percent));
                raf = requestAnimationFrame(function() {
                        self.setprogress(originItem, item, index, circle, originItem.percent, originItem.perimeter, boxW, boxH);
                    })
                    // setTimeout(function() {
                    //     self.setprogress(originItem, item, index, circle, originItem.percent, originItem.perimeter, boxW, boxH);
                    // }, 20)
            } else {
                setTimeout(function() {
                    var oimg = new Image();
                    var w = originItem.dataset.w;
                    var h = originItem.dataset.h;
                    var burl = originItem.dataset.blobUrl;
                    console.log("最后", w, h, burl);
                    oimg.onload = function() {
                        newImgWaH = self.newImgWaH(boxW, boxH, w, h);
                        oimg.style.width = newImgWaH.width + "px";
                        oimg.style.height = newImgWaH.height + "px";
                        item.appendChild(oimg);
                    }
                    oimg.src = burl;
                    circle.parentNode.style.display = "none";
                    window.cancelAnimationFrame(raf);
                }, 100);
            }
        } else {
            circle.setAttribute("stroke-dasharray", 0 + " " + 1069);
        }
    },
    render: function(p, sArr, achild) {
        var self = this;
        var str = "";
        var navStr = "";
        var count = 0;
        var boxW = document.documentElement.clientWidth || document.body.clientWidth;
        var boxH = document.querySelector(".show-img").clientHeight;
        var navW = ((boxW - 10) / p) > navBox.clientHeight ? navBox.clientHeight - 10 : ((boxW - 10) / p);

        for (var i = 0; i < p; i++) {
            if (sArr[i].isload == 1) {
                var tempw = sArr[i].width,
                    temph = sArr[i].height;
                var newWaH = self.newImgWaH(boxW, boxH, tempw, temph);
                str += '<li class="s-item" data-index="' + i + '" data-url=' + sArr[i].blobUrl + ' data-isload="' + sArr[i].isload + '"><img src="' + sArr[i].blobUrl + '" style="width:' + newWaH.width + 'px;height:' + newWaH.height + 'px"/></li>';
            } else {
                str += '<li class="s-item" data-url=' + sArr[i].originUrl + ' data-isload="' + sArr[i].isload + '" data-index="' + i + '">\
                            <svg width="50" height="50" viewbox="0 0 50 50">\
                                <circle cx="25" cy="25" r="18" stroke="#D1D3D7" stroke-width="6" fill="none"></circle>\
                                <circle cx="85" cy="25" r="18" stroke="#00A5E0" stroke-width="6" fill="none" class="changecircle" stroke-dasharray="0 1069"  transform="matrix(0,-1,1,0,0,110)"></circle>\
                            </svg>\
                        </li>';
            }
            navStr += '<div class="img-nav" style="width:' + navW + 'px;height:' + navW + 'px;background-image:url(' + sArr[i].originUrl + ')" data-index=' + i + '></div>';
        }
        oSliderBox.innerHTML = str;
        navBox.innerHTML = navStr;
        var aSliderLi = document.querySelectorAll(".s-item");
        this.setSliderWidth(aSliderLi);
        var aLi = Array.prototype.slice.call(aSliderLi);

        aLi.forEach(function(item, index) {
            if (item.dataset.isload == 0) {
                var originItem = achild[index].children[0];
                var circle = item.children[0].querySelector(".changecircle");
                var percent = originItem.percent;
                var perimeter = originItem.perimeter;
                self.setprogress(originItem, item, index, circle, percent, perimeter, boxW, boxH);
            }
        });
    },
    setSliderWidth: function(aSliderItem) {
        var oSliderBox = document.querySelector(".slider-box");
        var width = 0;
        var i;
        var len = aSliderItem.length;
        var sliderwidth = document.documentElement.clientWidth || document.body.clientWidth;
        for (i = 0; i < len; i++) {
            aSliderItem[i].style.width = sliderwidth + "px";
            width += sliderwidth;
        }
        oSliderBox.style.width = width + "px";
    },
    // 显示图片展示mask
    showMask: function(i, len, _this) {
        oMaskBox.style.display = "block";
        document.body.className = "lock";
        oImgNums.innerText = i + "/" + len;
        var achild = _this.children;
        for (var j = 0; j < achild.length; j++) {
            var temp = achild[j].children[0];
            this.imgArr.push({
                index: temp.dataset.i,
                isload: temp.dataset.isload,
                width: temp.dataset.w,
                height: temp.dataset.h,
                originUrl: temp.dataset.echoBackground,
                blobUrl: temp.dataset.blobUrl,
            })
        }
        console.log("kankan", this.imgArr);
        this._initSlider(i, len, this.imgArr, achild);
    },
    // 隐藏mask
    hideMask: function() {
        oMaskBox.style.display = 'none';
        document.body.className = "";
        this.imgArr = [];
        oSliderBox.innerHTML = "";
        this.scroll.destroy();
    },
    // 初始化slider
    _initSlider: function(i, len, sArr, achild) {
        var self = this;
        self.render(len, sArr, achild);
        var oSliderWrap = document.querySelector(".show-img");
        self.scroll = new BScroll(oSliderWrap, {
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: {
                loop: false,
                threshold: 0.3,
                speed: 400
            },
            click: true
        });
        self.scroll.goToPage(Number(i) - 1, 0, 0);
        var nb = Array.prototype.slice.call(navBox.children);
        nb.forEach(function(item) {
            if (item.dataset.index == Number(i) - 1) {
                addClass(item, "active");
            }
        })
        self.scroll.on("scrollEnd", function() {
            var pageIndex = Number(self.scroll.getCurrentPage().pageX) + 1;
            oImgNums.innerText = pageIndex + "/" + len;
            nb.forEach(function(item) {
                item.className = "img-nav";
                if (item.dataset.index == Number(pageIndex) - 1) {
                    addClass(item, "active");
                }
            })
        })
    }
}

window.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(e) {
        if (hasClass(e.target, "download")) {
            e.stopPropagation();
            alert("请前往APP store下载");
        }
    });
    // 点击我的相册照片
    oImgsBox.addEventListener("click", function(e) {
        var _this = this;
        if (e.target.className == "img-item") {
            e.stopPropagation();
            var index = e.target.dataset.i;
            slider.showMask(index, slider.mySliderNum(), _this);
        }
        if (e.target.className == "more-mask") {
            e.stopPropagation();
            alert("请前往APP store下载");
        }
    });
    // 点击别人的相册照片
    oOtherImgsBoxs.addEventListener("click", function(e) {
        var _this = this;
        if (e.target.className == "img-item") {
            var index = e.target.dataset.i;
            slider.showMask(index, slider.othSliderNum(), _this);
        }
        if (e.target.className == "more-mask") {
            e.stopPropagation();
            alert("请前往APP store下载");
        }
    });
    navBox.addEventListener("click", function(e) {
        var _this = e.target;
        if (hasClass(_this, "img-nav")) {
            var page = Number(_this.dataset.index);
            e.stopPropagation();
            var nb = Array.prototype.slice.call(navBox.children);
            nb.forEach(function(item) {
                item.className = "img-nav";
            })
            addClass(_this, "active");
            if (!!slider.scroll) {
                slider.scroll.goToPage(page, 0, 300);
            }
            oImgNums.innerText = (page + 1) + "/" + nb.length;
        }
    });
    oSliderBox.addEventListener("click", function(e) {
        if (e.target.nodeName != 'IMG') {
            slider.hideMask();
        }
    });
})