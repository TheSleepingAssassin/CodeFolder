let b;
let b1;

function setup() {
  createCanvas(600, 600);
  b = new Ball(200, 300, 2);
  b1 = new Ball(400, 300, 4);
}

function draw() {
  background(0);
  let g = createVector(0, 0.25);
  let w1 = p5.Vector.mult(g, b.mass);
  let w2 = p5.Vector.mult(g, b1.mass);
  b.applyForce(w1);
  b1.applyForce(w2);

  if (mouseIsPressed) {
    let w = createVector(0.15, 0);
    b.applyForce(w);
    b1.applyForce(w);
  }

  b.show();
  b.update();
  b.edges();

  b1.show();
  b1.update();
  b1.edges();
}
