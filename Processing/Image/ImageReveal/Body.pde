class Body {
  PVector pos, vel;
  float r;
  Body() {
    pos = new PVector(width / 2, height / 2);
    vel = PVector.random2D();
    vel.mult(5);
    r = 2;
  }

  void bounce() {
    if (pos.x > width - r) {
      pos.x = width - r;
      vel.x *= -1;
    } else if (pos.x < r) {
      pos.x = r;
      vel.x *= -1;
    } else if (pos.y > height - r) {
      pos.y = r;
      vel.y *= -1;
    } else if (pos.y < r) {
      pos.y = r;
      vel.y *= -1;
    }
  }

  void update() {
    pos.add(vel);
  }

  void render() {
    color c = img.get(int(pos.x / 2), int(pos.y / 2));
    fill(c);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
