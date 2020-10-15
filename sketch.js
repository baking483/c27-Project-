var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var roofObject, bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	// World.add(world, ground);
	 
	roofObject = new Roof();

	bobObject1 = new Bob(250,100);
	bobObject2 = new Bob(300,100);
	bobObject3 = new Bob(350,100);
	bobObject4 = new Bob(400,100);
	bobObject5 = new Bob(450,100);
	
	//roofObject = Bodies.rectangle(400,650,400,30);
	
	//rope1 = new Rope(bobObject1,{x:250,y:40});
	rope1 = new Rope(bobObject1,{x:250,y:40});
	
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

  
}


function draw() {
 Engine.update(engine);
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  
  //Engine.run(engine);
}



