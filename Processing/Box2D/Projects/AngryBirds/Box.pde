class Box {
  Body b;
  float w, h;
  boolean sord, yes;
  Box(float x, float y, float w, float h, boolean staticc, boolean yes) {
    this.w = w;
    this.h = h;
    this.sord = staticc;
    this.yes = yes;

    makeBody(new Vec2(x, y), w, h);
  }

  boolean contains(float x, float y) {
    Vec2 worldPoint = box2d.coordPixelsToWorld(x, y);
    Fixture f = b.getFixtureList();
    boolean inside = f.testPoint(worldPoint);
    return inside;
  }

  void killBody() {
    box2d.destroyBody(b);
  }

  void render() {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    if (sord) {
      noFill();
      stroke(255);
    } else {
      fill(255);
      stroke(0);
    }

    if (yes) {
      fill(255, 0, 0);
    }
    rect(0, 0, w, h);
    popMatrix();
  }

  void makeBody(Vec2 pos, float w, float h) {
    BodyDef bd = new BodyDef();
    if (sord) {
      bd.type = BodyType.STATIC;
    } else {
      bd.type = BodyType.DYNAMIC;
    }
    bd.position.set(box2d.coordPixelsToWorld(pos.x, pos.y));

    b = box2d.createBody(bd);

    PolygonShape ps = new PolygonShape();
    float box2dw = box2d.scalarPixelsToWorld(w / 2);
    float box2dh = box2d.scalarPixelsToWorld(h / 2);
    ps.setAsBox(box2dw, box2dh);

    b.createFixture(ps, 1);
  }
}
