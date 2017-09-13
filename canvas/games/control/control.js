var context = document.getElementById('controlCanvas').getContext('2d');

thrustersCanvas = document.getElementById('controlCanvas');
var result = document.querySelector('.result');
var scale = 0.1;
var RIGHT = 1,
  LEFT = 2,
  ARROW_MARGIN = 150 * scale,
  BALL_RADIUS = 15 * scale,
  LEDGE_LEFT = 150 * scale,
  LEDGE_TOP = 90 * scale,
  LEDGE_WIDTH = 44 * scale,
  LEDGE_HEIGHT = 12 * scale,
  ANIMATION_DURATION = 200 * scale,
  THRUSTER_FILL_STYLE = 'rgba(100,140,230,0.8)',
  THRUSTER_FIRING_FILL_STYLE = 'rgba(255,255,0,0.8)',
  arrowWidth = 120,
  arrowHeight = 65,
  lastTime = 0,
  arrow = LEFT,
  canvasWidht = thrustersCanvas.width,
  arrowRadius = 25,
  canvasHeight = thrustersCanvas.height;
//pushTimer = new AnimationTimer(ANIMATION_DURATION);

var press = {
  down: {
    backgroundColor: 'rgba(220, 75, 63, 0.5)',
    textColor: 'rgba(247, 20, 20, 0.78)',
  },
  up: {
    backgroundColor: 'rgba(100, 140, 230, 0.5)',
    textColor: 'rgba(0, 182, 255, 0.78)',
  }

}
var contronposition = {
    radius: 45,
    right: {
      x: 565,
      y: 250,
    },
    left: {
      x: 55,
      y: 230,
    },
  }
  //按钮坐标位置
var btnArr = {
    "Y": {
      isPress: false,
      position: {
        x: contronposition.right.x,
        y: contronposition.right.y - contronposition.radius,
      },
    },
    "A": {
      isPress: true,
      position: {
        x: contronposition.right.x,
        y: contronposition.right.y + contronposition.radius,
      },
    },
    "X": {
      isPress: false,
      position: {
        x: contronposition.right.x - contronposition.radius,
        y: contronposition.right.y,
      },
    },
    "B": {
      isPress: false,
      position: {
        x: contronposition.right.x + contronposition.radius,
        y: contronposition.right.y,
      },
    },
  }
  //按钮对应的按键位置
var arrowArr = {
  "left": {
    isPress: false,
    position: {
      x: 102,
      y: 90,
    },
  },
  "right": {
    isPress: false,
    position: {
      x: 102,
      y: 155,
    },
  },
  "X": {
    isPress: false,
    position: {
      x: 112,
      y: 522,
    },
  },
  "Y": {
    isPress: false,
    position: {
      x: 158,
      y: 566,
    },
  },
  "B": {
    isPress: false,
    position: {
      x: 112,
      y: 612,
    },
  },
  "A": {
    isPress: false,
    position: {
      x: 68,
      y: 566,
    },
  },
}

function juadegeP(loc1, loc2, r) {
  if ((Math.pow(loc1.x - loc2.x, 2) + Math.pow(loc1.y - loc2.y, 2)) < Math.pow(r, 2)) {
    return true;
  } else {
    return false;
  }
}


function draw() {
  context.clearRect(0, 0, canvasWidht, canvasHeight);
  context.save();
  context.shadowColor = 'rgba(0, 0, 0, 0.8)';
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.shadowBlur = 2;
  drawTwoArcs();
  context.beginPath();
  context.arc(arrowArr.left.position.y, canvasHeight - arrowArr.left.position.x, arrowRadius, 0, 2 * Math.PI, false);
  context.stroke();
  context.beginPath();
  context.arc(arrowArr.right.position.y, canvasHeight - arrowArr.right.position.x, arrowRadius, 0, 2 * Math.PI, false);
  context.stroke();
  paintThrusters();
  context.restore();
}

// Paint functions...............................................
function paintThrusters() {
  context.save();
  var arr = ['left', 'right'];
  arr.forEach(function(item) {
    context.save();
    context.fillStyle = arrowArr[item].isPress ? THRUSTER_FIRING_FILL_STYLE : THRUSTER_FILL_STYLE;
    if (item == 'left') {
      paintLeftArrow(context);
    }
    if (item == 'right') {
      paintRightArrow(context);
    }
    context.restore();
  })



}

