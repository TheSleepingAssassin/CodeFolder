Body[] bodies = new Body[10];
Attractor att;

void setup() {
  size(600, 600);
  for (int i = 0; i < bodies.length; i++) {
    bodies[i] = new Body(2);
  }
  att = new Attractor(4);
}

void draw() {
  background(0);
  for (Body b : bodies) {
    b.render();
    b.update();
    att.attract(b);
  }
  att.render();
}
