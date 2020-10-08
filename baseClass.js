class BaseClass{
    //Automatically called when any object is created using this class. WE use this to set any class property or
    // to create the physics body. this keyword refers to any object that is created.
    constructor(x,y,w,h){
        var base_options = {
            restitution : 0.6,
            friction : 1.0
        }

        this.body = Bodies.rectangle(x,y,w,h,base_options);
        this.width = w;
        this.height = h;
        World.add(myWorld, this.body);
        this.image=loadImage("sprites/base.png");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       imageMode(CENTER);
       image (this.image,0,0,this.width,this.height); 
        pop();
    }
}