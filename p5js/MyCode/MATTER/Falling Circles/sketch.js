// module aliases
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let cube;
let ground;
let options = {
  isStatic : true
}

function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  cube = Bodies.rectangle(300, 200, 20, 20);
  ground = Bodies.rectangle(300, height, width, 1, {options});
  Engine.run(engine);
  World.add(engine.world, cube);
  World.add(engine.world, ground);
}

function draw() {
  background(0);
  noStroke();
  rect(cube.position.x, cube.position.y, 20, 20);
}
