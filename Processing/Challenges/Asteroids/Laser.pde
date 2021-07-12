class Laser {
  PVector pos, vel;
  float r;
  Laser(PVector spos, float angle) {
    this.pos = new PVector(spos.x, spos.y);
    this.vel = PVector.fromAngle(angle);
    this.vel.mult(10);
    this.r = 4;
  }

  boolean hits(Asteroid a) {
    float d = dist(this.pos.x, this.pos.y, a.pos.x, a.pos.y);
    return (d < a.r);
  }

  boolean out() {
    return (this.pos.x > width + this.r || this.pos.x < -this.r || this.pos.y > height + this.r || this.pos.y < -this.r);
  }

  void update() {
    this.pos.add(this.vel);
  }

  void render() {
    pushMatrix();
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
    popMatrix();
  }
}
