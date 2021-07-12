class Viktor {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-1, 1);
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 10);
  }

  update() {
    this.pos.add(this.vel);
  }
}
