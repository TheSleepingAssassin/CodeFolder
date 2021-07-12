class System {
  ArrayList<Body> bodies;
  PVector g, pos;
  System(PVector _pos) {
    pos = _pos.copy();
    g = new PVector(0, 0.025);
    bodies = new ArrayList<Body>();
  }

  void addB() {
    if (random(1) < 0.4) {
      bodies.add(new SqBody(pos));
    } else {
      bodies.add(new Body(pos));
    }
  }

  void run() {
    for (int i = bodies.size() - 1; i >= 0; i--) {
      Body b = bodies.get(i);
      b.render();
      b.update();
      b.applyForce(g);

      if (b.dead()) {
        bodies.remove(i);
      }
    }
  }
}
