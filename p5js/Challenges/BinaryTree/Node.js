class Node {
  constructor(data, x, y) {
    this.data = data;
    this.right = this.left = null;
    this.x = x;
    this.y = y;
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

    console.log(this.data);

    fill(255);
    noStroke();
    textAlign();
    text(this.data, this.x, this.y);

    stroke(255, 0, 0);
    noFill();
    line(parent.x, parent.y, this.x, this.y);
    // ellipse(this.x, this.y, 20);

    if (this.right != null) {
      this.right.visit(this);
    }
  }

  addNode(n) {
    if (n.data < this.data) {
      if (this.left == null) {
        this.left = n;
        this.left.x = this.x - 40;
        this.left.y = this.y + 50;
      } else {
        this.left.addNode(n);
      }
    } else if (n.data > this.data) {
      if (this.right == null) {
        this.right = n;
        this.right.x = this.x + 40;
        this.right.y = this.y + 50;
      } else {
        this.right.addNode(n);
      }
    }
  }
}