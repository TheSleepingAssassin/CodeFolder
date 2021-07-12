let balls = [];
let mu = 0.1;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 8; i++) {
    balls[i] = new Ball(random(width), 50, random(1, 8));
  }
}

function draw() {
  background(0);
  fill(255, 125);
  noStroke();
  rect(0, height / 2, width, height / 2);
  for (let b of balls) {
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
    if (b.pos.y > (height / 2) - b.r) {
      b.drag();
    }
  }
}
