/*
 * Copyright (C) 2012 David Geary. This code is from the book
 * Core HTML5 Canvas, published by Prentice-Hall in 2012.
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),


    AXIS_MARGIN = 200,
    AXIS_ORIGIN = { x: AXIS_MARGIN, y: canvas.height - AXIS_MARGIN },

    AXIS_TOP = AXIS_MARGIN,
    AXIS_RIGHT = canvas.width - AXIS_MARGIN,

    HORIZONTAL_TICK_SPACING = 10,
    VERTICAL_TICK_SPACING = 10,

    AXIS_WIDTH = AXIS_RIGHT - AXIS_ORIGIN.x,
    AXIS_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP,

    NUM_VERTICAL_TICKS = AXIS_HEIGHT / VERTICAL_TICK_SPACING,
    NUM_HORIZONTAL_TICKS = AXIS_WIDTH / HORIZONTAL_TICK_SPACING,

    TICK_WIDTH = 10,
    TICKS_LINEWIDTH = 0.5,
    TICKS_COLOR = 'navy',

    AXIS_LINEWIDTH = 1.0,
    AXIS_COLOR = 'blue';

// Functions..........................................................

function drawGrid(color, stepx, stepy) {
    context.save()
    context.fillStyle = 'white';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.lineWidth = 0.5;
    context.strokeStyle = color;
    for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }

    context.restore();
}

function drawAxes() {
    context.save();
    context.strokeStyle = AXIS_COLOR;
    context.lineWidth = AXIS_LINEWIDTH;

    drawHorizontalAxis();
    drawVerticalAxis();

    context.lineWidth = 0.5;
    context.lineWidth = TICKS_LINEWIDTH;
    context.strokeStyle = TICKS_COLOR;

    drawVerticalAxisTicks();
    drawHorizontalAxisTicks();

    context.restore();
}

function drawHorizontalAxis() {
    context.beginPath();
    context.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
    context.lineTo(AXIS_RIGHT, AXIS_ORIGIN.y)
    context.stroke();
}

function drawVerticalAxis() {
    context.beginPath();
    context.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
    context.lineTo(AXIS_ORIGIN.x, AXIS_TOP);
    context.stroke();
}

function drawVerticalAxisTicks() {
    var deltaY;
    for (var i = 1; i < NUM_VERTICAL_TICKS; ++i) {
        context.beginPath();

        if (i % 5 === 0) deltaX = TICK_WIDTH;
        else deltaX = TICK_WIDTH / 2;

        context.moveTo(AXIS_ORIGIN.x - deltaX,
            AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);

        context.lineTo(AXIS_ORIGIN.x + deltaX,
            AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);

        context.stroke();
    }
}

function drawHorizontalAxisTicks() {
    var deltaY;

    for (var i = 1; i < NUM_HORIZONTAL_TICKS; ++i) {
        context.beginPath();

        if (i % 5 === 0) deltaY = TICK_WIDTH;
        else deltaY = TICK_WIDTH / 2;

        context.moveTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING,
            AXIS_ORIGIN.y - deltaY);

        context.lineTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING,
            AXIS_ORIGIN.y + deltaY);

        context.stroke();
    }


}
if (!String.prototype.splice) {
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}
function drawCircle(x, y) {

    var changex = x;
    var changey = y;
    context.fillStyle = '#000';
    context.strokeStyle = '#000';
    context.beginPath();
    context.arc(changex, changey, 1, 0, 2 * Math.PI, true);
    context.stroke();
}

function drawRedCircle(x, y) {
    var changex = x;
    var changey = y;
    context.fillStyle = 'red';
    context.strokeStyle = 'red';
    context.beginPath();
    context.arc(changex, changey, 5, 0, 2 * Math.PI, true);
    context.stroke();

}


var time = 0;
var startValue = 0;
var changeValue = 400;
var duration = 400;
var linglengvaule = 400;
var currentfun = tweenobj['linear'];
var rangex = document.getElementById("rangeidx");
var rangevaluex = document.getElementById("rangevaluex");
rangex.addEventListener("change", changevaluex.bind(rangex), false);
var startValuerange = document.getElementById("startValue");
var rangestart = document.getElementById("rangestart");
startValuerange.addEventListener("change", changestart.bind(startValuerange), false);



var linelength = document.getElementById("linelength");
var rangevalueylinelength = document.getElementById("rangevalueylinelength");
linelength.addEventListener("change", changelinelength.bind(linelength), false);

function changelinelength() {
    rangevalueylinelength.value = this.value;
    linglengvaule = this.value;
    drawGrid('lightgray', 5, 5);
    var currenttime = parseInt(rangevaluex.value);
    yvalue = inity - currentfun(currenttime, startValue, changeValue, duration);
    xvalue = currenttime + initx;
    drawAxes();
    drawline();
    drawRedCircle(xvalue, yvalue);
}



function changestart() {
    rangestart.value = this.value;
    startValue = parseInt(this.value);
    var currenttime = Number(rangevaluex.value) ? Number(rangevaluex.value) : 0;
    yvalue = inity - currentfun(currenttime, startValue, changeValue, duration);
    drawGrid('lightgray', 5, 5);
    drawAxes();
    drawline();
    xvalue = currenttime + initx;
    drawRedCircle(xvalue, yvalue);
}
document.querySelector('#func').addEventListener('change', getfuncname, false);

function getfuncname() {
    var obj = document.querySelector('#func');
    var index = obj.selectedIndex; // 选中索引
    var funcname = obj.options[index].text;
    currentfun = tweenobj[funcname];
    var currenttime = Number(rangevaluex.value) ? Number(rangevaluex.value) : 0;
    yvalue = inity - currentfun(currenttime, startValue, changeValue, duration);
    drawGrid('lightgray', 5, 5);
    drawAxes();
    drawline();
    xvalue = currenttime + initx;
    drawRedCircle(xvalue, yvalue);

var funcstr=currentfun.toString();
    document.getElementById("codeid").innerHTML=funcstr.splice(8,0," "+funcname);
}

var rangechange = document.getElementById("rangechange");
var rangetext = document.getElementById("rangetext");
rangechange.addEventListener("change", changeChangeValue.bind(rangechange), false);

function changeChangeValue() {
    changeValue = this.value;
    rangetext.value = this.value;
    var currenttime = Number(rangevaluex.value) ? Number(rangevaluex.value) : 0;
    yvalue = inity - currentfun(currenttime, startValue, changeValue, duration);
    xvalue = currenttime + initx;
    drawGrid('lightgray', 5, 5);
    drawAxes();
    drawline();
    drawRedCircle(xvalue, yvalue);
}
var rangeidyDuration = document.getElementById("rangeidyDuration");
var rangevalueyDuration = document.getElementById("rangevalueyDuration");
rangeidyDuration.addEventListener("change", changeDurationValue.bind(rangeidyDuration), false);

function changeDurationValue() {
    rangevalueyDuration.value = this.value;
    duration = this.value;
    drawGrid('lightgray', 5, 5);
    var currenttime = parseInt(rangevaluex.value);
    yvalue = inity - currentfun(currenttime, startValue, changeValue, duration);
    xvalue = currenttime + initx;
    drawAxes();
    drawline();
    drawRedCircle(xvalue, yvalue);
}


var rangey = document.getElementById("rangeidy");
var rangevaluey = document.getElementById("rangevaluey");
rangey.addEventListener("change", changevaluey.bind(rangey), false);




var xvalue = 40;
var yvalue = 360;
var inity = AXIS_ORIGIN.y;
var initx = AXIS_ORIGIN.x;
var maxy = 200;
var maxx = 200;



drawGrid('lightgray', 5, 5);
drawAxes();

function changevaluex() {
    xvalue = parseInt(this.value);
    rangevaluex.value = xvalue - initx;
    drawGrid('lightgray', 5, 5);
    drawAxes();
    yvalue = inity - currentfun(xvalue - initx, startValue, changeValue, duration);
    rangevaluey.value = currentfun(xvalue - initx, startValue, changeValue, duration);
    drawline();
    drawRedCircle(xvalue, yvalue);
}

function changevaluey() {
    yvalue = inity - parseInt(this.value);
    rangevaluey.value = inity - yvalue;
    drawGrid('lightgray', 5, 5);
    drawAxes();
    drawline();
    drawRedCircle(xvalue, yvalue);
}

drawline();
drawRedCircle(initx, inity);

function drawline() {
    var linex = 0;
    var liney = 0;
    for (var i = 0; i < linglengvaule; i = i + 2) {
        linex = i + initx;
        liney = inity - currentfun(i, startValue, changeValue, duration);
        drawCircle(linex, liney);
    }
}

function init() {
    for (var funcname in tweenobj) {
        var option = document.createElement('option');
        option.value = funcname;
        option.innerHTML = funcname;
        document.getElementById('func').appendChild(option);
    }
}
init();


// Initialization................................................
