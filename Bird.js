// class Bird{
//   constructor(x, y) {
//     var options = {
//       'density':1.5,
//       'friction': 1.0,
//       'restitution':0.5
//     };
//     this.body = Bodies.rectangle(x, y, 50, 50, options);
//     this.width = 50;
//     this.height = 50;
//     World.add(myWorld, this.body);
//   };
//   display(){
//     var pos = this.body.position;
//     pos.x = mouseX;
//     pos.y = mouseY;
//     var angle = this.body.angle;

//     push();
//     translate(pos.x, pos.y);
//     rotate(angle);
//     strokeWeight(3);
//     stroke('blue');
//     fill('red');
//     rectMode(CENTER);
//     rect(0, 0, this.width, this.height);
//     pop();
//   };
// };

class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }

    for(var i=0;i<this.trajectory.length;i++){
      // [i][0],[i][1] notation is used as it is an array of arrays. (x of 1st array,y of 1st array)
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}