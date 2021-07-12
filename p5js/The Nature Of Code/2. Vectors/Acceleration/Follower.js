class Follower {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 5));
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
