class Circle {
  constructor(x, y, r) {
    let options = {
      isStatic: false,
      friction: 0.05
    };

    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    this.r = r;
    this.pos = this.body.position;
  }

  removeFromWorld() {
    World.remove(world, this.body);
  }

  out() {
    return (this.pos.x > width + this.r || this.pos.x < -this.r || this.pos.y > height + this.r || this.pos.y < -this.r);
  }

  render() {
    let angle = this.body.angle;
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    noStroke();
    fill(255);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}