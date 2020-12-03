// class Pig{
//     constructor(x,y){
//         var options={
//             'restitution':0.8,
//             'friction':0.3,
//             'density':1.0
//         }
//         this.body=Bodies.rectangle(x,y,50,50,options);
//         this.width=50;
//         this.height=50;

//         World.add(myWorld,this.body);
//     }

//     display(){
//         var pos=this.body.position;
//         var angle=this.body.angle;
//         push();
//         translate(pos.x,pos.y);
//         rotate(angle);
//         rectMode(CENTER);
//         fill("green");
//         rect(0,0,this.width,this.height);
//         pop();

//     }
// };
  
class Pig extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png");
      this.Visibility=255;
    }
  
    display(){
      //console.log(this.body.speed);
      if(this.body.speed<3){
        super.display();
      }
      else{
        World.remove(myWorld,this.body);
        push();
        this.Visibility=this.Visibility-5;
        
        // To apply transparency to an image without affecting its color, use white as the tint color and specify an alpha value.
        //  alpha - which specifies the opacity for a color.
        //The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).
  
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
    score(){
      if(this.Visibility<0 && this.Visibility> -1005){
        score++;
      }
    }
  };