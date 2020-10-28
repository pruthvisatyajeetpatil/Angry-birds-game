const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


}

function draw() {
  background(255,255,255); 
  
  pentagon = new Pentagon(200,50,40,40);
  World.add(world,pentagon);

  slingshot = new SlingShot(pentagon.body,{x:200, y:50});

  box1 = new Box(330,335,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  ground = new Ground(600,height,1200,20);

  function draw(){
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pentagon.display();
    slingshot.display(); 
    ground.display();
}
  function mouseDragged(){
    Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function KeyPressed(){
    if(keyCode === 32){
        slingshot.attach(pentagon.body);
    }
}
  
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/bg1.jpg";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

  drawSprites();
}