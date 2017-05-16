var ImagePainter = function(imageUrl) {
	this.image = new Image();
	this.image.src = imageUrl;
}
ImagePainter.prototype = {
	paint: function(sprite, context) {
		if (this.image.complete) {
			context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
		}
	}
}