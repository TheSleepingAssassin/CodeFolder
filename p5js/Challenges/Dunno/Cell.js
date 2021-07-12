class Cell {
  constructor(pos, r = 8, c) {
    if (pos) {
      this.pos = pos;
    } else {
      this.pos = createVector(random(width), random(height));
    }
    this.r = r;
    this.c = c || color(random(100, 255), random(100, 255), random(100, 255));
  }

  clicked(x, y) {
    let d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  mitosis() {
    this.pos.x += random(-this.r, this.r);
    let cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  }

  move() {
    let vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  render() {
    fill(this.c);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}