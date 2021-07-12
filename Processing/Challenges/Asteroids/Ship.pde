class Ship {
  PVector pos, vel;
  float r, head, rotation;
  boolean isBoosting;
  Ship() {
    pos = new PVector(width / 2, height / 2);
    vel = new PVector();
    r = 16;
    head = 0;
    isBoosting = false;
  }

  boolean hits(Asteroid a) {
    float d = dist(pos.x, pos.y, a.pos.x, a.pos.y);
    return (d < r + a.r);
  }

  void edges() {
    if (pos.x > width + r) {
      pos.x = -r;
    } else if (pos.x < -r) {
      pos.x = width + r;
    }

    if (pos.y > height + r) {
      pos.y = -r;
    } else if (pos.y < -r) {
      pos.y = height + r;
    }
  }

  void boosting(boolean b) {
    isBoosting = b;
  }

  void boost() {
    PVector force = PVector.fromAngle(head);
    force.mult(0.4);
    vel.add(force);
  }

  void update() {
    if (isBoosting) {
      boost();
    }

    pos.add(vel);
    vel.mult(0.99);
  }

  void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    rotate(head + PI / 2);
    stroke(255);
    fill(51);
    triangle(-r, r, r, r, 0, -r - 10);
    popMatrix();
  }

  void setRot(float a) {
    rotation = a;
  }

  void turn() {
    head += rotation;
  }
}
