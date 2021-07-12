class Node {
  constructor(data, x, y) {
    this.data = data;
    this.right = this.left = null;
    this.r = 10;
    this.body = Bodies.circle(x, y, this.r);
    World.add(world, this.body);
    this.x = x;
    this.y = y;
    this.pos = this.body.position;
    this.angle = this.body.angle;
  }

  search(val) {
    if (this.data == val) {
      return this;
    } else if (val < this.data && this.left != null) {
      return this.left.search(val);
    } else if (val > this.data && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }

  visit(parent) {
    if (this.left != null) {
      this.left.visit(this);
    }

    // console.log(this.data);

    fill(255);
    noStroke();
    textAlign();
    text(this.data, this.pos.x, this.pos.y);
    console.log(this.pos);

    stroke(255, 0, 0);
    noFill();
    line(parent.x, parent.y, this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, this.r * 2);

    if (this.right != null) {
      this.right.visit(this);
    }
  }

  addNode(n) {
    if (n.data < this.data) {
      if (this.left == null) {
        this.left = new Node(n.data, this.x - 40, this.y + 50);
      } else {
        this.left.addNode(n);
      }
    } else if (n.data > this.data) {
      if (this.right == null) {
        this.right = new Node(n.data, this.x + 40, this.y + 50);
      } else {
        this.right.addNode(n);
      }
    }
  }
}