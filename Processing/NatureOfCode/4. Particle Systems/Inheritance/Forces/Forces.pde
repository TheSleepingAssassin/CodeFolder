ArrayList<System> sys;
PVector g, Lw, Rw;

void setup() {
  size(600, 600);
  sys = new ArrayList<System>();
  sys.add(new System(new PVector(width / 2, 50)));
  g = new PVector(0, 0.025);
  Rw = new PVector(1, 0);
  Lw = new PVector(-1, 0);
}

void keyPressed() {
  if (keyCode == LEFT) {
    for (System s : sys) {
      s.applyForce(Rw);
    }
  }
  if (keyCode == RIGHT) {
    for (System s : sys) {
      s.applyForce(Lw);
    }
  }
}

void draw() {
  background(0);
  for (System s : sys) {
    s.run();
    s.addB();
    s.applyForce(g);
  }
}
