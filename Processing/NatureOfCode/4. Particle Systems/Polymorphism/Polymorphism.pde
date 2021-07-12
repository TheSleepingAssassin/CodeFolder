ArrayList<Particle> particles;

void setup() {
  size(650, 650);
  particles = new ArrayList<Particle>();
}

void draw() {
  background(51);
  particles.add(new Particle());
  for (int i = particles.size() - 1; i >= 0; i--) {
    Particle p = particles.get(i);
    p.render();
    p.update();
    if (p.isDead()) {
      particles.remove(i);
    }
  }
}
