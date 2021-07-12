class System {
  ArrayList<Body> bodies;
  PVector pos;
  System(PVector _pos) {
    pos = _pos.copy();
    bodies = new ArrayList<Body>();
  }

  void run() {
    for (int i = bodies.size() - 1; i >= 0; i--) {
      Body b = bodies.get(i);
      b.render();
      b.update();

      if (b.dead()) {
        bodies.remove(i);
      }
    }
  }

  void addB() {
    bodies.add(new Body(pos));
  }
}
