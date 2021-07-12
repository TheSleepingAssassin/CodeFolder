class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;
  }

  endGame() {
    return (this.body[this.body.length - 1].x < 0 || this.body[this.body.length - 1] >= width || this.body[this.body.length - 1].y < 0 || this.body[this.body.length - 1] >= height);
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.body.push(head);
  }

  eat(fud) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x === fud.x && y === fud.y) {
      this.grow();
      return true;
    } else {
      return false;
    }
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
    // this.body[0].x += this.xdir;
    // this.body[0].y += this.ydir;
  }

  render() {
    for (let body of this.body) {
      noStroke();
      fill(0, 255, 0);
      rect(body.x, body.y, 1, 1)
    }
  }
}