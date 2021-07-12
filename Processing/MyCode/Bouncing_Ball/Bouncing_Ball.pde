ArrayList<Ball> balls;

void setup() {
  size(400, 400);
  balls = new ArrayList<Ball>();
  for (int i = 0; i < 3; i++) {
    balls.add(new Ball(new PVector(random(width), random(height)), 16));
  }
}

void mousePressed() {
  balls.add(new Ball(new PVector(mouseX, mouseY), 16));
}

void draw() {
  background(0);
  for (Ball b : balls) {
    b.render();
    b.update();
    b.bounce();
  }
}
