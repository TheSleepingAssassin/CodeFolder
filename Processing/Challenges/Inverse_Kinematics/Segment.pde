class Segment {
  PVector a;
  PVector b = new PVector();
  Segment parent;
  Segment child = null;
  float ang, len;
  Segment(float x, float y, float len_, float ang_) {
    a = new PVector(x, y);
    ang = ang_;
    len = len_;
    calcB();
  }

  Segment(Segment parent_, float len_, float ang_) {
    parent = parent_;
    a = parent.b.copy();
    // follow(parent.a.x, parent.a.y);
    ang = ang_;
    len = len_;
    calcB();
  }
  
  void follow() {
    float targX = child.a.x;
    float targY = child.a.y;
    follow(targX, targY);
  }

  void follow(float mx, float my) {
    PVector targ = new PVector(mx, my);
    PVector dir = PVector.sub(targ, a);
    ang = dir.heading();

    dir.setMag(len);
    dir.mult(-1);

    a = PVector.add(targ, dir);
  }

  void update() {
    calcB();
  }

  void run() {
    update();
    render();
  }

  void calcB() {
    float dx = len * cos(ang);
    float dy = len * sin(ang);
    b.set(a.x + dx, a.y + dy);
  }

  void render() {
    strokeWeight(3);
    stroke(255);
    line(a.x, a.y, b.x, b.y);
  }
}
