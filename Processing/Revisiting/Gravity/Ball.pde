class Ball {
  PVector pos, vel, acc, g;
  float mass, r;
  Ball(PVector pos, float mass) {
    this.pos = pos.copy();
    this.vel = new PVector();
    this.acc = new PVector();
    this.mass = mass;
    this.r = sqrt(this.mass) * 10;
    this.g = new PVector(0, 0.7);
  }

  void bounce() {
    float backforce = -0.89;
    if (pos.x > width - r) {
      pos.x = width - r;
      vel.x *= backforce;
    } else if (pos.x < r) {
      pos.x = r;
      vel.x *= backforce;
    }

    if (pos.y > height - r) {
      pos.y = height - r;
      vel.y *= backforce;
    } else if (pos.y < r) {
      pos.y = r;
      vel.y *= backforce;
    }
  }

  void run() {
    this.render();
    this.tick();
    this.applyG();
    this.bounce();
  }

  void applyForce(PVector force) {
    PVector f = PVector.div(force, this.mass);
    this.acc.add(f);
  }

  void applyG() {
    PVector f = PVector.mult(this.g, this.mass);
    this.acc.add(f);
  }

  void tick() {
    vel.add(acc);
    pos.add(vel);
    acc.mult(0);
  }

  void render() {
    pushMatrix();
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    popMatrix();
  }
}
