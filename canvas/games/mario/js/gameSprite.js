//角色公共函数
// var gameSpriteLib = {

// };
//角色
var Character = function(name, painter, behaviors, isReverse, mycanvas) {
	Sprite.call(this, name, painter, behaviors);
	this.isReverse = isReverse;
	this.mycanvas = mycanvas;
}
Character.prototype = Object.create(Sprite.prototype);
var CharacterImagePainter = function(imageUrl) {
	ImagePainter.call(this, imageUrl);
}

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