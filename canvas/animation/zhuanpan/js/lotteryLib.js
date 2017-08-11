var canvas,ctx;
var w=598;
var h=608;
var touch_dev=false;

var images = {};
var sources = {
    bg: "images/rp_lotteryBg.png",
    dial: "images/rp_lotteryDialNew1.png",
	dialBlur: "images/rp_lotteryDialNew2.png",
	centerBg:"images/rp_lotteryCenterBg.png",
	lotteryBtn:"images/rp_lotteryBtn.png",
	arrow:"images/rp_lotteryPointer.png"
};

var bg;
var dial;
var centerBg;
var lotteryBtn;
var arrow;
var st,et;
var sl,el;
var dt,duration;
var direction=1;//1~顺时针 -1~逆时针
var spinAngleStart=0;//转动角度
var startAngle = 0; //起始角度
var spinTime=0;
var spinTimeTotal =0;
var isRotate=false;
var isHit=false;
var oldr=0;//拖动暂存角度
var tempAngle=0;
function init(){
	if (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPod") > 0  || navigator.userAgent.indexOf("iPad") > 0  || navigator.userAgent.indexOf("Android") > 0) {
		touch_dev = true;
	}
	canvas=document.getElementById("theCanvas");
	ctx = canvas.getContext("2d");
	
	var funcRun = false;
    window.onresize = r;
    function r(resizeNum){
        var winW = window.innerWidth;
        if(winW > window.screen.width && resizeNum <= 10) {
            setTimeout(function(){
                r(++resizeNum)
            }, 100);
        }else {
            if(!funcRun){
                loadImg(sources,initStage);
                funcRun = true;
            } 
        }
    }
    setTimeout(function(){r(0)}, 100);
}

function loadImg(e,callback){
    	var loadedImages = 0;
    	var numImages = 0;
	for(var src in e) {
        		numImages++;
    	}

	for(var src in e) {
        		images[src] = new Image();
        		images[src].onload = function() {
		          	if(++loadedImages >= numImages) {
				callback(images);
		          }
   		};
    		images[src].src = e[src];
	}
}

function initStage(){
	//ctx.drawImage(images.bg, 0, 0, w, h);
	bg=new bg();
	dial=new dial();
	centerBg=new centerBg();
	arrow=new arrow();
	lotteryBtn=new lotteryBtn();
	
	bg.draw(ctx);
	dial.draw(ctx);
	centerBg.draw(ctx);
	arrow.draw(ctx);
	lotteryBtn.draw(ctx);
	
	addAction();
}

function bg(){
	this.draw=function(ctx){
		ctx.save();
		ctx.drawImage(images.bg, 0, 0, w, h);
		ctx.restore();
	}
}

function dial(){
	this.x=-255;
	this.y=-255;
	this.w=510;
	this.h=510;
	this.r=0;
	this.a=0;
	this.draw=function(ctx){
		ctx.save();
		ctx.translate(w/2,w/2);
		ctx.rotate(this.r*Math.PI/180);
		ctx.drawImage(images.dial, this.x, this.y);
		if(isRotate==true){
			ctx.globalAlpha=this.a;
			ctx.drawImage(images.dialBlur, -299, -299);
		}
		ctx.restore();
	}
}

function centerBg(){
	this.x=-126;
	this.y=-126;
	this.w=252;
	this.h=270;
	this.draw=function(ctx){
		ctx.save();
		ctx.translate(w/2,w/2);
		ctx.drawImage(images.centerBg, this.x, this.y);
		ctx.restore();
	}
}

function arrow(){
	this.x=-25;
	this.y=-220;
	this.w=50;
	this.h=344;
	this.draw=function(ctx){
		ctx.save();
		ctx.translate(w/2,w/2);
		ctx.drawImage(images.arrow, this.x, this.y);
		ctx.restore();
	}
}
function lotteryBtn(){
	this.x=-76;
	this.y=-76;
	this.w=153;
	this.h=160;
	this.draw=function(ctx){
		ctx.save();
		ctx.translate(w/2,w/2);
		ctx.drawImage(images.lotteryBtn, this.x, this.y);
		ctx.restore();
	}
}

function addAction(){
	if (touch_dev == false) {
		canvas.addEventListener("mousedown",down_pc,false);
		//canvas.addEventListener("mouseup",up_pc,false);
		canvas.addEventListener("mousemove",move_pc,false);
	}
}

