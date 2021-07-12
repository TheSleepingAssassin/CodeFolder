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
    if (this.root == null) {
      let n = new Node(val);
      this.root = new Node(val, width / 2, 16);
    } else {
      this.root.addNode(new Node(val, this.root.x, this.root.y));
    }
  }
}