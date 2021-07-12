let balls = [];
let att;

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  for (let i = 0; i < 500; i++) {
    balls[i] = new Ball(random(width), random(height), random(1, 4));
  }
  att = new Attractor(width / 2, height / 2, 4);
}

function draw() {
  background(0);
  for (let i = 0; i < balls.length / 2; i++) {
    balls[i].show();
    balls[i].update();
  }
  for (let b of balls) {
    att.attract(b);
    att.show();
  }
  for (let i = balls.length / 2; i < balls.length; i++) {
    balls[i].show();
    balls[i].update();
  }
  // att.pos.x = mouseX;
  // att.pos.y = mouseY;
}
