var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.8;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.rectangle(width/2 , 200 , 5 , 5, {restitution:1,isStatic:true,friction:1});
	World.add(world, packageBody);

	

//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);

	//creating boxes
    box = new transBox(width/2,628,400,20);
	box1 = new Box(width/2,650,400,20);
	box2 = new Box(210,590,20,100);
	box3 = new Box(590,590,20,100);
	

	



    Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

  //displaying boxes
  box.display();
  box1.display();
  box2.display();
  box3.display();

  
 keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyWentDown("down")) {
	  Body.setStatic(packageBody,false);
	 }
   }



