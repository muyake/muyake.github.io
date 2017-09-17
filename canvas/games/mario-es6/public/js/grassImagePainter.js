import { ImagePainter } from './libs/imagePainter';
class GrassImagePainter extends ImagePainter {
    constructor(imageUrl) {
            super(imageUrl);
        }
        //绘制后面的背景，需要有重叠部分
    paint(sprite, context) {
        if (!!this.image) {
            context.drawImage(this.image, 0, sprite.top, sprite.width, sprite.height);
            context.drawImage(this.image, sprite.width - 5, sprite.top, sprite.width, sprite.height);
            context.drawImage(this.image, -sprite.width + 5, sprite.top, sprite.width, sprite.height);
        }
    }
}
export GrassImagePainter;