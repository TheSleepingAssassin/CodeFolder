let flock;

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  flock = new Flock();
  // Add an initial set of boids into the system
  for (let i = 0; i < 100; i++) {
    let b = new Boid(width / 2, height / 2);
    flock.addBoid(b);
  }
}

function draw() {
  background(51);
  flock.run();
}
// Add a new boid into the System
function mouseDragged() {
  flock.addBoid(new Boid(mouseX, mouseY));
}
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com