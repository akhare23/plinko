
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions,plinkos,particles;
var score;
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;


	divisions = []
	plinkos = []
	particles=[]
	//Create the Bodies Here.
	ground = new Ground();
	for(var i = 0;i<490;i=i+80){
		divisions.push(new Division(i,650));
	}
	for(var w=10;w<470;w=w+75){
		for(var y=200;y<500;y=y+200){
		plinkos.push(new Plinko(w,y));
		}
	}
	for(var r = 42.5;r<427.5;r=r+75){
		for(var u=100;u<500;u=u+200){
		plinkos.push(new Plinko(r,u));
		}
	}
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  for(var j=0;j<divisions.length;j++){
  	divisions[j].display();
  }
  for(var e =0;e<plinkos.length;e++){
	  plinkos[e].display();
  }
  if(frameCount%60===0){
	particles.push(new Particle(random(230,250),1));
}
  for(var l = 0;l<particles.length;l++){
  	particles[l].display();
  }
  
  drawSprites();
 
}



