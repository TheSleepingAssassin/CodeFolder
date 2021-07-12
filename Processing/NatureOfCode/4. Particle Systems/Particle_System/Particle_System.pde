ArrayList<Body> bodies;
PVector g = new PVector(0, 0.02);

void setup() {
  size(600, 600);
  bodies = new ArrayList<Body>();
}

void draw() {
  background(0);
  bodies.add(new Body());
  for (int i = bodies.size() - 1; i >= 0; i--) {
    Body b = bodies.get(i);
    b.run();
    b.applyForce(g);
    
    if (b.dead()) {
      bodies.remove(i);
    }
  }
}
