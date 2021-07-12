class Bird {
  constructor() {
    this.pos = createVector(50, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.g = createVector(0, 0.3);
    this.r = 10;
    this.small = 3;
    this.flapped = false;
    this.flep = 0;
    this.fly = 0;
  }

  flap() {
    if (this.vel.y < 0) {
      this.vel.setMag(-this.g.y * 32);
    }
    if (this.vel.y > 0) {
      this.vel.setMag(-this.g.y * 32);
    }
    this.flapped = true;
    this.flep = 1;
  }

  applyForce() {
    this.acc.add(this.g);
  }

  updateF() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.pos.y = constrain(this.pos.y, bird.height / this.small / 2, height - (bird.height / (this.small * 2)));
  }

  show() {
    image(this.fly, this.pos.x, this.pos.y, (bird.width / this.small), (bird.height / this.small));
    if (this.vel.y > 0) {
      this.flep = 0;
    }
  }
}
