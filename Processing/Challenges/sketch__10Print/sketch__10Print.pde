float x = 0;
float y = 0;
float spce = 5;

void setup() {
  size(600, 600);
  background(0);
}

void draw() {
  stroke(255);
  if (random(1) < 0.5) {
    line(x, y, x + spce, y + spce);
  } else {
    line(x, y +spce, x + spce, y);
  }
  x += spce;
  if (x > width) {
    x = 0;
    y += spce;
  }
  if (y > height) {
    noLoop();
  }
}
