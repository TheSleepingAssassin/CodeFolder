class Body {
  PVector pos, vel, acc;
  
  float r, mass;
  Body(float _m) {
    pos = new PVector(random(width), random(height));
    vel = PVector.random2D();
    acc = new PVector();
    mass = _m;
    r = sqrt(mass) * 10;
  }
  
  void applyForce(PVector _force) {
    PVector f = PVector.div(_force, mass);
    acc.add(f);
  }
  
  void update() {
    vel.add(acc);
    pos.add(vel);
    acc.mult(0);
  }
  
  void render() {
    fill(255);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
