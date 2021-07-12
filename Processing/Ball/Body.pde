class Body {
  PVector pos, vel;
  float r, d;
  Body(PVector pos_, float r_) {
    pos = pos_;
    vel = PVector.random2D();
    vel.mult(random(3, 7));
    r = r_;
    d = r * 2;
  }

  void bounce() {
    if (pos.x > width - r) {
      pos.x = width - r;
      vel.x *= -1;
    }
    if (pos.x < r) {
      pos.x = r;
      vel.x *= -1;
    }
    if (pos.y > height - r) {
      pos.y = height - r;
      vel.y *= -1;
    }
    if (pos.y < r) {
      pos.y = r;
      vel.y *= -1;
    }
  }

  void update() {
    pos.add(vel);
  }

  void render() {
    noStroke();
    fill(255);
    ellipse(pos.x, pos.y, d, d);
  }
}
