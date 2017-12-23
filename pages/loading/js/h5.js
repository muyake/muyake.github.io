var oSliderWrap = document.querySelector(".show-img"),
    // my
    oImgsBox = document.querySelector(".my-img-com"),
    aImgs = oImgsBox.querySelectorAll(".img-item"),
    // mask
    oImgNums = document.querySelector(".img-nums"),
    oMaskBox = document.querySelector(".mask-box"),
    oBack = document.querySelector(".i-back"),

    //other
    oOtherImgsBoxs = document.querySelector(".other-img-com"),
    aOhterImgs = oOtherImgsBoxs.querySelectorAll(".img-item"),
    aSliderItem,
    oSliderBox,
    oboxH = oSliderWrap.offsetHeight;

var slider = {
    isloaded: false,
    options: {
        imgUrlArr: [
            "http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/1.jpg",
            "http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/1.jpg",
            "http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/timg.jpg",
            "http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/2.jpg"
        ],
        progressOverCallback: function() {
            // alert(11);
            var self = this;
            slider.isloaded = true;
            // console.log(slider.isloaded);
            // for (var i = 0; i < self.imgUrlArr.length; i++) {
            //     var s = self.imgUrlArr[i];
            //     if (preLoadObj.imgObjList[s].offsetHeight > oboxH) {
            //         preLoadObj.imgObjList[s].style.height = "100%";
            //     }
            // }
        }
    },
    render: function(p) {
        var str = "";
        oSliderBox = document.querySelector(".slider-box");
        for (var i = 0; i < p; i++) {
            str += '<li class="s-item">\
                        <img src="http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/1.jpg" alt="">\
                    </li>';
        }
        //     var str = '<ul class="slider-box">\
        //     <li class="s-item">\
        //         <img src="http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/1.jpg" alt="">\
        //     </li>\
        //     <li class="s-item">\
        //         <img src="http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/1.jpg" alt="">\
        //     </li>\
        //     <li class="s-item">\
        //         <img src="http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/1.jpg" alt="">\
        //     </li>\
        //     <li class="s-item">\
        //         <img src="http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/2.jpg" alt="">\
        //     </li>\
        // </ul>';
        oSliderBox.innerHTML = str;
        aSliderItem = document.querySelectorAll(".s-item");
        // console.log(aSliderItem);
        // aSliderItem = oSliderBox.children;
        setSliderWidth(aSliderItem);

    },
    // setSliderWidth: function() {

    // },
    init: function() {
        var self = this;
        preLoadObj.init(self.options);
        // if (this.isloaded) {
        forshow();
        // }
    }

}

function setSliderWidth(aSliderItem) {
    var width = 0;
    var sliderWidth = document.body.offsetWidth;
    // console.log(sliderWidth, aSliderItem);
    // var len = oSliderWrap.children.children.length;
    for (var i = 0; i < aSliderItem.length; i++) {
        aSliderItem[i].style.width = sliderWidth + "px";
        width += sliderWidth;
    }
    oSliderBox.style.width = width + "px";
}

