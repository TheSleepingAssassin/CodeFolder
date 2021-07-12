class Body {
  constructor(x, y, r) {
    if (random(100) < 50) {
      this.body = new Box(x, y, r);
    } else {
      this.body = new Circle(x, y, r);
    }
    this.r = r;
    this.pos = this.body.body.position;
  }

  render() {
    this.body.render();
  }
}