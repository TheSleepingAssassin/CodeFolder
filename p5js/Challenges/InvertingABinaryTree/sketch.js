const {
  Engine,
  World,
  Bodies
} = Matter;

let engine, world;
// Vars
let tree;
// VarsEnd

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  noStroke();
  noFill();
  strokeWeight(1);

  // Continue
  tree = new Tree();
  for (let i = 0; i < 10; i++) {
    tree.addValue(floor(random(10)));
  }
  // End
}

function draw() {
  background(51);
  Engine.update(engine);

  // Continue
  tree.traverse();
  // End
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}