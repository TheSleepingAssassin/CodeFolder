System s;

void setup() {
  size(600, 600);
  s = new System(new PVector(width / 2, height - 50));
}

void draw() {
  background(0);
  s.addB();
  s.run();
}
