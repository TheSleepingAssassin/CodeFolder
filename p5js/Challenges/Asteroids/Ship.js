class Ship {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.r = 15;
    this.fr = 20;
    this.heading = 0;
    this.rot = 0;
    this.Thrusting = false;
  }

  edges() {
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }
  }

  thrusting(b) {
    this.Thrusting = b;
  }

  update() {
    if (this.Thrusting) {
      this.thrust();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  }

  thrust() {
    let f = p5.Vector.fromAngle(this.heading);
    f.mult(0.3);
    this.vel.add(f);
  }

  setRot(a) {
    this.rot = a;
  }

  turn() {
    this.heading += this.rot;
  }

  render() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    noStroke();
    fill(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.fr);
    pop();
  }
}