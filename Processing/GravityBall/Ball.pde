class Body {
  PVector pos, vel, acc;
  float r, mass;
  Body(PVector pos, float r, float mass) {
    this.pos = pos;
    this.vel = PVector.random2D();
    this.acc = new PVector();
    this.mass = mass;
    this.r = r;
  }

  void bounce() {
    float turn = -0.85;
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= turn;
    }
    if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= turn;
    }
    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= turn;
    }
    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= turn;
    }
  }

  void applyG() {
    PVector g = new PVector(0, 0.6);
    this.acc.add(g);
  }

  void applyForce(PVector force) {
    PVector f = PVector.div(force, this.mass);
    this.acc.add(f);
  }

  void update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
    acc.mult(0);
  }

  void render() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}
