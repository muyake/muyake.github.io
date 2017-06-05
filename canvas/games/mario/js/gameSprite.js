


//游戏所有元素的sprite

//角色
var Character = function(name, painter, behaviors, isReverse, mycanvas) {
	Sprite.call(this, name, painter, behaviors);
	this.isReverse = isReverse;
	this.mycanvas = mycanvas;
}
Character.prototype = Object.create(Sprite.prototype);
Character.prototype.constructor = Character; 
Character.prototype.update=function(context, time,fpsNum) {
	for (var i = this.behaviors.length; i > 0; --i) {
		this.behaviors[i - 1].execute(this, context, time,fpsNum);
	}
}
var CharacterImagePainter = function(imageUrl) {
	ImagePainter.call(this, imageUrl);
}
CharacterImagePainter.prototype.constructor = CharacterImagePainter; 
//角色画笔必须有isReverse属性。
CharacterImagePainter.prototype.paint = function(characterSprite, context, mycanvas) {
	//isReverse代表正。
	if (characterSprite.isReverse) {
		context.drawImage(this.image, characterSprite.left, characterSprite.top, characterSprite.width, characterSprite.height);
	} else {
		var canvas = characterSprite.mycanvas;
		context.translate(canvas.width, 0);
		context.scale(-1, 1)
		context.drawImage(this.image, canvas.width - characterSprite.width - characterSprite.left, characterSprite.top, characterSprite.width, characterSprite.height);
		context.translate(canvas.width, 0);
		context.scale(-1, 1);
	}
};
PeopleRunSpriteSheetPainter = function(cells, spritesheeturl, mycanvas, imgcount) {
	SpriteSheetPainter.call(this, cells, spritesheeturl, mycanvas);
	this.imgcount = imgcount;
}
PeopleRunSpriteSheetPainter.prototype = Object.create(SpriteSheetPainter.prototype);
PeopleRunSpriteSheetPainter.prototype.constructor = PeopleRunSpriteSheetPainter; 
PeopleRunSpriteSheetPainter.prototype.paint = function(sprite, context) {
	var cell = this.cells['sprite_' + this.cellIndex];
	if (sprite.isReverse) {
		context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
	} else {
		var canvas = this.mycanvas;
		context.translate(canvas.width, 0);
		context.scale(-1, 1)
		context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, canvas.width - sprite.width - sprite.left, sprite.top, sprite.width, sprite.height);
		context.translate(canvas.width, 0);
		context.scale(-1, 1);
	}
	//context.drawImage(this.spritesheet, cell.left, cell.top, cell.width, cell.height, sprite.left, sprite.top, sprite.width, sprite.height);
}
PeopleRunSpriteSheetPainter.prototype.advance = function(sprite, context) {
	if (this.cellIndex == this.imgcount) {
		this.cellIndex = 0;
	} else {
		this.cellIndex++;
	}
}

var marioSpriteAnimator=function(elapsedCallback){
	if (elapsedCallback) {
		this.elapsedCallback = elapsedCallback;
	}
}
marioSpriteAnimator.prototype=Object.create(SpriteAnimator.prototype);
marioSpriteAnimator.prototype.start=function(marioSprite, duration) {
		var endTime = +new Date() + duration;
		var periond = marioSprite.startVelocityY / (this.painters.length);
		var interval = undefined;
		var animator = this;
		var originalPainter = sprite.painters;
		this.index = 0;
		sprite.animating = true;
		sprite.painter = this.painters[this.index];
		interval = setInterval(function() {
			if (+new Date() < endTime) {
				sprite.painter = animator.painters[++animator.index];

			} else {
				animator.end(sprite, originalPainter);
				clearInterval(interval);
			}
		}, period);

	};


//场景Sprite
var SceneSprite=function(name, painter, behaviors) {
	Sprite.call(this,name, painter, behaviors);	
}
SceneSprite.prototype=Object.create(Sprite.prototype);
SceneSprite.prototype.constructor=SceneSprite;
SceneSprite.prototype.update= function(context, time,fpsNum) {
	for (var i = this.behaviors.length; i > 0; --i) {
		this.behaviors[i - 1].execute(this, context, time,fpsNum);
	}
}