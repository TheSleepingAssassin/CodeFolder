Body[] bodies = new Body[200];
PImage img;

void setup() {
  size(683, 522);
  img = loadImage("Miyu Drawing.PNG");
  background(51);
  for (int i = 0; i < bodies.length; i++) {
    bodies[i] = new Body();
  }
}

void draw() {
  for (Body b : bodies) {
    b.render();
    b.update();
    b.bounce();
  }
}
