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
    cubicEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
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
    },
    backEaseInOut: function(t, b, c, d, a, p) {
        var s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }
}

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

var goodnightbaobao = function(closefun) {
    var canvas;
    var ctx;
    var sources = {
        wanzheng: "wanzheng.png"
    };
    var totalprogress = 0;
    var stararray = [];
    var images = {};
    var minuter = 20; //出场动画提前了20帧
    goodnightbaobao.closeBaobao = closefun ? closefun : function() {

    };
    var w, h, scaleNum; //canvas.width与height
    //imgConfig
    var spriteimg = {
        zhengti: {
            width: 395,
            height: 305,
            imgx: 0,
            imgy: 0,
            x: -198,
            y: -152
        },
        body1: {
            width: 345,
            height: 296,
            imgx: 5,
            imgy: 5,
            x: -176,
            y: -155
        },
        heart: {
            width: 64,
            height: 56,
            imgx: 5,
            imgy: 311,
            x: 0,
            y: 0
        },
        ring: {
            width: 392,
            height: 133,
            imgx: 360,
            imgy: 5,
            x: -198,
            y: -60
        },
        star: {
            width: 13.5,
            height: 17.5,
            imgx: 762.5,
            imgy: 5.5,
            x: 0,
            y: 0
        }
    };
    //starConfig
    var starstatus = [
        [-102, 131, 0.5],
        [-170, -114, 1],
        [-50, -140, 0.4],
        [-35, 136, 0.4],
        [-39, -149, 0.4],
        [173, 21, 0.9],
        [124, 130, 0.8],
        [154, -97, 1.2],
        [-6, -96, 0.4],
        [0, 130, 0.7],
        [-190, 53, 0.4]
    ];

    var bodyanmimation = {
        ejectbody: new animationFunc(0, 40, 0, function(starttime, endtime, progress) {
            var start = progress + 30;
            var scalevalue = curveFunction.backEaseInOut(start, 0, 1, 30 + (endtime - starttime));
            // console.log(scalevalue);
            ctx.scale(scalevalue, scalevalue);
            people.drawbody();
        }),
        pausebody1: new animationFunc(60 - minuter, 100 - minuter, 0, function(starttime, endtime, progress) {
            people.drawbody()
        }),
        sinbody: new animationFunc(100 - minuter, 240 - minuter, 0, function(starttime, endtime, progress) {
            var translateYvalue = curveFunction.sineEaseOut(progress - starttime, 0, 10, (endtime - starttime) / 2);
            ctx.translate(0, translateYvalue);
            people.drawbody();
        }),
        rotatebody: new animationFunc(240 - minuter, 264 - minuter, 0, function(starttime, endtime, progress) {
            var rotate = curveFunction.sineEaseOut(progress - starttime, 0, 6, 3);
            ctx.rotate(-rotate * Math.PI / 180);
            people.drawbody();
        }),
        pausebody2: new animationFunc(264 - minuter, 300 - minuter, 0, function(starttime, endtime, progress) {
            people.drawbody();
        }),
        quitbody: new animationFunc(300 - minuter, 330 - minuter, 0, function(starttime, endtime, progress) {
            //这里有问题
            var scalevalue = curveFunction.backEaseInOut(380 - minuter - progress, 0.3, 1, 150);
            ctx.scale(scalevalue, scalevalue);
            ctx.globalAlpha = Math.floor(curveFunction.linear(endtime - progress, 0, 1, endtime - starttime) * 10) / 10
            people.drawbody();
        })
    }

    var ringanimation = {
        ejectring: new animationFunc(60 - minuter, 90 - minuter, 0, function(starttime, endtime, progress) {
            var translateYvalue = curveFunction.linear(progress - starttime, -40, 40, endtime - starttime);
            ctx.translate(0, -translateYvalue);
            ctx.globalAlpha = translateYvalue / 40 + 1;
            people.drawring();
        }),
        sinring: new animationFunc(90 - minuter, 240 - minuter, 0, function(starttime, endtime, progress) {
            var translateYvalue = Math.abs(curveFunction.sineEaseOut(progress - starttime, 0, 10, (endtime - starttime) / 4));
            ctx.translate(0, translateYvalue);
            ctx.globalAlpha = 1 - 0.05 * translateYvalue;
            people.drawring();
        }),
        pausering: new animationFunc(240 - minuter, 250 - minuter, 0, function(starttime, endtime, progress) {
            people.drawring();
        }),
        quitring: new animationFunc(250 - minuter, 280 - minuter, 0, function(starttime, endtime, progress) {
            var scalevalue = 1 + (1 - curveFunction.quartEaseIn(330 - (progress - starttime) - 190, 0.3, 1, 150));
            ctx.scale(scalevalue, scalevalue);
            ctx.globalAlpha = Math.floor(curveFunction.linear(endtime - progress, 0, 1, endtime - starttime) * 10) / 10;
            people.drawring();
        })
    }
    var heartanimation = {
        position: {
            x: 0,
            y: 0
        },
        translate: {
            x: 1,
            y: -83
        },
        ejectheart: new animationFunc(90 - minuter, 125 - minuter, 0, function(starttime, endtime, progress) {
            var changexyx = curveFunction.sineEaseOut(progress - starttime, 0, -35, (endtime - starttime) / 2);
            var changexyy = curveFunction.linear(progress - starttime, 0, -65, endtime - starttime);
            var scale = curveFunction.linear(progress - starttime, 0.3, 0.7, endtime - starttime);
            ctx.translate(heartanimation.translate.x + changexyx, heartanimation.translate.y + changexyy);
            heartanimation.position.x = heartanimation.translate.x + changexyx;
            heartanimation.position.y = heartanimation.translate.y + changexyy;

            ctx.scale(scale, scale);
            ctx.drawImage(images.wanzheng, spriteimg.heart.imgx, spriteimg.heart.imgy, spriteimg.heart.width, spriteimg.heart.height, -spriteimg.heart.width / 2, -spriteimg.heart.height / 2, spriteimg.heart.width, spriteimg.heart.height);
        }),
        sinheart1: new animationFunc(125 - minuter, 185 - minuter, 0, function(starttime, endtime, progress) {
            var scale = 1 + Math.abs(curveFunction.sineEaseOut(progress - starttime, 0, 0.25, (endtime - starttime) / 4));
            ctx.translate(heartanimation.position.x, heartanimation.position.y);
            ctx.scale(scale, scale);
            ctx.drawImage(images.wanzheng, spriteimg.heart.imgx, spriteimg.heart.imgy, spriteimg.heart.width, spriteimg.heart.height, -spriteimg.heart.width / 2, -spriteimg.heart.height / 2, spriteimg.heart.width, spriteimg.heart.height);
        }),
        pauseheart1: new animationFunc(185 - minuter, 210 - minuter, 0, function(starttime, endtime, progress) {
            ctx.translate(heartanimation.position.x, heartanimation.position.y);
            ctx.drawImage(images.wanzheng, spriteimg.heart.imgx, spriteimg.heart.imgy, spriteimg.heart.width, spriteimg.heart.height, -spriteimg.heart.width / 2, -spriteimg.heart.height / 2, spriteimg.heart.width, spriteimg.heart.height);
        }),
        sinheart2: new animationFunc(210 - minuter, 270 - minuter, 0, function(starttime, endtime, progress) {
            var scale = 1 + Math.abs(curveFunction.sineEaseOut(progress - starttime, 0, 0.25, (endtime - starttime) / 4));
            ctx.translate(heartanimation.position.x, heartanimation.position.y);
            ctx.scale(scale, scale);
            ctx.drawImage(images.wanzheng, spriteimg.heart.imgx, spriteimg.heart.imgy, spriteimg.heart.width, spriteimg.heart.height, -spriteimg.heart.width / 2, -spriteimg.heart.height / 2, spriteimg.heart.width, spriteimg.heart.height);
        }),
        pauseheart2: new animationFunc(270 - minuter, 280 - minuter, 0, function(starttime, endtime, progress) {
            ctx.translate(heartanimation.position.x, heartanimation.position.y);

            ctx.drawImage(images.wanzheng, spriteimg.heart.imgx, spriteimg.heart.imgy, spriteimg.heart.width, spriteimg.heart.height, -spriteimg.heart.width / 2, -spriteimg.heart.height / 2, spriteimg.heart.width, spriteimg.heart.height);
        }),
        quitheart: new animationFunc(280 - minuter, 310 - minuter, 0, function(starttime, endtime, progress) {
            var step = endtime - starttime;
            var valuey = curveFunction.linear(endtime - progress, 0, 1, step);
            var upy = curveFunction.linear(progress - starttime, 0, 40, step);
            ctx.translate(heartanimation.position.x, heartanimation.position.y - upy);
            ctx.globalAlpha = Math.floor(valuey * step) / step;
            ctx.drawImage(images.wanzheng, spriteimg.heart.imgx, spriteimg.heart.imgy, spriteimg.heart.width, spriteimg.heart.height, -spriteimg.heart.width / 2, -spriteimg.heart.height / 2, spriteimg.heart.width, spriteimg.heart.height);
        }),
    }

    this.init = function(canvasid) {
        canvas = document.getElementById(canvasid);
        ctx = canvas.getContext("2d");
        w = document.documentElement.getBoundingClientRect().width;
        h = window.innerHeight;
        scaleNum = w / 640;
        canvas.width = w;
        canvas.height = h;
        for (var i = 0; i < starstatus.length; i++) {
            var staritem = new star(spriteimg.star.width, spriteimg.star.height, 1, starstatus[i][2], starstatus[i][0], starstatus[i][1], spriteimg.star.imgx, spriteimg.star.imgy);
            stararray.push(staritem);
        }
        loadImg(sources, draw, images);
    }

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

    function draw() {
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(w / 2, h / 2);
        ctx.scale(scaleNum, scaleNum);
        drawstar.draw();
        drawpeopleprogress.bindprogress(totalprogress).draw(bodyanmimation.ejectbody).draw(bodyanmimation.pausebody1).draw(bodyanmimation.sinbody).draw(bodyanmimation.rotatebody).draw(bodyanmimation.pausebody2).draw(bodyanmimation.quitbody);
        drawringprogress.bindprogress(totalprogress).draw(ringanimation.ejectring).draw(ringanimation.sinring).draw(ringanimation.pausering).draw(ringanimation.quitring);
        drawheartprogress.bindprogress(totalprogress).draw(heartanimation.ejectheart).draw(heartanimation.sinheart1).draw(heartanimation.pauseheart1).draw(heartanimation.sinheart2).draw(heartanimation.pauseheart2).draw(heartanimation.quitheart);
        ctx.restore();
        totalprogress++;
        if (totalprogress < 330) {
            requestAnimFrame(draw);
        } else {
            goodnightbaobao.closeBaobao();
        }
    }

    function fourstar(protress, starttime, endtime, scale, stararray, itemnum) {
        if (protress > starttime && protress < endtime) {
            ctx.save();
            ctx.globalAlpha = Math.abs(curveFunction.sineEaseOut(protress - starttime, 0, 1, 45));
            ctx.drawImage(images.wanzheng, stararray[itemnum].imgx, stararray[itemnum].imgy, stararray[itemnum].width, stararray[itemnum].height, stararray[itemnum].x + 0.5, stararray[itemnum].y + 0.5, stararray[itemnum].width, stararray[itemnum].height);
            ctx.restore();
        }
    };
    var people = {
        drawbody: function() {
            ctx.drawImage(images.wanzheng, spriteimg.body1.imgx, spriteimg.body1.imgy, spriteimg.body1.width, spriteimg.body1.height, spriteimg.body1.x, spriteimg.body1.y, spriteimg.body1.width, spriteimg.body1.height);
        },
        drawring: function() {
            ctx.drawImage(images.wanzheng, spriteimg.ring.imgx, spriteimg.ring.imgy, spriteimg.ring.width, spriteimg.ring.height, spriteimg.ring.x, spriteimg.ring.y, spriteimg.ring.width, spriteimg.ring.height);
        }
    }
    var drawpeopleprogress = {
        progress: 1,
        bindprogress: function(totalprogress) {
            drawpeopleprogress.progress = totalprogress;
            return drawpeopleprogress
        },
        draw: function(animation) {
            if (drawpeopleprogress.progress >= animation.starttime && drawpeopleprogress.progress < animation.endtime) {
                ctx.save();
                animation.func(animation.starttime, animation.endtime, drawpeopleprogress.progress);
                ctx.restore();
            }
            //drawpeopleprogress.progress+=1;
            return drawpeopleprogress;
        }.bind(drawpeopleprogress)
    }

    var drawringprogress = {
        progress: 1,
        bindprogress: function(totalprogress) {
            drawringprogress.progress = totalprogress;
            return drawringprogress
        },
        draw: function(animation) {
            if (drawringprogress.progress >= animation.starttime && drawringprogress.progress < animation.endtime) {
                ctx.save();
                animation.func(animation.starttime, animation.endtime, drawringprogress.progress);
                ctx.restore();
            }
            //drawringprogress.progress+=1;
            return drawringprogress;
        }.bind(drawringprogress)
    }

    var drawheartprogress = {
        progress: 1,
        bindprogress: function(totalprogress) {
            drawheartprogress.progress = totalprogress;
            return drawringprogress
        },
        draw: function(animation) {
            if (drawheartprogress.progress >= animation.starttime && drawheartprogress.progress < animation.endtime) {
                ctx.save();
                animation.func(animation.starttime, animation.endtime, drawheartprogress.progress);
                ctx.restore();
            }
            return drawheartprogress;
        }.bind(drawheartprogress)
    }


    function animationFunc(starttime, endtime, progress, func) {
        this.starttime = starttime;
        this.endtime = endtime;
        this.progress = progress;
        this.func = func;
    }

    var drawpeople = {
        progress: 1,
        arr: [
            [0, 60],
            [60, 80],
            [80, 100],
            [100, 240]
        ],
        draw: function() {
            ctx.save();
            if (this.progress > arr[0][0] && this.progress < arr[0][1]) {
                //  var scalevalue = curveFunction.cubicEaseInOut(this.progress + 40, 0, 1, 100); //从90到150
                // var scalevalue = curveFunction.cubicEaseInOut(this.progress + 40, 0, 1, 100);
                var scalevalue = curveFunction.bounceEaseInOut(this.progress + 90, 0, 1, 150); //从90到150
                ctx.scale(scalevalue, scalevalue);
                ctx.scale(scalevalue, scalevalue);
                people.drawbody();
            } else if (this.progress >= 60 && this.progress < 100) {
                // var translateYvalue = curveFunction.sineEaseOut(this.progress - 60, 0, 10, 90);
                // ctx.translate(0, translateYvalue);
                people.drawbody();
            } else if (this.progress >= 100 && this.progress < 240) {
                var translateYvalue = curveFunction.sineEaseOut(this.progress - 100, 0, 10, 70);
                ctx.translate(0, translateYvalue);
                people.drawbody();
            } else if (this.progress >= 240 && this.progress < 310) {
                people.drawbody();
                people.drawring();
            } else if (this.progress >= 310 && this.progress < 330) { //&& this.progress < 330
                var scalevalue = curveFunction.quartEaseIn(330 - (this.progress - 280) - 190, 0.3, 1, 150);
                ctx.scale(scalevalue, scalevalue);
                ctx.globalAlpha = curveFunction.linear(330 - this.progress, 0, 1, 20);
                people.drawbody();
                people.drawring();
            }
            ctx.restore();
            ctx.save();
            if (this.progress > 60 && this.progress < 100) {
                var translateYvalue = curveFunction.linear(this.progress - 30, -10, 10, 40);
                ctx.translate(0, -translateYvalue);
                ctx.globalAlpha = translateYvalue / 10 + 1;
                //  console.log(translateYvalue);
                people.drawring();
            }
            if (this.progress >= 100 && this.progress < 240) {
                var translateYvalue = Math.abs(curveFunction.sineEaseOut(this.progress - 100, 0, 10, 35));
                ctx.translate(0, translateYvalue);
                ctx.globalAlpha = 1 - 0.05 * translateYvalue;
                people.drawring();

            }
            ctx.restore();
            this.progress += 1;
        }
    }
    var drawstar = {
        progress: 1,
        progressstart: 65,
        progressend: 245,
        draw: function() {
            if (drawstar.progress > drawstar.progressstart) {
                var interval = 4;
                for (var i = 0; i < stararray.length; i++) {
                    fourstar(this.progress, drawstar.progressstart + i * interval, drawstar.progressend - interval * stararray.length + i * interval, 1, stararray, i);
                }
            }
            this.progress += 1;
        }
    }



    var drawHeat = {
        progress: 1,
        translate: {
            x: 1,
            y: -83
        },
        changexy: {
            x: 0,
            y: 0
        },
        scale: 0.3,
        tuichi: 40,
        starttime: 65,
        endtime: 100,
        drawimg: function() {
            ctx.translate(drawHeat.translate.x + drawHeat.changexy.x, drawHeat.translate.y + drawHeat.changexy.y);
            ctx.scale(drawHeat.scale, drawHeat.scale);
            ctx.drawImage(images.wanzheng, spriteimg.heart.imgx, spriteimg.heart.imgy, spriteimg.heart.width, spriteimg.heart.height, -spriteimg.heart.width / 2, -spriteimg.heart.height / 2, spriteimg.heart.width, spriteimg.heart.height);
        },
        draw: function() {
            ctx.save();
            if (this.progress > 65 && this.progress < 125) {
                drawHeat.changexy.x = curveFunction.sineEaseOut(this.progress - 65, 0, -35, 30);
                drawHeat.changexy.y = curveFunction.linear(this.progress - 65, 0, -65, 60);
                drawHeat.scale = curveFunction.linear(this.progress - 65, 0.3, 0.7, 60);
                drawHeat.drawimg();
            } else if (this.progress >= 125 && this.progress < 185) {
                drawHeat.scale = 1 + Math.abs(curveFunction.sineEaseOut(this.progress - 125, 0, 0.25, 15));
                drawHeat.drawimg();
            } else if (this.progress >= 185 && this.progress < 210) {
                drawHeat.drawimg();
            } else if (this.progress >= 210 && this.progress < 270) {
                drawHeat.scale = 1 + Math.abs(curveFunction.sineEaseOut(this.progress - 210, 0, 0.25, 15));
                drawHeat.drawimg();
            } else if (this.progress >= 270 && this.progress < 310) {
                drawHeat.drawimg();
            } else if (this.progress >= 310 && this.progress < 330) {
                var scalevalue = curveFunction.quartEaseIn(330 - (this.progress - 280) - 190, 0.3, 1, 150);
                ctx.translate(drawHeat.translate.x, drawHeat.translate.y);
                ctx.scale(scalevalue, scalevalue);
                ctx.globalAlpha = curveFunction.linear(330 - this.progress, 0, 1, 20);
                ctx.drawImage(images.wanzheng, spriteimg.heart.imgx, spriteimg.heart.imgy, spriteimg.heart.width, spriteimg.heart.height, -spriteimg.heart.width / 2, -spriteimg.heart.height / 2, spriteimg.heart.width, spriteimg.heart.height);
            }
            drawHeat.progress++;
            ctx.restore();
        }
    }

}

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();