// Render
Node.prototype.render = function() {}
// Render End


// Tick
Node.prototype.tick = function() {}
// Tick End


// Search
Node.prototype.search = function(val) {
  if (this.data == val) {
    return this;
  } else if (val < this.data && this.left != null) {
    return this.left.search(val);
  } else if (val == this.data && this.middle != null) {
    return this.middle.search(val);
  } else if (val > this.data && this.right != null) {
    return this.right.search(val);
  }
}
// Search End


// Visit
Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  }

  if (this.middle != null) {
    this.middle.visit();
  }

  console.log(this.data);

  if (this.right != null) {
    this.right.visit();
  }

}
// Visit End


// Add Node
Node.prototype.addNode = function(val) {
  // Vars
  let x = 50;
  let y = 20;
  // Vars End

  // Left Checking
  if (val < this.data) {
    // Null Checking
    if (this.left == null) {
      this.left = new Node(this.x - x, this.y + y, val);
    }
    // Null Checking End

    // Not Null
    else {
      this.left.addNode(val);
    }
    // Not Null End
  }
  // Left Checking End

  // Middle Checking
  else if (val == this.data) {
    // Null Checking
    if (this.middle == null) {
      this.middle = new Node(this.x, this.y + y, val);
    }
    // Null Checking End

    // Not Null
    else {
      this.middle.addNode(val);
    }
    // Not Null End
  }
  // Middle Checking End

  // Right Checking
  else if (val > this.data) {
    // Null Checking
    if (this.right == null) {
      this.right = new Node(this.x + x, this.y + y, val);
    }
    // NullChecking End

    // Not Null
    else {
      this.right.addNode(val);
    }
    // Not Null End
  }
  // Right Checking End
}
// Add Node End