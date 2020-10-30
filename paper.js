class paper{
    constructor(x,y){

        var paper_options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,35,paper_options);
        World.add(world,this.body);

        this.image=loadImage("images/paper.png");

    }
    display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();

    }
}