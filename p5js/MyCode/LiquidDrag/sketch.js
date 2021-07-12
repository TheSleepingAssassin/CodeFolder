let bodies = [];
let g;

function setup() {
  createCanvas(windowWidth, windowHeight);
  g = createVector(0, 0.7);
  for (let i = 0; i < 20; i++) {
    bodies.push(new Body(random(width), 50, random(2, 6)));
  }
}

function draw() {
  background(51);
  for (let b of bodies) {
    b.render();
    b.update();
    b.edges();
    let weight = p5.Vector.mult(g, b.mass);
    b.applyForce(weight);
    if (b.pos.y > height / 2 - b.r) {
      b.dragW();
    }

    if (b.pos.y < height - b.r) {
      b.dragA();
    }
  }

  noStroke();
  fill(0, 100, 255, 125);
  rect(0, height / 2, width, height / 2);
}