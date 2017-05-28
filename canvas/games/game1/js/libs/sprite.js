var Sprite = function(name, painter, behaviors) {
	if (name !== undefined) {
		this.name = name;
	}
	if (!!painter) {
		this.painter = painter;
	}
	if (!!behaviors) {
		this.behaviors = behaviors;
	} else {
		this.behaviors = [];
	}

	return this;
}
Sprite.prototype = {
	left: 0,
	top: 0,
	width: 10,
	height: 10,
	visible: true,
	velocityX: 0,
	velocityY: 0,
	initialVelocity:0,
	paint: function(context) {
		if (this.painter !== undefined && this.visible) {
			this.painter.paint(this, context);
		}
	},
	update: function(context, time) {
		for (var i = this.behaviors.length; i > 0; --i) {
			this.behaviors[i - 1].execute(this, context, time);
		}
	}
};

var ImagePainter = function(imageUrl) {
	if(!!imageUrl){
		this.image = new Image();
		this.image.src = imageUrl;
	}
}
ImagePainter.prototype = {
	paint: function(sprite, context) {
		if (!!this.image) {
			context.drawImage(this.image, sprite.left, sprite.top,
				sprite.width, sprite.height);
		}
	}
}

var GrassImagePainter=function(imageUrl){
	ImagePainter.call(this,imageUrl);
	// this.image=new Image();
	// this.image.src = imageUrl;
}

GrassImagePainter.prototype= Object.create(ImagePainter.prototype);


GrassImagePainter.prototype.constructor = GrassImagePainter; 
GrassImagePainter.prototype.paint= function(sprite, context) {
	if (!!this.image) {
		context.drawImage(this.image, 0, sprite.top,sprite.width,sprite.height);
		context.drawImage(this.image, sprite.width-5,sprite.top,sprite.width,sprite.height);
		context.drawImage(this.image, -sprite.width+5,sprite.top,sprite.width,sprite.height);
	}
};

SpriteSheetPainter =function(cells,spritesheeturl,mycanvas){
	this.cells=cells||[];
	this.spritesheet=new Image();
	this.spritesheet.src=spritesheeturl;
	 this.cellIndex = 0;
	 this.mycanvas=mycanvas;
},

SpriteSheetPainter.prototype={
	advance:function(){
		if(this.cellIndex==this.cells.length-1){
			this.cellIndex=0;
		}else{
			this.cellIndex++;
		}
	},
	paint:function(sprite,context){
		var cell=this.cells[this.cellIndex];
		context.drawImage(this.spritesheet.cell.left,cell.top,cell.width,cell.heightsprite.left, sprite.top, cell.width , cell.height);
	}
}

PeopleSpriteSheetPainter=function(cells,spritesheeturl,mycanvas,isReverse){
	SpriteSheetPainter.call(this,cells,spritesheeturl,mycanvas);
	this.isReverse=isReverse;
}
PeopleSpriteSheetPainter.prototype=Object.create(SpriteSheetPainter.prototype);
PeopleSpriteSheetPainter.prototype.paint=function(sprite,context){
	var cell = this.cells[this.cellIndex];	
	if(this.isReverse){
		
		context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width , sprite.height );
 
 	}else{
 	var canvas=	this.mycanvas;
		context.translate(canvas.width, 0);
		context.scale(-1, 1)
		context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, canvas.width - sprite.width  - sprite.left, sprite.top, cell.width * 2, cell.height * 2);
		context.translate(canvas.width, 0);
		context.scale(-1, 1);
	}
}


var Behavior = function() {}
Behavior.prototype.execute = function(sprite, context, time) {

}