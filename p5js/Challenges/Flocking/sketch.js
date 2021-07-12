let flock;

function setup() {
  createCanvas(windowWidth, windowHeight);
  flock = new Flock();
  for (let i = 0; i < 100; i++) {
    flock.addBoid(new Boid(width / 2, height / 2));
  }
}

function draw() {
  background(0);
  flock.run();
}