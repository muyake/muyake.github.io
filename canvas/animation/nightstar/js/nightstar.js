var curveFunction = {
    linear: function(time, startValue, changeValue, duration) {
        return changeValue * time / duration + startValue;
    },
    sineEaseOut: function(t, b, c, d) {
        var _HALF_PI = Math.PI / 2;
        return c * Math.sin(t / d * _HALF_PI) + b;
    },
    bounceEaseInOut: function(t, b, c, d) {
        if (t < d / 2) return bounceEaseIn(t * 2, 0, c, d) * .5 + b;
        else return curveFunction.bounceEaseOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    },
    quartEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    bounceEaseOut: function(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    }
}

var canvas;
//translate方法也可以直接传入像素点坐标
var ctx;
var sources = {
    wangzheng: "../img/spritesheet.png"
};
var images = {};
var w, h, scaleNum; //canvas.width与height
function loadImg(e, callback, images) {
    var loadedImages = 0;
    var numImages = 0;
    for (var src in e) {
        numImages++;
    }
    for (var src in e) {
        images[src] = new Image();
        images[src].onload = function() {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = e[src];
    }
}

function init() {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    w = document.documentElement.getBoundingClientRect().width;
    h = window.innerHeight;
    // canvas = document.getElementById(e);
    scaleNum = w / 640;
    canvas.width = w;
    canvas.height = h;
    loadImg(sources, draw, images);

}


var totalprogress = 0;

function draw() {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.scale(scaleNum, scaleNum);
    drawcircle.draw();
    drawstar.draw();
    drawpeople.draw();
    ctx.restore();
    totalprogress++;
    if (totalprogress < 330) {
        requestAnimFrame(draw);
    } else {
        closeNightStar();
    }
}

function fourstar(protress, starttime, endtime, scale, stararray, itemnum) {
    if (protress > starttime && protress < endtime) {
        ctx.save();
        ctx.globalAlpha = Math.abs(curveFunction.sineEaseOut(protress - starttime, 0, 1, 50));
        ctx.drawImage(images.wangzheng, stararray[itemnum].imgx, stararray[itemnum].imgy, stararray[itemnum].width, stararray[itemnum].height, stararray[itemnum].x, stararray[itemnum].y, stararray[itemnum].width * stararray[itemnum].scale, stararray[itemnum].height * stararray[itemnum].scale);
        ctx.restore();
    }
};
var people = {
    drawbody: function() {
        ctx.drawImage(images.wangzheng, spriteimg.body.imgx, spriteimg.body.imgy, spriteimg.body.width, spriteimg.body.height, spriteimg.body.x, spriteimg.body.y, spriteimg.body.width, spriteimg.body.height);
    },
    drawopeneye: function() {
        ctx.drawImage(images.wangzheng, spriteimg.openeye.imgx, spriteimg.openeye.imgy, spriteimg.openeye.width, spriteimg.openeye.height, spriteimg.openeye.x, spriteimg.openeye.y, spriteimg.openeye.width, spriteimg.openeye.height);
    },
    drawcloseeye: function() {
        ctx.drawImage(images.wangzheng, spriteimg.closeeye.imgy, spriteimg.closeeye.imgy, spriteimg.closeeye.width, spriteimg.closeeye.height, spriteimg.closeeye.x, spriteimg.closeeye.y, spriteimg.closeeye.width, spriteimg.closeeye.height);
    },
    handanimation: {
        progress: 1,
        rotate: 0,
        flag: false,
        drawlefthand: function() {
            if (this.progress <= 12 && this.flag) {
                ctx.save();
                ctx.translate(spriteimg.beizi.width / 2 + spriteimg.beizi.x, spriteimg.beizi.height + spriteimg.beizi.y);
                ctx.scale(1, 1 + Math.abs(curveFunction.sineEaseOut(this.progress, 0, 0.02, 3)));
                ctx.drawImage(images.wangzheng, spriteimg.beizi.imgx, spriteimg.beizi.imgy, spriteimg.beizi.width, spriteimg.beizi.height, -spriteimg.beizi.width / 2, -spriteimg.beizi.height, spriteimg.beizi.width, spriteimg.beizi.height);
                ctx.restore();
                ctx.save();
                ctx.translate(spriteimg.lefthand.x, spriteimg.lefthand.y);
                this.rotate = Math.abs(curveFunction.sineEaseOut(this.progress, 0, 6, 3));
                ctx.rotate(-this.rotate * Math.PI / 180);
                ctx.drawImage(images.wangzheng, spriteimg.lefthand.imgx, spriteimg.lefthand.imgy, spriteimg.lefthand.width, spriteimg.lefthand.height, 0, 0, spriteimg.lefthand.width, spriteimg.lefthand.height);
                ctx.restore();
                ctx.save();
                ctx.translate(spriteimg.righthand.x, spriteimg.righthand.y);
                this.rotate = Math.abs(curveFunction.sineEaseOut(this.progress, 0, 6, 3));
                ctx.rotate(this.rotate * Math.PI / 180);
                ctx.drawImage(images.wangzheng, spriteimg.righthand.imgx, spriteimg.righthand.imgy, spriteimg.righthand.width, spriteimg.righthand.height, 0, 0, spriteimg.righthand.width, spriteimg.righthand.height);
                ctx.restore();
                this.progress += 0.1;
            } else {
                ctx.drawImage(images.wangzheng, spriteimg.beizi.imgx, spriteimg.beizi.imgy, spriteimg.beizi.width, spriteimg.beizi.height, spriteimg.beizi.x, spriteimg.beizi.y, spriteimg.beizi.width, spriteimg.beizi.height);
                ctx.drawImage(images.wangzheng, spriteimg.lefthand.imgx, spriteimg.lefthand.imgy, spriteimg.lefthand.width, spriteimg.lefthand.height, spriteimg.lefthand.x, spriteimg.lefthand.y, spriteimg.lefthand.width, spriteimg.lefthand.height);
                ctx.drawImage(images.wangzheng, spriteimg.righthand.imgx, spriteimg.righthand.imgy, spriteimg.righthand.width, spriteimg.righthand.height, spriteimg.righthand.x, spriteimg.righthand.y, spriteimg.righthand.width, spriteimg.righthand.height);
            }
        },
    },
}
var drawpeople = {
    flag: false,
    progress: 1,
    draw: function() {
        ctx.save();
        if (this.progress > 0 && this.progress < 60) {
            var scalevalue = curveFunction.bounceEaseInOut(this.progress + 90, 0, 1, 150); //从90到150
            ctx.scale(scalevalue, scalevalue);
        } else if (this.progress >= 60 && this.progress < 240) {
            var translateYvalue = curveFunction.sineEaseOut(this.progress - 60, 0, 10, 90); //90=(240-60)/2
            ctx.translate(0, translateYvalue);
        } else if (this.progress >= 310) { //&& this.progress < 330
            var scalevalue = curveFunction.quartEaseIn(330 - (this.progress - 280) - 190, 0.3, 1, 150); //从90到150
            ctx.scale(scalevalue, scalevalue);
            ctx.globalAlpha = curveFunction.linear(330 - this.progress, 0, 1, 20);
        }

        people.drawbody();
        if (this.progress >= 180 && this.progress < 200) {
            people.drawcloseeye();
        } else {
            people.drawopeneye();
        }
        if (this.progress >= 60 && this.progress < 180) {
            people.handanimation.flag = true;
            people.handanimation.drawlefthand(0);
        } else {
            people.handanimation.flag = false;
            people.handanimation.drawlefthand(0);
        }

        ctx.restore();
        this.progress += 1;
    }
}
var drawstar = {
    progress: 1,
    anglechange: 50,
    rotaterate: 0,
    scale: 1,
    draw: function() {
        if (this.progress > 65) {
            var interval = 10;
            for (var i = 0; i < 5; i++) {
                fourstar(this.progress, 65 + i * interval, 265 + i * interval, 1, stararray, i);
            }
            this.scale = curveFunction.linear(this.progress - 67, 0.7, 0.3, 103);
            fivestar(this.anglechange, this.rotaterate, this.progress, 67, 170, this.scale, stararray, 5);
            this.anglechange += 0.5;
            this.rotaterate += 5;
        }
        this.progress += 1;
    }
}

function fivestar(anglechange, rotaterate, protress, starttime, endtime, scale, stararray, itemnum) {
    if (protress > starttime && protress < endtime) {
        ctx.save();
        var ex = 200 * (1 - Math.cos(anglechange / 180 * Math.PI));
        var ey = -200 * Math.sin(anglechange / 180 * Math.PI);
        ctx.translate(ex, ey);
        ctx.rotate((rotaterate) * Math.PI / 180);
        ctx.scale(scale, scale);
        var five = 5;
        var img = images.wangzheng;
        if (protress > endtime - 40) {
            ctx.globalAlpha = curveFunction.linear(endtime - protress, 0, 1, 40);
        }
        ctx.drawImage(img, stararray[five].imgx, stararray[five].imgy, stararray[five].width, stararray[five].height, -stararray[five].width / 2, -stararray[five].height / 2, stararray[five].width, stararray[five].height);
        ctx.restore();
        if (protress > starttime + 20) {
            ctx.save();
            var ex = 200 * (1 - Math.cos(anglechange / 180 * Math.PI));
            var ey = -200 * Math.sin(anglechange / 180 * Math.PI);
            ctx.translate(-ex, ey + 70);
            ctx.rotate(-(rotaterate) * Math.PI / 180);
            ctx.scale(scale * 0.5, scale * 0.5);
            var five = 5;
            var img = images.wangzheng;
            if (protress < endtime - 20 && protress >= endtime - 40) {
                ctx.globalAlpha = curveFunction.linear(endtime - 20 - protress, 0, 1, 20);
            } else if (protress >= endtime - 20) {
                ctx.globalAlpha = 0;
            }
            ctx.drawImage(img, stararray[five].imgx, stararray[five].imgy, stararray[five].width, stararray[five].height, -stararray[five].width / 2, -stararray[five].height / 2, stararray[five].width, stararray[five].height);
            ctx.restore();
        }
    }
};

function star(width, height, opacity, scale, x, y, imgx, imgy) {
    this.width = width;
    this.height = height;
    this.opacity = opacity;
    this.scale = scale,
        this.x = x;
    this.y = y;
    this.imgx = imgx;
    this.imgy = imgy;
}

function circlePoint(x, y, radius, opacity, progress) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.opacity = opacity;
    this.progress = progress;
    this.draw = function(ctx) {
        this.opacity = curveFunction.sineEaseOut(this.progress, 0, 1, 10);
        ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }
}
var circle1 = new circlePoint(-150, -300, 2, 1, 1, 0);
var circle2 = new circlePoint(100, -330, 5, 1, 1, 0);
var circle3 = new circlePoint(250, -100, 3, 1, 1, 0);
var circle4 = new circlePoint(-250, -100, 4, 1, 1, 0);
var circlePointArray = [circle1, circle2, circle3, circle4];
var star41 = new star(30, 30, 1, 1, -102, -168, 612, 51);
var star42 = new star(30, 30, 1, 0.7, -190, -43, 612, 51);
var star43 = new star(30, 30, 1, 0.9, -123, 131, 612, 51);
var star44 = new star(30, 30, 1, 0.8, 157, 28, 612, 51);
var star45 = new star(30, 30, 1, 0.8, 88, -148, 612, 51);
var star51 = new star(36, 36, 1, 0.5, 84, -143, 638, 5);
var star52 = new star(36, 36, 1, 0.5, 84, -143, 638, 5);
var spriteimg = {
    drawreact: {
        width: 298,
        height: 333,
        imgx: 0,
        imgy: 0,
        x: 0,
        y: 0
    },
    beizi: {
        width: 291,
        height: 221,
        imgx: 5,
        imgy: 5,
        x: -143,
        y: -52
    },
    body: {
        width: 296,
        height: 331,
        imgx: 306,
        imgy: 5,
        x: -141,
        y: -164
    },
    closeeye: {
        width: 16,
        height: 14,
        imgx: 612,
        imgy: 5,
        x: 26,
        y: -95
    },
    openeye: {
        width: 16,
        height: 14,
        imgx: 689,
        imgy: 51,
        x: 26,
        y: -95
    },

    lefthand: {
        width: 27,
        height: 79,
        imgx: 652,
        imgy: 51,
        x: -81,
        y: -58
    },
    righthand: {
        width: 27,
        height: 79,
        imgx: 689,
        imgy: 75,
        x: 58,
        y: -57
    },
    star4: {
        width: 30,
        height: 30,
        imgx: 612,
        imgy: 51,
        x: 0,
        y: 0
    },
    star5: {
        x: 0,
        y: 0,
        imgx: 638,
        imgy: 5,
        width: 36,
        height: 36
    },
    star51: {
        x: 0,
        y: 0,
        imgx: 684,
        imgy: 5,
        width: 36,
        height: 36
    },
    wangzheng: {
        x: -187,
        y: -168.5,
        imgx: 0,
        imgy: 0,
        width: 374,
        height: 337
    }
};
var starreact = {
    width: 560,
    height: 560,
    opacity: 1,
    x: -330,
    y: -250
};
var drawcircle = {
    progress: 1,
    start: 30,
    durtime: 20,
    draw: function() {
        if (this.progress < this.progress < 4 * this.durtime + this.start && this.progress > this.start) {
            switch (true) {
                case this.progress > this.start && this.progress < this.durtime + this.start:
                    circlePointArray[0].progress = this.progress - this.start;
                    circlePointArray[0].draw(ctx);
                    break;
                case this.progress > this.durtime + this.start && this.progress < 2 * this.durtime + this.start:
                    circlePointArray[1].progress = this.progress - this.start - this.durtime;
                    circlePointArray[1].draw(ctx);
                    break;
                case this.progress > 2 * this.durtime + this.start && this.progress < 3 * this.durtime + this.start:
                    circlePointArray[2].progress = this.progress - this.start - this.durtime * 2;
                    circlePointArray[2].draw(ctx);
                    break;
                case this.progress > 3 * this.durtime + this.start && this.progress < 4 * this.durtime + this.start:
                    circlePointArray[3].draw(ctx);
                    circlePointArray[3].progress = this.progress - this.start - this.durtime * 3;
                    circlePointArray[3].draw(ctx);
                    break;
            }
        }
        this.progress++
    }
}
var stararray = [star41, star44, star42, star45, star43, star51];
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
