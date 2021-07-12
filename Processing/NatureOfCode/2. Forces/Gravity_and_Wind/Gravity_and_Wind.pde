Body[] bodies = new Body[5];
PVector w = new PVector(0.5, 0);

void setup() {
  size(600, 600);
  for (int i = 0; i < bodies.length; i++) {
    bodies[i] = new Body(random(1, 8));
  }
}

void draw() {
  background(0);
  for (Body b : bodies) {
    b.render();
    b.update();
    b.bounce();
    b.applyG();
    if (mousePressed) {
      b.applyForce(w);
    }
  }
}
