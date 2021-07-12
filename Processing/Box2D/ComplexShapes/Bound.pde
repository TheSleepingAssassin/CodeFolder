class Bound {
  Body b;
  float w, h;
  Bound(float x, float y, float w, float h) {
    this.w = w;
    this.h = h;

    BodyDef bd = new BodyDef();
    bd.type = BodyType.STATIC;
    bd.position.set(box2d.coordPixelsToWorld(x, y));

    b = box2d.createBody(bd);

    PolygonShape ps = new PolygonShape();
    float box2dw = box2d.scalarPixelsToWorld(w);
    float box2dh = box2d.scalarPixelsToWorld(h);
    ps.setAsBox(box2dw, box2dh);

    b.createFixture(ps, 1);
  }

  void render() {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    fill(255);
    rect(0, 0, w, h);
    popMatrix();
  }
}
