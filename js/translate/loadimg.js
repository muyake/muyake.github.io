var sOtherImgs = ['https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/2.jpg',
    'http://img.zcool.cn/community/019c04577f1e570000018c1bad9d13.jpg@900w_1l_2o_100sh.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/3.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/4.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/5.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/6.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/7.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/8.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/9.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/10.jpg',
    'https://raw.githubusercontent.com/muyake/muyake.github.io/master/img/1.jpg'
];
var arr = [];
var str = "";
sOtherImgs.forEach(function(item, index) {
    arr.push({
        width: 0,
        height: 0,
        url: item,
        isLoad: 0,
        isShow: 0,
    });
    if (index == 8) {
        str += '<li data-index="' + index + '" class="current"><img src="" alt=""></li>';
    } else {
        str += '<li data-index="' + index + '"><img src="" alt=""></li>';
    }
});
str += '<li class="border"></li>'
document.querySelector('#oul').innerHTML = str;
sOtherImgs.forEach(function(item, index) {
    var img = new Image();
    img.onload = function() {
        check(this);
    }
    img.src = item;
});

function check(img) {
    // console.log(img.src);
    arr.forEach(function(item) {
        if (item.url == img.src) {
            item.width = img.width;
            item.height = img.height;
            item.isLoad = 1;
        }
    });
    // console.log('n');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].isShow == 0 && arr[i].isLoad == 1) {
            // console.log(i);
            document.querySelectorAll("#oul img")[i].setAttribute('src', arr[i].url);
            document.querySelectorAll("#oul img")[i].style.opacity = 1;
            arr[i].isShow = 1;
        } else if (arr[i].isShow == 1 && arr[i].isLoad == 1) {
            continue;
        } else {
            break;
        }
    }

}