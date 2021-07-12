class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

class Quadtree {
  constructor(boundary, n) {
    this.boundary = boundary;
    this.capacity = n;
    this.points = [];
    this.divide = false;
  }

  subdivide() {
    let nw = new Rectangle(x + w / 2, h - h / 2, w / 2, h / 2);
    this.nw = new Quadtree(nw);
    let ne = new Rectangle(x - w / 2, h - h / 2, w / 2, h / 2);
    this.ne = new Quadtree(ne);
    let sw = new Rectangle(x + w / 2, h + h / 2, w / 2, h / 2);
    this.sw = new Quadtree(sw);
    let se = new Rectangle(x + w / 2, h + h / 2, w / 2, h / 2);
    this.se = new Quadtree(se);
  }

  insert(point) {
    if (this.points < this.capacity) {
      this.points.push(point);
    } else {
      if (!this.divided) {
        this.subdivide();
        this.divided = true;
      }
    }
  }
}