function paintLeftArrow(context) {
  context.save();
  context.translate(contronposition.left.x, contronposition.left.y);
  paintArrow(context);
  context.restore();
}

function paintRightArrow(context) {
  context.save();
  context.translate(contronposition.left.x, contronposition.left.y);
  context.translate(arrowWidth + ARROW_MARGIN, 0);
  context.scale(-1, 1);
  paintArrow(context);
  context.restore();
}

function paintArrow(context) {
  // context.save();
  // context.translate(contronposition.left.x, 0);
  //console.log(context.fillStyle);
  context.beginPath();

  context.moveTo(arrowWidth / 2 - ARROW_MARGIN / 2,
    ARROW_MARGIN / 2);

  context.lineTo(arrowWidth / 2 - ARROW_MARGIN / 2,
    arrowHeight - ARROW_MARGIN);

  context.quadraticCurveTo(arrowWidth / 2 - ARROW_MARGIN / 2,
    arrowHeight - ARROW_MARGIN / 2,
    arrowWidth / 2 - ARROW_MARGIN,
    arrowHeight - ARROW_MARGIN / 2);

  context.lineTo(ARROW_MARGIN,
    arrowHeight / 2 + ARROW_MARGIN / 2);

  context.quadraticCurveTo(ARROW_MARGIN - 3,
    arrowHeight / 2,
    ARROW_MARGIN, arrowHeight / 2 - ARROW_MARGIN / 2);

  context.lineTo(arrowWidth / 2 - ARROW_MARGIN,
    ARROW_MARGIN / 2);

  context.quadraticCurveTo(arrowWidth / 2 - ARROW_MARGIN,
    ARROW_MARGIN / 2, arrowWidth / 2 - ARROW_MARGIN / 2,
    ARROW_MARGIN / 2);
  context.fill();
  context.stroke();
  //context.restore();
}
console.log(111);
// Event handlers................................................
function drawTwoArcs() {
  var keys = Object.keys(btnArr);
  // console.log(keys);
  context.font = '30px Lucida Sans';
  context.textAlign = 'center';
  keys.forEach(function(item) {
    var btn = btnArr[item];
    var isPress = arrowArr[item];
    var drawStatus = isPress.isPress ? press.down : press.up;
    context.save();
    context.fillStyle = drawStatus.backgroundColor;
    context.strokeStyle = context.fillStyle;
    context.beginPath();
    context.arc(btn.position.x, btn.position.y, arrowRadius, 0, Math.PI * 2, false); // outer: CW
    context.fill();
    context.stroke();
    context.restore();
    context.save();
    context.fillStyle = drawStatus.textColor;
    context.shadowColor = undefined;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillText(item, btn.position.x, btn.position.y + 10);
    context.restore();
  })
}



function drawPressDown(pressarr) {
  var arr = Object.keys(arrowArr);
  arr.forEach(function(item) {
    arrowArr[item].isPress = false;
  })
  var length = pressarr.length;
  for (var i = 0; i < length; i++) {
    var item2 = pressarr[i];
    var loc = windowToCanvas(item2.pageX, item2.pageY);
    var x0 = arrowRadius + arrowArr.left.position.y;
    var y0 = canvasHeight - arrowRadius - arrowArr.left.position.x;
    arr.forEach(function(item) {
      if (juadegeP(loc, arrowArr[item].position, arrowRadius)) {
        arrowArr[item].isPress = true;
      }
    })
  }
};


var mousedown = {},
  dragging = false;

function windowToCanvas(x, y) {
  var bbox = thrustersCanvas.getBoundingClientRect();
  return {
    y: (y - bbox.left) * (canvasWidht / bbox.height),
    x: (x - bbox.top) * (canvasHeight / bbox.width)
  };
}
thrustersCanvas.addEventListener('touchstart', function(e) {
  result.innerHTML = e.targetTouches.length;
  e.preventDefault(); // prevent cursor change  
  drawPressDown(e.targetTouches);
  draw();
  dragging = true;
});
thrustersCanvas.addEventListener('touchend', function(e) {
  result.innerHTML = e.targetTouches.length;
  e.preventDefault();
  drawPressDown(e.targetTouches);
  draw();
});
thrustersCanvas.addEventListener('touchmove', function(e) {

  e.preventDefault();

  setTimeout(function() {
    result.innerHTML = e.targetTouches.length;
    drawPressDown(e.targetTouches);
    draw();
  }, 100);
});


document.querySelector('#directionCheckbox').addEventListener('click', function() {
  draw();
});