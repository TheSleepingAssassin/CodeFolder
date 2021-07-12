class Body {
  PVector pos, vel, acc;
  
  float r;
  Body(float x, float y) {
    pos = new PVector(x, y);
    vel = new PVector();
    acc = new PVector();
    r = 16;
  }
  
  void applyForce(PVector force) {
    acc.add(force);
  }
  
  void update() {
    vel.add(acc);
    pos.add(vel);
    acc.mult(0);
    pos.x = constrain(pos.x, r, width - r);
  }
  
  void render() {
    fill(255);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