function forshow() {
    var str = '';
    var str2 = "";
    if (getQueryString("m")) {
        var params = getQueryString("m");
        var myBox = document.querySelector(".my-img-com");
        var more = 0;
        if (params == 0) {
            myBox.style.display = "none";
        } else {
            switch (params) {
                case "1":
                    addClass(myBox, "one-img");
                    break;
                case "2":
                case "4":
                    addClass(myBox, "two-img");
                    break;
                case "3":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    addClass(myBox, "three-img");
                    break;
                default:
                    addClass(myBox, "three-img");
                    addClass(myBox, "more-img");
                    more = params - 9;
            }
            for (var i = 0; i < params - more; i++) {
                str += '<div class="img-item" data-i=' + (i + 1) + '></div>';
            }
            myBox.innerHTML = str;
            iLen = myBox.children.length;
            if (hasClass(myBox, "more-img")) {
                myBox.lastChild.innerHTML = '<div class="more-mask">+' + more + '</div>';
            }
            // slider.render(params);
        }

    }

    if (getQueryString("o")) {
        var other = document.querySelector(".other-article");
        var otherbox = document.querySelector(".other-img-com");
        var param2 = getQueryString("o");
        var more = 0;
        other.style.display = "block";
        if (param2 == 0) {
            myBox.style.display = "none";
        } else {
            switch (param2) {
                case "1":
                    addClass(otherbox, "one-img");
                    break;
                case "2":
                case "4":
                    addClass(otherbox, "two-img");
                    break;
                case "3":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    addClass(otherbox, "three-img");
                    break;
                default:
                    addClass(otherbox, "three-img");
                    addClass(otherbox, "more-img");
                    more = param2 - 9;
            }
            for (var i = 0; i < param2 - more; i++) {
                str2 += '<div class="img-item" data-i=' + (i + 1) + '></div>';
            }
            otherbox.innerHTML = str2;
            if (hasClass(otherbox, "more-img")) {
                otherbox.lastChild.innerHTML = '<div class="more-mask">+' + more + '</div>';
            }
            iLen2 = otherbox.children.length;

        }


    }

    if (getQueryString("n")) {
        var p = getQueryString("n");
        var noCom = document.querySelector(".no-comment");
        var liCom = document.querySelector(".list-num");
        var ulCom = document.querySelector(".comments-ul");
        if (p == "0") {
            noCom.style.display = "block";
            liCom.style.display = "none";
            ulCom.style.display = "none";
        } else if (p == "1") {
            noCom.style.display = "none";
            liCom.style.display = "block";
            ulCom.style.display = "block";
        }
    }
}
window.onload = function() {

    slider.init();
    // setSliderWidth();

    var oSliderWrap = document.querySelector(".show-img");

    // function setSliderWidth() {
    //     var width = 0;
    //     var sliderWidth = document.body.offsetWidth;
    //     console.log(sliderWidth);
    //     // var len = oSliderWrap.children.children.length;
    //     var len = 4;
    //     for (var i = 0; i < len; i++) {
    //         aSliderItem[i].style.width = sliderWidth + "px";
    //         width += sliderWidth;
    //     }
    //     oSliderBox.style.width = width + "px";
    // }


    var scroll;

    function showMask(i, len) {
        oMaskBox.style.display = 'block';
        document.body.className = "lock";
        oImgNums.innerText = i + "/" + len;
        slider.render(len);
        var oSliderWrap = document.querySelector(".show-img");
        scroll = new BScroll(oSliderWrap, {
            scrollX: true,
            scrollY: true,
            momentum: false,
            snap: {
                loop: false,
                threshold: 0.3,
                speed: 400
            }
        });
        scroll.goToPage(Number(i - 1), 0, 0);

        scroll.on("scrollEnd", function() {
            var pageIndex = Number(scroll.getCurrentPage().pageX) + 1;
            oImgNums.innerText = pageIndex + "/" + len;
            // console.log(pageIndex)
        })
    }

    function hideMask() {
        oMaskBox.style.display = 'none';
        document.body.className = "";
        // scroll.destroy();
    }

    // 先这么着吧，保证能看
    oImgsBox.addEventListener("click", function(e) {
        if (e.target.className == "img-item") {
            var index = e.target.dataset.i;
            showMask(index, iLen);
        }
        if (e.target.className == "more-mask") {
            e.stopPropagation();
            alert("请前往APP store下载");
        }
    })

    oOtherImgsBoxs.addEventListener("click", function(e) {
        if (e.target.className == "img-item") {
            var index = e.target.dataset.i;
            showMask(index, iLen2);
        }
        if (e.target.className == "more-mask") {
            e.stopPropagation();
            alert("请前往APP store下载");
        }
    })

    oBack.addEventListener("click", function(e) {
        hideMask();
    })


}