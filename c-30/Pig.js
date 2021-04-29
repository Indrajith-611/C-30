class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
//give maximium Visiblity to the pig
this.Visiblity=255

  }

  display(){
    
    if(this.body.speed<3){  //if the pig moves slowly (the pig is not attacked/pushed by the bird)
      super.display();        //then the bird is displayed in the screen
    }

    else{     //if the pig is moving fastly, the pig is pushed/attacked by the bird
    World.remove(world,this.body)       //removing the object from the canvas
    push ();
    //reduce the Visiblity by 5 in each frame
    this.Visiblity=this.Visiblity-5;
    tint(255,this.Visiblity)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop ();
    }
  }
};