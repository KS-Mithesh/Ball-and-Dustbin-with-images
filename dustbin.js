class dustbin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;this.height=height;
        World.add(world,this.body);

        this.image=loadImage("images/dustbin.png");
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image, 650,540,200,200);
    }
}