//雪碧图的对象
class SpriteSheetPainter {
    constructor(cells = [], spritesheeturl, mycanvas) {
            this.cells = cells;
            this.spritesheet = new Image();
            this.spritesheet.src = spritesheeturl;
            this.cellIndex = 0;
            this.mycanvas = mycanvas;
        }
        //雪碧图的轮播
    advance: function() {
            if (this.cellIndex == this.cells.length - 1) {
                this.cellIndex = 0;
            } else {
                this.cellIndex++;
            }
        },
        //雪碧图的绘制
        paint: function(sprite, context) {
            let cell = this.cells[this.cellIndex];
            context.drawImage(this.spritesheet.cell.left, cell.top, cell.width, cell.heightsprite.left, sprite.top, cell.width, cell.height);
        },
}
export {SpriteSheetPainter};