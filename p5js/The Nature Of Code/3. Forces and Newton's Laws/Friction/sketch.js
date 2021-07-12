let b;
let mu = 0.1;

function setup() {
  createCanvas(600, 600);
  b = new Ball(300, 300, 2);
}

function draw() {
  background(0);
  let g = createVector(0, 0.25);
  let weight = p5.Vector.mult(g, b.mass);
  b.applyForce(weight);

  if (mouseIsPressed) {
    let w = createVector(0.15, 0);
    b.applyForce(w);
  }

  b.show();
  b.update();
  b.edges();
  b.friction();
}
