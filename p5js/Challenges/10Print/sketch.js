let x = 0;
let y = 0;
let space = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(255);
  if (random(1) < 0.5) {
    line(x, y, x + space, y + space);
  } else {
    line(x, y + space, x + space, y);
  }
  x += space;

  if (x > width) {
    x = 0;
    y += space;
  }

  if (y > height) {
    noLoop();
  }
}