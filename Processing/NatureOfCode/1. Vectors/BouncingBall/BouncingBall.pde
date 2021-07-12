Body b;

void setup() {
  size(600, 600);
  b = new Body();
}

void draw() {
  background(0);
  b.render();
  b.update();
  b.bounce();
}
