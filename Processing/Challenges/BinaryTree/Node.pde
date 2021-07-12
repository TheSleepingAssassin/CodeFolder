class Node {
  int data, x, y, len;
  Node left, right;
  Body b;
  Node n1, n2;
  Node parent;
  Node(int data, Node parent) {
    this.parent = parent;
    this.data = data;
    this.left = this.right = null;
    makeBody(parent.x, parent.y, 20);
    // parent = null;
    makeJoint();
  }

  Node(int data) {
    // this.parent = parent;
    this.parent = null;
    this.data = data;
    this.left = this.right = null;
    // makeBody();
    // parent = null;
    // makeJoint();
  }

  Node(int data, int x, int y, Node parent) {
    this.parent = parent;
    this.data = data;
    this.left = this.right = null;
    this.x = x;
    this.y = y;
    makeBody(x, y, 20);
    // parent = null;

    makeJoint();
  }

  Node search(int val) {
    if (this.data == val) {
      // println("Found: " + n);
      return this;
    } else if (val < this.data && this.left != null) {
      return this.left.search(val);
    } else if (val > this.data && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }

  void visit() {
    if (this.left != null) {
      this.left.visit();
    }

    // println(this.data);

    fill(255);
    noStroke();
    textAlign(CENTER);
    // Vec2 pos = sh2d.getBodyPixelCoord(b);
    // println("This is the body");
    // println(b);
    text(this.data, this.x, this.y);

    if (parent != null) {
      // Vec2 pos = sh2d.getBodyPixelCoord(b);
      println(b);
      stroke(255);
      noFill();
      line(parent.x, parent.y, this.x, this.y);
    }

    if (this.right != null) {
      this.right.visit();
    }
  }

  void addNode(Node n) {
    if (n.data < this.data) {
      if (this.left == null) {
        this.left = new Node(n.data, this);
        this.left.x = this.x - 40;
        this.left.y = this.y + 20;
      } else {
        this.left.addNode(n);
      }
    } else if (n.data > this.data) {
      if (this.right == null) {
        this.right = new Node(n.data, this);
        this.right.x = this.x + 40;
        this.right.y = this.y + 20;
      } else {
        this.right.addNode(n);
      }
    }
  }

  void makeBody(int x, int y, int r) {
    BodyDef bd = new BodyDef();
    bd.position.set(sh2d.coordPixelsToWorld(x, y));

    b = sh2d.createBody(bd);

    CircleShape cs = new CircleShape();
    // float rad = (float) r;
    cs.m_radius = sh2d.scalarPixelsToWorld(r);

    b.createFixture(cs, 1);
  }

  void makeJoint() {
    if (parent != null) {
      len = 32;

      n1 = this;
      n2 = this.parent;

      DistanceJointDef djd = new DistanceJointDef();
      djd.bodyA = n1.b;
      djd.bodyB = n2.b;
      djd.length = sh2d.scalarPixelsToWorld(len);

      djd.frequencyHz = 3;
      djd.dampingRatio = 0.1;

      // DistanceJoint dj = (DistanceJoint) sh2d.world.createJoint(djd);
      println(djd);
    }
  }
}
