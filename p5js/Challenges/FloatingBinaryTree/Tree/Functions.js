Tree.prototype.render = function() {}

Tree.prototype.tick = function() {}

Tree.prototype.travel = function() {
  this.root.visit();
}

Tree.prototype.addValue = function(val) {
  if (this.root == null) {
    this.addRoot(new Node(this.rx, this.ry, val));
  } else {
    this.root.addNode(val);
  }
}

Tree.prototype.addRoot = function(n) {
  this.root = n;
}