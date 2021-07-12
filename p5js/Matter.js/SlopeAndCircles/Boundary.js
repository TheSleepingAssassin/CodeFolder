class Boundary {
  constructor(x, y, w, h, a) {
    let options = {
      isStatic: true,
      angle: a
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  render() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(0);
    rect(0, 0, this.w, this.h);
    pop();
  }
}