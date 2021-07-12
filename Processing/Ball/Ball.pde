ArrayList<Body> balls;

void setup() {
  size(600, 600);
  balls = new ArrayList<Body>();
  balls.add(new Body(new PVector(width / 2, height / 2), 16));
}

void mousePressed() {
  balls.add(new Body(new PVector(mouseX, mouseY), random(10, 20)));
}

void draw() {
  background(0);
  for (Body b : balls) {
    b.render();
    b.update();
    b.bounce();
  }
}
