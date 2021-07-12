let viktor;

function setup() {
  createCanvas(400, 400);
  viktor = new Viktor(width / 2, height / 2);
}

function draw() {
  background(0);
  viktor.show();
  viktor.update();
}
