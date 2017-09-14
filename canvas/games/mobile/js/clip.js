var clipObj = {
    canvas: null,
    radius: 0,
    start: false,
    maxRadius:0,
    flag:true,//true为减小，false为增大。
    init: function(overcallback,resetcallback) {
        this.canvas = element.mycanvas;
        var width=this.canvas.width;
        var height=this.canvas.height;

        this.maxRadius=Math.sqrt(Math.pow(width,2)+Math.pow(height,2))/2;

        this.radius = this.maxRadius;
        this.context = gameControl.context;
        this.overCallback=overcallback;
        this.resetCallback=resetcallback;
    },
    setClippingRegion: function(radius) {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2,
            radius, 0, Math.PI * 2, false);
        this.context.clip();
    },
    fillCanvas: function(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    drawAnimationFrame: function(radius) {
        this.fillCanvas('black');
        this.setClippingRegion(radius);
       
    },
    startDraw:function(){
        this.start=true;
    },
    draw: function() {
        if (this.start == true) {
            if(!(this.radius>this.maxRadius)){
                if(this.radius>0&&this.flag){
                    this.radius -= this.canvas.width / 150;
                  this.radius=this.radius<0?0:this.radius;
                   
                }else{
                    if(this.flag==true){
                        this.resetCallback();
                    }
                    
                    this.flag=false;
                    this.radius += this.canvas.width / 150;
                }

                 this.drawAnimationFrame(this.radius);
                
            }else{
                 this.endAnimation();
            }      
         
        }

    },
    endAnimation: function() {
        this.start =false;
         this.flag=true;
        this.radius = this.canvas.width / 2;
        this.overCallback();
        //this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
}
