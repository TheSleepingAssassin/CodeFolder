Bird b;

void setup() {
  size(600, 600);
  b = new Bird(2);
}

void draw() {
  background(51);
  b.run();
  if (keyPressed) {
    if (keyCode == UP) {
      b.jump();
    }
  }
}
