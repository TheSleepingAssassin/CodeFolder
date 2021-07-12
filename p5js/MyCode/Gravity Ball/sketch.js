let balls = [];

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  let b = new Ball(mouseX, mouseY);
  balls.push(b);
}

function draw() {
  background(0);
  for (let b of balls) {
    b.show();
    b.move();
    b.bounce();
  }
}
