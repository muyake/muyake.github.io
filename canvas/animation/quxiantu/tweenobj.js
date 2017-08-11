/*
version: 1.56
copyright: wulong.jiang
date: 2015-10-28
*/

//linear
//(60,-88,-50,100)
//
var tweenobj = {
   linear:function (time, startValue, changeValue, duration) {
        return changeValue * time / duration + startValue;
        //return -50*60/100+-88

    },
    //back
    backEaseIn:function (t, b, c, d) {
        var s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },

   backEaseOut: function (t, b, c, d, a, p) {
        var s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },

   backEaseInOut: function (t, b, c, d, a, p) {
        var s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    //bounce
   bounceEaseOut: function (t, b, c, d) {
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

   bounceEaseIn: function (t, b, c, d) {
        return c -tweenobj.bounceEaseOut(d - t, 0, c, d) + b;
    },

    bounceEaseInOut:function (t, b, c, d) {
        if (t < d / 2) return tweenobj.bounceEaseIn(t * 2, 0, c, d) * .5 + b;
        else return tweenobj.bounceEaseOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    },
    //circ
   circEaseIn: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },

   circEaseOut: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },

    circEaseInOut:function (t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    //cubic
   cubicEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },

   cubicEaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },

    cubicEaseInOut:function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    //elastic
   elasticEaseIn: function (t, b, c, d, a, p) {
        var _2PI = Math.PI * 2;
        var s;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (!a || a < Math.abs(c)) { a = c;
            s = p / 4; } else s = p / _2PI * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * _2PI / p)) + b;
    },

    elasticEaseOut:function (t, b, c, d, a, p) {
        var _2PI = Math.PI * 2;
        var s;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (!a || a < Math.abs(c)) { a = c;
            s = p / 4; } else s = p / _2PI * Math.asin(c / a);
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * _2PI / p) + c + b);
    },

   elasticEaseInOut: function (t, b, c, d, a, p) {
        var _2PI = Math.PI * 2;
        var s;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (!a || a < Math.abs(c)) { a = c;
            s = p / 4; } else s = p / _2PI * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * _2PI / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * _2PI / p) * .5 + c + b;
    },
    //expo
   expoEaseIn: function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b - c * 0.001;
    },

   expoEaseOut: function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },

   expoEaseInOut: function (t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    //quad
    quadEaseIn:function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },

   quadEaseOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },

    quadEaseInOut:function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    //quart
   quartEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },

    quartEaseOut:function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },

    quartEaseInOut:function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    //quint
   quintEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },

    quintEaseOut:function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },

   quintEaseInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    //sine
    sineEaseIn:function (t, b, c, d) {
        var _HALF_PI = Math.PI / 2;
        return -c * Math.cos(t / d * _HALF_PI) + c + b;
    },

    sineEaseOut:function (t, b, c, d) {
        var _HALF_PI = Math.PI / 2;
        return c * Math.sin(t / d * _HALF_PI) + b;
    },

   sineEaseInOut: function (t, b, c, d) {
        var _HALF_PI = Math.PI / 2;
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    //strong
   strongEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },

   strongEaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },

   strongEaseInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    //regular
   regularEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },

   regularEaseOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },

   regularEaseInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
}
