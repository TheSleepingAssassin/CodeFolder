class Body {
  PVector pos, vel, acc, g;
  
  float mass, r;
  Body(float _m) {
    pos = new PVector(random(width), height / 2);
    vel = new PVector(0, 0);
    acc = new PVector(0, 0);
    g = new PVector(0, 0.7);
    mass = _m;
    r = sqrt(mass) * 10;
  }
  
  void applyG() {
    acc.add(g);
  }
  
  void bounce() {
    if (pos.y >= height - r) {
      vel.y *= -0.87;
    }
    if (pos.x <= r || pos.x >= width - r) {
      vel.x *= -0.87;
    }
  }
  
  void applyForce(PVector _force) {
    PVector f = PVector.div(_force, mass);
    acc.add(f);
  }
  
  void update() {
    vel.add(acc);
    pos.add(vel);
    acc.mult(0);
    pos.y = constrain(pos.y, r, height - r);
    pos.x = constrain(pos.x, r, width - r);
  }
  
  void render() {
    fill(255);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
