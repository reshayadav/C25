class Box extends BaseClass{
    //Automatically called when any object is created using this class. WE use this to set any class property or
    // to create the physics body. this keyword refers to any object that is created.
    constructor(x,y,w,h){
        
       super(x,y,w,h);
       this.image=loadImage("sprites/wood1.png");
       

       
    }

    
}