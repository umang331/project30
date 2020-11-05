
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(380,300,270,10)
	ground2 = new Ground(700,200,250,10)
	ground3 = new Ground(450,500,1200,50)
	
	//set one 
	//level one
	block1 = new Block(280,275,30,40);  
	block2 = new Block(310,275,30,40);
	block3 = new Block(340,275,30,40);
	block4 = new Block(370,275,30,40);
	block5 = new Block(400,275,30,40);
	block6 = new Block(430,275,30,40);
	block7 = new Block(460,275,30,40);
	block8 = new Block(490,275,30,40);
	//level two
	block9 = new Block(310,235,30,40);
	block10 = new Block(340,235,30,40);
	block11 = new Block(370,235,30,40);
	block12 = new Block(400,235,30,40);
	block13 = new Block(430,235,30,40);
	block14 = new Block(460,235,30,40);
	//level three
	block15 = new Block(340,195,30,40);
	block16 = new Block(370,195,30,40);
	block17 = new Block(400,195,30,40);
	block18 = new Block(430,195,30,40);
	//level four
	block19 = new Block(370,155,30,40);
	block20 = new Block(400,155,30,40);
	//level five
	block21 = new Block(385,115,30,40);

	//set two 
	//level one
	blocks1 = new Block(640,175,30,40);
	blocks2 = new Block(670,175,30,40);
	blocks3 = new Block(700,175,30,40);
	blocks4 = new Block(730,175,30,40);
	blocks5 = new Block(760,175,30,40);
	//level two
	blocks6 = new Block(670,135,30,40);
	blocks7 = new Block(700,135,30,40);
	blocks8 = new Block(730,135,30,40);
	//level three
	blocks9 = new Block(700,95,30,40);

	heptagon = new Hepta(50,200)
	slingshot = new SlingShot(heptagon.body,{x:100,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(24)
  text("drag the heptagon to shoot the boxes,press space to get another chance",100,30)
  
  ground.display();
  ground2.display();
  ground3.display();
  fill("yellow");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  fill("red");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("white");  
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("blue");  
  block19.display();
  block20.display();
  fill(73,207,193);
  block21.display();
  fill("yellow");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("red");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("white")
  blocks9.display();

  heptagon.display();
  slingshot.display();
 
}
function mouseDragged(){
    Matter.Body.setPosition(heptagon.body,{x: mouseX,y: mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(heptagon.body)
    }
    console.log(keyCode)
}



