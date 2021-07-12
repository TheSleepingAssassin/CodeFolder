class Box {
  Body b;
  float w, h;
  boolean stat;
  Box(float x, float y, float w, float h, boolean stat) {
    this.w = w;
    this.h = h;
    this.stat = stat;

    makeBody(new Vec2(x, y), w, h, stat);
  }

  void render() {
    Vec2 pos = sh2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    fill(255);
    if (stat) {
      noFill();
      stroke(255);
    } else {
      stroke(0);
    }
    rect(0, 0, w, h);
    popMatrix();
  }

  void makeBody(Vec2 pos, float w, float h, boolean stat) {
    BodyDef bd = new BodyDef();
    if (stat) {
      bd.type = BodyType.STATIC;
    } else {
      bd.type = BodyType.DYNAMIC;
    }
    bd.position.set(sh2d.coordPixelsToWorld(pos.x, pos.y));

    b = sh2d.createBody(bd);

    PolygonShape ps = new PolygonShape();
    float box2dw = sh2d.scalarPixelsToWorld(w / 2);
    float box2dh = sh2d.scalarPixelsToWorld(h / 2);
    ps.setAsBox(box2dw, box2dh);

    b.createFixture(ps, 1);
  }
}
