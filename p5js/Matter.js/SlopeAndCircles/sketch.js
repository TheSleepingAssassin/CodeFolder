let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine, world;
let circles = [];
let bounds = [];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  bounds.push(new Boundary(150, 150, 350, 20, 0.7));
  bounds.push(new Boundary(450, 500, 350, 20, -0.7));
}

function draw() {
  background(51);
  circles.push(new Circle(width / 4, 50, 8));

  for (let i = circles.length - 1; i >= 0; i--) {
    let c = circles[i];
    c.render();
    if (c.out()) {
      c.removeFromWorld();
      circles.splice(i, 1);
    }
  }

  for (let b of bounds) {
    b.render();
  }
}