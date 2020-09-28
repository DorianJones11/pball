const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImg,paper1
var ground1
var box1,box2,box3



function preload()
{
	paperImg=loadImage("paper.jpg")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);



	
	

	
   
	var box1 = createSprite(525,670,10,100 , {isStattic:false});

	var box2 = createSprite(570,700,100,20 , {isStattic:false});

	var box3 = createSprite(625,670,10,100 , {isStatic:false});

	paper1 = new paper(200,450,40)

	ground1 = new ground(200,700,1600,10)

	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  drawSprites();


 
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-500});
	 }
   }



