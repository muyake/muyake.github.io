var context = document.getElementById('controlCanvas').getContext('2d');
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
var contronPostion = {

}
var btnArr = {
  "Y": {
    isPress: false,
    postion: {
      x: 580,
      y: 267
    },
  },
  "A": {
    isPress: true,
    postion: {
      x: 580,
      y: 327
    },
  },
  "X": {
    isPress: false,
    postion: {
      x: 550,
      y: 300
    },
  },
  "B": {
    isPress: false,
    postion: {
      x: 600,
      y: 300
    },
  },

}

function drawTwoArcs() {
  var keys = Object.keys(btnArr);
  console.log(keys);
  context.font = '0.3rem Lucida Sans';
  context.textAlign = 'center';
  keys.forEach(function(item) {
    var btn = btnArr[item];
    var drawStatus = btn.isPress ? press.down : press.up;
    context.save();
    context.fillStyle = drawStatus.backgroundColor;
    context.strokeStyle = context.fillStyle;
    context.beginPath();
    context.arc(btn.postion.x, btn.postion.y, 20, 0, Math.PI * 2, false); // outer: CW
    context.fill();
    context.stroke();
    context.restore();
    context.save();
    context.fillStyle = drawStatus.textColor;
    context.shadowColor = undefined;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillText(item, btn.postion.x, btn.postion.y + 12);
    context.restore();
  })
}

function draw() {
  context.clearRect(0, 0, context.canvas.width,
    context.canvas.height);
  context.save();
  context.shadowColor = 'rgba(0, 0, 0, 0.8)';
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.shadowBlur = 2;
  drawTwoArcs();
  context.restore();
}



document.querySelector('#directionCheckbox').addEventListener('click', function() {

  draw();
});