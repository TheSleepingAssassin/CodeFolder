class Box {
  constructor(x, y, w, h, yno, c) {
    if (c) {
      this.c = c;
      this.y = true;
    }
    let options = {
      isStatic: yno
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  render() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(2);
    stroke(255);
    if (this.y) {
      fill(this.c);
    }
    rect(0, 0, this.w, this.h);
    pop();
  }
}