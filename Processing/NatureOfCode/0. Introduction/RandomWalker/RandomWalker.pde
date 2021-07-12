Walker w;

void setup() {
  size(600, 600);
  background(0);
  w = new Walker(width / 2, height / 2);
}

void draw() {
  w.render();
  w.move();
}
