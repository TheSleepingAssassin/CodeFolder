class Body {
  PVector pos, vel, acc;
  float r;
  Body() {
    pos = new PVector(width / 2, 50);
    vel = new PVector();
    acc = new PVector();
    r = 16;
  }
  
  void bounce() {
    if (pos.x <= r || pos.x >= width - r) vel.x *= -0.85;
    if (pos.y <= r || pos.y >= height - r) vel.y *= -0.85;
  }
  
  void applyForce(PVector force) {
    acc.add(force);
  }

  void update() {
    vel.add(acc);
    pos.add(vel);
    pos.y = constrain(pos.y, r, height - r);
    pos.x = constrain(pos.x, r, width - r);
    acc.mult(0);
  }

  void render() {
    fill(127);
    stroke(255);
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
