class Bird {
  constructor(x, y, r, yno) {
    let options = {
      isStatic: yno
    }
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    this.r = r;
  }

  render() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}