class Follower {
  constructor(x, y) {
    this.pos = createVector(x, y);
    //this.vel = p5.Vector.random2D();
    //this.vel.mult(random(3));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 12;
  }

  edges() {
    if (this.pos.y >= height - 12) {
      this.pos.y = height - 12;
      this.vel.y *= -0.85;
    }

    if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -0.85;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -0.85;
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
