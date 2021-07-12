class Ball {
  PVector pos, vel;
  float r;
  Ball(PVector pos_, float r) {
    this.pos = pos_;
    this.vel = PVector.random2D();
    this.vel.mult(random(3, 7));
    this.r = r;
  }

  void bounce() {
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    } else if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }

  void update() {
    this.pos.add(this.vel);
  }

  void render() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}
