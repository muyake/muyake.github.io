  function setTransform(element, value, key) {
    key = key || "Transform";
    try {
      ["moz", "o", "ms", "webkit", ""].forEach(function(prefix) {
        // console.log(prefix + key);
        element.style[prefix + key] = value;
      });

    } catch (e) {
      console.log(e);
    }
    return element;
  }
  var sharePageObj = {
    othersArr: [
      'http://upload-images.jianshu.io/upload_images/944365-a6f3651b87f0a5ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
      'http://upload-images.jianshu.io/upload_images/9472808-e5198d54b4613b57.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://img.zcool.cn/community/019c04577f1e570000018c1bad9d13.jpg@900w_1l_2o_100sh.jpg',
      'http://upload-images.jianshu.io/upload_images/9472808-309a14d9429de532.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/9472808-9ac32abd840be7c5.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/9472808-e8076ee468834ff8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/9472808-64165b9c86278f7d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/3812307-d1849b94d6ce0ae3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/3888445-8e46cccb893cf8bd.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/3888445-1de0c2b804291de4.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/3888445-e94b9c270d90e0b3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/3888445-b19e5de2f6e8ad3b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
      'http://upload-images.jianshu.io/upload_images/3888445-cb101354c9f627bf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700'
    ],
    //othersArr: [],
    // mainArr: ['http://upload-images.jianshu.io/upload_images/9472808-64165b9c86278f7d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
    // 	'http://upload-images.jianshu.io/upload_images/3812307-d1849b94d6ce0ae3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700'
    // ],
    mainArr: [],
    scanImg: [],
    scanIndex: 0,
    //设置右侧输入框位置
    setMaxHeight: function() {
      if ($('.main').css('margin-top') == '30px') {
        /*window的100%减去main的margin-top减去head的height减去三个1px的border（head的border-bottom,main的top及bottom）*/
        $('.main').css('minHeight', 'calc(100% - 30px - 63px)');
      } else {
        $('.main').css('minHeight', 'calc(100% - 63px)');
      }
    },
    //当页面到校改变时，设置动态设置单元格高度，及更多的lineheight值
    setItemHeight: function(liList) {
      var itemImg = liList;
      if (itemImg.length > 1) {
        var width = itemImg.eq(1).width();
        itemImg.each(function(i) {
          itemImg.eq(i).css('height', width);
        });
        var more = liList.children('.more');
        if (more) {
          more.css('line-height', width + 'px');
        }
      }
    },
    //设置浏览图片的状态
    setImg: function(status) {
      var imageSelector = $('.imgList .scanImg');
      var mainli = $('.mainImg');
      var other = $('.otherImg');
      mainli.addClass('transitionP');
      other.addClass('transitionP');
      mainli.removeClass('mainImg middleLi');
      if (status == 'right') {
        mainli.addClass('otherImg leftLi');
        other.removeClass('otherImg rightLi')
      } else {
        mainli.addClass('otherImg rightLi');
        other.removeClass('otherImg leftLi')
      }
      other.attr('data-index', this.scanIndex);
      other.addClass('mainImg middleLi');
      this.setShow(this.scanIndex);
    },
    //初始化浏览照片
    initScan: function() {
      var raSelector = $('.rightArrow');
      var laSelector = $('.leftArrow');
      raSelector.attr('isdisable', 'false');
      var self = this;
      raSelector.css({
        'cursor': 'pointer',
        'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebR1-2x.png)'
      });
      laSelector.attr('isdisable', 'false');
      laSelector.css({
        'cursor': 'pointer',
        'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebL1-2x.png)'
      });
      if ((this.scanImg.length - 1) == this.scanIndex) {
        raSelector.attr('isdisable', 'true');
        raSelector.css({
          'cursor': 'default',
          'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebR2-2x.png)'
        });
      }
      if (0 == this.scanIndex) {
        laSelector.attr('isdisable', 'true');
        laSelector.css({
          'cursor': 'default',
          'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebL2-2x.png)'
        });
      }
      var item = this.scanImg[this.scanIndex];
      this.renderScan(item);
      $('.nav-u').empty();
      var str = '';
      this.scanImg.forEach(function(item) {
        str += '<li style="background-image:url(' + item.sourceurl + ')"></li>';
      });
      $('.nav-u').append(str);
      $('.nav-u li').eq(this.scanIndex).addClass('currentNav');

      var width = $(".nav-u li").outerWidth(true);
      $('.nav-u').width(width * this.scanImg.length);

      $('.popup').removeClass('isHiden');
      var mainli = $('.img-ul .mainImg');
      var img = mainli.children('img');
      self.setimgWH(img);
    },
    setShow: function(index) {
      var liItemWidth = $(".nav-u li").outerWidth(true);

      var ulSelector = document.querySelector('.nav-u');
      $('.nav-u').addClass('transitionNavP');
      var parentWidth = document.querySelector('.navList').clientWidth;
      var transformX = ulSelector.getAttribute("data-translatex");
      var rpositionX = (index + 1) * liItemWidth + parseInt(transformX);
      var lpositionX = (index) * liItemWidth + parseInt(transformX);
      if (rpositionX > parentWidth) {
        var cTransformX = -((index + 1) * liItemWidth - parentWidth);
        setTransform(ulSelector, "translate3d(" + cTransformX + "px, 0, 0)", "transform");
        ulSelector.setAttribute("data-translatex", cTransformX);
      }
      if (lpositionX < 0) {
        var cTransformX = -((index) * liItemWidth);
        setTransform(ulSelector, "translate3d(" + cTransformX + "px, 0, 0)", "transform");
        ulSelector.setAttribute("data-translatex", cTransformX);
      }
    },

    renderScan: function(item) {
      var str = '';
      if (this.scanImg[this.scanIndex].isload == '1') {
        str += '<li data-index="' + this.scanIndex + '" class="mainImg middleLi"><img data-source="' + item.url + '"  src="' + item.url + '" data-isload="1" data-width="' + item.width + '" data-height="' + item.height + '" alt="" class="scanImg" style="opacity: 1; left: 0px; height: ' + item.height + 'px; width:  ' + item.width + 'px;"></li><li data-index="' + this.scanIndex + '" class="otherImg"><img  data-source=""   src=""  data-isload="0"  data-width="0" data-height="0" alt="" class="scanImg" style="opacity: 1; left: 0px; height:0px; width: 0px;"></li>';
      } else {
        str += '<li data-index="' + this.scanIndex + '" class="mainImg middleLi"><img data-source="' + item.url + '"  src="' + item.loadurl + '" data-isload="0" data-width="124" data-height="124" alt="" class="scanImg" style="opacity: 1; left: 0px; height: ' + item.height + 'px; width:  ' + item.width + 'px;"></li><li data-index="' + this.scanIndex + '" class="otherImg"><img src=""  data-source=""  data-isload="0"  data-width="0" data-height="0" alt="" class="scanImg" style="opacity: 1; left: 0px; height:0px; width: 0px;"></li>';
      }
      $('.img-ul').empty();
      $('.img-ul').append(str);
    },
    renderOther: function(item, status, isDrag) {
      var otherli = $('.img-ul .otherImg img');

      if (status == 'left' || status == 'right') {
        if (status == 'right') {
          $('.otherImg').removeClass('transitionP leftLi').addClass('rightLi');
          //this.setImg('right');
        } else {
          $('.otherImg').removeClass('transitionP rightLi').addClass('leftLi');
          //this.setImg('left');
        }
        if (item.isload == '1') {
          otherli.attr("src", item.url);
        } else {
          otherli.attr("src", item.loadurl);
        }
        otherli.attr('data-isload', item.isload);
        otherli.attr('data-width', item.width);
        otherli.attr('data-height', item.height);
        otherli.css({
          "width": item.width + 'px',
          "height": item.height + 'px'
        });
        otherli.css('opacity', 1);
        this.setimgWH(otherli);
      } else {
        otherli.css('opacity', 0);
      }

      if (isDrag == 'drag') {
        //拖拽时不进行切换
      } else {
        //点击时进行切换
        if (status == 'right') {
          this.setImg('right');
        } else {
          this.setImg('left');
        }
      }

    },
    serNavCurrent: function() {
      var self = this;
      $('.nav-u li').removeClass('currentNav');
      $('.nav-u li').eq(self.scanIndex).addClass('currentNav');
    },
    //绑定按钮事件
    bindEvent: function() {
      var self = this;
      $('.leftR').on('click', function() {
        $('.popup').addClass('isHiden');
      });
      $('.leftArrow').on('click', function() {
        if ($(this).attr('isdisable') == 'true') {
          return;
        }
        if (self.scanIndex > 0) {
          self.scanIndex--;
          var dataItem = self.scanImg[self.scanIndex];
          //根据dataItem渲染otherli
          self.renderOther(dataItem, 'left');

          //将otherli设置为主要位置
          // self.setImg('left');
          self.serNavCurrent();

        }
        if (self.scanIndex == 0) {
          $(this).attr('isdisable', 'true');
          $(this).css({
            'cursor': 'default',
            'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebL2-2x.png)',
          })
        }
        if (self.scanImg.length >= 2) {
          $('.rightArrow').attr('isdisable', 'false');
          $('.rightArrow').css({
            'cursor': 'pointer',
            'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebR1-2x.png)'
          })
        }
      });
      $('.rightArrow').on('click', function() {
        if ($(this).attr('isdisable') == 'true') {
          return;
        }
        if (self.scanIndex <= self.scanImg.length - 2) {
          self.scanIndex++;
          // console.log(self.scanIndex);
          var dataItem = self.scanImg[self.scanIndex];
          //根据dataItem渲染otherli
          self.renderOther(dataItem, 'right');
          //设置otherli的大小
          // var other = $('.otherImg img');
          // $('.otherImg').removeClass('transitionP leftLi').addClass('rightLi');
          // self.setimgWH(other);
          //将otherli设置为主要位置
          // self.setImg('right');
          // $('.nav-u li').removeClass('currentNav');
          // $('.nav-u li').eq(self.scanIndex).addClass('currentNav');
          self.serNavCurrent();
        }
        if (self.scanIndex == self.scanImg.length - 1) {
          $(this).attr('isdisable', 'true');
          $(this).css({
            'cursor': 'default',
            'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebR2-2x.png)'
          });
        }
        if (self.scanImg.length >= 2) {
          $('.leftArrow').attr('isdisable', 'false');
          $('.leftArrow').css({
            'cursor': 'pointer',
            'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebL1-2x.png)'
          });
        }
      });
      $('.nav-u').on('click', 'li', function() {
        var index = $(this).index();
        var currentIndex = parseInt($('.mainImg').attr('data-index'));
        var dataItem = self.scanImg[index];
        $(this).siblings('li').removeClass('currentNav');
        $(this).addClass('currentNav');
        if (index > currentIndex) {
          self.scanIndex = index;
          //根据dataItem渲染otherli
          self.renderOther(dataItem, 'right');
          //设置otherli的大小
          // var other = $('.otherImg img');
          // $('.otherImg').removeClass('transitionP leftLi').addClass('rightLi');
          // self.setimgWH(other);
          //将otherli设置为主要位置
          // self.setImg('right');
        } else if (index < currentIndex) {
          self.scanIndex = index;
          //根据dataItem渲染otherli
          self.renderOther(dataItem, 'left');
          //设置otherli的大小
          // var other = $('.otherImg img');
          // $('.otherImg').removeClass('transitionP rightLi').addClass('leftLi');
          // self.setimgWH(other);
          //将otherli设置为主要位置
          // self.setImg('left');
        }
        self.setArrow();

      });
      $('.img-b').on('click', 'li', function() {
        var othersArr = [];
        if ($(this).children('.more').length > 0) {
          return;
        }
        var siblings = $(this).closest('.img-b').children('li');
        siblings.each(function(index) {
          var imgurl = siblings.eq(index).attr('data-url');
          var isload = siblings.eq(index).attr('data-isload');
          var width = 124;
          var height = 124;
          if (isload == '1') {
            width = siblings.eq(index).attr('data-width');
            height = siblings.eq(index).attr('data-height');
          }
          var sourceurl = siblings.eq(index).attr('data-source');
          othersArr.push({
            url: imgurl,
            width: width,
            height: height,
            isload: isload,
            sourceurl: sourceurl,
            loadurl: 'http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/loading.gif',
          });
        });
        self.scanImg = othersArr;
        self.scanIndex = $(this).index();
        self.initScan();
      });
      $('body').on('click', '.loadapp', function() {
        alert('跳转');
      });
      $(window).resize(function() {
        self.setItemHeight($('.others-comment .img-b li'));
        self.setItemHeight($('.my-comment .img-b li'));
        self.setMaxHeight();
        if (!$('.popup').hasClass('isHiden')) {
          var imgSelector = $('.imgList .scanImg');
          imgSelector.each(function(i) {
            var item = imgSelector.eq(i);
            self.setimgWH(item);
          });
          console.log("resieze");
          dragNav.reset();
        }
      });
    },
    setArrow: function() {
      var leftArrow = $('.leftArrow');
      var rightArrow = $('.rightArrow');
      leftArrow.attr('isdisable', 'false');
      leftArrow.css({
        'cursor': 'pointer',
        'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebL1-2x.png)'
      });
      rightArrow.attr('isdisable', 'false');
      rightArrow.css({
        'cursor': 'pointer',
        'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebR1-2x.png)'
      })

      if (this.scanIndex == this.scanImg.length - 1) {
        rightArrow.attr('isdisable', 'true');
        rightArrow.css({
          'cursor': 'default',
          'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebR2-2x.png)'
        });
      }
      if (this.scanIndex == 0) {
        leftArrow.attr('isdisable', 'true');
        leftArrow.css({
          'cursor': 'default',
          'backgroundImage': 'url(http://a.xnimg.cn/wap/mobile/2017activity/real-estate/img/feedWebL2-2x.png)',
        })
      }
    },
    //渲染图片列表框
    init: function(selector, arr) {
      var str = '';
      var length = arr.length;
      if (arr.length == 0) {
        selector.hide();
      }
      arr.forEach(function(item, index) {
        if (index < 8) {
          str += '<li data-width="0" data-height="0" data-isload="0"  data-source=' + item + '  data-url=' + item + '><div class="liimg-b"></div></li>';
        } else if (index == 9) {
          if (length > 9) {
            var num = length - 9;
            str += '<li data-width="0" data-height="0" data-isload="0"  data-source=' + item + ' data-url=' + item + '><div class="liimg-b"></div><div class="more loadapp">+' + num + '</div></li>';
          } else {
            str += '<li data-width="0" data-height="0" data-isload="0"  data-source=' + item + ' data-url=' + item + '><div class="liimg-b"></div></li>';
          }
        }
      });
      var classnum = 'one';
      var length = arr.length;
      if (length == 2 || length == 4) {
        classnum = 'two';
      }
      if (length >= 3) {
        classnum = 'three';
      }
      selector.append(str);
      selector.addClass(classnum);
      dragNav.init(document.querySelector('.nav-u'));

    },
    //下载图片完成函数
    loadFinish: function(sourceurl, width, height) {
      var self = this;
      this.scanImg.forEach(function(item, index) {
        if (item.sourceurl == sourceurl) {
          item.width = width;
          item.height = height;
          item.isload = '1';
        }
      });
      var imgSelector = $('.imgList .scanImg');
      imgSelector.each(function(i) {
        var item = imgSelector.eq(i);
        var imgurl = item.data('source');
        if (imgurl == sourceurl) {
          item.attr({
            'src': sourceurl,
            'data-width': width,
            'data-height': height,
            'data-isload': '1'
          })
          self.setimgWH(item);
        }
      });
    },

    //下载图片
    onloadurl: function(ulSelector) {
      var liList = ulSelector.children('li');
      var self = this;
      liList.each(function(i) {
        var liSelector = liList.eq(i);
        var imgUrl = liSelector.attr('data-url');
        var sourceurl = liSelector.attr('data-source');
        var img = new Image();
        img.onload = function() {
          liSelector.children('.liimg-b').css({
            opacity: '1',
            backgroundImage: 'url(' + sourceurl + ')'
          });
          liSelector.attr({
            'data-width': this.width,
            'data-height': this.height,
            'data-id': 'img' + i,
            'data-isload': '1',
            'data-url': sourceurl
          });
          self.loadFinish(sourceurl, this.width, this.height);
        };
        img.src = sourceurl;
      })
    },
    //设置浏览图片的高度和宽度
    setimgWH: function($img) {
      if ($img.attr('data-isload') == '0') {
        var imgw = $img.attr('data-width');
        var imgh = $img.attr('data-height');
        $img.width(imgw);
        $img.height(imgh);
      } else {
        var cw = $('.imgList').width() - 30;
        var ch = $('.imgList').height();
        var imgw = $img.attr('data-width');
        var imgh = $img.attr('data-height');
        var rate1 = 0;
        var rate2 = 0;
        if (ch > 0) {
          rate1 = cw / ch;
        }
        if (imgh > 0) {
          rate2 = imgw / imgh
        };
        if (rate1 > rate2) {
          $img.height(ch);
          $img.width(ch * rate2);
        } else {
          $img.width(cw);
          $img.height(cw / rate2);
        }
      }
    },
    setCount: function() {
      var likeNum = parseInt(document.querySelector(".linkNum").innerHTML);
      if (likeNum > 1) {
        document.querySelector(".linkNum + span").innerHTML = "Likes";
      }
      var sharesNum = parseInt(document.querySelector(".sharesNum ").innerHTML);
      if (sharesNum > 1) {
        document.querySelector(".sharesNum  + span").innerHTML = "Shares";
      }
    },
    pageInit: function() {
      this.setCount();
      this.loadingB = document.querySelector(".loading-b");
      this.init($('.others-comment .img-b'), this.othersArr);
      this.init($('.my-comment .img-b'), this.mainArr);
      this.bindEvent();
      this.onloadurl($('.others-comment .img-b'));
      this.onloadurl($('.my-comment .img-b'));
      new Drag(document.querySelector('.imgList .img-ul'));
      $(window).resize();
    }
  }
  $(function() {
    sharePageObj.pageInit();
  })