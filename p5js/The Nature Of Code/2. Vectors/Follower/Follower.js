class Follower {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(7));
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.3);

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
