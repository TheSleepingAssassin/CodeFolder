class Walker {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
  }

  show() {
    fill(255);
    stroke(255);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }

  walk() {
    this.pos.x += random(-1, 1);
    this.pos.y += random(-1, 1);
  }
}
