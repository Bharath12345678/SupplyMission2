class box
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y; 
		this.bottomBody=Bodies.rectangle(this.x, this.y,200, 20, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-100, this.y-100, 20, 200, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+100, this.y-100, 20, 200, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display(){
	//	var posBottom=this.bottomBody.position;
	//	var posLeft=this.leftWallBody.position;
	//	var posRight=this.rightWallBody.position;

	//		push()
	//		translate(posLeft.x, posLeft.y);
	//		rectMode(CENTER)
	//		fill(255)
	//		pop()

	//		push()
	//		translate(posRight.x, posRight.y);
	//		rectMode(CENTER)
	//		fill(255)
	//		pop()

	//		push()
	//		translate(posBottom.x, posBottom.y+10);
	//		rectMode(CENTER)		
	//		fill(255)
	//		pop()
			
	}

}