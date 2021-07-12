let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new Body();
}

function draw() {
  background(0);
  b.render();
}