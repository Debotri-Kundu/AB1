const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myworld,myengine,ground,box,box1,box2,box3,box4,pig,pig1,log,log1,log2,log3,bird;

function setup(){
  createCanvas(1200,800)
  myengine=Engine.create();
  myworld=myengine.world
  
  ground=new Ground(600,780,1200,40);
  box=new Box(700,730,80,80);
  box1=new Box(400,730,80,80);
  box2=new Box(700,650,80,80);
  box3=new Box(400,650,80,80);
  box4=new Box(550,550,80,80);
  pig=new Pig(550,730);
  pig1=new Pig(550,650);
  log=new Log(550,700,400,PI/2)
  log1=new Log(550,590,400,PI/2)
  log2=new Log(500,550,160,PI/6)
  log3=new Log(580,550,160,-PI/6)
  bird=new Bird(300,150)
}
function draw(){
  background(0)
  Engine.update(myengine)
  ground.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  pig.display();
  pig1.display();
  log.display();
  log1.display();
  log2.display();
  log3.display();
  bird.display();
}
