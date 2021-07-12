class Particle {
  constructor(x, y, r, fixed) {
    let options = {
      restitution: 0.9,
      isStatic: fixed
    };

    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    this.pos = this.body.position;
    this.angle = this.body.angle;
    this.r = r;
  }

  render() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    noStroke();
    fill(255);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}