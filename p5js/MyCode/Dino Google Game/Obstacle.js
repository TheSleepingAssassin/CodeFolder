class Obstacle {
  constructor(w, h, obj) {
    this.obj = obj;
    this.x = w;
    this.y = h;
    this.wid = this.obj.width;
    this.heig = this.obj.height
  }

  move() {
    this.x -= 10;
  }

  show() {
    image(this.obj, this.x, this.y);
  }
}
