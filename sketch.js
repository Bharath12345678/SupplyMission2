var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,w1,w2,w3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	}

function setup() {
	createCanvas(800, 700);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(150)

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.visible =false;
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	w2 =createSprite(width/2,height-45,100,10);
	w1 =createSprite(width/2-50,height-100,10,100);	
	w3 =createSprite(width/2+50,height-100,10,100);
	//box =new box(width/2, height-35, 40, 50;

	//packageBody =Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	//World.add(world, packageBody);

	engine = Engine.create();
	world = engine.world;

	

	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
 // packageSprite.x= packageBody.position.x;
  //packageSprite.y= packageBody.position.y
  //packageBody.display();
  helicopterSprite.display(); 
  packageSprite.display();
  //box.display();
  packageSprite.collide(ground);
  keyPressed();
    //    this.bottomBody=Bodies.rectangle(this.x, this.y,200, 20, {isStatic:true})
	//	this.leftWallBody=Bodies.rectangle(this.x-100, this.y-100, 20, 200, {isStatic:true})
	//	this.rightWallBody=Bodies.rectangle(this.x+100, this.y-100, 20, 200, {isStatic:true})
		
	//	World.add(world, this.bottomBody)
	//	World.add(world, this.leftWallBody)
	//	World.add(world, this.rightWallBody);

	drawSprites();
  
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	//Matter.Body.setStatic(packageBody,false)
	packageSprite.velocityY =5;
	packageSprite.visible =true;
  }
}



