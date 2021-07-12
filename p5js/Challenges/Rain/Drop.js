class Drop {
  constructor() {
    this.pos = createVector(random(width), random(-300, -10));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.g = createVector(0, random(0.7, 0.3));
  }

  finished() {
      return this.y > windowHeight;
  }

  applyG() {
    this.acc.add(this.g);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    strokeWeight(random(1, 3));
    stroke(0, 150, 255);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + 10);
  }
}
