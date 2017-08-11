/*
version: 1.56
copyright: wulong.jiang
date: 2015-10-28
*/

//linear
function linear(time,startValue,changeValue,duration){
	return changeValue*time/duration+startValue;
}
//back
function backEaseIn(t,b,c,d){
	var s=1.70158;
	return c*(t/=d)*t*((s+1)*t - s) + b;
}
function backEaseOut(t,b,c,d,a,p){
	var s=1.70158;
	return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}
function backEaseInOut(t,b,c,d,a,p){
	var s=1.70158;
	if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
	return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
}
//bounce
function bounceEaseOut(t,b,c,d){
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	}
}
function bounceEaseIn(t,b,c,d){
	return c - bounceEaseOut(d-t, 0, c, d) + b;
}
function bounceEaseInOut(t,b,c,d){
	if (t < d/2) return bounceEaseIn (t*2, 0, c, d) * .5 + b;
	else return bounceEaseOut (t*2-d, 0, c, d) * .5 + c*.5 + b;
}
//circ
function circEaseIn(t,b,c,d){
	return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
}
function circEaseOut(t,b,c,d){
	return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
}
function circEaseInOut(t,b,c,d){
	if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
	return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
}	
//cubic
function cubicEaseIn(t,b,c,d){
	return c*(t/=d)*t*t + b;
}
function cubicEaseOut(t,b,c,d){
	return c*((t=t/d-1)*t*t + 1) + b;
}
function cubicEaseInOut(t,b,c,d){
	if ((t/=d/2) < 1) return c/2*t*t*t + b;
	return c/2*((t-=2)*t*t + 2) + b;
}
//elastic
function elasticEaseIn(t,b,c,d,a,p){
	var _2PI = Math.PI * 2;
	var s;
	if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	if (!a || a < Math.abs(c)) { a=c; s = p/4; }
	else s = p/_2PI * Math.asin (c/a);
	return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*_2PI/p )) + b;
}
function elasticEaseOut(t,b,c,d,a,p){
	var _2PI = Math.PI * 2;
	var s;
	if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	if (!a || a < Math.abs(c)) { a=c; s = p/4; }
	else s = p/_2PI * Math.asin (c/a);
	return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*_2PI/p ) + c + b);
}
function elasticEaseInOut(t,b,c,d,a,p){
	var _2PI = Math.PI * 2;
	var s;
	if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
	if (!a || a < Math.abs(c)) { a=c; s = p/4; }
	else s = p/_2PI * Math.asin (c/a);
	if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*_2PI/p )) + b;
	return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*_2PI/p )*.5 + c + b;
}
//expo
function expoEaseIn(t,b,c,d){
	return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b - c * 0.001;
}
function expoEaseOut(t,b,c,d){
	return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
}
function expoEaseInOut(t,b,c,d){
	if (t==0) return b;
	if (t==d) return b+c;
	if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
	return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
//quad
function quadEaseIn(t,b,c,d){
	return c*(t/=d)*t + b;
}
function quadEaseOut(t,b,c,d){
	return -c *(t/=d)*(t-2) + b;
}
function quadEaseInOut(t,b,c,d){
	if ((t/=d/2) < 1) return c/2*t*t + b;
	return -c/2 * ((--t)*(t-2) - 1) + b;
}
//quart
function quartEaseIn(t,b,c,d){
	return c*(t/=d)*t*t*t + b;
}
function quartEaseOut(t,b,c,d){
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
}
function quartEaseInOut(t,b,c,d){
	if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
	return -c/2 * ((t-=2)*t*t*t - 2) + b;
}
//quint
function quintEaseIn(t,b,c,d){
	return c*(t/=d)*t*t*t*t + b;
}
function quintEaseOut(t,b,c,d){
	return c*((t=t/d-1)*t*t*t*t + 1) + b;
}
function quintEaseInOut(t,b,c,d){
	if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
	return c/2*((t-=2)*t*t*t*t + 2) + b;
}
//sine
function sineEaseIn(t,b,c,d){
	var _HALF_PI = Math.PI / 2;
	return -c * Math.cos(t/d * _HALF_PI) + c + b;
}
function sineEaseOut(t,b,c,d){
	var _HALF_PI = Math.PI / 2;
	return c * Math.sin(t/d * _HALF_PI) + b;
}
function sineEaseInOut(t,b,c,d){
	var _HALF_PI = Math.PI / 2;
	return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
}
//strong
function strongEaseIn(t,b,c,d){
	return c*(t/=d)*t*t*t*t + b;
}
function strongEaseOut(t,b,c,d){
	return c*((t=t/d-1)*t*t*t*t + 1) + b;
}
function strongEaseInOut(t,b,c,d){
	if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
	return c/2*((t-=2)*t*t*t*t + 2) + b;
}
//regular
function regularEaseIn(t,b,c,d){
	return c*(t/=d)*t+b;
}
function regularEaseOut(t,b,c,d){
	return-c*(t/=d)*(t-2)+b;
}
function regularEaseInOut(t,b,c,d){
	if((t/=d/2)<1){
		return c/2*t*t+b;
	}
	return-c/2*((--t)*(t-2)-1)+b;
}