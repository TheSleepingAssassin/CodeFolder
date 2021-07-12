const {
  Engine,
  World,
  Bodies,
  MouseConstraint,
  Mouse,
  Constraint
} = Matter;

let engine, world, mConst;
let bounds = [];
let boxes = [];
let b;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  noStroke();
  noFill();
  strokeWeight(1);

  let r = 20;
  bounds.push(new Box(width / 2, height, width, r, true));
  bounds.push(new Box(width, height / 2, r, height, true));
  bounds.push(new Box(width / 2, 0, width, r, true));
  bounds.push(new Box(0, height / 2, r, height, true));

  for (let i = 0; i < 50; i++) {
    let c = color(random(256), random(256), random(256));
    boxes.push(new Box(width / 4 * 3, (height - r) - i * r, r, r, false, c));
  }
  b = new Bird(50, height / 4 * 3, 16, false);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  }
  mConst = MouseConstraint.create(engine, options);
  World.add(world, mConst)
}

function draw() {
  background(51);
  Engine.update(engine);

  for (let b of boxes) {
    b.render();
  }

  for (let b of bounds) {
    b.render();
  }
  b.render();
}