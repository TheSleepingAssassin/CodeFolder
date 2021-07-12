class Circle {
  constructor(x, y, r) {
    this.body = Bodies.circle(x, y, r);
    World.add(engine.world, this.body);
    this.r = r;
  }

  render() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke(0);
    fill(255);
    line(0, 0, this.r, 0);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}