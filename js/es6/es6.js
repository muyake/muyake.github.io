"use strict";
import "babel-polyfill";

function* somewords() {
	yield "hello";
	yield "world";
}
for (var word of somewords()) {
	console.log(world);
}