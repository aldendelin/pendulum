
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground,string;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  holder =new Holder(200,100,200,20);
  
  ground = new Ground(200,330,400,20)
  
  ball  = new Ball(220,200,40);

  string = new String(ball.body,holder.body);

}


function draw() {
  background(0); 
  Engine.update(engine);

   
  holder.display();
  string.display();
  ball.display();
  ground.display();

  text("Press space bar to oscillate the pendulam to left and right with mouse",10,20);
  text("Press Enter to stop the Pendulum from oscillating",100,50);

 if(keyCode=== 32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

}








