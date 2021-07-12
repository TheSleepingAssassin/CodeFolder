ArrayList<Body> bodies;

void setup() {
  size(600, 600);
  bodies = new ArrayList<Body>();
  for (int i = 0; i < 50; i++) {
    bodies.add(new Body());
  }
}

void draw() {
  for (int i = 0; i < bodies.size(); i++) {
    ArrayList<Body> other = bodies[i];
    if (bodies[i].intersects(other[i])) {
      bodies.splice(i, 1);
      bodies.add(new Body());
    }
  }
  background(0);
}
