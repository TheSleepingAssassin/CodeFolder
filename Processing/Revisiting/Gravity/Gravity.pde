ArrayList<Ball> bs;

void setup() {
  size(600, 600);
  bs = new ArrayList<Ball>();
}

void mousePressed() {
  bs.add(new Ball(new PVector(mouseX, mouseY), 2));
}

void draw() {
  background(51);

  for (Ball b : bs) {
    b.run();
  }
}
