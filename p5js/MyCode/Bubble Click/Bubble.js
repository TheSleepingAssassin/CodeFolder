class Bubble {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  show() {
    strokeWeight(3);
    stroke(255);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.x += random(1, -1);
    this.y += random(1, -1);
  }

  contains(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
}
