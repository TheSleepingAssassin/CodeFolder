let Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Vertices = Matter.Vertices,
  Vector = Matter.Vector;

let bodies = [];
// let bound;
let down, right, up, left;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  engine = Engine.create();;
  Engine.run(engine);
  let br = 50;
  down = new Bound(width / 2, height + 8, width, br);
  right = new Bound(width + 8, height / 2, br, height);
  up = new Bound(width / 2, -br / 2, width, br);
  left = new Bound(-br / 2, height / 2, br, height);
  // for (let i = 0; i < 100; i++) {
  //   bodies.push(new Body(random(width), random(20, 50), 16));
  // }
}

// function mousePressed() {
//   bodies.push(new Body(mouseX, mouseY, 5));
// }

function draw() {
  background(51);
  down.render();
  right.render();
  up.render();
  left.render();

  if (mouseIsPressed) {
    bodies.push(new Body(mouseX, mouseY, 20));
  }


  for (let b of bodies) {
    b.render();
    // if (mouseIsPressed) {
    //   let bpos = b.body.body.position;
    //   let d = dist(mouseX, mouseY, bpos.x, bpos.y);
    //   if (d < b.body.r) {
    //     b.pos.x = mouseX;
    //     b.pos.y = mouseY;
    //   }
    // }
  }
}