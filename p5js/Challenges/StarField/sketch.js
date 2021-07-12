let stars = [];
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 900; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let s of stars) {
    s.show();
    speed = map(mouseX, 0, width, 0, 100);
    s.update();
  }
}