function up_pc(e){
	canvas.removeEventListener("mouseup",up_pc,false);
	var d=new Date(); 
	et=d.getTime();
	el=getEventPosition(e);
		
	dt=distanceTwo(sl,el);
	if(dt<10){
		dt=10;
	}
	duration=Math.floor((et-st)/200)+1;
	if(duration>10){
		duration=10;
	}
	if(duration<-10){
		duration=-10;
	}
	console.log("moveAngle:"+moveAngle,startAngle,tempAngle);
	if(startAngle-tempAngle>0){
		direction=-1;
	}else{
		direction=1;
	}
	//Math.abs(moveAngle)>5
	getData(dt,duration);
	isRotate=true;
	moveAngle=0;
	oldr=0;
	isHit=false;
}
function down_pc(e){
	if(isRotate==false&&hitTest(getEventPosition(e))&&isHit==false){
		isHit=true;
		var d=new Date(); 
		st=d.getTime(); 
		sl=getEventPosition(e);
		canvas.removeEventListener("mousedown",down_pc,false);
		canvas.addEventListener("mouseup",up_pc,false);
	}
}
var moveAngle=0;
function move_pc(e){
	if(hitTest(getEventPosition(e))==false){
		isHit=false;
		canvas.style.cursor = "default";
	}else{
		canvas.style.cursor="pointer";
	}
	if(isRotate==false&&isHit==true){
		canvas.style.cursor="pointer";
		var p=getEventPosition(e);
		var dx=p.x-w/2;
		var dy=p.y-w/2;
		var newr=Math.atan2(dy,dx)*180/Math.PI;
		var temp;
		if(oldr==0){
			oldr=newr;
			temp=0;
		}else{
			temp=newr-oldr;
		}
		
		tempAngle=startAngle+temp;
		moveAngle=temp;
		dial.r=tempAngle;
		dial.draw(ctx);
		centerBg.draw(ctx);
		arrow.draw(ctx);
		lotteryBtn.draw(ctx);
	}
}

function hitTest(e){
	var cp={x:w/2,y:w/2};
	var temp=distanceTwo(cp,e);
	if(temp<=w/2){//&&temp>126
		return true;
	}else{
		return false;
	}
}

function distanceTwo(p1,p2){
	var xdiff = p2.x - p1.x;
	var ydiff = p2.y - p1.y;
	return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5);
}

function getEventPosition(ev){   
    var x, y;  
    if (ev.layerX || ev.layerX == 0) {   
        x = ev.layerX;   
        y = ev.layerY;   
    }else if (ev.offsetX || ev.offsetX == 0) {  
        x = ev.offsetX;   
        y = ev.offsetY;   
    }  
    return {x:x, y:y};
}  

function backFail(){
	spinTime=0;
	console.log(dial.r,moveAngle);
	if(dial.r>0){
		spinAngleStart=dial.r%360-moveAngle-360;
	}else{
		spinAngleStart=dial.r%360-moveAngle;
	}
	console.log(spinAngleStart);
	spinTimeTotal=2600;
	rotateWheel();
}

function getData(l,t){
	//l~位移量 t~移动时间
	var pcr=[{min:45,max:90},{min:0,max:45},{min:315,max:360},{min:270,max:315},{min:225,max:270},{min:180,max:225},{min:135,max:180},{min:90,max:135}]; 
	var prize=Math.random()*8>>0;
	var pName=["未中奖","人品+10","人品+50","人品+100","人品+200","人品+500","人品+1000","人品-1"];
	//0~未中奖 1~人品+10 2~人品+50 3~人品+100 4~人品+200 5~人品+500 6~人品+1000 7~人品-1
	//45~90    45~0      315~360   270~315    225~270    180~225    135~180     90~135
	var cr=updatePcr(pcr[prize]);
	spinAngleStart=Math.ceil(((l/(w/2))*(cr.max-cr.min)))+cr.min;
	
	if(direction==1){
		spinAngleStart=spinAngleStart+360*t;
	}else{
		spinAngleStart=spinAngleStart-360-360*t;
	}
	//startAngle=spinAngleStart;
	spinTime=0;
	spinTimeTotal=((Math.random() * 3) + 1 )* 1000; 
	console.log("prize:"+prize,pName[prize],"旋转度数:",spinAngleStart,"时长:",spinTimeTotal,"位移量:"+l,"t:"+t);
	rotateWheel();
}

function updatePcr(e){
	var t1=e.min+10;
	var t2=e.max-10;
	return {min:t1, max:t2};
}

function rotateWheel(){
	spinTime += 20; 
	if(spinTime<spinTimeTotal*0.35){
		if(dial.a+0.03<=1){
			dial.a +=0.03;
		}else{
			dial.a=1;
		}
	}else{
		if(dial.a-0.03>=0){
			dial.a -=0.03;
		}else{
			dial.a=0;
		}
	}
    if(spinTime >= spinTimeTotal) { 
		isRotate=false;
		dt=0;
		et=0;
		st=0;
		sl={x:0,y:0};
		el={x:0,y:0};
		startAngle=dial.r;
		canvas.addEventListener("mousedown",down_pc,false);
		return;  
    } 
	ctx.clearRect(0,0,w,h);
	bg.draw(ctx);
	dial.r=strongEaseOut(spinTime, 0, spinAngleStart, spinTimeTotal);  
	dial.draw(ctx);
	centerBg.draw(ctx);
	arrow.draw(ctx);
	lotteryBtn.draw(ctx);
	requestAnimFrame(rotateWheel);
}

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			function( callback ){
				window.setTimeout(callback,1000 / 60);
			};
})();



