// String 
var string="This is a string";
console.log(string);

var num=100;
console.log(num);

var bool=true;
console.log(bool);

var object;
console.log(object);

object=null;
console.log(object);

var arr1=[1,2,3,4,5];
console.log(arr1);

var arr2=["name",12,true];
console.log(arr2);

var arr3=[[1,2],[2,3],[3,4]];
console.log(arr3);

console.log(arr3[0]);

console.log(arr3[1][1]);

arr3.push("my name");
console.log(arr3);

arr3.pop();
console.log(arr3);


const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var myEngine,myWorld;
var ground,platform;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4,log5;
var pig1,pig2;
var bird1;
var bg,backgroundImg;
var constrainedLog,slingshot;
var score=0;
var gameState="onSling";
function preload(){
    bg=loadImage("sprites/bg.png");
}

function preload(){
    getBackgroundImg();
}

function setup(){
    createCanvas(1200,400);
    myEngine=Engine.create();
    myWorld=myEngine.world;

    //constrainedLog=new Log(230,180,80,PI/2);
    ground=new Ground(600,height,1200,20);
    platform=new Ground(150,305,300,170);

    box1=new Box(700,320,70,70);
    box2=new Box(920,320,70,70);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    box5=new Box(810,160,70,70);

    log1=new Log(810,260,300,PI/2);
    log2=new Log(810,180,300,PI/2);
    log3=new Log(760,120,150,PI/7);
    log4=new Log(870,120,150,-PI/7);
   //log6=new Log(230,180,80,PI/2);

    pig1=new Pig(810,350);
    pig2=new Pig(810,220);

    bird1=new Bird(200,50);

    // var options={
    //     bodyA:bird1.body,
    //     bodyB:constrainedLog.body,
    //     stiffness:0.04,
    //     length:10
    // }

    // var chain=Constraint.create(options);
    // World.add(myWorld,chain);

    //chain=new Chain(bird1.body,log6.body);
    slingshot = new Slingshot(bird1.body,{x:200, y:50});

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

    Engine.update(myEngine);

    ground.display();
    platform.display();

    console.log(bird1.body.speed);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();

    bird1.display();
    //constrainedLog.display();

    //strokeWeight(3);
    //line(bird1.body.position.x,bird1.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);

    //log6.display();
    //chain.display();
    slingshot.display();

}

function mouseDragged(){
    // if(gameState !== "launched"){
         Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY});

    // }
}

function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32 && bird1.body.speed <1){
        bird1.trajectory=[];
        Matter.Body.setPosition(bird1.body,{x:200,y:50});
        slingshot.attach(bird1.body);
        
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Melbourne");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}