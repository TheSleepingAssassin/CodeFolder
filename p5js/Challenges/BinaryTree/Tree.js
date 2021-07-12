class Tree {
  constructor() {
    this.root = null;
  }

  search(val) {
    let found = this.root.search(val);
    return found;
  }

  traverse() {
    this.root.visit(this.root);
  }

  addValue(val) {
    let n = new Node(val);
    if (this.root == null) {
      this.root = n;
      this.root.x = width / 2;
      this.root.y = height / 2;
    } else {
      this.root.addNode(n);
    }
  }
}