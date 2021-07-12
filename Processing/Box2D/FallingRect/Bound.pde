class Bound {
  float x, y, w, h;
  BodyDef bd;
  Body b;
  PolygonShape ps;
  FixtureDef fd;
  Bound(float x, float y, float w, float h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    bd = new BodyDef();
    bd.position.set(box2d.coordPixelsToWorld(this.x, this.y));
    bd.type = BodyType.STATIC;

    b = box2d.createBody(bd);
    
    ps = new PolygonShape();
    float box2dw = box2d.scalarPixelsToWorld(this.w / 2);
    float box2dh = box2d.scalarPixelsToWorld(this.h / 2);
    ps.setAsBox(box2dw, box2dh);
    
    b.createFixture(ps, 1);
  }
  
  void render() {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    pushMatrix();
    translate(pos.x, pos.y);
    fill(0);
    noStroke();
    rect(0, 0, this.w, this.h);
    popMatrix();
  }
}
