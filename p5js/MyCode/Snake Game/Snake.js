class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.xDir = 0;
    this.yDir = 0;
  }

  endGame(breadth, length) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x < 0 || x > floor(breadth - 1) || y < 0 || y > floor(length - 1)) {
      return true;
    }
    return false
  }

grow() {
  let head = this.body[this.body.length - 1];
  this.body.push(head);
}

eat(fud) {
  if (this.body[this.body.length - 1].x == fud.x && this.body[this.body.length - 1].y == fud.y) {
    this.grow();
    return true;
  } else {
    return false;
  }
}

setDir(x, y) {
  this.xDir = x;
  this.yDir = y;
}

show() {
  for (let i = 0; i < this.body.length; i++) {
    noStroke();
    fill(0, 255, 0);
    rect(this.body[i].x, this.body[i].y, 1, 1);
  }
}

update() {
  let head = this.body[this.body.length - 1].copy();
  this.body.shift();
  head.x += this.xDir;
  head.y += this.yDir;
  this.body.push(head);
}
}
