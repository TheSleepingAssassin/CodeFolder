class Tree {
  Node root;
  Tree() {
    this.root = null;
  }

  Node search(int val) {
    Node found = this.root.search(val);
    return found;
  }

  void traverse() {
    this.root.visit();
  }

  void addValue(int val) {
    // Node n = new Node(val);
    Node n = new Node(val);
    if (this.root == null) {
      this.root = n;
      this.root.x = width / 2;
      this.root.y = 16;
    } else {
      this.root.addNode(n);
    }
  }
}
