float x = width / 2;
float y = height / 2;
float xoff = 0;
float yoff = 100000;
float r = 10;

void setup() {
  size(600, 600);
  background(0);
}

void draw() {
  noStroke();
  x = map(noise(xoff), 0, 1, 0, width);
  y = map(noise(yoff), 0, 1, 0, height);
  ellipse(x, y, r * 2, r * 2);
  xoff += 0.001;
  yoff += 0.001;
  x = constrain(x, r, width - r);
  y = constrain(y, r, height - r);
}
