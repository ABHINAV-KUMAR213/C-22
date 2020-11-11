const Engine  = Matter.Engine;
const World  = Matter.World;
const Bodies =  Matter.Bodies;

var engine,world;
var ground,ball;


function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
isStatic: true
  }
  var ball_options = {
    restitution: 1.0
}
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  World.add(world,ground);
  console.log(ground);
  
  //console.log(object.position.x);
  //console.log(object.position.y);
}
function draw(){
background(0);
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20)
}













