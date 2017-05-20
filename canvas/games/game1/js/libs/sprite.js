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
	this.image = new Image();
	this.image.src = imageUrl;
}
ImagePainter.prototype = {
	image: undefined,
	paint: function(sprite, context) {
		if (!!this.image) {
			context.drawImage(this.image, sprite.left, sprite.top,
				sprite.width, sprite.height);
		}
	}
}
var Behavior = function() {}
Behavior.prototype.execute = function(sprite, context, time) {

}