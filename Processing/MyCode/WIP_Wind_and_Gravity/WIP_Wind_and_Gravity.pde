Body b;
PVector g;

void setup() {
  size(600, 600);
  b = new Body();
  g = new PVector(0, 0.8);
}

void draw() {
  background(51);
  b.render();
  b.update();
  b.bounce();
  b.applyForce(g);
  if (mouseX < width / 2) {
    if (mousePressed) {
      float d = dist(mouseX, mouseY, width / 2, height / 2);
      PVector w = new PVector(0.4, 0);
      b.applyForce(w);
    }
  } else {
    if (mousePressed) {
      PVector w = new PVector(-0.4, 0);
      b.applyForce(w);
    }
  }
}
