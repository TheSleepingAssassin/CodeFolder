class Bound {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true,
      angle: 0
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.pos = this.body.position;
  }

  render() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(0);
    rect(0, 0, this.w, this.h);
    pop();
  }
}