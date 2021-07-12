class Laser {
  constructor(spos, head) {
    this.pos = createVector(spos.x, spos.y);
    this.vel = p5.Vector.fromAngle(head);
    this.vel.mult(10);
  }

  hits(b) {
    let d = dist(this.pos.x, this.pos.y, b.pos.x, b.pos.y);
    return d < b.r;
  }

  update() {
    this.pos.add(this.vel);
  }

  render() {
    push();
    stroke(255);
    strokeWeight(3);
    point(this.pos.x, this.pos.y);
    pop();
  }
}