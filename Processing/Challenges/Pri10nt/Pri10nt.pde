float x, y, spce;

void setup() {
  size(600, 600);
  x = 0;
  y = 0;
  spce = 30;
  stroke(255);
  background(0);
}

void draw() {
  if (floor(random(2)) == 1) {
    line(x, y, x + spce, y + spce);
  } else {
    line(x + spce, y, x, y + spce);
  }
  x += spce;
  if (x >= width) {
    x = 0;
    y += spce;
  }
}
