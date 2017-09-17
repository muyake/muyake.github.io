//画笔对象
class ImagePainter {
    constructor(imageUrl) {
        if (!!imageUrl) {
            this.image = new Image();
            this.image.src = imageUrl;
        }
    }
    paint(sprite, context) {
        if (!!this.image) {
            context.drawImage(this.image, sprite.left, sprite.top,
                sprite.width, sprite.height);
        }
    }
}
export ImagePainter;