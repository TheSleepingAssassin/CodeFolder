let bodies = [];
let att;

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  for (let i = 0; i < 45; i++) {
    bodies.push(new Body(2));
  }
  att = new Attractor(4);
  background(0);
}

function draw() {
  for (let b of bodies) {
    b.render();
    b.update();

    att.attract(b);
  }
  att.render();
}