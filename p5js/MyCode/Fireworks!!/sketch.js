let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
}

function draw() {
  background(0);
  for (let i = 0; i < 50; i += 100) {
    fireworks.push(new Firework());
  }
  for (let f of fireworks) {
    f.render();
    f.update();
  }
}