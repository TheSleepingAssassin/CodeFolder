ArrayList<System> sys;

void setup() {
  size(600, 600);
  sys = new ArrayList<System>();
}

void mousePressed() {
  sys.add(new System(new PVector(mouseX, mouseY)));
}

void draw() {
  background(0);
  for (System s : sys) {
    s.run();
    s.addB();
  }
}
