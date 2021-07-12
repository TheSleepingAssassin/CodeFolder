class Box {
  constructor(x, y, r) {
    this.body = Bodies.rectangle(x, y, r * 2, r * 2);
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
    rect(0, 0, this.r * 2, this.r * 2);
    pop();
  }
}