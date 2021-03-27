const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  ground =Bodies.rectangle(200,390,2000,10,options);
  World.add(world,ground);
  var ball_op={
    restitution:0.04
  }
  ball= Bodies.circle(200,100,10,ball_op)
  World.add(world,ball);

  

  console.log(ground);
}
function draw() {
  background("red");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,2000,10)
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10)
};