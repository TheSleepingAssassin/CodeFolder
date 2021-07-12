class Particle {
  constructor(x, y, rf, hu) {
    this.pos = createVector(x, y);
    this.rf = rf;
    this.hu = hu;
    if (this.rf) {
      this.vel = createVector(0, random(-10, -18));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(1, 4));
    }
    this.acc = createVector(0, 0);
    this.al = 255;
  }

  done() {
    return this.al < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.rf) {
      this.vel.mult(0.95);
      this.al -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show() {
    colorMode(HSB);
    if (!this.rf) {
      strokeWeight(2);
      stroke(this.hu, 255, 255, this.al);
    } else {
      strokeWeight(4);
      stroke(this.hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  }
}
