class Bound {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h, {
      isStatic: true
    });
    World.add(engine.world, this.body);
    this.w = w;
    this.h = h;
  }

  render() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    stroke(255);
    strokeWeight(2);
    rect(0, 0, this.w, this.h);
    pop();
  }
}